"use client";

import Link from "next/link";
import LogoSvg from "@/widgets/ui/logo";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className="footer bg-stone-900 font-pretendard text-sm font-medium lg:font-normal leading-tight text-center lg:text-left">
      <div className="py-7.5 lg:py-[80px] lg:px-[5.21%] mx-auto flex items-center justify-center flex-col lg:block">
        <Link href="/" className="block">
          <LogoSvg className="w-[120px] lg:w-[162px]" color={"white"} />
        </Link>
        <div className="mt-8 lg:mt-10 block lg:flex justify-start items-center text-white">
          <span className="relative pr-5 after:absolute after:content-[''] after:block after:w-[1px] after:h-[10px] after:top-[50%] after:-mt-[5px] after:right-[10px] after:bg-white">
            ㈜ 미켈란골프투어
          </span>
          <span className="relative lg:pr-5 lg:after:absolute lg:after:content-[''] lg:after:block lg:after:w-[1px] lg:after:h-[10px] lg:after:top-[50%] lg:after:-mt-[5px] lg:after:right-[10px] lg:after:bg-white">
            대표이사 : 이동익
          </span>
          <address className="mt-5 lg:mt-0 text-gray lg:text-white not-italic">
            성남시 분당구 정자일로 100, 상가3층 303호&#40;13562&#41;
          </address>
        </div>
        <ul className="mt-3 lg:flex justify-start items-center text-gray">
          <li className="inline-block lg:block relative pr-5 after:absolute after:content-[''] after:block after:w-[1px] after:h-[10px] after:top-[50%] after:-mt-[5px] after:right-[10px] after:bg-gray">
            <Link href="tel:010-3726-6000">M. 010 - 3726 - 6000</Link>
          </li>
          <li className="inline-block lg:block mt-[6px] lg:mt-0 relative lg:pr-5 lg:after:absolute lg:after:content-[''] lg:after:block lg:after:w-[1px] lg:after:h-[10px] lg:after:top-[50%] lg:after:-mt-[5px] lg:after:right-[10px] lg:after:bg-gray">
            <Link href="tel:031-712-7982">T. 031 - 712 - 7982</Link>
          </li>
          <li className="block mt-[6px] lg:mt-0">
            <Link href="mailto:mgtour-lee@naver.com">E. mgtour-lee@naver.com</Link>
          </li>
        </ul>
        <div className="w-full mt-7.5 lg:mt-[20px] pt-[20px] lg:border-t-[1px] lg:border-gray text-[10px] lg:text-sm text-gray">
          COPYRIGHT Ⓒ 2023 MICHELANGOLFTOUR. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
