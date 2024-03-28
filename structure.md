# 폴더 구조

## app 
라우팅 관련 파일만 정의

layout 참고 플러그인 https://tailwindui.com/
(회사 계정 사용) 
```bash
app
 ┣ (sub)
 ┃ ┣ about
 ┃ ┃ ┗ page.tsx
 ┃ ┣ gallery
 ┃ ┃ ┗ page.tsx
 ┃ ┣ notice
 ┃ ┃ ┣ detail
 ┃ ┃ ┃ ┗ [[...id]]
 ┃ ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┣ reservation
 ┃ ┃ ┗ page.tsx
 ┃ ┣ review
 ┃ ┃ ┣ detail
 ┃ ┃ ┃ ┗ [[...id]]
 ┃ ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ write
 ┃ ┃ ┃ ┗ [[...id]]
 ┃ ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┣ select
 ┃ ┗ layout.tsx
 ┣ api
 ┃ ┗ [...paths]
 ┃ ┃ ┗ route.ts
 ┣ fonts
 ┃ ┣ Pretendard-Bold.subset.woff2
 ┃ ┣ Pretendard-Medium.subset.woff2
 ┃ ┣ Pretendard-Regular.subset.woff2
 ┃ ┗ Pretendard-SemiBold.subset.woff2
 ┣ favicon.ico
 ┣ footer.tsx
 ┣ fullpage.css
 ┣ globals.css
 ┣ header.tsx
 ┣ layout.tsx
 ┣ not-found.tsx
 ┗ page.tsx
``` 
## components
여러 페이지에서 공통으로 사용할 수 있는 컴포넌트

컴포넌트 플러그인 https://ui.shadcn.com/ (무료)
```bash
 components
 ┣ modals
 ┃ ┣ Dialog.tsx
 ┃ ┣ DialogContext.tsx
 ┃ ┣ Dimm.tsx
 ┃ ┗ PopupModal.tsx
 ┣ ui
 ┃ ┣ button.tsx
 ┃ ┣ calender.tsx
 ┃ ┣ checkbox.tsx
 ┃ ┣ datePicker.tsx
 ┃ ┣ dialog.tsx
 ┃ ┣ dropdownmenu.tsx
 ┃ ┣ form.tsx
 ┃ ┣ input.tsx
 ┃ ┣ label.tsx
 ┃ ┣ logo.tsx
 ┃ ┣ NextArrow.tsx
 ┃ ┣ pagination.tsx
 ┃ ┣ paginationGroup.tsx
 ┃ ┣ popover.tsx
 ┃ ┣ PrevArrow.tsx
 ┃ ┣ progress.tsx
 ┃ ┣ radio-group.tsx
 ┃ ┣ scroll-area.tsx
 ┃ ┣ select.tsx
 ┃ ┣ switch.tsx
 ┃ ┣ table.tsx
 ┃ ┣ tabs.tsx
 ┃ ┣ textarea.tsx
 ┃ ┣ toggle-group.tsx
 ┃ ┣ toggle.tsx
 ┃ ┗ tooltip.tsx
 ┣ Breadcrumb.tsx
 ┣ ReservationSvg.tsx
 ┗ Svg.tsx
```
## features
각 페이지에서 사용하는 컴포넌트를 모아둠

```bash
features
 ┣ about
 ┃ ┣ BottomVisual.tsx
 ┃ ┣ Greeting.tsx
 ┃ ┣ slide.css
 ┃ ┣ SlideMo.tsx
 ┃ ┗ SlidePc.tsx
 ┣ gallery
 ┃ ┣ GelleryList.tsx
 ┃ ┣ slide.css
 ┃ ┣ Slide.tsx
 ┃ ┗ SlidePopup.tsx
 ┣ main
 ┃ ┣ AboutContents.tsx
 ┃ ┣ GalleryContents.tsx
 ┃ ┣ GallerySlide.tsx
 ┃ ┣ LocationContents.tsx
 ┃ ┣ NoticeContents.tsx
 ┃ ┣ NoticeSlide.tsx
 ┃ ┣ slide.css
 ┃ ┣ visualslide.css
 ┃ ┗ VisualSlide.tsx
 ┣ notice
 ┃ ┣ editorViewer.css
 ┃ ┣ NoticeDetail.tsx
 ┃ ┗ NoticeList.tsx
 ┣ react-query
 ┃ ┗ Context.tsx
 ┣ reservation
 ┃ ┣ Info.tsx
 ┃ ┣ Package.tsx
 ┃ ┣ Service.tsx
 ┃ ┗ slide.css
 ┣ review
 ┃ ┣ detail
 ┃ ┃ ┣ BoardMenu.tsx
 ┃ ┃ ┣ PasswordPop.tsx
 ┃ ┃ ┣ ReviewDetail.tsx
 ┃ ┃ ┗ style.css
 ┃ ┣ write
 ┃ ┃ ┣ agree.tsx
 ┃ ┃ ┣ fileUpload.tsx
 ┃ ┃ ┗ tooltip.tsx
 ┃ ┗ CardList.tsx
 ┗ search.tsx
```

## hooks
페이지 곳곳에서 사용되는 공통 훅들

주로 api 호출 정리
```bash
hooks
 ┗ api
 ┃ ┣ Api.ts
 ┃ ┣ gallery.ts
 ┃ ┣ notice.ts
 ┃ ┗ review.ts
```

## lib
외부 라이브러리

shadcn 컴포넌트 사용으로 추가
```bash
lib
 ┗ utils.ts
```

## types
각종 타입스크립트 타입 정의
```bash
types
 ┣ common.ts
 ┣ gallery.ts
 ┣ notice.ts
 ┗ review.ts
```