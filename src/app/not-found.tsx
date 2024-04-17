"use client";

import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Button } from "@/widgets/ui/button";
import { ErrorIcon } from "@/widgets/Svg";
import Footer from "./footer";

const Error404: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-center items-center lg:block mx-auto px-6 lg:px-0 lg:pt-30 lg:w-full my-[170px] text-center">
        <ErrorIcon className="w-[70px] lg:w-22 inline-block" />
        <p className="mt-8 font-semibold text-2xl lg:text-4xl leading-[50px] text-black break-keep">
          주소를 다시 한번 확인해주세요.
        </p>
        <p className="mt-4 font-pretendard font-base font-medium leading-6 text-light-gray break-keep">
          지금 입력하신 주소의 페이지는 사라졌거나
          <br />
          다른 페이지로 변경되었습니다.
        </p>
        <div className="mt-15 flex justify-center items-center gap-4 text-center">
          <Button variant="border" size="lg" onClick={() => router.push("/")}>
            메인으로
          </Button>
          <Button variant="color" size="lg" onClick={() => router.back()}>
            이전페이지
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
