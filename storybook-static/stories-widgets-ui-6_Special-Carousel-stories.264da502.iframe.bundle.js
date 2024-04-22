"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[495],{"./src/stories/widgets/ui/6_Special/Carousel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Carousel_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),embla_carousel_react_esm=__webpack_require__("./node_modules/.pnpm/embla-carousel-react@8.0.2_react@18.2.0/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js"),arrow_left=__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/arrow-left.js"),arrow_right=__webpack_require__("./node_modules/.pnpm/lucide-react@0.299.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js"),utils=__webpack_require__("./src/shared/utils/utils.ts"),ui_button=__webpack_require__("./src/widgets/ui/button.tsx");const CarouselContext=react.createContext(null);function useCarousel(){const context=react.useContext(CarouselContext);if(!context)throw new Error("useCarousel must be used within a <Carousel />");return context}const Carousel=react.forwardRef(((param,ref)=>{let{orientation="horizontal",opts,setApi,plugins,className,children,...props}=param;const[carouselRef,api]=(0,embla_carousel_react_esm.A)({...opts,axis:"horizontal"===orientation?"x":"y"},plugins),[canScrollPrev,setCanScrollPrev]=react.useState(!1),[canScrollNext,setCanScrollNext]=react.useState(!1),onSelect=react.useCallback((api=>{api&&(setCanScrollPrev(api.canScrollPrev()),setCanScrollNext(api.canScrollNext()))}),[]),scrollPrev=react.useCallback((()=>{null==api||api.scrollPrev()}),[api]),scrollNext=react.useCallback((()=>{null==api||api.scrollNext()}),[api]),handleKeyDown=react.useCallback((event=>{"ArrowLeft"===event.key?(event.preventDefault(),scrollPrev()):"ArrowRight"===event.key&&(event.preventDefault(),scrollNext())}),[scrollPrev,scrollNext]);return react.useEffect((()=>{api&&setApi&&setApi(api)}),[api,setApi]),react.useEffect((()=>{if(api)return onSelect(api),api.on("reInit",onSelect),api.on("select",onSelect),()=>{null==api||api.off("select",onSelect)}}),[api,onSelect]),(0,jsx_runtime.jsx)(CarouselContext.Provider,{value:{carouselRef,api,opts,orientation:orientation||("y"===(null==opts?void 0:opts.axis)?"vertical":"horizontal"),scrollPrev,scrollNext,canScrollPrev,canScrollNext},children:(0,jsx_runtime.jsx)("div",{ref,onKeyDownCapture:handleKeyDown,className:(0,utils.cn)("relative",className),role:"region","aria-roledescription":"carousel",...props,children})})}));Carousel.displayName="Carousel";const CarouselContent=react.forwardRef(((param,ref)=>{let{className,...props}=param;const{carouselRef,orientation}=useCarousel();return(0,jsx_runtime.jsx)("div",{ref:carouselRef,className:"overflow-hidden",children:(0,jsx_runtime.jsx)("div",{ref,className:(0,utils.cn)("flex","horizontal"===orientation?"-ml-4":"-mt-4 flex-col",className),...props})})}));CarouselContent.displayName="CarouselContent";const CarouselItem=react.forwardRef(((param,ref)=>{let{className,...props}=param;const{orientation}=useCarousel();return(0,jsx_runtime.jsx)("div",{ref,role:"group","aria-roledescription":"slide",className:(0,utils.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===orientation?"pl-4":"pt-4",className),...props})}));CarouselItem.displayName="CarouselItem";const CarouselPrevious=react.forwardRef(((param,ref)=>{let{className,variant="outline",size="icon",...props}=param;const{orientation,scrollPrev,canScrollPrev}=useCarousel();return(0,jsx_runtime.jsxs)(ui_button.$,{ref,variant,size,className:(0,utils.cn)("absolute  h-8 w-8 rounded-full","horizontal"===orientation?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",className),disabled:!canScrollPrev,onClick:scrollPrev,...props,children:[(0,jsx_runtime.jsx)(arrow_left.A,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Previous slide"})]})}));CarouselPrevious.displayName="CarouselPrevious";const CarouselNext=react.forwardRef(((param,ref)=>{let{className,variant="outline",size="icon",...props}=param;const{orientation,scrollNext,canScrollNext}=useCarousel();return(0,jsx_runtime.jsxs)(ui_button.$,{ref,variant,size,className:(0,utils.cn)("absolute h-8 w-8 rounded-full","horizontal"===orientation?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",className),disabled:!canScrollNext,onClick:scrollNext,...props,children:[(0,jsx_runtime.jsx)(arrow_right.A,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Next slide"})]})}));var _Default_parameters,_Default_parameters_docs,_Default_parameters1;CarouselNext.displayName="CarouselNext",Carousel.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}}},CarouselContent.__docgenInfo={description:"",methods:[],displayName:"CarouselContent"},CarouselItem.__docgenInfo={description:"",methods:[],displayName:"CarouselItem"},CarouselPrevious.__docgenInfo={description:"",methods:[],displayName:"CarouselPrevious",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}},CarouselNext.__docgenInfo={description:"",methods:[],displayName:"CarouselNext",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};const Carousel_stories={title:"Widgets/UI/6. 특수 목적/Carousel",component:Carousel,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{story:"https://ui.shadcn.com/docs/components/carousel<br>https://www.embla-carousel.com/api/"}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"컴포넌트의 방향을 설정합니다."},opts:{control:"object",description:"컴포넌트의 설정 옵션을 정의하는 객체입니다."},setApi:{action:"setApi",description:"API 설정을 변경하거나 업데이트할 때 호출되는 함수입니다."},plugins:{control:"object",description:"컴포넌트에 추가할 플러그인 목록을 정의합니다."}}},Default={args:{},render:args=>(0,jsx_runtime.jsxs)(Carousel,{...args,children:[(0,jsx_runtime.jsxs)(CarouselContent,{className:"w-[20rem] h-[15rem]",children:[(0,jsx_runtime.jsx)(CarouselItem,{children:(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-center border rounded-lg w-full h-full",children:"1"})}),(0,jsx_runtime.jsx)(CarouselItem,{children:(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-center border rounded-lg w-full h-full",children:"2"})}),(0,jsx_runtime.jsx)(CarouselItem,{children:(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-center border rounded-lg w-full h-full",children:"3"})})]}),(0,jsx_runtime.jsx)(CarouselPrevious,{}),(0,jsx_runtime.jsx)(CarouselNext,{})]})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {},\n  render: args => {\n    return <Carousel {...args}>\r\n        <CarouselContent className="w-[20rem] h-[15rem]">\r\n          <CarouselItem>\r\n            <div className="flex items-center justify-center border rounded-lg w-full h-full">1</div>\r\n          </CarouselItem>\r\n          <CarouselItem>\r\n            <div className="flex items-center justify-center border rounded-lg w-full h-full">2</div>\r\n          </CarouselItem>\r\n          <CarouselItem>\r\n            <div className="flex items-center justify-center border rounded-lg w-full h-full">3</div>\r\n          </CarouselItem>\r\n        </CarouselContent>\r\n        <CarouselPrevious />\r\n        <CarouselNext />\r\n      </Carousel>;\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/shared/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.2.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/widgets/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.24.3_react-dom@18.2.0_react@18.2.0_sass@1.72.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.73_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs"),_shared_utils_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/utils/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,variant,size,asChild=!1,...props}=param;const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{className:(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}}}}]);