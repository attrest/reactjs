export const contentHtml = `<section class="attr_section">
<div class="attr_div">
<h3 class="attr_title">Shadcn UI란?</h3>
<p class="attr_p attr_letter"><a href="https://ui.shadcn.com/" target="_blank" data-target="external" data-title="shadcn/ui: Build your component library" class="link-preview">Shadcn UI</a>는 Radix UI 및 Tailwind CSS를 기반으로 한 재사용 가능한 컴포넌트 컬렉션입니다. 이 라이브러리는 앱 개발 시 직접적인 복사 및 붙여넣기를 통해 쉽게 사용할 수 있는 구조로 설계되었습니다. 개발자들은 별도의 종속성 설치 없이 이 컴포넌트들을 자신의 프로젝트에 통합할 수 있으며, npm을 통한 배포나 설치가 필요하지 않습니다.</p>
<p class="attr_p"><a href="https://ui.shadcn.com/docs" target="_blank" data-target="external" data-title="공식 문서">공식 문서</a> 및 자세한 설명은 Shadcn UI 공식 웹사이트 및 문서 페이지에서 확인할 수 있으며, 이 문서들은 컴포넌트의 설치 및 활용 방법에 대한 구체적인 정보를 제공하여, 개발자가 더 효과적으로 자신의 앱에 적용할 수 있도록 돕습니다.</p>
<p class="attr_p">이런 접근 방식은 개발 과정을 간소화하고, 효율적인 코드 재사용을 가능하게 하여, <span data-spell="application">애플리케이션</span> 개발의 속도와 품질을 동시에 향상시킬 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">Shadcn UI 설치 및 기본 설정</h3>
<p class="attr_p"><span class="set-check-note">Shadcn UI는 Next.js 프로젝트에 Tailwind CSS가 설치된 상태에서 사용할 수 있는 컴포넌트 라이브러리입니다.</span> 이 라이브러리를 통해 개발자들은 쉽고 빠르게 UI 컴포넌트를 자신의 프로젝트에 통합할 수 있습니다. 설치를 시작하려면, 다음 명령을 실행하세요:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npx shadcn-ui@latest init
or
pnpm dlx shadcn-ui@latest init</pre>
</div>
<h4 class="attr_title">components.json 설정하기</h4>
<p class="attr_p">설치 후, <b>components.json</b> 파일을 구성하는 여러 옵션이 제시됩니다. 여러 설정 중 기본 옵션을 선택하는 과정은 아래와 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
Would you like to use TypeScript (recommended)? yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › app/globals.css
Do you want to use CSS variables for colors? › yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no</pre>
</div>
<p class="attr_p">설정 후, 프로젝트의 폴더 구조는 다음과 같이 구성됩니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
└── tailwind.config.js</pre>
</div>
<h4 class="attr_title">utils.ts 및 CSS 설정</h4>
<p class="attr_p"><b>lib/utils.ts</b> 파일에는 다음과 같은 유용한 함수가 포함되어 있으며, 이 함수는 클래스 이름을 합치고 최적화하는 데 사용됩니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}</pre>
</div>
<h4 class="attr_title">Tailwind CSS 설정 변경하기</h4>
<p class="attr_p"><b>styles/globals.css</b> 파일과 <b>tailwind.config.js</b> 파일에서 기본 색상 값을 커스텀하거나 다음과 같이 설정할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
/* styles/globals.css */
@layer base {
 :root {
   --background: 0 0% 100%;
   --foreground: 222.2 47.4% 11.2%;
   ...
 }

 .dark {
   --background: 224 71% 4%;
   --foreground: 213 31% 91%;
   ...
 }
}</pre>
</div>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// tailwind.config.js
module.exports = {
 theme: {
   extend: {
     colors: {
       background: "hsl(var(--background))",
       foreground: "hsl(var(--foreground))",
       ...
     }
   }
 }
}</pre>
</div>
<h4 class="attr_title">shadcn-ui 컴포넌트 설치하기</h4>
<p class="attr_p">shadcn-ui 컴포넌트는 아래의 명령어를 사용해서 개별 설치할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npx shadcn-ui@latest add [component]
or
pnpm dlx shadcn-ui@latest add [component]</pre>
</div>
<p class="attr_p">만약 컴포넌트를 선택해서 설치하고 싶다면 아래와 같이 컴포넌트를 지정하지 않으면 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npx shadcn-ui@latest add</pre>
</div>
<p class="attr_p">위와 같이 입력하면, 아래와 같이 컴포넌트를 선택할 수 있는 <span data-spell="prompt">프롬프트</span>가 표시됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
Which components would you like to add? › Space to select. A to toggle all.
Enter to submit.

◯  accordion
◯  alert
◯  alert-dialog
◯  aspect-ratio
◯  avatar
◯  badge
◯  button
◯  calendar
◯  card
◯  checkbox
...</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">Shadcn UI Dialog 컴포넌트 만들기</h3>
<p class="attr_p">Shadcn UI 라이브러리를 사용하여 Dialog 컴포넌트를 추가하는 방법은 <b>Tailwind CSS</b>와 <code>@radix-ui/react-dialog</code>에 의존하며, 복잡한 스타일 설정 없이 쉽게 커스텀할 수 있습니다.</p>
<h4 class="attr_title">1. 컴포넌트 추가하기</h4>
<p class="attr_p">먼저, 다음 명령을 실행하여 Dialog 컴포넌트를 프로젝트에 추가합니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npx shadcn-ui@latest add dialog</pre>
</div>
<h4 class="attr_title">2. 컴포넌트 파일 구조</h4>
<p class="attr_p">이 명령을 실행하면 <b>components/ui</b> 폴더 내에 <b>Dialog</b> 파일이 생성됩니다. 이 파일들은 <code>@radix-ui/react-dialog</code>를 사용하여 구성되며, 기본적으로 Tailwind CSS 스타일이 적용되어 있습니다.</p>
<h4 class="attr_title">3. Dialog 컴포넌트 코드 예시</h4>
<p class="attr_p">아래는 Dialog 컴포넌트의 전체 코드 예시입니다. 이 코드는 다양한 Dialog 요소를 정의하고, 클래스 유틸리티 함수를 사용하여 스타일을 적용합니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = React.forwardRef((props, ref) =&gt; (
  &lt;DialogPrimitive.Content ref={ref} {...props} /&gt;
));
const DialogTitle = React.forwardRef((props, ref) =&gt; (
  &lt;DialogPrimitive.Title ref={ref} {...props} /&gt;
));
const DialogDescription = React.forwardRef((props, ref) =&gt; (
  &lt;DialogPrimitive.Description ref={ref} {...props} /&gt;
));</pre>
</div>
<h4 class="attr_title">4. Dialog 사용 예제</h4>
<p class="attr_p">이 컴포넌트를 사용하여 Dialog를 구현하는 예는 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;Dialog&gt;
  &lt;DialogTrigger&gt;Open&lt;/DialogTrigger&gt;
  &lt;DialogContent&gt;
    &lt;DialogTitle&gt;Are you sure?&lt;/DialogTitle&gt;
    &lt;DialogDescription&gt;
      This action cannot be undone. This will permanently delete your account.
    &lt;/DialogDescription&gt;
  &lt;/DialogContent&gt;
&lt;/Dialog&gt;</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">Shadcn UI 커스텀 Button 컴포넌트 만들기</h3>
<p class="attr_p">Shadcn UI를 사용하여 Tailwind CSS 기반의 커스텀 Button 컴포넌트를 개발하는 방법을 설명합니다. 이 과정은 쉽게 따라 할 수 있으며, 기본 Button 스타일에 다양한 변형을 추가하여 사용자의 요구에 맞게 조정할 수 있습니다.</p>
<h4 class="attr_title">1. 기본 Button 컴포넌트 코드</h4>
<p class="attr_p">Shadcn UI에서 제공하는 기본 Button 코드는 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        // 기타 버전 설정 생략
      },
      size: {
        default: 'h-10 px-4 py-2',
        // 기타 사이즈 설정 생략
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);</pre>
</div>
<h4 class="attr_title">2. Button 컴포넌트의 커스텀화</h4>
<p class="attr_p">이제 Button 컴포넌트를 다음과 같이 확장하여 새로운 스타일을 적용할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// 커스텀 버전과 스타일 추가
variants: {
  variant: {
    deepnavy: 'bg-primaryBlue-700 text-[14px] text-white rounded-[0px] hover:bg-primaryBlue-700/80 transition-all duration-300',
    lightblue: 'bg-primaryBlue-100 text-[14px] font-bold text-primaryBlue-default rounded-full hover:bg-primaryBlue-100/50 transition-all duration-300',
  },
  font: {
    default: 'text-sm',
    xs: 'text-xs',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  },
  weight: {
    default: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  },
},
defaultVariants: {
  variant: 'default',
  size: 'default',
  font: 'default',
  weight: 'default',
}

// Button 컴포넌트 확장
const Button = React.forwardRef&lt;HTMLButtonElement, IButtonProps&gt;(
  ({ className, variant, size, font, weight, asChild = false, ...props }, ref) =&gt; {
    const Comp = asChild ? Slot : 'button';
    return (
      &lt;Comp className={cn(buttonVariants({ variant, size, font, weight, className }))} ref={ref} {...props} /&gt;
    );
  },
);</pre>
</div>
<h4 class="attr_title">3. 커스텀 Button 사용 예시</h4>
<p class="attr_p">커스텀 Button 컴포넌트를 사용하는 예는 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;Button variant='lightblue' font='xs'&gt;중복 확인&lt;/Button&gt;</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">멀티페이지 폼 생성 및 유효성 검사 최적화 예제</h3>
<p class="attr_p">멀티페이지 폼은 사용자가 여러 페이지에 걸쳐 정보를 입력하는 형태로, 복잡한 데이터 입력 과정을 단계별로 나누어 처리합니다.</p>
<h4 class="attr_title">Zod를 활용한 유효성 검사</h4>
<p class="attr_p"><b>Zod</b>는 TypeScript 환경에서 유효성 검사를 실행하는 라이브러리로, 폼 데이터의 타입 안정성을 보장합니다. Zod는 사용자 정의 에러 메시지와 복잡한 조건을 설정하는 기능을 제공하여 폼 데이터 검증에 이상적입니다. 아래는 회원가입 폼을 위한 Zod 스키마 예시입니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const signUpFormSchema = z.object({
  email: z.string().email({ message: 'Email format is not valid.' }),
  password: z.string().regex(
    /^(?=.*[a-zA-Z])(?=.*[0-9]).{2,20}$/,
    'Please enter at least 2 characters that combine numbers and letters.'
  ),
  passwordCheck: z.string(),
  job: z.object({
    name: z.string().min(1),
    other: z.string()
  }).refine(data =&gt; !(data.name === 'other' &amp;&amp; data.other === ''), {
    message: 'Please specify your job if "other".',
    path: ['other']
  })
}).refine(data =&gt; data.password === data.passwordCheck, {
  path: ['passwordCheck'],
  message: 'Passwords must match.'
});</pre>
</div>
<h4 class="attr_title">React Hook Form의 통합 사용</h4>
<p class="attr_p"><b>React Hook Form</b>은 React에서 폼의 상태 관리와 유효성 검사를 간편하게 할 수 있는 라이브러리입니다. Zod와 결합하여 사용하면, 폼과 유효성 검사 로직을 분리하여 더욱 깔끔하고 관리하기 쉬운 코드를 작성할 수 있습니다. 예를 들어:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const form = useForm({
  resolver: zodResolver(signUpFormSchema),
  mode: 'all'
});

return (
  &lt;FormProvider {...form}&gt;
    &lt;form onSubmit={form.handleSubmit(data =&gt; console.log(data))}&gt;
      {/* 폼 필드와 버튼 */}
    &lt;/form&gt;
  &lt;/FormProvider&gt;
);</pre>
</div>
<h4 class="attr_title">멀티페이지 폼에서의 페이지 관리</h4>
<p class="attr_p">멀티페이지 폼에서는 <code>useFormContext</code>를 사용하여 각 페이지에서 폼의 상태를 관리할 수 있습니다. 각 페이지는 독립적으로 유효성을 검사하고 다음 페이지로 넘어갈 수 있는 로직을 포함합니다. 예시는 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const { register, formState: { errors }, trigger } = useFormContext();

const onClickNext = async () =&gt; {
  const isValid = await trigger("email");
  if (isValid) {
    router.push("/signup/password");
  }
};

return (
  &lt;div&gt;
    &lt;input {...register("email")} type="email" /&gt;
    {errors.email &amp;&amp; &lt;p&gt;{errors.email.message}&lt;/p&gt;}
    &lt;button type="button" onClick={onClickNext}&gt;Next&lt;/button&gt;
  &lt;/div&gt;
);</pre>
</div>
<h4 class="attr_title">Shadcn/ui와의 통합</h4>
<p class="attr_p"><b>shadcn/ui</b>는 웹 접근성을 강화하고, 공통 컴포넌트 시스템의 구축을 용이하게 하는 라이브러리입니다. <b>React Hook Form</b>과 함께 사용하면 폼 컴포넌트의 관리가 더욱 편리해집니다. 예를 들어, 에러 메시지 출력 및 스타일링을 설정할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;FormField
  control={control}
  name="email"
  render={({ field }) =&gt; (
    &lt;FormItem&gt;
      &lt;FormLabel&gt;Please enter email&lt;/FormLabel&gt;
      &lt;FormControl&gt;
        &lt;Input {...field} /&gt;
      &lt;/FormControl&gt;
      &lt;FormMessage /&gt;
    &lt;/FormItem&gt;
  )}
/&gt;</pre>
</div>
</div>
</section>`;
