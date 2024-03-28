'use client'

import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './fullpage.css'
import VisualSlide from '@/features/main/VisualSlide';
import AboutContents from '@/features/main/AboutContents';
import GalleryContents from '@/features/main/GalleryContents';
import NoticeContents from '@/features/main/NoticeContents';
import LocationContents from '@/features/main/LocationContents';
import Footer from './footer';
import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import clsx from 'clsx';
import { SwiperClass } from 'swiper/react';

export default function Main() {

  const [mainSlide , setMainSlide] = useState<SwiperClass>()
  
  const onSwiper = (swiper:SwiperClass) => {
    setMainSlide(swiper)
  }

  const onChangePage = (origin:Item, destination:Item, direction:string) => {
    if(mainSlide){
      if((origin.index == 0 && direction == "down") || (destination.index !== 0 && direction == "down")) {
        setTimeout(function(){
          mainSlide.autoplay.stop();
          mainSlide.slideToLoop(0)
        }, 200)
      } 
      if((origin.index == 1 && direction == "up") || (destination.index == 0 && direction == "up")) {
        mainSlide.slideToLoop(0)
        mainSlide.autoplay.start();
      }
    }

    if(origin.index == 4 && direction == "down"){
      document.body.classList.add('group')
      document.body.classList.add('footer-on')
    }

    if(origin.index == 5 && direction == "up"){
      document.body.classList.remove('group')
      document.body.classList.remove('footer-on')
    }

  }
  
  return ( 
    <div id="mainFullPage" className="">  
      <ReactFullpage
        //fullpage options
        licenseKey={'L41M9-2Y3I9-50CK9-2JAI7-QMRRO'}
        scrollingSpeed={1000} /* Options here */
        credits={{enabled:false}}
        navigation
        onLeave={onChangePage}
        normalScrollElements={'.swiper'}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section overflow-hidden active'>          
                <VisualSlide slideTarget={onSwiper}/> 
              </div>

              <div className='section group overflow-hidden bg-type'>
                <BgDiv url={'bg-main-Bg-1'}/>
                <AboutContents/>
              </div>

              <div className='section group overflow-hidden bg-type'>
                <BgDiv url={'bg-main-Bg-2'}/>
                <GalleryContents />
              </div>

              <div className='section group overflow-hidden bg-type'>
                <BgDiv url={'bg-main-Bg-3'}/>
                <NoticeContents />
              </div>

              <div className='section group overflow-hidden bg-type last'>
                <BgDiv url={'bg-main-Bg-4'}/>
                <LocationContents/>
              </div>
              
              <div className='section group overflow-hidden fp-auto-height'>
                <Footer className='transition duration-1000 group-[.active]:duration-0 group-[.active]:translate-y-0'/>
              </div>
              
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
    
  )
}

const BgDiv = ({url}: {url:string}) => {
  return(
    <div className={clsx('bg w-full h-full top-0 absolute left-0 bottom-0 right-0 m-auto flex justify-center items-center bg-cover bg-center duration-1000 group-[.active]:duration-0' , url)}/>
  )
}