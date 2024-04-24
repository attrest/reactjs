/*! For license information please see stories-widgets-ui-3_FormDisplay-Checkbox-stories.d16e35c5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5586],{"./node_modules/.pnpm/@radix-ui+react-checkbox@1.0.4_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-checkbox/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C1:()=>$e698a72e93240346$export$adb584737d712b70,bL:()=>$e698a72e93240346$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.24.1/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-previous@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs"),_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$e698a72e93240346$var$createCheckboxContext,$e698a72e93240346$export$b566c4ff5488ea01]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.A)("Checkbox"),[$e698a72e93240346$var$CheckboxProvider,$e698a72e93240346$var$useCheckboxContext]=$e698a72e93240346$var$createCheckboxContext("Checkbox"),$e698a72e93240346$export$48513f6b9f8ce62d=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeCheckbox,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...checkboxProps}=props,[button,setButton]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.s)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.i)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange}),initialCheckedStateRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(checked);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const form=null==button?void 0:button.form;if(form){const reset=()=>setChecked(initialCheckedStateRef.current);return form.addEventListener("reset",reset),()=>form.removeEventListener("reset",reset)}}),[button,setChecked]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($e698a72e93240346$var$CheckboxProvider,{scope:__scopeCheckbox,state:checked,disabled},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.sG.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.A)({type:"button",role:"checkbox","aria-checked":$e698a72e93240346$var$isIndeterminate(checked)?"mixed":checked,"aria-required":required,"data-state":$e698a72e93240346$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},checkboxProps,{ref:composedRefs,onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(props.onKeyDown,(event=>{"Enter"===event.key&&event.preventDefault()})),onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.m)(props.onClick,(event=>{setChecked((prevChecked=>!!$e698a72e93240346$var$isIndeterminate(prevChecked)||!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($e698a72e93240346$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$e698a72e93240346$export$59aad738f51d1c05=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeCheckbox,forceMount,...indicatorProps}=props,context=$e698a72e93240346$var$useCheckboxContext("CheckboxIndicator",__scopeCheckbox);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__.C,{present:forceMount||$e698a72e93240346$var$isIndeterminate(context.state)||!0===context.state},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.sG.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.A)({"data-state":$e698a72e93240346$var$getState(context.state),"data-disabled":context.disabled?"":void 0},indicatorProps,{ref:forwardedRef,style:{pointerEvents:"none",...props.style}})))})),$e698a72e93240346$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),prevChecked=(0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__.Z)(checked),controlSize=(0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__.X)(control);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});input.indeterminate=$e698a72e93240346$var$isIndeterminate(checked),setChecked.call(input,!$e698a72e93240346$var$isIndeterminate(checked)&&checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.A)({type:"checkbox","aria-hidden":!0,defaultChecked:!$e698a72e93240346$var$isIndeterminate(checked)&&checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $e698a72e93240346$var$isIndeterminate(checked){return"indeterminate"===checked}function $e698a72e93240346$var$getState(checked){return $e698a72e93240346$var$isIndeterminate(checked)?"indeterminate":checked?"checked":"unchecked"}const $e698a72e93240346$export$be92b6f5f03c0fe9=$e698a72e93240346$export$48513f6b9f8ce62d,$e698a72e93240346$export$adb584737d712b70=$e698a72e93240346$export$59aad738f51d1c05},"./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>$71cd76cc60e0454e$export$6f32135080cb4c3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return[value1,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./node_modules/.pnpm/@radix-ui+react-use-previous@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>$db6c3485150b8e66$export$1ab7ae714698c4b8});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./src/stories/widgets/ui/3_FormDisplay/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_widgets_ui_checkbox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/ui/checkbox.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Widgets/UI/3. 데이터 입력 및 표시/Checkbox",component:_widgets_ui_checkbox__WEBPACK_IMPORTED_MODULE_1__.S,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{story:"선택사항을 제공합니다.<br>https://ui.shadcn.com/docs/components/checkbox"}}},argTypes:{asChild:{control:"boolean",description:"컴포넌트를 부모 컴포넌트의 자식 요소로 사용할지 여부를 결정합니다. 기본값은 false입니다."},defaultChecked:{control:"select",options:[!0,!1,"indeterminate"],description:"체크박스의 초기 체크 상태를 설정합니다. 'true', 'false', 'indeterminate'(일부 선택) 중 하나를 선택할 수 있습니다."},checked:{control:"select",options:[!0,!1,"indeterminate"],description:"체크박스의 현재 체크 상태를 설정합니다. 'true', 'false', 'indeterminate'(일부 선택) 중 하나를 선택할 수 있습니다. 이 값은 외부에서 제어될 수 있습니다."},onCheckedChange:{control:"function",description:"체크 상태가 변경될 때 호출되는 함수입니다. 변경된 체크 상태가 인수로 전달됩니다."},disabled:{control:"boolean",description:"컴포넌트의 활성화/비활성화 상태를 설정합니다. 비활성화된 경우 사용자의 입력을 받지 않습니다."},required:{control:"boolean",description:"컴포넌트 입력이 필수인지 여부를 설정합니다. 필수 컴포넌트는 폼을 제출하기 위해 반드시 입력되어야 합니다."},name:{control:"text",description:"컴포넌트의 이름을 설정합니다. 폼 데이터를 제출할 때 사용되는 이름입니다."},value:{control:"text",description:"컴포넌트의 값을 설정합니다. 이 값은 서버로 제출되는 폼 데이터의 일부로 사용됩니다."}}},Default={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_ui_checkbox__WEBPACK_IMPORTED_MODULE_1__.S,{...args})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {},\n  render: args => {\n    return <Checkbox {...args} />;\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/shared/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.2.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/widgets/ui/checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-checkbox@1.0.4_@types+react-dom@18.2.23_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-checkbox/dist/index.mjs"),_barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/check.js"),_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/utils/utils.ts");const Checkbox=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.bL,{ref,className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",className),...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.C1,{className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex items-center justify-center text-current"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,{className:"h-4 w-4"})})})}));Checkbox.displayName=_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.bL.displayName,Checkbox.__docgenInfo={description:"",methods:[]}},"./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:["lucide",`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,className].join(" "),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]);var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Check});const Check=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])}}]);