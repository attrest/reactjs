'use client'

import React from "react"
import Link from "next/link"
import { NoticeDetailResponse } from "@/types/notice"
import { format } from "date-fns"
import { decode } from 'html-entities';
import './editorViewer.css'
 
const AddFile = ({ className }: { className?: string }) => ( // 게시판 상세 > file icon
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16.6667 18.3334H3.33333C2.8731 18.3334 2.5 17.9603 2.5 17.5001V2.50008C2.5 2.03985 2.8731 1.66675 3.33333 1.66675H16.6667C17.1269 1.66675 17.5 2.03985 17.5 2.50008V17.5001C17.5 17.9603 17.1269 18.3334 16.6667 18.3334ZM6.66667 5.83342V7.50008H13.3333V5.83342H6.66667ZM6.66667 9.16675V10.8334H13.3333V9.16675H6.66667ZM6.66667 12.5001V14.1667H10.8333V12.5001H6.66667Z" fill="#666666" />
  </svg>
)

const AddImgFile = ({ className }: { className?: string }) => ( // 게시판 상세 > image icon
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16.667 4.16667H3.33366V15.8333L11.0772 8.08874C11.4027 7.76329 11.9302 7.76326 12.2557 8.08868L16.667 12.5087V4.16667ZM1.66699 3.32783C1.66699 2.87063 2.04642 2.5 2.49349 2.5H17.5072C17.9637 2.5 18.3337 2.87079 18.3337 3.32783V16.6722C18.3337 17.1293 17.9542 17.5 17.5072 17.5H2.49349C2.03703 17.5 1.66699 17.1292 1.66699 16.6722V3.32783ZM6.66699 9.16667C5.74652 9.16667 5.00033 8.4205 5.00033 7.5C5.00033 6.57952 5.74652 5.83333 6.66699 5.83333C7.58747 5.83333 8.33366 6.57952 8.33366 7.5C8.33366 8.4205 7.58747 9.16667 6.66699 9.16667Z" fill="#666666" />
  </svg>
)


const NoticeDetailItem = ({ data }: { data: NoticeDetailResponse }) => {
  
  const fileType = (fileType:string) => {
    switch(fileType){
      case 'jpg':
      case 'png':
      case 'jpeg':
        return true
      default :
      return false
    }
  }

  return (
    <>
      <div className="pt-25 pb-7.5 lg:pt-15 bg-white lg:border-b lg:border-gray">
        <h2 className="font-semibold text-black lg:text-4xl text-2xl">{decode(data.title)}</h2>
        <p className="mt-4 text-gray text-sm lg:text-base font-pretendard font-normal">{format(new Date(data.modDt),'yyyy.MM.dd')}</p>
      </div>
      <div className="pt-0 lg:pt-15 pb-15 lg:pb-25 font-pretendard viewer-wrap">
        {/* <NoSsrViewer initialValue={decode(data.contents)} /> */}
        <div className="editor-viewer" dangerouslySetInnerHTML={{
                __html: decode(data.contents)
        }}></div>
        {data.files.length > 0 &&
          <>
            <p className="mt-7.5 lg:mt-25 text-base lg:text-xl font-bold">다운로드</p>
            <div className="grid grid-cols-12 mt-4 lg:mt-7.5 gap-2.5" >
              {data.files.map((file, index) => (
                <a key={index} className="flex align-middle justify-between h-11 lg:col-span-2 col-span-12 px-2.5 py-3 border border-gray2"
                  href={`${process.env.NEXT_PUBLIC_FILE_PATH}/${file.fileId}/download`} download={decode(file.fileName)}>
                  <span className="w-[calc(100%_-_20px)] truncate text-left	text-sm text-gray">{decode(file.fileName)}</span>
                  { fileType(file.fileType) ? <AddImgFile /> : <AddFile />}
                </a>
              ))
              }
            </div>
          </>
          
        }
      </div>
      <div className="w-full border-t border-gray2 font-pretendard">
        <div className="group flex items-center w-full space-x-7.5 lg:py-7 py-4 lg:px-5 px-4 border-b border-gray2">
          <span className="text-sm lg:text-base text-black font-semibold">이전글</span>
          { data.prevNotice && data.prevNotice.id ? (
            <Link href={`/notice/detail/${data.prevNotice.id}`} className="w-[calc(100%_-_72px)] inline-block items-center truncate text-base text-gray">{decode(data.prevNotice.title)}</Link>
            ) : (
              <span className="w-[calc(100%_-_72px)] inline-block items-center truncate text-base text-gray">이전글이 없습니다</span>
            )
          }
        </div>
        <div className="group flex items-center w-full space-x-7.5 lg:py-7 py-4 lg:px-5 px-4 border-b border-gray2">
          <span className="text-sm lg:text-base text-black font-semibold">다음글</span>
          { data.nextNotice && data.nextNotice.id ? (
            <Link href={`/notice/detail/${data.nextNotice.id}`} className="w-[calc(100%_-_72px)] truncate text-base text-gray">{decode(data.nextNotice.title)}</Link>
            ) : (
              <span className="w-[calc(100%_-_72px)] truncate text-base text-gray">다음글이 없습니다</span>
            )
          }
        </div>
      </div>
    </>
  )
}

export default NoticeDetailItem