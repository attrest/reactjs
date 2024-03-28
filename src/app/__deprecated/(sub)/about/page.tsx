"use client"

import React from "react";
import Greeting from "@/features/about/Greeting";
import BottomVisual from "@/features/about/BottomVisual";
import Image from "next/image";

function About() {

  return (
    <>
      <div className="mb-25 lg:mb-[223px]">
        <div className="w-[94%] relative pt-[23.647%] hidden lg:block">
          <Image className="" src="/img/about/top-img-new.webp" alt="" fill/>
        </div>
        <Image className="block lg:hidden w-full" src="/img/about/top-img-mo-new.webp" alt="" width={375} height={211} />
      </div>
      <Greeting />
      <BottomVisual />
    </>
  )
}

export default About