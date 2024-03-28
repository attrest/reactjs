'use client'

import React from "react";
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import clsx from "clsx";

const LocationContents = () => {
  const [height, setHeight] = useState<number>(0);

  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 1.1866869848227177,
    lng: 104.08101618327856
  }

  

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', updateHeight)
    updateHeight()
    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])
  
  return (
    <div className="relative flex items-center justify-center flex-col gap-7.5 lg:gap-0 px-6 lg:px-[5.21%] pt-[5%] w-full h-full text-left text-white z-[1] before:absolute before:block lg:before:hidden before:content-[''] before:w-[1px] before:h-[13%] before:left-6 before:bottom-0 before:bg-white">
      <div className="w-full">
        <span className="text-sm lg:text-base font-semibold tracking-[0.7px] lg:tracking-normal">LOCATION</span>
        <p className="mt-[14px] lg:mt-4 mb-0 lg:mb-[3.6%] text-[22px] lg:text-4xl font-semibold text-white leading-8 lg:leading-[50px]">환상적인 라운딩의 세계<br />미켈란 골프투어</p>
      </div>
      <div className={clsx(height < 900 ? "lg:h-[390px]" : "lg:h-[460px]" ,"block w-full bg-white h-[310px]")}>
      {/* <div className={"lg:h-[460px] block w-full bg-white h-[310px]"}> */}
        <LoadScript
          googleMapsApiKey="AIzaSyCssYbv9ioj9A8QPfbkXrDoTxJiVGjjIus"
        >
          <GoogleMap 
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            options={
              {gestureHandling:'none'}
            }
          >
            <MarkerF position={center} icon={"/img/main/marker.png"}></MarkerF>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default LocationContents