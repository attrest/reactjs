"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6803],{"./node_modules/.pnpm/@radix-ui+react-collapsible@1.0.3_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-collapsible/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ke:()=>$409067139f391064$export$aadde00976f34151,R6:()=>$409067139f391064$export$c135dce7b15bbbdc,UC:()=>$409067139f391064$export$7c6e2c02157bb7d2,bL:()=>$409067139f391064$export$be92b6f5f03c0fe9,l9:()=>$409067139f391064$export$41fb9f06171c75f4,z3:()=>$409067139f391064$export$952b32dcbe73087a});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.mjs");const[$409067139f391064$var$createCollapsibleContext,$409067139f391064$export$952b32dcbe73087a]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.A)("Collapsible"),[$409067139f391064$var$CollapsibleProvider,$409067139f391064$var$useCollapsibleContext]=$409067139f391064$var$createCollapsibleContext("Collapsible"),$409067139f391064$export$6eb0f7ddcda6131f=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeCollapsible,open:openProp,defaultOpen,disabled,onOpenChange,...collapsibleProps}=props,[open=!1,setOpen]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_2__.i)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($409067139f391064$var$CollapsibleProvider,{scope:__scopeCollapsible,disabled,contentId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__.B)(),open,onOpenToggle:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setOpen((prevOpen=>!prevOpen))),[setOpen])},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.sG.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.A)({"data-state":$409067139f391064$var$getState(open),"data-disabled":disabled?"":void 0},collapsibleProps,{ref:forwardedRef})))})),$409067139f391064$export$c135dce7b15bbbdc=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeCollapsible,...triggerProps}=props,context=$409067139f391064$var$useCollapsibleContext("CollapsibleTrigger",__scopeCollapsible);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.sG.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.A)({type:"button","aria-controls":context.contentId,"aria-expanded":context.open||!1,"data-state":$409067139f391064$var$getState(context.open),"data-disabled":context.disabled?"":void 0,disabled:context.disabled},triggerProps,{ref:forwardedRef,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(props.onClick,context.onOpenToggle)}))})),$409067139f391064$export$aadde00976f34151=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{forceMount,...contentProps}=props,context=$409067139f391064$var$useCollapsibleContext("CollapsibleContent",props.__scopeCollapsible);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__.C,{present:forceMount||context.open},(({present})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($409067139f391064$var$CollapsibleContentImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.A)({},contentProps,{ref:forwardedRef,present}))))})),$409067139f391064$var$CollapsibleContentImpl=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeCollapsible,present,children,...contentProps}=props,context=$409067139f391064$var$useCollapsibleContext("CollapsibleContent",__scopeCollapsible),[isPresent,setIsPresent]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(present),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_8__.s)(forwardedRef,ref),heightRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),height=heightRef.current,widthRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),width=widthRef.current,isOpen=context.open||isPresent,isMountAnimationPreventedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isOpen),originalStylesRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const rAF=requestAnimationFrame((()=>isMountAnimationPreventedRef.current=!1));return()=>cancelAnimationFrame(rAF)}),[]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_9__.N)((()=>{const node=ref.current;if(node){originalStylesRef.current=originalStylesRef.current||{transitionDuration:node.style.transitionDuration,animationName:node.style.animationName},node.style.transitionDuration="0s",node.style.animationName="none";const rect=node.getBoundingClientRect();heightRef.current=rect.height,widthRef.current=rect.width,isMountAnimationPreventedRef.current||(node.style.transitionDuration=originalStylesRef.current.transitionDuration,node.style.animationName=originalStylesRef.current.animationName),setIsPresent(present)}}),[context.open,present]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.sG.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.A)({"data-state":$409067139f391064$var$getState(context.open),"data-disabled":context.disabled?"":void 0,id:context.contentId,hidden:!isOpen},contentProps,{ref:composedRefs,style:{"--radix-collapsible-content-height":height?`${height}px`:void 0,"--radix-collapsible-content-width":width?`${width}px`:void 0,...props.style}}),isOpen&&children)}));function $409067139f391064$var$getState(open){return open?"open":"closed"}const $409067139f391064$export$be92b6f5f03c0fe9=$409067139f391064$export$6eb0f7ddcda6131f,$409067139f391064$export$41fb9f06171c75f4=$409067139f391064$export$c135dce7b15bbbdc,$409067139f391064$export$7c6e2c02157bb7d2=$409067139f391064$export$aadde00976f34151},"./node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{B:()=>$1746a345f3d73bb7$export$f680877a34711e37});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $1746a345f3d73bb7$var$useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{});let $1746a345f3d73bb7$var$count=0;function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState($1746a345f3d73bb7$var$useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{deterministicId||setId((reactId=>null!=reactId?reactId:String($1746a345f3d73bb7$var$count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>$71cd76cc60e0454e$export$6f32135080cb4c3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return[value1,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./src/stories/widgets/ui/4_ContainerLayout/Collapsible.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_widgets_ui_collapsible__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/ui/collapsible.tsx"),_CollapsibleSample__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/widgets/ui/4_ContainerLayout/CollapsibleSample.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Widgets/UI/4. 컨테이너 및 레이아웃/Collapsible",component:_widgets_ui_collapsible__WEBPACK_IMPORTED_MODULE_1__.Nt,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{story:"접을 수 있는 섹션입니다.<br>https://ui.shadcn.com/docs/components/collapsible"}}},argTypes:{asChild:{control:"boolean",description:"컴포넌트를 자식 요소로 렌더링할지 여부를 결정합니다."},defaultOpen:{control:"boolean",description:"컴포넌트가 초기에 열려 있는 상태인지 여부를 설정합니다."},open:{control:"boolean",description:"컴포넌트의 열림 상태를 제어합니다."},onOpenChange:{action:"onOpenChange",description:"컴포넌트의 열림 상태가 변경될 때 호출되는 함수입니다."},disabled:{control:"boolean",description:"컴포넌트의 활성화 여부를 선택합니다."}}},Default={args:{className:"border w-[20rem]"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CollapsibleSample__WEBPACK_IMPORTED_MODULE_2__.j,{...args})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    className: "border w-[20rem]"\n  },\n  render: args => {\n    return <CollapsibleSample {...args} />;\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/stories/widgets/ui/4_ContainerLayout/CollapsibleSample.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>CollapsibleSample});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_widgets_ui_collapsible__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/ui/collapsible.tsx");const CollapsibleSample=param=>{let{...args}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets_ui_collapsible__WEBPACK_IMPORTED_MODULE_1__.Nt,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_collapsible__WEBPACK_IMPORTED_MODULE_1__.R6,{className:"p-5",children:"Can I use this in my project?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_collapsible__WEBPACK_IMPORTED_MODULE_1__.Ke,{className:"p-5 bg-gray-100",children:"Yes. Free to use for personal and commercial projects. No attribution required."})]})};CollapsibleSample.displayName="Collapsible",CollapsibleSample.__docgenInfo={description:"",methods:[],displayName:"Collapsible"}},"./src/widgets/ui/collapsible.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ke:()=>CollapsibleContent,Nt:()=>Collapsible,R6:()=>CollapsibleTrigger});var _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-collapsible@1.0.3_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-collapsible/dist/index.mjs");const Collapsible=_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__.bL,CollapsibleTrigger=_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__.R6,CollapsibleContent=_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__.Ke},"./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);