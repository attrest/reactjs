// globalSlice.js
import { createSlice } from "@reduxjs/toolkit";

interface MenuItemType {
  name: string;
  id: string;
  current?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "pc" | "mo";
}

export interface SubInfoItemType {
  id?: string;
  title?: string;
  description?: string;
  imgUrl?: string;
}

interface SubMenuItemType {
  name: string;
  id?: string;
  subRoot?: string;
  description?: string;
}

interface SubMenuType {
  [key: string]: SubMenuItemType[];
}

interface MenuType {
  title: string;
  href: string;
  target?: string;
  description?: string;
  items?: MenuType[];
}

interface InitialStateType {
  name: string;
  isMobile: boolean;
  menu: MenuType[];
  mainMenu: MenuItemType[];
  subInfo: SubInfoItemType[];
  subMenu: SubMenuType;
}

const initialState: InitialStateType = {
  name: "ADC FE Docs",
  isMobile: false,
  menu: [
    {
      title: "코딩 컨벤션",
      href: "/convention",
      items: [
        {
          title: "코딩 컨벤션이란?",
          href: "/convention",
          description: "코드 작성 시 일관된 스타일 규칙을 적용해 가독성과 유지보수성을 향상시킵니다.",
        },
        {
          title: "HTML 작성 가이드",
          href: "/convention/html-guide",
          description: "HTML 코딩 가이드 입니다.",
        },
        {
          title: "CSS 작성 가이드",
          href: "/convention/css-guide",
          description: "CSS 스타일 가이드 입니다.",
        },
        {
          title: "A11y 작성 가이드",
          href: "/convention/a11y-guide",
          description: "웹접근성 CSS 스타일 가이드 입니다.",
        },
        {
          title: "SCSS 작성 가이드",
          href: "/convention/scss-guide",
          description: "SCSS 스타일 가이드 입니다.",
        },
      ],
    },
    {
      title: "디자인 설계",
      href: "/fsd",
      items: [
        {
          title: "기능 분할 설계(FSD)",
          href: "/fsd",
          description: "복잡한 시스템을 보다 관리하기 쉬운 작은 단위로 나누어 설계하는 방법입니다.",
        },
        {
          title: "Atomic Design System",
          href: "/fsd/atomic-design",
          description: "아토믹 디자인 패턴 참고 자료입니다.",
        },
        {
          title: "FSD vs ADS 비교",
          href: "/fsd/design-compare",
          description: "기능 분할 설계와 아토믹 디자인의 계층 비교 자료입니다.",
        },
        {
          title: "디자인 시스템 가이드",
          href: "/fsd/design-system",
          description: "디자인 시스템의 성공적인 구축과 운영을 위한 전략에 대한 정리입니다.",
        },
      ],
    },
    {
      title: "프레임워크 & 모션",
      href: "tailwind",
      items: [
        {
          title: "테일윈드 CSS",
          href: "/tailwind",
          description: "유틸리티 중심의 CSS 프레임워크로, 빠르고 유연한 웹 디자인을 가능하게 합니다.",
        },
        {
          title: "Radix UI 가이드",
          href: "/tailwind/radix",
          description: "Headless UI로, 디자인 없이 기능만을 제공하는 라이브러리입니다.",
        },
        {
          title: "Shadcn UI 가이드",
          href: "/tailwind/shadcn",
          description: "Tailwind CSS 프로젝트에서 더 효율적으로 작업할 수 있게 도와주는 도구들입니다.",
        },
        {
          title: "[모션] GSAP 가이드",
          href: "/tailwind/gsap-guide",
          description: "React와 Vue에서 사용 가능한 범용 애니메이션 라이브러리입니다.",
        },
      ],
    },
    {
      title: "상태 관리",
      href: "state",
      items: [
        {
          title: "Redux 가이드",
          href: "/state",
          description: "Redux는 React를 위해 설계된 예측 가능한 상태 컨테이너입니다.",
        },
        {
          title: "Zustand 가이드",
          href: "/state/zustand",
          description: "페이스북의 간소화된 Flux 원리를 기반으로 한 상태 관리 솔루션입니다.",
        },
        {
          title: "React Query 가이드",
          href: "/state/react-query",
          description: "데이터 fetching과 caching, 서버 데이터와의 동기화를 지원해주는 라이브러리입니다.",
        },
      ],
    },
    {
      title: "개발 툴",
      href: "tools",
      items: [
        {
          title: "Tailwind Converter",
          href: "/tools",
          description: "Tailwind 클래스를 CSS 스타일로 변환하여 빠르게 스타일을 확인할 수 있습니다.",
        },
        {
          title: "Responsive Sync 플러그인",
          href: "/tools/responsive-sync",
          description: "반응형 웹 작업을 위한 크롬 전용 동기화 플러그인입니다.",
        },
        {
          title: "Storybook 가이드",
          href: "/tools/storybook-guide",
          description: "컴포넌트를 체계적으로 관리할 수 있는 Storybook 설치 및 사용 가이드입니다.",
        },
        {
          title: "Json Server 가이드",
          href: "/tools/json-server",
          description: "개발 단계에서 프로토타입 데이터를 빠르게 생성하여 RESTful API를 테스트할 수 있습니다.",
        },
      ],
    },
    {
      title: "스토리북",
      href: `${process.env.NEXT_PUBLIC_STORYBOOK}`,
      target: "_blank",
    },
  ],
  mainMenu: [
    { name: "코딩 컨벤션", id: "convention" },
    { name: "디자인 설계", id: "fsd" },
    { name: "프레임워크 & 모션", id: "tailwind" },
    { name: "상태 관리", id: "state" },
    { name: "개발 툴", id: "tools" },
    { name: "스토리북", id: "components" },
  ],
  subInfo: [
    {
      id: "convention",
      title: "코딩 컨벤션",
      description: "코드 작성 시 일관된 스타일 규칙을 적용해 가독성과 유지보수성을 향상시킵니다.",
    },
    {
      id: "fsd",
      title: "기능 분할 설계(FSD)",
      description: "복잡한 시스템을 보다 관리하기 쉬운 작은 단위로 나누어 설계하는 방법입니다.",
    },
    {
      id: "tailwind",
      title: "테일윈드 CSS",
      description: "유틸리티 중심의 CSS 프레임워크로, 빠르고 유연한 웹 디자인을 가능하게 합니다.",
    },
    {
      id: "state",
      title: "Redux",
      description: "Redux는 React를 위해 설계된 예측 가능한 상태 컨테이너입니다.",
    },
    {
      id: "tools",
      title: "Tailwind Converter",
      description: "Tailwind 클래스를 CSS 스타일로 변환하여 빠르게 스타일을 확인할 수 있습니다.",
    },
    {
      id: "component",
      title: "컴포넌트",
      description: "독립적이고 재사용 가능한 코드의 단위로, UI를 구성하는 기본 요소입니다.",
    },
  ],
  subMenu: {
    convention: [
      { name: "코딩 컨벤션이란?", id: "convention" },
      { name: "HTML 작성 가이드", id: "html-guide", description: "HTML 코딩 가이드 입니다." },
      { name: "CSS 작성 가이드", id: "css-guide", description: "CSS 스타일 가이드 입니다." },
      {
        name: "A11y 작성 가이드",
        id: "a11y-guide",
        description: "웹접근성 CSS 스타일 가이드 입니다.",
      },
      { name: "SCSS 작성 가이드", id: "scss-guide", description: "SCSS 스타일 가이드 입니다." },
    ],
    fsd: [
      { name: "Feature-Sliced Design", id: "fsd" },
      {
        name: "Atomic Design System",
        id: "atomic-design",
        description: "아토믹 디자인 패턴 참고 자료입니다.",
      },
      {
        name: "FSD vs ADS 비교",
        id: "design-compare",
        description: "기능 분할 설계와 아토믹 디자인의 계층 비교 자료입니다.",
      },
      {
        name: "디자인 시스템 가이드",
        id: "design-system",
        description: "디자인 시스템의 성공적인 구축과 운영을 위한 전략에 대한 정리입니다.",
      },
    ],
    tailwind: [
      { name: "Tailwind 가이드", id: "tailwind" },
      {
        name: "Radix UI 가이드",
        id: "radix",
        description:
          "Radix UI는 일명 Headless UI 라이브러리라고 불리는 개발 툴로, 디자인 없이 기능만을 제공하는 라이브러리입니다.",
      },
      {
        name: "Shadcn UI 가이드",
        id: "shadcn",
        description: "Tailwind CSS 프로젝트에서 더 효율적으로 작업할 수 있게 도와주는 도구들입니다.",
      },
      {
        name: "[모션] GSAP 가이드",
        id: "gsap-guide",
        description: "React와 Vue에서 사용 가능한 범용 애니메이션 라이브러리입니다.",
      },
    ],
    state: [
      { name: "Redux 가이드", id: "state" },
      {
        name: "Zustand 가이드",
        id: "zustand",
        description: "페이스북의 간소화된 Flux 원리를 기반으로 한 상태 관리 솔루션입니다.",
      },
      {
        name: "React Query 가이드",
        id: "react-query",
        description: "데이터 fetching과 caching, 서버 데이터와의 동기화를 지원해주는 라이브러리입니다.",
      },
    ],
    tools: [
      { name: "Tailwind-css 변환기", id: "tools" },
      {
        name: "Responsive Sync 플러그인",
        id: "responsive-sync",
        description: "반응형 웹 작업을 위한 크롬 전용 동기화 플러그인입니다.",
      },
      {
        name: "Storybook 가이드",
        id: "storybook-guide",
        description: "컴포넌트를 체계적으로 관리할 수 있는 Storybook 설치 및 사용 가이드입니다.",
      },
      {
        name: "Json Server 가이드",
        id: "json-server",
        description: "개발 단계에서 프로토타입 데이터를 빠르게 생성하여 RESTful API를 테스트할 수 있습니다.",
      },
    ],
  },
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setMobileState: (state, action) => {
      state.isMobile = action.payload;
    },
    setmainMenu: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setName, setMobileState, setmainMenu } = globalSlice.actions;
export default globalSlice.reducer;
