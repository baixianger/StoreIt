"use server";

import {createAdminClient, createSessionClient} from "@/lib/appwrite";
import {appwriteConfig} from "@/lib/appwrite/config";
import {ID, Models, Query} from "node-appwrite";
import {parseStringify} from "@/lib/utils";
import {cookies} from "next/headers";
import {avatarPlaceholderUrl} from "@/constants";
import {redirect} from "next/navigation";
import {UserDocument} from "@/types";

const getUserByEmail = async (email: string): Promise<Models.Document | null> => {
  const {databases} = await createAdminClient();
  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", [email])],
  );
  return result.total > 0 ? result.documents[0] : null;
}

const handleError = (error:unknown, message:string) => {
  console.error(error, message);
  throw error;
}

export const sendEmailOTP = async ({email}: {email:string}): Promise<string | undefined> => {
  const {account} = await createAdminClient();
  try {
    // 调用 https://appwrite.io/docs/references/cloud/client-web/account#createEmailToken
    // 返回 https://appwrite.io/docs/references/cloud/models/token
    const session = await account.createEmailToken(ID.unique(), email);
    return session.userId; // 返回的token对象有两个键一个$id，一个userId，第一个是token的id，第二个是用户的id
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
}

export const createAccount = async ({
                                      fullName, email
                                    } : {
  fullName: string; email: string
}): Promise<SignInOutProps> =>{
  /*
  创建store it的新用户， 流程入下：
    1.用户输入名称和邮箱，此时点击sign up键就会调用getUserByEmail和sendEmailOTP
    2.getUserByEmail会查询email有无注册过，注册过返回数据库里查询到的记录，没有返回null
    3.sendEmail会通过email发送密码，如果注册过就就通过session返回userId，如果没有就创建一个新的userId
    4.如果没注册过，还会调用数据库创建一条新的用户记录
    输出：最后返回accountId（session里的userId）
    后续流程（可以复用到sign in情景）：
      1.这时隐藏的OTPModal表单会在点击sign up按钮后可见，输入email里的密码后，会进行验证
      2.这个验证过程会调用verifySecret方法，
        传入accountId和密码后，得到一个session，通过session得到的信息创建一个浏览器cookie
        返回session的$id，注意区别于userId（accountId）
      3.后续验证还会验证是否返回sessionId有效，无效报错，有效就跳转到首页。
   */

  // 检查users表里有没有输入的email的记录
  const existingUser = await getUserByEmail(email);
  // 不管有没有注册，先发送邮箱验证，没注册就注册新会员
  const accountId = await sendEmailOTP({email});
  // 发送邮箱失败，没有返回用户ID, 此处操作的是appwrite的auth
  if (!accountId) {
    throw new Error("Failed to send OTP");
  }
  // 如果这个email在users表里没有记录，就把auth创建的用户ID和用户自己填的姓名和邮箱写入users表
  if (!existingUser) {
    const {databases} = await createAdminClient();
    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(), // Document ID
      {
        fullName,
        email,
        avatar: avatarPlaceholderUrl,
        accountId,
      }, // 写入的数据{姓名，邮箱，头像，用户ID}
    );
  }
  return parseStringify({accountId});

}

export const verifySecret = async ({
                                     accountId,
                                     password
                                   }: {
  accountId:string,
  password:string
}): Promise<string | undefined> => {
  try {
    const {account} = await createAdminClient();
    // https://appwrite.io/docs/references/cloud/client-web/account#createSession
    // Use this endpoint to create a session from token.
    // Provide the userId and secret parameters from the successful response of authentication flows initiated by token creation.
    // For example, magic URL and phone login.
    const session = await account.createSession(accountId, password);
    (await cookies()).set("appwrite-session", session.secret, {
      path:"/",
      httpOnly:true,
      sameSite: "strict",
      secure: true,
    })
    // 这里用到session的$id属性Session ID
    return parseStringify({sessionId: session.$id})
  } catch (error) {
    handleError(error, "Failed to verify OTP")
  }
}

export const getCurrentUser = async (): Promise<UserDocument | null> => {
  const {databases, account} = await createSessionClient();
  const result = await account.get();
  const user = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("accountId", result.$id)],
  )
  if(user.total <= 0) return null;
  // console.log("用户信息",user.documents[0])
  return parseStringify(user.documents[0])
}

export const signOutUser = async (): Promise<undefined> => {
  const {account} = await createSessionClient();
  try {
    await account.deleteSession("current");
    (await cookies()).delete("appwrite-session");
  } catch (error) {
    handleError(error, "Failed to sign out user");
  } finally {
    redirect("/sign-in")
  }
}

export interface SignInOutProps {
  accountId: string;
  error?: string;
}

export const signInUser = async ({email}: {email:string}): Promise<SignInOutProps> => {
  /* 登陆的流程：
     1.调用getUserByEmail得到对应的用户记录
     2.发送密码到输入的邮箱，因为不是注册的情景，所以不需要保存sendEmailOTP返回的userId，不过为了安全验证也可以和前面得到的进行比对
     3.返回accountId
     后续流程：
        1.这时隐藏的OTPModal表单会在点击sign in按钮后可见，输入email里的密码后，会进行验证
        2.这个验证过程会调用verifySecret方法，
          传入accountId和密码后，得到一个session，通过session得到的信息创建一个浏览器cookie
          返回session的$id，注意区别于userId（accountId）
        3.后续验证还会验证是否返回sessionId有效，有效就跳转到首页。
   */
  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      const accountId = await sendEmailOTP({email}) === existingUser.accountId
        ? existingUser.accountId
        : null;
      console.log(accountId);
      return parseStringify({accountId: accountId})
    }
    return parseStringify({accountId:null, error: "User not found"});
  } catch (error) {
    handleError(error, "Failed to sign in user");
  }
  return parseStringify({accountId:null, error: "User not found"});
}