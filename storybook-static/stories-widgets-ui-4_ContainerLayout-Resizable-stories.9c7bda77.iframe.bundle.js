/*! For license information please see stories-widgets-ui-4_ContainerLayout-Resizable-stories.9c7bda77.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5004],{"./src/stories/widgets/ui/4_ContainerLayout/Resizable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_widgets_ui_resizable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/ui/resizable.tsx"),console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Widgets/UI/4. 컨테이너 및 레이아웃/Resizable",component:_widgets_ui_resizable__WEBPACK_IMPORTED_MODULE_1__.HK,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{story:"크기 조절이 가능한 컨테이너입니다.<br>https://ui.shadcn.com/docs/components/resizable"}}},argTypes:{direction:{control:"select",options:["horizontal","vertical"],description:"그룹의 방향성을 설정합니다. 'horizontal' 또는 'vertical'을 선택할 수 있습니다."},id:{control:"text",description:"그룹 ID입니다; 제공되지 않을 경우 useId를 사용합니다."},onLayout:{control:"function",description:"그룹 레이아웃이 변경될 때 호출됩니다. 레이아웃의 크기 배열을 매개변수로 받는 함수입니다."},storage:{control:"object",description:"커스텀 스토리지 API를 설정할 수 있습니다. 기본값은 localStorage입니다."},style:{control:"object",description:"루트 요소에 첨부할 CSS 스타일입니다."}}},Default={args:{direction:"horizontal",onLayout:()=>{console.log("onLayout")}},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_resizable__WEBPACK_IMPORTED_MODULE_1__.HK,{className:"max-w-md rounded-lg border",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_resizable__WEBPACK_IMPORTED_MODULE_1__.wV,{defaultSize:50,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex h-[200px] items-center justify-center p-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"font-semibold",children:"One"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_resizable__WEBPACK_IMPORTED_MODULE_1__.WM,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_resizable__WEBPACK_IMPORTED_MODULE_1__.wV,{defaultSize:50,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_resizable__WEBPACK_IMPORTED_MODULE_1__.HK,{direction:"vertical",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_resizable__WEBPACK_IMPORTED_MODULE_1__.wV,{defaultSize:25,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"font-semibold",children:"Two"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_resizable__WEBPACK_IMPORTED_MODULE_1__.WM,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_resizable__WEBPACK_IMPORTED_MODULE_1__.wV,{defaultSize:75,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"font-semibold",children:"Three"})})})]})})]})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    direction: "horizontal",\n    onLayout: () => {\n      console.log("onLayout");\n    }\n  },\n  render: args => {\n    return <ResizablePanelGroup className="max-w-md rounded-lg border" {...args}>\r\n        <ResizablePanel defaultSize={50}>\r\n          <div className="flex h-[200px] items-center justify-center p-6">\r\n            <span className="font-semibold">One</span>\r\n          </div>\r\n        </ResizablePanel>\r\n        <ResizableHandle />\r\n        <ResizablePanel defaultSize={50}>\r\n          <ResizablePanelGroup direction="vertical">\r\n            <ResizablePanel defaultSize={25}>\r\n              <div className="flex h-full items-center justify-center p-6">\r\n                <span className="font-semibold">Two</span>\r\n              </div>\r\n            </ResizablePanel>\r\n            <ResizableHandle />\r\n            <ResizablePanel defaultSize={75}>\r\n              <div className="flex h-full items-center justify-center p-6">\r\n                <span className="font-semibold">Three</span>\r\n              </div>\r\n            </ResizablePanel>\r\n          </ResizablePanelGroup>\r\n        </ResizablePanel>\r\n      </ResizablePanelGroup>;\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/shared/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.2.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/widgets/ui/resizable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HK:()=>ResizablePanelGroup,WM:()=>ResizableHandle,wV:()=>ResizablePanel});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_GripVertical_lucide_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/grip-vertical.js"),react_resizable_panels__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-resizable-panels@2.0.18_react-dom@18.2.0_react@18.2.0/node_modules/react-resizable-panels/dist/react-resizable-panels.browser.esm.js"),_shared_utils_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/utils/utils.ts");const ResizablePanelGroup=param=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_resizable_panels__WEBPACK_IMPORTED_MODULE_1__.YZ,{className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",className),...props})},ResizablePanel=react_resizable_panels__WEBPACK_IMPORTED_MODULE_1__.Zk,ResizableHandle=param=>{let{withHandle,className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_resizable_panels__WEBPACK_IMPORTED_MODULE_1__.TW,{className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",className),...props,children:withHandle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_GripVertical_lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,{className:"h-2.5 w-2.5"})})})};ResizablePanelGroup.__docgenInfo={description:"",methods:[],displayName:"ResizablePanelGroup"},ResizableHandle.__docgenInfo={description:"",methods:[],displayName:"ResizableHandle",props:{withHandle:{required:!1,tsType:{name:"boolean"},description:""}}}},"./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:["lucide",`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,className].join(" "),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]);var string}));return Component.displayName=`${iconName}`,Component}}}]);