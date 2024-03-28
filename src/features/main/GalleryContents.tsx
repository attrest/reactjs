'use client'

import React from "react";
import Link from "next/link";
import GallerySlide from "./GallerySlide";
import { useGallerys } from "@/hooks/api/gallery";
import Image from 'next/image'

const GalleryContents = () => {
  const { data } = useGallerys(0, 4)
  return ( 
    <div className="relative lg:px-[5.21%] pt-[8%] w-full h-full flex flex-col justify-center gap-7.5 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-[12px] lg:gap-y-[11px] lg:text-left text-white z-[1] lg:text-black before:absolute before:block lg:before:hidden before:content-[''] before:w-[1px] before:h-[15%] before:left-[24px] before:bottom-0 before:bg-white">
      <div className="row-span-2 flex flex-col lg:mr-[18px] px-6 lg:px-[7%] lg:pt-[8%] lg:pb-[8.8%] lg:bg-[rgba(255,255,255,.9)]">
        <div className="">
          <span className="text-sm lg:text-base font-semibold text-white lg:text-black tracking-[0.7px] lg:tracking-normal">GALLERY</span>
          <p className="mt-[14px] lg:mt-4 text-[22px] lg:text-[26px] 2xl:text-4xl font-bold lg:font-semibold text-white lg:text-black leading-[30px] lg:leading-[50px] 2xl:leading-[50px] break-keep">온전한 쉼, 품격과 여유를<br />즐길 수 있는 시설</p>
        </div>
        <div className="block mt-7.5 lg:mt-0 lg:pt-[72%]">
          <Link className="relative h-[22px] min-w-[120px] after:absolute after:block after:content-[''] after:left-[calc(100%_-_40px)] after:top-[49%] after:max-w-[40px] after:w-full after:h-[1px] after:bg-gold lg:after:bg-black lg:hover:after:animate-hoverLine" 
            href={'/gallery'}
          > <span className="pr-[46px] text-sm lg:text-lg text-gold lg:text-[#020202] font-medium font-pretendard">전체보기</span>
          </Link>
        </div>
      </div>
      {data?.content.map((gallery, index) => (
        <div key={index} className="hidden lg:block text-[0] relative w-full h-full overflow-hidden">
          {gallery.files.length > 0 &&
            <Image
              src={`${process.env.NEXT_PUBLIC_FILE_PATH}/${gallery.files[0].fileId}`}
              alt=""
              width={525} height={294}
              className="absolute top-[50%] -translate-y-1/2 w-full" 
            />
          }
      </div>
      ))}
      {data && <GallerySlide galleryList={data?.content}  />}
    </div>
  );
}

export default GalleryContents