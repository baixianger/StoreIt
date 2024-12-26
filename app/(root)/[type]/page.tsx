import React from 'react'
import Sort from "@/components/Sort";
import {getFiles} from "@/lib/actions/file.actions";
import Card from "@/components/Card";
import {FileDocument, FileType, SearchParamProps} from "@/types";
import {getFileTypesParams} from "@/lib/utils";

// A dynamic route, path changes based on the url. In this case, you can create multiple pages based on the same structure.
// URL中的动态部分来自于sidebar中那几个Linke中从navItems常量中得到url属性，比如 /documents, /images, /media, /other
// params 是一个包含 URL 动态部分的对象。
// params.type 获取 URL 中 type 部分的值。
// type 变量随后在 Page 组件中使用。

const Page = async( {params, searchParams}:SearchParamProps) => {
  const totalSize = "100 MB"; // For testing purposes
  const type= ((await params)?.type as string) ||"";
  const searchText = ((await searchParams)?.query) as string || "";
  const sort = ((await searchParams)?.sort) as string || "";
  const types = getFileTypesParams(type) as FileType[]; // 把页面动态部分的type转换成数据库里对应的types，比如media可以是image, video, audio
  const files = await getFiles({types, searchText, sort});
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
        <div className="total-size-section">
          <p className="body-1">Total: <span className="h5">{totalSize}</span></p>
          <div className="sort-container">
            <p className="body-1 hidden sm:block text-light-200">Sort by:</p>
            <Sort />
          </div>
        </div>
      </section>
      {/* Render the files */}
      {files.total > 0 ?(
        <section className="file-list">
          {files.documents.map((file:FileDocument)=>(
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ):(
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  )
}

export default Page