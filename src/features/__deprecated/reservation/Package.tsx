"use client"

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/scrollbar';
import './slide.css'
import { Button } from "@/components/ui/button";
import { LeftIcon, RightIcon } from "@/components/Svg";
import Image from "next/image";

const PackageContent = () => {

  const PackgeData = [
    {
      title: 'Transfer',
      desc: '싱가포르 공항부터 인도네시아에 위치한 팜스프링CC까지 페리를 포함한 모든 이동에 편의를 제공합니다.',
      imgSrc: '/img/reserve/package-img01.webp'
    },
    {
      title: 'Golf',
      desc: '매력적인 Palm, Island, Resort 세 개 코스에서 날씨, 기온을 고려한 최적의 티타임을 제안합니다.',
      imgSrc: '/img/reserve/package-img02.webp'
    },
    {
      title: 'Resort',
      desc: '클럽에서 접근성과 해안 풍경이 아름다운 바탐 뷰 비치 리조트에서 라운딩 후 휴식을 제공합니다.',
      imgSrc: '/img/reserve/package-img03.webp'
    },
    {
      title: 'Meal',
      desc: '리조트에서 제공되는 호텔식 아침식사부터 현지의 맛을 느껴보는 다양한 미식의 경험을 제공합니다.',
      imgSrc: '/img/reserve/package-img04.webp'
    },
    {
      title: 'Guide',
      desc: '한국어가 가능한 현지 가이드가 동행하여 골프와 투어에 편안한 소통과 안정감을 제공합니다.',
      imgSrc: '/img/reserve/package-img05.webp'
    },
    {
      title: 'Tour',
      desc: '전용 차량과 함께 아름다운 자연과 경치의 감상이 가능한 바탐섬 투어 프로그램을 제공합니다.',
      imgSrc: '/img/reserve/package-img06.webp'
    },
  ]

  const [swiperRef, setSwiperRef] = useState<any>();

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  

  return (
    <>
      <div className="w-full bg-[#042813] pt-[67px] lg:pt-25 pb-25 lg:pb-[140px]">
        <span className="block text-center text-base font-bold lg:font-bold text-light-gray tracking-widest">MICHELAN GOLF TOUR</span>
        <p className="mt-4 text-center text-[22px] lg:text-4xl font-semibold lg:font-bold text-white">패키지 안내</p>

        <div className="mt-15 relative w-full max-w-full overflow-hidden pl-[25px] lg:pl-25 pb-3 lg:pb-0">
          <Swiper
            className="package-slide"
            slidesPerView={'auto'}
            // spaceBetween={30}
            breakpoints = {{
              1024: {
                spaceBetween: 30
              },
              320: {
                spaceBetween: 10
              }
            }}
            modules={[Autoplay, Scrollbar]}
            scrollbar={{
              hide: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            grabCursor
            onSwiper={(swiper) => setSwiperRef(swiper)}
          >
            {PackgeData.map((item, index) => (
              <SwiperSlide key={index} className=" w-full">
                <div className="inline-block w-[275px] lg:w-[370px]">
                  <div className="flex flex-col"> 
                    <div className="block overflow-hidden w-[275px] lg:w-[370px] h-[275px] lg:h-[370px]">
                      <Image src={item.imgSrc} alt="" width={370} height={370} />
                    </div>
                    <div className="pt-[24px] px-7.5 pb-7.5 bg-white">
                      <p className="text-xl lg:text-2xl font-semibold text-black">{item.title}</p>
                      <p className="mt-4 font-pretendard text-sm lg:text-14 font-normal text-black whitespace-normal break-words">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="block lg:hidden absolute bottom-0 left-5 z-[1]">
            <Button onClick={prevHandler} size="icon">
              <LeftIcon color={['#fff','#fff']} sizeW="20" sizeH="20"/>
              <span className="sr-only">Prev</span>
            </Button>
            <Button onClick={nextHandler}  size="icon">
              <RightIcon color={['#fff','#fff']} sizeW="20" sizeH="20"/>
              <span className="sr-only">next</span>
            </Button>
          </div>
          
        </div>
        
        <ul className="px-[24px] lg:px-0 mt-[40px] text-left lg:text-center font-pretendard text-gold text-sm lg:text-base font-normal leading-5 lg:leading-[22px]">
          <li className="break-keep">&#8251; 패키지 상세일정 및 금액정보는 공지사항을 참고해주세요.</li>
          <li>&#8251; 시즌별 패키지 구성 및 금액은 상이합니다.</li>
        </ul>
      </div>
    </>
  )
}

export default PackageContent

