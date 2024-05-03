import { useState, useEffect } from "react";

// 모바일 화면 체크
export function useMobileCheck() {
  const [width, setWidth] = useState(window ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 100); // 100ms 지연

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width < 1280;
}

// 모바일 디바이스 체크
export function useMobileDeviceCheck(): boolean {
  // 초기 상태에서 사용자 에이전트를 체크하여 상태를 설정
  const [isMobileDevice] = useState<boolean>(() =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
  return isMobileDevice;
}

// 로컬 개발 환경 체크
export function useLocalCheck(): boolean {
  // 초기 상태 설정 시 바로 로컬 호스트를 체크하여 상태를 설정
  const [isLocal] = useState<boolean>(() => {
    const hostname = window.location.hostname;
    return hostname === "localhost" || hostname === "127.0.0.1";
  });

  return isLocal;
}

// debounce 로직 구현
type Func = (...args: any[]) => void;
function debounce(func: Func, wait: number): Func {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout!);
      timeout = null;
      func(...args);
    };

    clearTimeout(timeout!);
    timeout = setTimeout(later, wait);
  };
}
