"use client";

import React, {useCallback} from 'react'
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { cn, convertFileToUrl, getFileType } from "@/lib/utils";
import Image from "next/image";
import { MAX_FILE_SIZE } from "@/constants";
import { usePathname } from "next/navigation";
import Thumbnail from "@/components/Thumbnail";
import {useToast} from "@/hooks/use-toast";
import {uploadFile} from "@/lib/actions/file.actions";

interface Props {
  ownerId: string;
  accountId: string;
  className?: string;
}


const FileUploader = ({ownerId, accountId, className}:Props) => {
  const path = usePathname(); // get the current path
  const {toast} = useToast(); // get the toast function
  const [files, setFiles] = React.useState<File[]>([]);

  const onDrop = useCallback( async (acceptedFiles:File[]) => {
    setFiles(acceptedFiles);

    const uploadPromises = acceptedFiles.map(async (file)=>{
      if(file.size > MAX_FILE_SIZE){
        setFiles((prevFiles)=>prevFiles.filter((f)=>f.name !== file.name));
        return toast({
          description:(
            <p className="body-2 text-white">
              <span className="font-semibold">{file.name}</span> is too large. Max file size is 50MB
            </p>
          ),
          className: "error-toast",
        });
      }
      return uploadFile({file, ownerId, accountId, path}).then( // upload the file
        (uploadFile)=>{
          if (uploadFile) { // if the file is uploaded successfully, remove it from the list
            setFiles((prevFiles)=>
              prevFiles.filter((f)=>f.name !== file.name),);
          }
        },
      );
    },);
    await Promise.all(uploadPromises); // 等待所有文件的上传操作完成
  }, [ownerId, accountId, path]); // 确保在这些依赖变化时重新创建 onDrop 函数。

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const handleRemoveFile = (
    e:React.MouseEvent<HTMLImageElement, MouseEvent>,
    fileName:string
  ) => {
    e.stopPropagation(); //阻止事件冒泡，防止点击删除按钮时触发其他事件。
    setFiles((prevFiles)=> prevFiles.filter((file)=> file.name !== fileName)); //过滤掉要删除的文件
  }

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <Button type="button" className={cn("uploader-button", className)}>
        <Image
          src="/assets/icons/upload.svg"
          width={24}
          height={24}
          alt="upload"
        />{" "}
        <p>Upload</p>
      </Button>
      {files.length > 0 && <ul className="uploader-preview-list">
          <h4 className="h4 text-light-100">Uploading</h4>
        {files.map((file, index) => {
          const {type, extension} = getFileType(file.name);
          return (
            <li key={`${file.name}-${index}`} className="uploader-preview-item">
              <div className="flex items-center gap-3">
                <Thumbnail
                  type={type}
                  extension={extension}
                  url={convertFileToUrl(file)}
                />
                <div className="preview-item-name">
                  {file.name}
                  <Image
                    src="/assets/icons/file-loader.gif"
                    width={80}
                    height={26}
                    alt="loader"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <Image
                src="/assets/icons/remove.svg"
                alt="remove"
                width={24}
                height={24}
                onClick={(e)=> handleRemoveFile(e, file.name)}
              />
            </li>)
        })}
      </ul> }
    </div>
  )
}

export default FileUploader