"use server";

// import {UploadFileProps} from "@/types";

import {createAdminClient} from "@/lib/appwrite";
import {InputFile} from "node-appwrite/file";
import {appwriteConfig} from "@/lib/appwrite/config";
import {ID, Query} from "node-appwrite";
import {constructFileUrl, getFileType, parseStringify} from "@/lib/utils";
import {revalidatePath} from "next/cache";
import {getCurrentUser} from "@/lib/actions/user.actions";
import {
  RenameFileProps,
  UploadFileProps,
  UserDocument,
  UpdateFileUsersProps,
  DeleteFileProps,
  GetFilesProps
} from "@/types";

const handleError = (error:unknown, message:string) => {
  console.error(error, message);
  throw error;
}

export const uploadFile = async ({file, ownerId, accountId, path}: UploadFileProps):
  Promise<object | undefined> => {
  const {storage, databases} = await createAdminClient();

  try {
    const inputFile = InputFile.fromBuffer(file, file.name); // input file from the client

    const bucketFile = await storage.createFile(
      appwriteConfig.bucketId,
      ID.unique(),
      inputFile,
    ); // storage file in the appwrite bucket

    const fileDocument = { // 保证名称和appwrite里的设置一样，比如bucketField 而不是bucketFileId
      type: getFileType(bucketFile.name).type,
      name: bucketFile.name,
      url: constructFileUrl(bucketFile.$id),
      extension: getFileType(bucketFile.name).extension,
      size: bucketFile.sizeOriginal,
      owner: ownerId,
      accountId,
      users: [],
      bucketField: bucketFile.$id,
    }; // constructing metadata of the file

    const newFile = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.filesCollectionId,
      ID.unique(),
      fileDocument,
    ).catch(
      async(error) => {
        await storage.deleteFile(appwriteConfig.bucketId, bucketFile.$id);
        handleError(error, "Failed to create file document");
      }
    ); // storing metadata in the appwrite database

    revalidatePath(path); // purging the cache

    return parseStringify(newFile) // json object of the file
  } catch (error) {
    handleError(error, "Failed to upload file");
  }
}

const createQueries = (
  currentUser: UserDocument,
  types:string[],
  searchText: string,
  sort:string,
  limit?: number
): string[] => {
  const queries =[
    Query.or([
      Query.equal("owner", [currentUser.$id]),
      Query.contains("users", [currentUser.email]), // users是一个数组字段，所以只能用contains
    ])
  ];

  if (types.length > 0) queries.push(Query.equal("type", types));
  if (searchText) queries.push(Query.contains("name", searchText));
  if (limit) queries.push(Query.limit(limit));
  if (sort) {
    const [sortBy, orderBy] = sort.split("-");
    queries.push(
      orderBy === "asc" ? Query.orderAsc(sortBy) : Query.orderDesc(sortBy)
    );
  }
  return queries; // 返回一个string数组
}



export const getFiles = async ({types = [], searchText = "", sort= "$createdAt-desc", limit}:GetFilesProps) => {
  const {databases} = await createAdminClient();

  try {
    const currentUser = await getCurrentUser();
    if(!currentUser) throw new Error("User not found");
    const queries = createQueries(currentUser, types, searchText, sort, limit);
    const files = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.filesCollectionId,
      queries,
    );
    return parseStringify(files);

  } catch (error) {
    handleError(error, "Failed to get files");
  }
  return ;
}

export const renameFile = async ({fileId, name, extension, path}: RenameFileProps) => {
  const { databases } = await createAdminClient();
  try {
    const newName = `${name}.${extension}`;
    const updatedFile = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.filesCollectionId,
      fileId,
      {name: newName},
    );
    revalidatePath(path);
    return parseStringify(updatedFile);
  } catch (error) {
    handleError(error, "Failed to rename file");
  }
}


export const updateFileUsers = async ({
                                        fileId,
                                        emails,
                                        path,
                                      }: UpdateFileUsersProps) => {
  const { databases } = await createAdminClient();

  try {
    const updatedFile = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.filesCollectionId,
      fileId,
      {
        users: emails,
      },
    );

    revalidatePath(path);
    return parseStringify(updatedFile);
  } catch (error) {
    handleError(error, "Failed to rename file");
  }
};

export const deleteFile = async ({
                                   fileId,
                                   bucketFileId,
                                   path,
                                 }: DeleteFileProps) => {
  const { databases, storage } = await createAdminClient();

  try {
    const deletedFile = await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.filesCollectionId,
      fileId,
    );

    if (deletedFile) {
      await storage.deleteFile(appwriteConfig.bucketId, bucketFileId);
    }

    revalidatePath(path);
    return parseStringify({ status: "success" });
  } catch (error) {
    handleError(error, "Failed to rename file");
  }
};
