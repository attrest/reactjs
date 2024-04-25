"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2107],{"./src/stories/widgets/ui/3_FormDisplay/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,File:()=>File,Password:()=>Password,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Disabled_parameters,_Disabled_parameters_docs,_Disabled_parameters1,_Password_parameters,_Password_parameters_docs,_Password_parameters1,_File_parameters,_File_parameters_docs,_File_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_widgets_ui_input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/ui/input.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Widgets/UI/3. 데이터 입력 및 표시/Input",component:_widgets_ui_input__WEBPACK_IMPORTED_MODULE_1__.p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{story:"사용자 입력을 받습니다.<br>https://ui.shadcn.com/docs/components/input"}}},argTypes:{type:{control:"select",options:["text","password","email","number","url","tel","search","date","datetime-local","month","week","time","range","color","checkbox","radio","file","submit","reset","button"],description:"입력 필드의 유형을 설정합니다. 텍스트, 비밀번호, 이메일 등 다양한 형태를 지정할 수 있습니다."},disabled:{control:"boolean",description:"입력 필드를 사용할 수 없게 설정합니다. 이 속성이 true일 경우, 사용자는 입력 필드에 데이터를 입력하거나 수정할 수 없습니다."}}},Default={args:{placeholder:"Default"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_input__WEBPACK_IMPORTED_MODULE_1__.p,{...args})},Disabled={args:{type:"email",placeholder:"Disabled",disabled:!0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_input__WEBPACK_IMPORTED_MODULE_1__.p,{...args})},Password={args:{type:"password",placeholder:"Password"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_input__WEBPACK_IMPORTED_MODULE_1__.p,{...args})},File={args:{type:"file"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_input__WEBPACK_IMPORTED_MODULE_1__.p,{...args})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    placeholder: "Default"\n  },\n  render: args => {\n    return <Input {...args} />;\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},Disabled.parameters={...Disabled.parameters,docs:{...null===(_Disabled_parameters=Disabled.parameters)||void 0===_Disabled_parameters?void 0:_Disabled_parameters.docs,source:{originalSource:'{\n  args: {\n    type: "email",\n    placeholder: "Disabled",\n    disabled: true\n  },\n  render: args => {\n    return <Input {...args} />;\n  }\n}',...null===(_Disabled_parameters1=Disabled.parameters)||void 0===_Disabled_parameters1||null===(_Disabled_parameters_docs=_Disabled_parameters1.docs)||void 0===_Disabled_parameters_docs?void 0:_Disabled_parameters_docs.source}}},Password.parameters={...Password.parameters,docs:{...null===(_Password_parameters=Password.parameters)||void 0===_Password_parameters?void 0:_Password_parameters.docs,source:{originalSource:'{\n  args: {\n    type: "password",\n    placeholder: "Password"\n  },\n  render: args => {\n    return <Input {...args} />;\n  }\n}',...null===(_Password_parameters1=Password.parameters)||void 0===_Password_parameters1||null===(_Password_parameters_docs=_Password_parameters1.docs)||void 0===_Password_parameters_docs?void 0:_Password_parameters_docs.source}}},File.parameters={...File.parameters,docs:{...null===(_File_parameters=File.parameters)||void 0===_File_parameters?void 0:_File_parameters.docs,source:{originalSource:'{\n  args: {\n    type: "file"\n  },\n  render: args => {\n    return <Input {...args} />;\n  }\n}',...null===(_File_parameters1=File.parameters)||void 0===_File_parameters1||null===(_File_parameters_docs=_File_parameters1.docs)||void 0===_File_parameters_docs?void 0:_File_parameters_docs.source}}};const __namedExportsOrder=["Default","Disabled","Password","File"]},"./src/shared/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.2.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/widgets/ui/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_shared_utils_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/utils/utils.ts");const Input=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,type,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",className),ref,...props})}));Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input"}}}]);