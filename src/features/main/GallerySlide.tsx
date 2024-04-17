"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./slide.css";
import { Button } from "@/widgets/ui/button";
import { LeftIcon, RightIcon } from "@/widgets/Svg";
import { GalleryItem } from "@/shared/types/gallery";
import Image from "next/image";

const GallerySlide = ({ galleryList }: { galleryList: GalleryItem[] }) => {
  const [swiperRef, setSwiperRef] = useState<any>();

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <>
      <div className="block lg:hidden relative w-full pr-0 pl-6">
        <Swiper
          className="custom-slide"
          slidesPerView={"auto"}
          spaceBetween={16}
          loop={true}
          modules={[Scrollbar]}
          scrollbar={{
            hide: false,
          }}
          grabCursor
          onSwiper={(swiper) => setSwiperRef(swiper)}
        >
          {galleryList.map((gallery, index) => (
            <SwiperSlide key={index} className="w-full">
              {gallery.files.length > 0 && (
                <div className="block lg:hidden text-[0] relative w-[315px] h-[193px] overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_FILE_PATH}/${gallery.files[0].fileId}`}
                    width={540}
                    height={296}
                    alt=""
                    className="absolute top-[50%] -translate-y-1/2 w-full"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-0 left-5 z-[1]">
          <Button onClick={prevHandler} size="icon">
            <LeftIcon color={["#fff", "#fff"]} sizeW="20" sizeH="20" />
            <span className="sr-only">Prev</span>
          </Button>
          <Button onClick={nextHandler} size="icon">
            <RightIcon color={["#fff", "#fff"]} sizeW="20" sizeH="20" />
            <span className="sr-only">next</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default GallerySlide;
