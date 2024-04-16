export const contentHtml = `<section class="attr_section">
<div class="attr_div">
<h3 class="attr_title">Stroybook이란?</h3>
<p class="attr_p attr_letter"><span class="set-check-note">Storybook은 UI 개발 환경이자, UI 컴포넌트를 마음껏 실험해볼 수 있는 Playground입니다.</span> 주로 React와 같은 프로젝트에서 많이 사용되며, 개발 중인 컴포넌트들을 문서화하여 보기 쉽게 만들어줍니다. 기본적으로, Storybook의 핵심 단위는 <b>'story'</b>로, 이는 하나 이상의 UI 컴포넌트를 포함할 수 있습니다. 이를 통해 컴포넌트의 작동 방식, 모습, 사용 방법 등을 직관적으로 파악할 수 있습니다.</p>
<p class="attr_p"><span class="set-check-note">프론트엔드 개발에서 테스팅은 백엔드에 비해 상대적으로 복잡하고 어려운 과정인데, Storybook은 이러한 테스팅 과정을 단순화해 줍니다.</span> 특히 <b>'Mocking'</b>이라는 과정을 통해 컴포넌트가 제대로 만들어지고 작동하는지 쉽게 확인할 수 있게 해주며, 또한, 협업 과정에서 비슷한 기능을 하는 다양한 형태의 컴포넌트가 생산되는 비효율을 줄여줍니다. 즉, 서로 다른 형태로 만들어진 비슷한 기능의 컴포넌트들을 통합하고, 중복을 줄이는 데에 큰 도움이 되기 때문입니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">1. Storybook 설치</h3>
<p class="attr_p">Storybook을 React 프로젝트에 설치하는 과정은 다음과 같습니다. 먼저, <code>Create React App</code>을 사용해 React 프로젝트를 설치하고 초기화한 후 설치하는데, 이 때 <b>TypeScript</b> 템플릿을 사용하는 것도 가능합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
# React 앱 프로젝트 설치/초기화
npx create-react-app@latest &lt;프로젝트 이름&gt; --template=typescript
cd &lt;프로젝트 이름&gt;</pre>
</div>
<p class="attr_p">이렇게 프로젝트를 생성한 뒤, <b>Storybook을 설치하고 초기화</b>하는 단계로 넘어갑니다. <b>Storybook CLI</b>를 사용하면 이 과정이 간단해집니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
# 스토리북 설치/초기화
npx -p @storybook/cli sb init</pre>
</div>
<p class="attr_p"><code>npx -p @storybook/cli sb init</code> 명령은 프로젝트에 필요한 Storybook 관련 의존성을 자동으로 설치하고, 기본 설정 파일들을 생성합니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">2. Storybook 업그레이드</h3>
<p class="attr_p">Storybook을 최신 상태로 유지하는 것은 중요한데, 이를 위해 upgrade 명령어를 사용해 Storybook을 쉽게 업그레이드할 수 있습니다. <code>npx sb@next upgrade</code> 명령을 사용하면 Storybook을 최신 버전으로 업그레이드할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npx sb@next upgrade</pre>
</div>
<p class="attr_p">이 명령을 실행하면, Storybook 관련 패키지들이 자동으로 최신 버전으로 업그레이드되며, 이 과정을 통해 새로운 기능을 이용하거나, 버그 수정 및 성능 개선과 같은 이점을 누릴 수 있습니다. 정기적으로 이 명령을 실행하여 Storybook을 최신 상태로 유지해 주는 것이 좋습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">3. 설치 오류 해결</h3>
<p class="attr_p">Storybook을 설치하거나 초기화할 때, 가끔 설치 오류가 발생할 수 있습니다. 이런 상황에서 흔히 마주치는 오류 메시지는 다음과 같습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree</pre>
</div>
<p class="attr_p"><span class="set-check-note">이 메시지는 npm이 의존성 트리를 해결하는 데 실패했음을 나타냅니다.</span> 주로 버전 충돌이나 호환성 문제 때문에 발생하는 이 오류는 프로젝트 설정이나 특정 패키지의 요구 사항 때문일 수 있습니다. 이런 오류를 만난 경우 다음 명령을 입력하면 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npx --legacy-peer-deps sb init</pre>
</div>
<p class="attr_p">이 명령은 <code>--legacy-peer-deps</code> 옵션을 사용하여, npm이 <b>이전 버전의 peer 의존성 해결 방식</b>을 사용하도록 합니다. 이는 의존성 충돌 문제를 우회하는 효과적인 방법으로, 대부분의 경우 설치 오류를 성공적으로 해결할 수 있게 해줍니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">4. Storybook 실행</h3>
<p class="attr_p">Storybook을 사용할 때 주로 사용하게 되는 두 가지 주요 명령어가 있습니다. 이 명령어들은 설치 과정에서 자동으로 <b>package.json</b> 파일에 추가됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
# Storybook 구동하기
npm run storybook</pre>
</div>
<p class="attr_p">이 명령어는 <b>개발 모드</b>에서 Storybook을 실행합니다. 개발 중인 컴포넌트를 실시간으로 보면서 작업할 수 있게 해주며, 웹 브라우저가 자동으로 열리고, 여러분이 작업하는 컴포넌트들을 둘러볼 수 있는 Storybook의 사용자 인터페이스를 제공합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
# Storybook 빌드하기
npm run build-storybook</pre>
</div>
<p class="attr_p">이 명령어는 Storybook을 <b>정적 사이트</b>로 빌드합니다. 프로젝트의 최종 버전을 확인하거나, 다른 사람과 공유할 목적으로 사용됩니다. 빌드 과정을 거친 후에는, 생성된 정적 파일들을 서버에 배포할 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">5. Storybook 구성</h3>
<p class="attr_p">Storybook을 프로젝트에 설치하고 나면, 루트 경로에 <b>.storybook</b> 폴더가 생성되며, 이 폴더 내에는 <b>main.js</b>와 <b>preview.js</b> 파일이 포함됩니다. 이 두 파일은 Storybook의 핵심 구성 요소로, 프로젝트의 Storybook 설정을 관리합니다.</p>
<h4 class="attr_title">.storybook/main.js</h4>
<p class="attr_p"><span class="set-check-note">main.js 파일에는 Storybook의 구성 설정이 저장됩니다.</span> 여기에는 스토리의 위치와 사용할 <span data-spell-viewer="addons">애드온</span>을 정의하는 설정이 포함되는데, <code>npx sb init</code>을 통해 자동으로 생성되며, 기본 설정은 다음과 같습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
};</pre>
</div>
<p class="attr_p">참고로, 프로젝트에서 사용하는 <b>alias</b>를 스토리북에서 사용하기 위해서는, 별도로 <b>webpackFinal</b> 설정을 추가해 주어야 합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
...
webpackFinal: async (config) =&gt; {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      };
    }
    return config;
},
...</pre>
</div>
<h4 class="attr_title">.storybook/preview.js</h4>
<p class="attr_p"><span class="set-check-note">preview.js 파일은 프로젝트의 모든 스토리에 글로벌하게 적용될 설정을 정의하며, 스토리의 <span data-spell-viewer="parameters">매개변수</span>와 <span data-spell-viewer="decorators">데코레이터</span>를 설정할 수 있습니다.</span></p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../pages/_app';
import { theme } from '../styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) =&gt; (
    &lt;ThemeProvider theme={theme}&gt;
      &lt;GlobalStyle /&gt;
      &lt;Story {...context} /&gt;
    &lt;/ThemeProvider&gt;
  ),
];</pre>
</div>
<h4 class="attr_title">package.json</h4>
<p class="attr_p"><span class="set-check-note">package.json 파일에는 Storybook을 실행하고 빌드하는 데 사용되는 스크립트가 추가됩니다.</span> 이 스크립트를 사용하면 Storybook을 시작하거나 빌드할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="json">
{
  "scripts": {
    "storybook": "start-storybook -p 6006 -s public",
    "build-storybook": "build-storybook -s public"
  },
  "devDependencies": {
    "@storybook/addon-actions": "^6.1.20",
    "@storybook/addon-essentials": "^6.1.20",
    "@storybook/addon-links": "^6.1.20",
    "@storybook/node-logger": "^6.1.20",
    "@storybook/preset-create-react-app": "^3.1.6",
    "@storybook/react": "^6.1.20"
  }
}</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">6. Storybook 가이드 파일</h3>
<p class="attr_p">Storybook을 설치하고 초기화하면, <b>src/stories</b> 디렉토리가 생성되며, 이곳에는 Storybook에서 제공하는 다양한 예제 파일들이 포함됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
src/stories/
 ├── assets/
 │   ├── code-brackets.svg
 │   ├── colors.svg
 │   ├── comments.svg
 │   ├── direction.svg
 │   ├── flow.svg
 │   ├── plugin.svg
 │   ├── repo.svg
 │   └── stackalt.svg
 ├── Button.js
 ├── Button.stories.js
 ├── Header.js
 ├── Header.stories.js
 ├── Introduction.stories.mdx
 ├── Page.js
 ├── Page.stories.js
 ├── button.css
 ├── header.css
 └── page.css</pre>
</div>
<p class="attr_p">디렉토리에는 다음과 같은 요소들이 포함됩니다:</p>
<ul class="attr_list a__list dot">
<li><b>assets 폴더:</b> 다양한 SVG 아이콘 파일들이 포함되어 있으며, 스토리북의 UI를 보다 풍부하게 만드는 데 사용됩니다.</li>
<li><b>컴포넌트 파일:</b> Button.js, Header.js, Page.js 등의 파일이 있으며, 각각 버튼, 헤더, 페이지 등을 구현한 React 컴포넌트입니다.</li>
<li><b>스토리 파일:</b> 각 컴포넌트에 해당하는 .stories.js 파일들로, Storybook에서 해당 컴포넌트의 스토리를 어떻게 정의하고 사용하는지 보여줍니다.</li>
<li><b>MDX 파일:</b> Introduction.stories.mdx와 같은 MDX 파일은 문서화와 스토리의 조합을 가능하게 해주어, 마크다운과 JSX를 함께 사용하여 스토리를 더 풍부하게 만들 수 있습니다.</li>
<li><b>CSS 파일:</b> 각 컴포넌트의 스타일을 정의한 CSS 파일들입니다.</li>
</ul>
<p class="attr_p">이 파일들을 통해, Storybook에서 컴포넌트를 어떻게 구성하고, 스타일을 적용하며, 스토리를 통해 문서화하는지에 대한 실제 예제를 볼 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">7. 실행하기</h3>
<p class="attr_p">Storybook을 실행할 때는 다음 명령어를 사용합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm run storybook</pre>
</div>
<p class="attr_p">이 명령을 실행하면, 설치한 Storybook이 구동되고, 브라우저에서는 앞서 설치 과정에서 생성된 <b>src/stories</b> 디렉토리 안에 있는 여러 개의 예시 스토리들을 확인할 수 있습니다. 이 예시들은 Storybook의 기능과 컴포넌트를 어떻게 문서화할 수 있는지를 보여줍니다.</p>
<figure class="attr_figure bordered">
<img class="attr_img" src="/img/storybook/storybook-installation-and-usage-guide-01.png" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite>스토리북 실행화면</cite></figcaption>
</figure>
<figure class="attr_figure bordered">
<img class="attr_img" src="/img/storybook/storybook-installation-and-usage-guide-02.png" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite>스토리북 컴포넌트 예제</cite></figcaption>
</figure>
<h4 class="attr_title">컴포넌트의 기본 구조</h4>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>button.stories.tsc</span></div>
</div>
<pre class="attr_pre" data-lang="javascript">
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

// 글로벌 데코레이터 설정
export const decorators = [
  (Story) =&gt; (
    &lt;div style={{ margin: '3em' }}&gt;
      &lt;Story /&gt;
    &lt;/div&gt;
  ),
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  decorators, // 여기에 데코레이터 추가
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use \`fn\` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta&lt;typeof Button&gt;;

export default meta;
type Story = StoryObj&lt;typeof meta&gt;;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};</pre>
</div>
<p class="attr_p"><b>button.stories.tsx</b> 파일은 Storybook에서 컴포넌트 스토리를 정의하는 방법을 보여주는 기본 예제입니다. 파일의 주요 부분을 살펴보겠습니다.</p>
<h5 class="attr_title">Import 문</h5>
<ul class="attr_list a__list dot">
<li><b>Meta, StoryObj:</b> 스토리북에서 React 컴포넌트의 메타데이터와 스토리 객체를 정의할 때 사용됩니다.</li>
<li><b>fn:</b> 스토리북의 액션을 테스트하거나 감시할 때 사용되는 함수입니다. 컴포넌트에 바인딩된 이벤트 핸들러의 호출을 기록합니다.</li>
</ul>
<h5 class="attr_title">Meta 설정</h5>
<ul class="attr_list a__list dot">
<li><b>title:</b> 스토리북 UI 내에서 컴포넌트의 위치와 이름을 정의합니다. 예를 들어, "Example/Button"은 Example 섹션 아래에 Button을 표시합니다.</li>
<li><b>component:</b> 문서화하고자 하는 실제 컴포넌트를 참조합니다. 여기서는 Button 컴포넌트입니다.</li>
<li><b>parameters:</b> 스토리의 동작 방식을 사용자 정의하는 옵션입니다.</li>
<li><b>layout:</b> 'centered'는 컴포넌트를 캔버스 중앙에 배치합니다.</li>
<li><b>tags:</b> 스토리북의 autodocs 시스템에 사용됩니다.</li>
<li><b>argTypes:</b> 컴포넌트의 props를 조절할 수 있는 인터페이스를 정의합니다. 예를 들어, backgroundColor prop에 대해 색상 제어기를 제공합니다.</li>
<li><b>args:</b> 컴포넌트의 props 기본값을 설정합니다. onClick 이벤트 핸들러로 fn()을 사용하여 클릭 이벤트를 감시합니다.</li>
</ul>
<p class="attr_p">이런 구조를 통해 Storybook에서는 다양한 컴포넌트를 쉽게 문서화하고 테스트할 수 있으며, 각 컴포넌트의 스토리는 사용자에게 어떻게 보여지고, 어떻게 작동하는지를 직관적으로 보여줍니다. 또한, Storybook은 이런 방식으로 개발자가 UI 컴포넌트를 효율적으로 개발하고, 팀 내에서 공유할 수 있도록 돕습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">8. Decorator</h3>
<p class="attr_p">Decorator는 Storybook에서 매우 유용한 기능으로, 추가적인 렌더링을 통해 스토리를 감싸는 방법을 제공합니다. Decorator를 사용하면 스토리의 렌더링 컨텍스트를 변경할 수 있기 때문에, 각 스토리의 독립성을 유지하면서 필요한 곳에만 특정 스타일이나 로직을 적용할 수 있습니다. 이는 스토리 개발 과정에서 매우 유용하며, 세 가지 주요 사용 사례가 있습니다:</p>
<h4 class="attr_title">1. 하나의 Story 범위에만 적용되는 Story decorators</h4>
<p class="attr_p">이는 특정 스토리에만 데코레이터를 적용할 때 사용됩니다. 이 방법은 해당 스토리에만 영향을 미치며, 다른 스토리에는 적용되지 않습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// Story decorators
export const Primary = …
Primary.decorators = [(Story) =&gt; &lt;div style={{ margin: '3em' }}&gt;&lt;Story/&gt;&lt;/div&gt;];</pre>
</div>
<h4 class="attr_title">2. 컴포넌트를 새로운 마크업으로 감싸기 위해 사용하는 Component decorators</h4>
<p class="attr_p">컴포넌트 레벨에서 데코레이터를 적용하려면, 컴포넌트의 스토리 정의 파일에서 다음과 같이 설정할 수 있습니다. 이 설정은 해당 컴포넌트의 모든 스토리에 동일한 데코레이터를 적용합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// YourComponent.stories.ts | YourComponent.stories.tsx

import { Meta } from '@storybook/react';

export default {
  component: YourComponent,
  decorators: [
    (Story) =&gt; (
      &lt;div style={{ margin: '3em' }}&gt;
        &lt;Story/&gt;
      &lt;/div&gt;
    ),
  ],
} as Meta;</pre>
</div>
<h4 class="attr_title">3. Context Provider로 감싸야 하는 경우 사용하는 Global decorators</h4>
<p class="attr_p">전역적으로 적용되는 데코레이터는 <b>.storybook/preview.js</b> 파일에 정의됩니다. 예를 들어, 모든 스토리를 특정 테마의 ThemeProvider로 감싸야 하는 경우, 다음과 같이 작성할 수 있습니다. 이 설정은 프로젝트 내의 모든 스토리에 글로벌하게 적용되기 때문에, 전체 스토리북에 일관된 스타일이나 컨텍스트를 제공하는 데 매우 효과적입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// .storybook/preview.js

import React from 'react';
import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) =&gt; (
    &lt;ThemeProvider theme="default"&gt;
      &lt;Story /&gt;
    &lt;/ThemeProvider&gt;
  ),
];</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">9. Parameters</h3>
<p class="attr_p"><span class="set-check-note">Storybook에서의 parameters는 스토리의 정적 메타데이터를 의미하며, storybook의 기능과 애드온을 조작하는 데 주로 사용됩니다.</span> 파라미터는 스토리, 컴포넌트, 그리고 전역 레벨에서 설정할 수 있으며, 이는 각각의 사용 사례에 따라 다양한 설정을 가능하게 합니다.</p>
<h4 class="attr_title">1. Story parameters</h4>
<p class="attr_p">특정 스토리에만 적용되는 파라미터입니다. 예를 들어, 배경 색상을 설정하고 싶은 경우 아래와 같이 스토리 파일에 파라미터를 추가할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// Button.stories.js | Button.stories.ts | Button.stories.jsx | Button.stories.tsx

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
};</pre>
</div>
<h4 class="attr_title">2. Component parameters</h4>
<p class="attr_p">컴포넌트 레벨에서 파라미터를 설정하면, 해당 컴포넌트의 모든 스토리에 파라미터가 적용됩니다. 이는 컴포넌트 전체에 일관된 설정을 적용하고 싶을 때 유용합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// Button.stories.js | Button.stories.ts | Button.stories.jsx | Button.stories.tsx

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
  },
};</pre>
</div>
<h4 class="attr_title">3. Global parameters</h4>
<p class="attr_p">전역 파라미터는 모든 스토리에 적용되며, <b>.storybook/preview.js</b> 파일에 설정됩니다. 프로젝트 전체에 걸쳐 일관된 스타일이나 설정을 적용하고 싶을 때 사용됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// .storybook/preview.js

export const parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
};</pre>
</div>
<p class="attr_p">참고로, <span class="set-check-note">parameter와 decorator는 global &amp;lt; components &amp;lt; story의 순서로 우선순위를 갖습니다.</span> 이는 더 구체적인 설정이 더 높은 우선순위를 가지며, 전역 설정보다 특정 컴포넌트나 스토리에 설정된 값이 우선 적용된다는 의미입니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">10. Rename stories</h3>
<p class="attr_p">Storybook에서 스토리의 이름을 변경하는 것은 매우 간단합니다. 스토리에 대한 명확하고 이해하기 쉬운 이름을 제공하려면 <b>storyName</b> 프로퍼티를 사용하면 됩니다. 이 프로퍼티에 새로운 이름을 할당해 주기만 하면 해당 스토리가 Storybook UI에서 원하는 이름으로 표시됩니다.</p>
<p class="attr_p">예를 들어, Button 컴포넌트의 기본 스토리를 <b>"The Primary Button"</b>으로 이름 변경하고 싶다면, 다음과 같이 작성할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// Button.stories.ts | Button.stories.tsx

import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export const Primary: Story&lt;ButtonProps&gt; = () =&gt; &lt;Button primary&gt;Button&lt;/Button&gt;;

Primary.storyName = 'The Primary Button';</pre>
</div>
<p class="attr_p">이렇게 설정하면, Storybook의 사이드바나 메뉴에서 해당 스토리가 <b>“The Primary Button”</b>으로 표시됩니다. 이 기능은 스토리를 더 명확하게 분류하고 구분할 때 유용하게 사용될 수 있습니다. 스토리의 용도나 특성을 반영하는 이름을 사용함으로써, 사용자가 스토리북을 탐색하고 원하는 컴포넌트 스토리를 더 쉽게 찾을 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">11. 데이터 연결</h3>
<p class="attr_p"><span class="set-check-note">Storybook은 단순히 UI 컴포넌트를 독립적으로 렌더링하는 것뿐만 아니라, 데이터를 연결하여 동적인 상태를 보여주는 컴포넌트의 렌더링도 지원합니다.</span> 이는 데이터를 필요로 하는 컴포넌트나, 특정 상태 관리 라이브러리와 함께 사용되는 컴포넌트의 경우 매우 유용합니다.</p>
<p class="attr_p">예를 들어, <b>react-redux</b>를 사용하는 컴포넌트의 경우, 실제 앱의 스토어 대신 목업 스토어를 사용하여 Storybook에서 해당 컴포넌트를 보여줄 수 있습니다. 아래 예제는 <b>Container</b> 컴포넌트에 대해 이를 어떻게 할 수 있는지 보여줍니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import Container from './Container';

// mock store
const store = {
  getState: () =&gt; {
    return {
      todos: [
        {
          id: 1,
          text: 'Do Something',
          done: false
        }
      ]
    };
  },
  subscribe: () =&gt; {},
  dispatch: action('dispatch')
};

const withReduxMockStore = (story: () =&gt; JSX.Element) =&gt; (
  &lt;Provider store={store}&gt;{story()}&lt;/Provider&gt;
);

export default {
  title: 'components|Container',
  component: Container,
  decorators: [withReduxMockStore]
};

export const sample = () =&gt; &lt;Container /&gt;</pre>
</div>
<p class="attr_p">여기서 중요한 부분은, 목업 스토어를 생성하여 <b>Provider</b>를 통해 스토리에 주입하는 것입니다. 이 방법을 통해 Container 컴포넌트가 실제 앱과 유사한 환경에서 렌더링될 수 있도록 하며, <b>action('dispatch')</b>를 통해 스토어의 dispatch 함수가 호출될 때마다 Storybook의 액션 패널에서 이를 추적할 수 있게 합니다.</p>
<p class="attr_p"><span class="set-check-note">이런 접근 방식은 컴포넌트가 예상대로 동작하는지를 확인하고, 데이터가 변경될 때 UI가 어떻게 반응하는지를 시각적으로 파악할 수 있게 해줍니다.</span> 특히 상태 관리가 중요한 복잡한 컴포넌트나 컨테이너 컴포넌트를 개발할 때 매우 유용합니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">12. Storybook을 사용하는 이유</h3>
<p class="attr_p">Storybook을 사용하는 이유는 다양하며, 개발 과정에서의 효율성과 편리성을 크게 향상시킵니다. 여기에 몇 가지 주요 이유를 정리해 봤습니다.</p>
<ul class="attr_list a__list dot">
<li><span class="set-check-note">독립적인 환경에서 UI 컴포넌트를 개발할 수 있습니다.</span> 이를 통해 개발자가 <span data-spell="application">애플리케이션</span>의 나머지 부분에 영향을 받지 않고, UI 컴포넌트에 집중할 수 있게 해줍니다.</li>
<li><span class="set-check-note">컴포넌트 UI 개발을 위해 복잡한 데이터나 비즈니스 로직을 구축할 필요가 없습니다.</span> 이는 초기 개발 속도를 높이고, 개발 과정을 단순화합니다.</li>
<li><span class="set-check-note">특정한 스냅샷을 스토리로 만들고 테스트할 수 있습니다.</span> 이는 개발 과정에서 예상치 못한 문제를 사전에 발견하고 수정하는 데 도움을 줍니다.</li>
<li><span class="set-check-note">재사용을 위해 만들어진 컴포넌트들을 Story에서 조합하여 사용할 수 있습니다.</span> 이는 개발자와 디자이너가 실제 <span data-spell="application">애플리케이션</span> 내에서 컴포넌트를 어떻게 사용할지 시각화하고 테스트할 수 있게 해줍니다.</li>
<li><span class="set-check-note">UI 컴포넌트 라이브러리를 문서화 할 수 있습니다.</span> 또한 디자인 시스템을 개발하는 데에도 사용할 수 있습니다. 이는 팀 내에서 UI 컴포넌트의 재사용성과 일관성을 높이는 데 큰 도움이 됩니다.</li>
<li><span class="set-check-note">Typescript를 지원하기 때문에 TS 프로젝트에 별도의 configuration이 필요하지 않습니다.</span> 이는 Typescript를 사용하는 프로젝트에서의 개발 편의성을 높여줍니다.</li>
</ul>
<p class="attr_p">Storybook의 이러한 장점들은 개발 과정을 더 빠르고, 효율적이며, 오류 가능성이 적은 방향으로 이끌어 줍니다. 또한, 이를 통해 팀 내의 커뮤니케이션과 협업을 원활하게 하고, 프로젝트의 전반적인 품질을 높이는 데 기여할 수 있습니다.</p>
</div>
<p class="attr_p source"><b>Storybook Reference Docs:</b> <a href="https://storybook.js.org/docs/get-started" target="_blank" data-target="external">https://storybook.js.org/docs/get-started</a></p>
</section>`;
