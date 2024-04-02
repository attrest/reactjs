"use client";

import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/hooks/store";
import { setMobileState } from "@/hooks/store/globalSlice";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    let timer: any = null; // 타이머 ID를 저장할 변수를 정의합니다.

    const handleResize = () => {
      // 이전 타이머가 있으면 클리어합니다.
      if (timer) clearTimeout(timer);

      // 새 타이머를 설정합니다.
      timer = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 500); // 0.5초 후 실행
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // 컴포넌트 언마운트 시 타이머를 클리어합니다.
      if (timer) clearTimeout(timer);
    };
  }, []);

  store.dispatch(setMobileState(screenWidth < 1280)); // 모바일 분기 체크
  // console.log("isMobile => ", store.getState().global.isMobile);

  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
};

export default Container;
