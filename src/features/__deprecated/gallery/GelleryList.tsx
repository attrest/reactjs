'use client'

import { GalleryItem } from "@/types/gallery"
import clsx from "clsx"
import Image from 'next/image'
import { decode } from 'html-entities';

export const PlusIcon = ({className}: {className?:string}) => {
  return(
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect y="5.14258" width="12" height="1.5" fill="#1D1D1D"/>
      <rect x="6.85742" width="12" height="1.5" transform="rotate(90 6.85742 0)" fill="#1D1D1D"/>
    </svg>
  )
}

const GalleryList = ({data, onClick}: {data:GalleryItem[], onClick:(target:GalleryItem) => void}) => {

  return (
    <>
      <div className="sm:mt-15 grid grid-cols-1 gap-x-6 gap-y-15 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-7.5">
        {data.map((item) => (
          <GalleryItem key={item.id} data={item} onClick={() => onClick(item)}/>
        ))}
      </div>
    </>
  )
}

const ImagesIcon = ({className}: {className?:string}) => (
  <div className={clsx(className, 'w-8 h-8 bg-[#C7A040] opacity-80 flex items-center justify-center xl:w-[55px] xl:h-[55px]')}>
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 xl:w-auto">
      <rect x="10.75" y="5.75" width="13.5" height="13.5" stroke="white" strokeWidth="1.5"/>
      <path d="M5 10V25H20" stroke="white" strokeWidth="1.5"/>
    </svg>
  </div>
)

const GalleryItem = ({data, onClick} : {data:GalleryItem, onClick:any}) => {
    return (
      <div className="group relative">
        <div className="pt-[56.6%] relative">
          <div className="overflow-hidden absolute w-full h-full left-0 top-0 bg-gray">
            {data.files.length > 0 && 
              <Image
                src={`${process.env.NEXT_PUBLIC_FILE_PATH}/${data.files[0].fileId}`}
                sizes="(min-width:640px) 50vw, 100vw"
                fill
                alt=""
                priority
                className='h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:scale-125 hover:transition group-hover:ease-linear group-hover:duration-700'
              />
            }
            {data.files.length > 1 && 
              <ImagesIcon className="absolute right-0 bottom-0 "/>
            }
          </div>   
        </div>
        <p className="text-base lg:text-16 font-medium mt-5 line-clamp-2 font-pretendard">{decode(data.title)}</p>
        <a className="absolute block w-full h-full left-0 top-0 bottom-0 z-1 cursor-pointer" onClick={onClick}><span className="sr-only">상세보기</span></a>
      </div>
    )
}

export default GalleryList