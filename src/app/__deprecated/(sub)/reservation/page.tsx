"use client"

import React from "react";
import InfoContent from "@/features/reservation/Info";
import ServiceContent from "@/features/reservation/Service";
import PackageContent from "@/features/reservation/Package";
import Image from "next/image";

const Reservation = () => {
  return (
    <>
      <div className="lg:mb-[223px]">
        <div className="w-[94%] relative pt-[23.647%] hidden lg:block">
          <Image src="/img/reserve/top-img-new.webp" alt="" fill/>
        </div>
        <Image className="block lg:hidden w-full" src="/img/reserve/top-img-mo-new.webp" alt="" width={375} height={211}  />
      </div>
      <InfoContent />
      <ServiceContent />
      <PackageContent />
    </>
  )
}

export default Reservation