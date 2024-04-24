"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2823],{"./src/stories/widgets/ui/2_NavigationMenu/Menubar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/ui/menubar.tsx"),_MenubarSample__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/widgets/ui/2_NavigationMenu/MenubarSample.tsx"),console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Widgets/UI/2. 네비게이션 및 메뉴/Menubar",component:_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.n2,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{story:"메뉴 옵션을 수평으로 표시합니다.<br>https://ui.shadcn.com/docs/components/menubar"}}},argTypes:{asChild:{control:"boolean",description:"컴포넌트를 부모 컴포넌트의 자식 요소로 렌더링할지 여부를 결정합니다. 기본값은 false입니다."},defaultValue:{control:"text",description:"컴포넌트의 초기 값으로 설정할 문자열입니다. 이 값은 컴포넌트가 처음 렌더링될 때 사용되며, 이후 값 변경에는 영향을 주지 않습니다."},value:{control:"text",description:"컴포넌트의 현재 값입니다. 이 값은 외부에서 제어되며, 동적으로 변경될 수 있습니다."},onValueChange:{control:"function",description:"컴포넌트의 값이 변경될 때 호출되는 함수입니다. 변경된 값을 매개변수로 받습니다."},dir:{control:"select",options:["ltr","rtl"],description:"컴포넌트의 텍스트 방향을 설정합니다. 'ltr'는 왼쪽에서 오른쪽으로, 'rtl'은 오른쪽에서 왼쪽으로 텍스트가 표시됩니다."},loop:{control:"boolean",description:"컴포넌트에서 루프 또는 반복 동작의 사용 여부를 설정합니다. 기본값은 false로, 루프가 활성화되지 않습니다."}}},Default={args:{onValueChange:()=>{console.log("onValueChange")}},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MenubarSample__WEBPACK_IMPORTED_MODULE_2__.V,{...args})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    onValueChange: () => {\n      console.log("onValueChange");\n    }\n  },\n  render: args => {\n    return <MenubarSample {...args} />;\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/shared/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.2.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/stories/widgets/ui/2_NavigationMenu/MenubarSample.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>MenubarSample});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/ui/menubar.tsx");const MenubarSample=param=>{let{...args}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.n2,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.yQ,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.Bo,{children:"File"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.aM,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.ct,{children:["New Tab ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.JK,{children:"⌘F"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.ct,{children:"New Window"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.e9,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.ct,{children:"Share"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.e9,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.ct,{children:"Print"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.yQ,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.Bo,{children:"Edit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.aM,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.ct,{children:["New Tab ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.JK,{children:"⌘E"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.ct,{children:"Cut"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.e9,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.ct,{children:"Copy"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.e9,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_menubar__WEBPACK_IMPORTED_MODULE_1__.ct,{children:"Paste"})]})]})]})};MenubarSample.displayName="Menubar",MenubarSample.__docgenInfo={description:"",methods:[],displayName:"Menubar"}},"./src/widgets/ui/menubar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bo:()=>MenubarTrigger,JK:()=>MenubarShortcut,aM:()=>MenubarContent,ct:()=>MenubarItem,e9:()=>MenubarSeparator,n2:()=>Menubar,yQ:()=>MenubarMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-menubar@1.0.4_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-menubar/dist/index.mjs"),_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js"),_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/check.js"),_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/circle.js"),_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/utils/utils.ts");const MenubarMenu=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.W1,Menubar=(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.YJ,_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.ZL,_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.Pb,_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.z6,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.bL,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-10 items-center space-x-1 rounded-md border bg-background p-1",className),...props})})));Menubar.displayName=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.bL.displayName;const MenubarTrigger=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.l9,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",className),...props})}));MenubarTrigger.displayName=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.l9.displayName;const MenubarSubTrigger=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,inset,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.ZP,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",inset&&"pl-8",className),...props,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,{className:"ml-auto h-4 w-4"})]})}));MenubarSubTrigger.displayName=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.ZP.displayName;const MenubarSubContent=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.G5,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props})}));MenubarSubContent.displayName=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.G5.displayName;const MenubarContent=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,align="start",alignOffset=-4,sideOffset=8,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.ZL,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.UC,{ref,align,alignOffset,sideOffset,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props})})}));MenubarContent.displayName=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.UC.displayName;const MenubarItem=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,inset,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.q7,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",inset&&"pl-8",className),...props})}));MenubarItem.displayName=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.q7.displayName;const MenubarCheckboxItem=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,checked,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.H_,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",className),checked,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.VF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_5__.A,{className:"h-4 w-4"})})}),children]})}));MenubarCheckboxItem.displayName=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.H_.displayName;const MenubarRadioItem=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.hN,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",className),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.VF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_6__.A,{className:"h-2 w-2 fill-current"})})}),children]})}));MenubarRadioItem.displayName=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.hN.displayName;const MenubarLabel=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,inset,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.JU,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("px-2 py-1.5 text-sm font-semibold",inset&&"pl-8",className),...props})}));MenubarLabel.displayName=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.JU.displayName;const MenubarSeparator=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.wv,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("-mx-1 my-1 h-px bg-muted",className),...props})}));MenubarSeparator.displayName=_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_2__.wv.displayName;const MenubarShortcut=param=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("ml-auto text-xs tracking-widest text-muted-foreground",className),...props})};MenubarShortcut.displayname="MenubarShortcut",Menubar.__docgenInfo={description:"",methods:[]},MenubarTrigger.__docgenInfo={description:"",methods:[]},MenubarContent.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"start"',computed:!1},required:!1},alignOffset:{defaultValue:{value:"-4",computed:!1},required:!1},sideOffset:{defaultValue:{value:"8",computed:!1},required:!1}}},MenubarItem.__docgenInfo={description:"",methods:[]},MenubarSeparator.__docgenInfo={description:"",methods:[]},MenubarLabel.__docgenInfo={description:"",methods:[]},MenubarCheckboxItem.__docgenInfo={description:"",methods:[]},MenubarRadioItem.__docgenInfo={description:"",methods:[]},MenubarSubContent.__docgenInfo={description:"",methods:[]},MenubarSubTrigger.__docgenInfo={description:"",methods:[]},MenubarShortcut.__docgenInfo={description:"",methods:[],displayName:"MenubarShortcut"}}}]);