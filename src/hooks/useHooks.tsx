import { useState, useEffect } from "react";

// 모바일 화면 체크
export function useMobileCheck() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    updateWidth(); // 컴포넌트가 마운트될 때 현재 window 너비를 설정
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트 마운트 및 언마운트 시에만 실행

  return width < 1280;
}

// 모바일 디바이스 체크
export function useMobileDeviceCheck() {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>();

  useEffect(() => {
    setIsMobileDevice(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  return isMobileDevice;
}

// 로컬 개발 환경 체크
export function useLocalCheck() {
  const [isLocal, setIsLocal] = useState<boolean>(true);

  useEffect(() => {
    const isLocalDomain = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    setIsLocal(isLocalDomain);
  }, []);

  return isLocal;
}
