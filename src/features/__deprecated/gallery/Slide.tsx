import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { useState } from "react";
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './slide.css'
import { Button } from "@/components/ui/button";
import { LeftIcon, RightIcon } from "@/components/Svg";
import { FileProps } from "@/types/common";
import Image from 'next/image'
import { decode } from "html-entities";

const GallerySlide = ({list,title} : {list: FileProps[],title:string}) => {
  const [swiperRef, setSwiperRef] = useState<any>();

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  
  return (
    <>
      <Swiper
        className="gallery-slide w-full"
        modules={[Pagination,EffectCoverflow]}
        centeredSlides
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch:-30,
          modifier: 2
        }}
        effect='coverflow'
        breakpoints={{
          1023:{
            slidesPerView: 1,
            spaceBetween:0
          },
          1280:{
            slidesPerView: 2.35,
            spaceBetween:30,
          }
        }}
        grabCursor
        // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        observer
        observeParents
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="img-wrap">
              <Image
                fill
                src={`${process.env.NEXT_PUBLIC_FILE_PATH}/${item.fileId}`}
                sizes="(min-width:640px) 50vw, 100vw"
                alt={title + (index + 1) + ' 이미지'}
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
      <div className="etc-wrap">
        <p className="silde-title">{decode(title)}</p>
        
        <div className="slide-navi flex">
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
    </>
    
  )
}

export default GallerySlide