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
  src?: string;
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
  src?: string;
  items?: MenuType[];
}

interface RelatedLinksType {
  title: string;
  href: string;
}

interface InitialStateType {
  name: string;
  isMobile: boolean;
  menu: MenuType[];
  relatedLinks: RelatedLinksType[];
  subMenu: SubMenuType | null;
  // mainMenu: MenuItemType[];
  // subInfo: SubInfoItemType[];
  //
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
          src: "/img/assets/thumb-convention.jpg",
        },
        {
          title: "HTML 작성 가이드",
          href: "/convention/html-guide",
          description: "HTML 코딩 가이드 입니다.",
          src: "/img/assets/thumb-html5.jpg",
        },
        {
          title: "CSS 작성 가이드",
          href: "/convention/css-guide",
          description: "CSS 스타일 가이드 입니다.",
          src: "/img/assets/thumb-css3.jpg",
        },
        {
          title: "A11y 작성 가이드",
          href: "/convention/a11y-guide",
          description: "웹접근성 CSS 스타일 가이드 입니다.",
          src: "/img/assets/thumb-a11y.jpg",
        },
        {
          title: "SCSS 작성 가이드",
          href: "/convention/scss-guide",
          description: "SCSS 스타일 가이드 입니다.",
          src: "/img/assets/thumb-sass.jpg",
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
          src: "/img/assets/thumb-fsd.jpg",
        },
        {
          title: "Atomic Design System",
          href: "/fsd/atomic-design",
          description: "아토믹 디자인 패턴 참고 자료입니다.",
          src: "/img/assets/thumb-atomic.jpg",
        },
        {
          title: "FSD vs ADS 비교",
          href: "/fsd/design-compare",
          description: "기능 분할 설계와 아토믹 디자인의 계층 비교 자료입니다.",
          src: "/img/assets/thumb-fsd-atomic.jpg",
        },
        {
          title: "디자인 시스템 가이드",
          href: "/fsd/design-system",
          description: "디자인 시스템의 성공적인 구축과 운영을 위한 전략에 대한 정리입니다.",
          src: "/img/assets/thumb-design-system.jpg",
        },
      ],
    },
    {
      title: "프레임워크 & 모션",
      href: "/tailwind",
      items: [
        {
          title: "테일윈드 CSS",
          href: "/tailwind",
          description: "유틸리티 중심의 CSS 프레임워크로, 빠르고 유연한 웹 디자인을 가능하게 합니다.",
          src: "/img/assets/thumb-tailwind.jpg",
        },
        {
          title: "Radix UI",
          href: "/tailwind/radix",
          description: "Headless UI로, 디자인 없이 기능만을 제공하는 라이브러리입니다.",
          src: "/img/assets/thumb-radix-ui.jpg",
        },
        {
          title: "Shadcn UI",
          href: "/tailwind/shadcn",
          description: "Tailwind CSS 프로젝트에서 더 효율적으로 작업할 수 있게 도와주는 도구들입니다.",
          src: "/img/assets/thumb-shadcn-ui.jpg",
        },
        {
          title: "GSAP",
          href: "/tailwind/gsap-guide",
          description: "React와 Vue에서 사용 가능한 범용 애니메이션 라이브러리입니다.",
          src: "/img/assets/thumb-gsap.jpg",
        },
        {
          title: "Framer Motion",
          href: "/tailwind/framer-motion",
          description: "Framer가 제공하는 리액트용 애니메이션 라이브러리로, 다양한 애니메이션 모션을 제공합니다.",
          src: "/img/assets/thumb-framer.png",
        },
        {
          title: "React Transition Group",
          href: "/tailwind/react-transition-group",
          description: "리액트에서 컴포넌트의 마운팅/언마운팅되는 상황에 애니메이션을 적용할 수 있는 라이브러리입니다.",
          src: "/img/assets/thumb-react-transition-group.jpg",
        },
      ],
    },
    {
      title: "상태 관리",
      href: "/state",
      items: [
        {
          title: "Redux 가이드",
          href: "/state",
          description: "Redux는 React를 위해 설계된 예측 가능한 상태 컨테이너입니다.",
          src: "/img/assets/thumb-redux.jpg",
        },
        {
          title: "Zustand 가이드",
          href: "/state/zustand",
          description: "페이스북의 간소화된 Flux 원리를 기반으로 한 상태 관리 솔루션입니다.",
          src: "/img/assets/thumb-zustand.jpg",
        },
        {
          title: "React Query 가이드",
          href: "/state/react-query",
          description: "데이터 fetching과 caching, 서버 데이터와의 동기화를 지원해주는 라이브러리입니다.",
          src: "/img/assets/thumb-react-query.jpg",
        },
      ],
    },
    {
      title: "개발 툴",
      href: "/tools",
      items: [
        {
          title: "Tailwind Converter",
          href: "/tools",
          description: "Tailwind 클래스를 CSS 스타일로 변환하여 빠르게 스타일을 확인할 수 있습니다.",
          src: "/img/assets/thumb-tailwind.jpg",
        },
        {
          title: "Responsive Sync 플러그인",
          href: "/tools/responsive-sync",
          description: "반응형 웹 작업을 위한 크롬 전용 동기화 플러그인입니다.",
          src: "/img/assets/thumb-responsive-sync.jpg",
        },
        {
          title: "Storybook 가이드",
          href: "/tools/storybook-guide",
          description: "컴포넌트를 체계적으로 관리할 수 있는 Storybook 설치 및 사용 가이드입니다.",
          src: "/img/assets/thumb-storybook.jpg",
        },
        {
          title: "Json Server 가이드",
          href: "/tools/json-server",
          description: "개발 단계에서 프로토타입 데이터를 빠르게 생성하여 RESTful API를 테스트할 수 있습니다.",
          src: "/img/assets/thumb-json-server.jpg",
        },
        {
          title: "리액트 i18n 구현 가이드",
          href: "/tools/i18n",
          description: "리액트에서 react-i18next 라이브러리를 통해 국제화를 구현하는 방법입니다.",
          src: "/img/assets/thumb-i18n.png",
        },
      ],
    },
    {
      title: "스토리북",
      href: `${process.env.NEXT_PUBLIC_STORYBOOK}`,
      target: "_blank",
    },
  ],
  relatedLinks: [
    {
      title: "테일윈드 CSS",
      href: "https://tailwindcss.com/",
    },
    {
      title: "Radix UI",
      href: "https://www.radix-ui.com/primitives/docs/overview/introduction",
    },
    {
      title: "Shadcn UI",
      href: "https://ui.shadcn.com/",
    },
    {
      title: "Shadcn UI 아이콘",
      href: "https://lucide.dev/icons/",
    },
    {
      title: "State of JavaScript(랭킹)",
      href: "https://stateofjs.com/en-US",
    },
    {
      title: "더미 이미지 사이트",
      href: "https://picsum.photos/",
    },
    {
      title: "마크다운 편집 에디터",
      href: "https://readme.so/editor",
    },
  ],
  subMenu: null,
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
    setSubMenu: (state, action) => {
      state.subMenu = action.payload;
    },
  },
});

export const { setName, setMobileState, setSubMenu } = globalSlice.actions;
export default globalSlice.reducer;
