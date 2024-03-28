'use client'

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './slide.css'

const AboutSlidePc = () => {

  const slidesData = [
    {
      imgSrc: "/img/about/visual01-new.webp",
      title: "GOLF",
      content: "라운드의 즐거움을\n만끽할 수 있는\n환상의 골프 코스",
    },
    {
      imgSrc: "/img/about/visual02-new.webp",
      title: "NATURE",
      content: "아름다운 바다 전망 속에서\n즐기는 여유와 품격",
    },
    {
      imgSrc: "/img/about/visual03-new.webp",
      title: "LIFE",
      content: "평범한 일상 속\n특별한 경험과 힐링을 동시에",
    },
  ];

  return (
    <>
      <div className="hidden lg:block w-full relative">
        <Swiper
          className="about-slide-pc"
          slidesPerView={1}
          spaceBetween={0}
          effect={'fade'}
          autoplay={true}
          loop={false}
          mousewheel={true}
          modules={[ EffectFade, Pagination, Mousewheel]}
          pagination={{
            clickable: true,
            renderBullet: function (index) {
              return `<span class="swiper-pagination-bullet">${slidesData[index].title}</span>`;
            },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={`w-full h-[702px] transition-none`} style={{ backgroundImage: `url(${slide.imgSrc})`, backgroundSize: 'cover' }}>
                <div className="mx-auto px-[5.21%] flex items-center h-full">
                  <div className="pt-[48px] px-[44px] w-[551px] h-[502px] bg-[rgba(255,255,255,.9)]">
                    <span className="text-base font-normal text-black">{slide.title}</span>
                    <p className="mt-4 text-black text-4xl font-semibold leading-[50px]">{slide.content}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default AboutSlidePc