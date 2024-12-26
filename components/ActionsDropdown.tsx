"use client";

import React, {useState} from 'react'
import {ActionType, FileDocument} from "@/types";
import {FileDetails, ShareInput} from "@/components/ActionsModalContent";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {actionsDropdownItems} from "@/constants";
import {constructDownloadUrl} from "@/lib/utils";
import Link from "next/link";
import {deleteFile, renameFile, updateFileUsers} from "@/lib/actions/file.actions";
import {usePathname} from "next/navigation";


const ActionsDropdown = ({file}:{file:FileDocument}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [action, setAction] = useState<ActionType | null>(null);
  // 文件名去掉后缀的文件格式

  const [newName, setNewName] = useState(file.name);
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState<string[]>([]);
  const [inputEmails, setInputEmails] = useState<string[]>([]);
  const path= usePathname()

  const closeAllModals = () => {
    setIsModalOpen(false);
    setIsDropdownOpen(false);
    setAction(null);
    setNewName(newName);
    // setEmails([]);
  };

  const handleAction = async () => {
    if(!action) return;
    setIsLoading(true);
    let success = false;
    const actions = {
      rename: () => renameFile({fileId:file.$id, name:newName, extension:file.extension, path}),
      share: () => updateFileUsers({ fileId: file.$id, emails: getUpdatedEmails(), path }),
      delete: () => deleteFile({ fileId: file.$id, bucketFileId: file.bucketField, path }),
    };
    success = await actions[action.value as keyof typeof actions]();
    if (success) closeAllModals();
    setIsLoading(false);

  };

  const handleRemoveUser = async (email: string) => {
    const updatedEmails = emails.filter((e) => e !== email);// 过滤掉要删除的email

    const success = await updateFileUsers({
      fileId: file.$id,
      emails: updatedEmails,
      path,
    }); // 更新文件的用户列表

    if (success) setEmails(updatedEmails);
    // closeAllModals();
  };

  const getUpdatedEmails= ():string[] => {
    // updatedEmails去重和验证邮箱格式
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const uniqueEmails = Array.from(new Set([...emails, ...inputEmails])).filter((email) =>
      emailRegex.test(email)
    );
    setEmails(uniqueEmails);
    setInputEmails([]);
    return uniqueEmails;
  };

  //render the dialog content for corresponding action except download
  const renderDialogContent = () => {
    if (!action) return null;
    const {value, label} = action;
    // <FileDetails file={file} value={value}/>
    return (
      <DialogContent className="shad-dialog button">
        <DialogHeader className="flex flex-col gap-3">
          <DialogTitle className="text-center text-light-100">{label}</DialogTitle>
          {value === 'rename' && (
            <Input
              type="text"
              value = {newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          )}
          {value === "details" && <FileDetails file={file}/>}
          {value === "share" && <ShareInput
            file={file}
            onInputChange={setInputEmails}
            onRemove={handleRemoveUser}/>}
          {value === "delete" && (
            <p className="delete-confirmation">
              Are you sure you want to delete{` `}
              <span className="delete-file-name">{file.name}</span>?
            </p>
          )}
        </DialogHeader>
        {['rename', 'delete', 'share'].includes(value) && (
          <DialogFooter className="flex flex-col gap-3 md:flex-row">
            <Button onClick={closeAllModals} className="modal-cancel-button">
              Cancel
            </Button>
            <Button onClick={handleAction} className="modal-submit-button">
              <p className="capitalize">{value}</p>
              {isLoading && (
                <Image
                  src="/assets/icons/loader.svg"
                  alt="spinner"
                  width={24}
                  height={24}
                  className="animate-spin"
                />
              )}
            </Button>
          </DialogFooter>
        )}

      </DialogContent>
    )
  }


  return <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
    <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DropdownMenuTrigger className="shad-no-focus">
        <Image
          src="/assets/icons/dots.svg"
          alt="dots"
          width={35}
          height={35}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="max-w-[200px] truncate">{file.name}</DropdownMenuLabel> {/* 文件名栏*/}
        <DropdownMenuSeparator />
        {/* 循环渲染 其他功能栏 比如 "rename","share","details","delete", “download”
            如果 DropdownMenuItem 是 "download"，则渲染一个 Link 标签指向文件的路径，可以下载文件，否则是一个div
            点击 DropdownMenuItem 时，setAction，如果是 "rename","share","details","delete"，则打开 Modal，
            即renderDialogContent()，通过设置的具体 action 来渲染不同的 Modal 内容，详见 renderDialogContent() 函数
         */}
        {actionsDropdownItems.map((actionItem) => (
          <DropdownMenuItem
            key={actionItem.value}
            className="shad-dropdown-item"
            onClick={()=>{
              setAction(actionItem);
              if ([
                "rename",
                "share",
                "details",
                "delete",
              ].includes(actionItem.value)) {
                setIsModalOpen(true);
              }
            }}
          >
            {actionItem.value === "download"
            ? (
              <Link
              href={constructDownloadUrl(file.bucketField)}
              download={file.name}
              className="flex items-center gap-2"
              >
                <Image
                  src={actionItem.icon}
                  alt={actionItem.label}
                  width={30}
                  height={30}
                />
                {actionItem.label}
              </Link>
            ) : (
              <div className="flex item-center gap-2">
                <Image
                  src={actionItem.icon}
                  alt={actionItem.label}
                  width={30}
                  height={30}
                />
                {actionItem.label}
              </div>
            )}

          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
    {renderDialogContent()}
  </Dialog>

}

export default ActionsDropdown