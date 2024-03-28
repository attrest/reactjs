'use client'

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from 'swiper/modules';
import { useState } from "react";
import 'swiper/css'
import 'swiper/css/scrollbar';
import './slide.css'
import { Button } from "@/components/ui/button";
import { LeftIcon, RightIcon } from "@/components/Svg";
import Image from "next/image";

const AboutSlideMo = () => {

  const slidesData = [
    {
      imgSrc: "/img/about/visual01-mo-new.webp",
      title: "GOLF",
      content: "라운드의 즐거움을 만끽할 수 있는\n환상의 골프 코스",
    },
    {
      imgSrc: "/img/about/visual02-mo-new.webp",
      title: "NATURE",
      content: "아름다운 바다 전망 속에서\n즐기는 여유와 품격",
    },
    {
      imgSrc: "/img/about/visual03-mo-new.webp",
      title: "LIFE",
      content: "평범한 일상 속\n특별한 경험과 힐링을 동시에",
    },
  ];

  const [swiperRef, setSwiperRef] = useState<any>();

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  
  return (
    <>
      <div className="block lg:hidden relative pt-[67px] pb-[85px] pr-0 pl-6 bg-[#FAFAFA] ">
        <Swiper
          className="about-slide"
          slidesPerView={'auto'}
          spaceBetween={24}
          modules={[Scrollbar]}
          scrollbar={{
            hide: false,
          }}
          grabCursor
          //onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => setSwiperRef(swiper)}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div>
                <Image className="block" src={slide.imgSrc} alt="" width={315} height={220} />
                <div className="mt-7.5">
                  <span className="text-base font-semibold text-black">{slide.title}</span>
                  <p className="mt-4 text-[22px] leading-7.5 font-semibold text-black tracking-tight">
                    {slide.content.split('\n').map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        {lineIndex < slide.content.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="block lg:hidden absolute bottom-[75px] left-5 z-[1]">
          <Button onClick={prevHandler} size="icon">
            <LeftIcon color={['#000','#000']} sizeW="20" sizeH="20"/>
            <span className="sr-only">Prev</span>
          </Button>
          <Button onClick={nextHandler}  size="icon">
            <RightIcon color={['#000','#000']} sizeW="20" sizeH="20"/>
            <span className="sr-only">next</span>
          </Button>
        </div>

      </div>
    </>
  )
}

export default AboutSlideMo