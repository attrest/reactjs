export const contentHtml = `<section class="attr_section">
<div class="attr_div">
<h3 class="attr_title">1. Directives</h3>
<p class="attr_p">Tailwind CSS에서는 <a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" data-target="external" data-title="디렉티브">디렉티브</a>라고 하는 특별한 기능들이 있습니다. 이것들은 CSS 내에서 사용할 수 있는데, Tailwind와 관련된 사용자 지정 <a href="https://developer.mozilla.org/ko/docs/Web/CSS/At-rule" target="_blank" data-target="external" data-title="at-rules">at-rules</a>을 의미합니다. 디렉티브는 Tailwind CSS 프로젝트에서 더 효율적으로 작업할 수 있게 도와주는 도구들로, 이를 통해 더욱 강력하고 유연한 CSS 코드를 만들 수 있습니다.</p>
<h4 class="attr_title">@tailwind</h4>
<p class="attr_p">Tailwind CSS에서는 <a href="https://tailwindcss.com/docs/functions-and-directives#tailwind" target="_blank" data-target="external" data-title="@tailwind 디렉티브">@tailwind 디렉티브</a>를 사용해 <b>Tailwind의 base, components, utilities 및 variants 스타일을 CSS에 삽입</b>합니다. 이를 통해 웹 프로젝트를 구축할 때 필요한 모든 스타일을 쉽게 가져올 수 있게 해줍니다.</p>
<ul class="attr_list a__list dot">
<li><b>@tailwind base:</b> <span class="set-check-note">Tailwind의 기본 스타일과 플러그인에 의해 등록된 모든 기본 스타일을 CSS에 주입합니다.</span> 이는 웹사이트의 전반적인 기본 스타일링을 설정하는 데 사용됩니다.</li>
<li><b>@tailwind components:</b> <span class="set-check-note">Tailwind의 컴포넌트 클래스와 플러그인에 의해 등록된 모든 컴포넌트 클래스를 CSS에 주입합니다.</span> 이를 통해 재사용 가능한 UI 컴포넌트 스타일을 적용할 수 있습니다.</li>
<li><b>@tailwind utilities:</b> <span class="set-check-note">Tailwind의 유틸리티 클래스와 플러그인에 의해 등록된 모든 유틸리티 클래스를 CSS에 주입합니다.</span> 유틸리티 클래스를 사용하면 디자인을 빠르게 반응형으로 만들 수 있습니다.</li>
<li><b>@tailwind variants:</b> <span class="set-check-note">Tailwind가 각 클래스의 호버, 포커스, 응답, 다크 모드 및 기타 변형을 CSS에 주입하는 위치를 제어합니다.</span> 기본적으로 Tailwind는 스타일시트의 맨 끝에 이러한 클래스를 추가하지만, 이 디렉티브를 사용하면 그 위치를 조정할 수 있습니다.</li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
/* 기본 스타일과 플러그인에 의해 등록된 모든 기본 스타일을 주입 */
@tailwind base;

/* 컴포넌트 클래스와 플러그인에 의해 등록된 모든 컴포넌트 클래스를 주입 */
@tailwind components;

/* 유틸리티 클래스와 플러그인에 의해 등록된 모든 유틸리티 클래스를 주입 */
@tailwind utilities;

/* Tailwind가 각 클래스의 호버, 포커스, 응답, 다크 모드 및 기타 변형을 주입하는 위치를 제어, 생략할 경우 Tailwind는 기본적으로 스타일시트의 맨 끝에 이러한 클래스를 추가함 */
@tailwind variants;</pre>
</div>
<p class="attr_p">이 디렉티브들을 활용하면 Tailwind CSS를 사용하여 더 효율적이고 조직적인 방법으로 스타일을 관리할 수 있습니다.</p>
<h4 class="attr_title">@layer</h4>
<p class="attr_p">Tailwind CSS에서 <a href="https://tailwindcss.com/docs/functions-and-directives#layer" target="_blank" data-target="external" data-title="@layer 디렉티브">@layer 디렉티브</a>를 사용하면, 사용자 정의 스타일을 Tailwind의 "bucket"의 유효한 계층인 [base, components 또는 utilities]으로 지정할 수 있습니다. 이를 통해 Tailwind CSS는 추가한 사용자 정의 스타일을 적절한 위치에 자동으로 배치하며, 이는 스타일시트의 특정 순서에 대한 걱정 없이 CSS를 작성할 수 있게 해줍니다.</p>
<p class="attr_p">예를 들어, 작성한 CSS에서 <code>@layer base</code> 안에 <code>h1</code>과 <code>h2</code> 태그를 스타일링하면, 이 스타일은 Tailwind의 <code>base</code> 계층에 속하게 됩니다. 마찬가지로, <code>@layer components</code> 안에 <code>.btn-blue</code> 클래스를 정의하면, 이는 <code>components</code> 계층의 일부가 되며, <code>@layer utilities</code> 내에서 정의된 <code>.filter-none</code>과 <code>.filter-grayscale</code> 클래스는 <code>utilities</code> 계층으로 분류됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}

@layer components {
  .btn-blue {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}

@layer utilities {
  .filter-none {
    filter: none;
  }
  .filter-grayscale {
    filter: grayscale(100%);
  }
}</pre>
</div>
<p class="attr_p"><span class="set-check-note">계층에 추가된 모든 사용자 정의 CSS는 기본적으로 Tailwind에 내장된 모든 클래스와 마찬가지로 해당 CSS가 실제로 HTML에서 사용되는 경우에만 최종 빌드에 포함됩니다.</span> 이는 불필요한 스타일의 포함을 방지하여 최종 파일의 크기를 줄이는 데 도움이 됩니다.</p>
<p class="attr_p">또한, <code>@layer</code> 디렉티브를 사용함으로써, <code>hover:</code> 및 <code>focus:</code>와 같은 규칙을 가진 수식어나 <code>md:</code> 및 <code>lg:</code>와 같은 응답 수식어를 사용자 정의 CSS에 적용할 수 있습니다. 이를 통해, Tailwind CSS는 보다 정교하고 반응형이며 상호 작용적인 디자인을 쉽게 구현할 수 있게 해줍니다.</p>
<h4 class="attr_title">@apply</h4>
<p class="attr_p">Tailwind CSS의 <code>@apply</code> 디렉티브는 여러분의 사용자 정의 CSS 내에서 기존 유틸리티 클래스를 인라인하는 데 사용됩니다. 이는 사용자 정의 CSS를 작성할 필요가 있지만, 동시에 설계 토큰으로 작업하고 HTML 내에서 사용하는 것과 동일한 구문을 유지하고 싶을 때 유용합니다. 예를 들어, 타사 라이브러리의 스타일을 재정의하거나 프로젝트 고유의 스타일을 설정할 때 이 방법을 활용할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
.select2-dropdown {
  @apply rounded-b-lg shadow-md;
}
.select2-search {
  @apply border border-gray-300 rounded;
}
.select2-results__group {
  @apply text-lg font-bold text-gray-900;
}</pre>
</div>
<p class="attr_p"><code>@apply</code>가 있는 모든 규칙은 기본적으로 <code>!important</code>가 제거됩니다. 이는 <code>@apply</code>를 사용할 때 스타일이 예상대로 적용되도록 돕지만, 만약 기존 클래스에 <code>!important</code>를 추가해야 한다면, 선언의 끝에 <code>!important</code>를 명시적으로 추가하면 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
/* Input */
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}

/* Output */
.btn {
  font-weight: 700 !important;
  padding-top: .5rem !important;
  padding-bottom: .5rem !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
  border-radius: .25rem !important;
}</pre>
</div>
<p class="attr_p">만약 Sass를 사용하는 경우라면, Sass의 <span data-spell-viewer="Interpolation">보간</span> 기능을 사용해야 합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
.btn {
  @apply font-bold py-2 px-4 rounded #{!important};
}</pre>
</div>
<p class="attr_p"><code>@apply</code> 디렉티브는 Tailwind CSS를 사용하여 보다 세련되고 일관된 디자인을 실현할 수 있는 강력한 방법을 제공합니다.</p>
<h4 class="attr_title">구성 요소별 CSS에서 @apply 사용하기</h4>
<p class="attr_p"><b>Vue</b>와 <b>Svelte</b> 같은 구성 요소 프레임워크는 각 구성 요소 파일 내의 <code>&lt;style&gt;</code> 블록에 구성 요소별 스타일을 추가하는 것을 지원합니다. 그런데, 글로벌 CSS에서 정의한 사용자 정의 클래스를 이러한 구성 요소별 <code>&lt;style&gt;</code> 블록에 <code>@apply</code>하려고 하면, 클래스가 존재하지 않는다는 오류가 발생할 수 있습니다. 이는 Vue 및 Svelte가 모든 <code>&lt;style&gt;</code> 블록을 독립적으로 처리하고, 각각의 PostCSS 플러그인 체인을 별도로 실행하기 때문입니다.</p>
<p class="attr_p">예를 들어, 글로벌 <b>main.css</b>에 <code>.card</code> 클래스를 정의하고, <b>Card.vue</b> 내부의 <code>&lt;style&gt;</code>에서 이 클래스를 <code>@apply</code>하려 할 때, Tailwind는 <b>Card.vue</b>와 <b>main.css</b>가 분리되어 처리된다는 사실을 알지 못하므로 <code>.card</code> 클래스가 존재하는지 인식하지 못합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="js">
/* main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .card {
    background-color: theme('colors.white');
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.xl');
  }
}

&lt;!-- Card.vue --&gt;
&lt;div&gt;
  &lt;slot&gt;&lt;/slot&gt;
&lt;/div&gt;

&lt;style&gt;
  div {
    /* 이 파일과 main.css가 별도로 처리되므로 작동하지 않습니다. */
    @apply card;
  }
&lt;/style&gt;</pre>
</div>
<p class="attr_p">이러한 문제를 해결하기 위한 방법은 Tailwind의 플러그인 시스템을 사용하여 구성 요소에 <code>@apply</code>할 사용자 지정 스타일을 정의하는 것입니다. 예를 들어, <b>tailwind.config.js</b> 파일에서 <code>.card</code>와 같은 클래스를 추가하면, Tailwind를 사용하는 모든 파일에서 이러한 스타일에 액세스할 수 있게 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="js">
/* tailwind.config.js */
const plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        }
      })
    })
  ]
}</pre>
</div>
<p class="attr_p">하지만, 가장 좋은 해결책은 이런 복잡한 방식을 전혀 사용하지 않는 것입니다. Tailwind CSS의 유틸리티를 직접적으로 마크업에서 사용하고, <code>@apply</code> 기능을 남용하지 않는 것이 좋습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">2. Functions</h3>
<p class="attr_p"><span class="set-check-note">Tailwind CSS는 CSS에서 Tailwind 관련 값에 액세스할 수 있는 몇 가지 사용자 지정 함수를 제공합니다.</span> 이 함수들은 빌드 시 평가되어, 최종 CSS 파일에서는 정적 값으로 대체되는데, 이는 웹 개발 시 Tailwind의 유연성을 최대한 활용할 수 있게 해주며, 동시에 빌드된 스타일시트의 성능을 최적화하는 데 기여합니다.</p>
<h4 class="attr_title">theme()</h4>
<p class="attr_p">Tailwind CSS의 <code>theme()</code> 함수는 점 표기법을 사용하여 Tailwind 구성 값에 액세스하기 위한 방법을 제공합니다. 이 함수는 선언의 특정 부분에서만 테마 구성의 값을 참조하고자 할 때, <code>@apply</code>의 유용한 대안이 될 수 있습니다. 다음과 같이 사용할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
.content-area {
  height: calc(100vh - theme('spacing.12'));
}</pre>
</div>
<p class="attr_p">또한, 점이 포함된 값에 액세스해야 할 경우에는 대괄호 표기법을 사용할 수 있습니다. 예를 들면, <code>spacing</code> 스케일의 <code>2.5</code> 값에 접근할 때는 아래와 같이 작성합니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
.content-area {
  height: calc(100vh - theme('spacing[2.5]'));
}</pre>
</div>
<p class="attr_p">Tailwind는 색상 값을 포함한 많은 구성 값을 중첩된 객체 구문으로 정의합니다. 따라서, 중첩된 색상 값에 접근할 때는 점 표기법을 사용해야 합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
// Bad: 중첩된 색상 값에 액세스할 때 대시 구문 사용 안 함
.btn-blue {
  background-color: theme('colors.blue-500');
}

// Good: 점 표기법을 사용하여 중첩된 색 값에 액세스
.btn-blue {
  background-color: theme('colors.blue.500');
}</pre>
</div>
<h4 class="attr_title">screen()</h4>
<p class="attr_p">Tailwind CSS의 <code>screen()</code> 기능을 사용하면, 자신의 CSS에서 값을 복제하는 대신 이름으로 중단점을 참조하는 미디어 쿼리를 만들 수 있습니다. 이는 코드의 중복을 줄이고, 미디어 쿼리를 더 쉽게 관리할 수 있게 해줍니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
@media screen(sm) {
  /* ... */
}</pre>
</div>
<p class="attr_p">이 구문은 빌드 시 기본 화면 값으로 대체되어, 다음과 같이 지정된 중단점과 일치하는 일반 미디어 쿼리가 생성됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
@media (min-width: 640px) {
  /* ... */
}</pre>
</div>
</div>
</section>`;
