/*! For license information please see stories-widgets-ui-4_ContainerLayout-Accordion-stories.8602453b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[613],{"./node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-collection/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>$e02a7d9cb1dc128c$export$c74125a8e3af6bb2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs");function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.A)(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),itemMap=react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map).current;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollectionProviderImpl,{scope,itemMap,collectionRef:ref},children)},COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.s)(forwardedRef,context.collectionRef);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX,{ref:composedRefs},children)})),ITEM_SLOT_NAME=name+"CollectionItemSlot",CollectionItemSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.s)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX,{"data-radix-collection-item":"",ref:composedRefs},children)}));return[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}},"./node_modules/.pnpm/@radix-ui+react-direction@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-direction/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jH:()=>$f631663db3294ace$export$b39126d51d94e6f3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js");const $f631663db3294ace$var$DirectionContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function $f631663db3294ace$export$b39126d51d94e6f3(localDir){const globalDir=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f631663db3294ace$var$DirectionContext);return localDir||globalDir||"ltr"}},"./node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{B:()=>$1746a345f3d73bb7$export$f680877a34711e37});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $1746a345f3d73bb7$var$useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{});let $1746a345f3d73bb7$var$count=0;function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState($1746a345f3d73bb7$var$useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{deterministicId||setId((reactId=>null!=reactId?reactId:String($1746a345f3d73bb7$var$count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>$71cd76cc60e0454e$export$6f32135080cb4c3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return[value1,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./src/stories/widgets/ui/4_ContainerLayout/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/ui/accordion.tsx"),_AccordionSample__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/widgets/ui/4_ContainerLayout/AccordionSample.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Widgets/UI/4. 컨테이너 및 레이아웃/Accordion",component:_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.nD,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{story:"섹션별로 컨텐츠를 접었다 펼 수 있는 구조의 컨테이너입니다.<br>https://ui.shadcn.com/docs/components/accordion"}}},argTypes:{asChild:{control:"boolean",description:"자식 요소로서 DOM에 포함될지 여부를 설정합니다.",defaultValue:!1},type:{control:"select",options:["single","multiple"],description:"하나의 아이템만 확장 가능할지, 여러 아이템을 동시에 확장 가능할지 결정합니다."},value:{control:"text",description:"컴포넌트에서 현재 선택된 아이템의 값을 설정합니다. 이는 제어 컴포넌트에서 사용됩니다."},defaultValue:{control:"text",description:"컴포넌트의 초기 선택 값으로, 비제어 컴포넌트에서 사용됩니다."},onValueChange:{action:"onValueChange",description:"값이 변경될 때 실행될 함수를 설정합니다."},collapsible:{control:"boolean",description:"모든 섹션을 동시에 접을 수 있는지 설정합니다.",defaultValue:!1},disabled:{control:"boolean",description:"아코디언의 활성화 상태를 설정합니다. 비활성화시 모든 상호작용이 금지됩니다.",defaultValue:!1},dir:{control:"select",options:["ltr","rtl"],description:"텍스트 방향을 설정합니다.",defaultValue:"ltr"},orientation:{control:"select",options:["vertical","horizontal"],description:"아코디언의 배치 방향을 설정합니다.",defaultValue:"vertical"}}},Default={args:{type:"single",collapsible:!0,disabled:!1,orientation:"vertical",className:"w-[20rem]"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AccordionSample__WEBPACK_IMPORTED_MODULE_2__.r,{...args})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    type: "single",\n    collapsible: true,\n    disabled: false,\n    orientation: "vertical",\n    // 기존 orientation prop\n    className: "w-[20rem]"\n  },\n  render: args => {\n    return <AccordionSample {...args} />;\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/shared/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.2.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/stories/widgets/ui/4_ContainerLayout/AccordionSample.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>AccordionSample});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/ui/accordion.tsx");const AccordionSample=param=>{let{type,...args}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.nD,{type,...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.As,{value:"item-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.$m,{children:"Is it accessible?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.ub,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.As,{value:"item-2","data-state":"open",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.$m,{children:"Is it styled?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.ub,{children:"Yes. It comes with default styles that match the other components aesthetic."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.As,{value:"item-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.$m,{children:"Is it animated?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.ub,{children:"Yes. Its animated by default, but you can disable it if you prefer."})]})]})};AccordionSample.displayName="Accordion",AccordionSample.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{type:{required:!0,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/widgets/ui/accordion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$m:()=>AccordionTrigger,As:()=>AccordionItem,nD:()=>Accordion,ub:()=>AccordionContent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-accordion@1.1.2_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-accordion/dist/index.mjs"),_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js"),_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/utils/utils.ts");const Accordion=_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.bL,AccordionItem=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.q7,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("border-b",className),...props})}));AccordionItem.displayName="AccordionItem";const AccordionTrigger=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.Y9,{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.l9,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",className),...props,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})}));AccordionTrigger.displayName=_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.l9.displayName;const AccordionContent=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.UC,{ref,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("pb-4 pt-0",className),children})})}));AccordionContent.displayName=_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.UC.displayName,AccordionItem.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"},AccordionTrigger.__docgenInfo={description:"",methods:[]},AccordionContent.__docgenInfo={description:"",methods:[]}},"./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:["lucide",`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,className].join(" "),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]);var string}));return Component.displayName=`${iconName}`,Component}}}]);