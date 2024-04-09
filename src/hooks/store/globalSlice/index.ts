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
  id: string;
  subRoot?: string;
  description?: string;
}

interface SubMenuType {
  [key: string]: SubMenuItemType[];
}

interface InitialStateType {
  name: string;
  isMobile: boolean;
  mainMenu: MenuItemType[];
  subInfo: SubInfoItemType[];
  subMenu: SubMenuType;
}

const initialState: InitialStateType = {
  name: "ADC FE Docs",
  isMobile: false,
  mainMenu: [
    { name: "Convention", id: "convention" },
    { name: "FSD", id: "fsd" },
    { name: "Tailwind", id: "tailwind" },
    { name: "Tools", id: "tools" },
    { name: "Components", id: "components" },
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
      { name: "Convention이란?", id: "convention" },
      { name: "HTML Guide", id: "html-guide", subRoot: "/convention", description: "HTML 코딩 가이드 입니다." },
      { name: "CSS Guide", id: "css-guide", subRoot: "/convention", description: "CSS 스타일 가이드 입니다." },
      {
        name: "A11y Guide",
        id: "a11y-guide",
        subRoot: "/convention",
        description: "웹접근성 CSS 스타일 가이드 입니다.",
      },
      { name: "SCSS Guide", id: "scss-guide", subRoot: "/convention", description: "SCSS 스타일 가이드 입니다." },
    ],
    fsd: [
      { name: "Feature-Sliced Design", id: "fsd" },
      {
        name: "Atomic Design System",
        id: "atomic-design",
        subRoot: "/fsd",
        description: "아토믹 디자인 패턴 참고 자료입니다.",
      },
      {
        name: "Design Compare",
        id: "design-compare",
        subRoot: "/fsd",
        description: "FSD와 아토믹 디자인의 계층 비교 자료입니다.",
      },
    ],
    tailwind: [
      { name: "Tailwind Guide", id: "tailwind" },
      {
        name: "Derectives & Functions",
        id: "derectives-functions",
        subRoot: "/tailwind",
        description: "Tailwind CSS 프로젝트에서 더 효율적으로 작업할 수 있게 도와주는 도구들입니다.",
      },
    ],
    tools: [
      { name: "Tailwind Converter", id: "tools" },
      {
        name: "Storybook Guide",
        id: "storybook-guide",
        subRoot: "/tools",
        description: "컴포넌트를 체계적으로 관리할 수 있는 Storybook 설치 및 사용 가이드입니다.",
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
