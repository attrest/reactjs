/*! For license information please see stories-widgets-ui-5_FeedbackInfo-Alert-stories.8905710f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7210],{"./src/stories/widgets/ui/5_FeedbackInfo/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_widgets_ui_alert__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/ui/alert.tsx"),_barrel_optimize_names_TerminalIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/terminal.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Widgets/UI/5. 피드백 및 정보/Alert",component:_widgets_ui_alert__WEBPACK_IMPORTED_MODULE_1__.Fc,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{story:"사용자에게 경고나 정보를 전달합니다.<br>https://ui.shadcn.com/docs/components/alert"}}},argTypes:{variant:{control:"select",options:["default","destructive"],description:"버튼의 스타일 변형을 선택합니다."}}},Default={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_alert__WEBPACK_IMPORTED_MODULE_1__.Fc,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_TerminalIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,{className:"h-4 w-4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_alert__WEBPACK_IMPORTED_MODULE_1__.XL,{children:"Heads up!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_alert__WEBPACK_IMPORTED_MODULE_1__.TN,{children:"You can add components and dependencies to your app using the cli."})]})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {},\n  render: args => {\n    return <Alert {...args}>\r\n        <TerminalIcon className="h-4 w-4" />\r\n        <AlertTitle>Heads up!</AlertTitle>\r\n        <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>\r\n      </Alert>;\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/shared/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.2.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/widgets/ui/alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fc:()=>Alert,TN:()=>AlertDescription,XL:()=>AlertTitle});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs"),_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/utils/utils.ts");const alertVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),Alert=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,variant,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,role:"alert",className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(alertVariants({variant}),className),...props})}));Alert.displayName="Alert";const AlertTitle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("mb-1 font-medium leading-none tracking-tight",className),...props})}));AlertTitle.displayName="AlertTitle";const AlertDescription=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm [&_p]:leading-relaxed",className),...props})}));AlertDescription.displayName="AlertDescription",Alert.__docgenInfo={description:"",methods:[],displayName:"Alert"},AlertTitle.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"},AlertDescription.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"}},"./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:["lucide",`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,className].join(" "),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]);var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/terminal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Terminal});const Terminal=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]])}}]);