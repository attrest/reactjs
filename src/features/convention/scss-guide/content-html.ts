export const contentHtml = `<section class="attr_section">
<div class="attr_div">
<h3 class="attr_title">1. 폴더 구조</h3>
<p class="attr_p">프로젝트를 진행하면서 깔끔하고 체계적인 폴더 구조를 유지하는 것은 프로젝트 관리와 효율적인 작업 흐름에 매우 중요합니다. 여기서는 마크업 코딩 컨벤션에 따른 기본 폴더 구조에 대해 설명합니다.</p>
<p class="attr_p">폴더 구조의 기본 형태는 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
root
ㄴ src
    ㄴ scss
        ㄴ common
        ㄴ import
            ㄴ * (선택)
        ㄴ lib (선택)
    ㄴ css
    ㄴ img
    ㄴ *.html</pre>
</div>
<p class="attr_p">위 예시의 구조는 마크업 개발 과정에서 필요한 주요 파일과 폴더를 포함합니다.</p>
<ul class="attr_list a__list dot">
<li>기본구조는 마크업 코딩컨벤션의 폴더 구조 규칙을 따르며, 이는 프로젝트의 일관성을 유지하고, 팀원 간의 협업을 용이하게 하는 데 목적이 있습니다.</li>
<li><b>root/</b> 내에서 <b>src/</b> 외의 폴더는 자유롭게 관리할 수 있습니다. 이는 프로젝트의 요구사항이나 개발자의 선호에 따라 추가적인 폴더나 파일을 생성할 수 있음을 의미합니다.</li>
<li><b>lib/</b>와 <b>import/*/</b>은 필요에 따라 생성합니다. 이러한 폴더는 외부 라이브러리나 재사용 가능한 코드 조각들을 관리하는 데 사용될 수 있으며, 프로젝트의 규모나 복잡성에 따라 선택적으로 사용됩니다.</li>
</ul>
<p class="attr_p"><span class="set-check-note">이와 같은 폴더 구조는 프로젝트의 기반이 되며, 효과적인 리소스 관리와 접근성을 제공합니다.</span> 프로젝트의 초기 단계에서 이런 구조를 잘 계획하고 구현함으로써, 나중에 발생할 수 있는 혼란을 최소화하고, 작업의 효율성을 높일 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">2. SCSS 파일 구조</h3>
<p class="attr_p">SCSS의 파일 구조를 잘 관리하는 것은 큰 프로젝트에서 스타일 시트를 효율적으로 작업하는 데 중요합니다. 여기에서는 SCSS 파일 구조의 기본 구성요소와 각각의 용도에 대해 설명합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
scss
ㄴ {main}.scss
ㄴ common
    ㄴ _base.scss
    ㄴ _variables.scss
    ㄴ _mixins.scss
    ㄴ _placeholders.scss
ㄴ import
    ㄴ _*.scss
    ㄴ * (선택)
ㄴ lib (선택)
    ㄴ _*.scss</pre>
</div>
<h4 class="attr_title">1. 메인 SCSS 파일:</h4>
<p class="attr_p"><b>{main}.scss</b> 파일은 프로젝트의 메인 파일로, 다른 모든 SCSS 파일들을 import하는 구문으로 이루어집니다. <span class="set-check-note">이 파일을 통해 전체 프로젝트의 스타일을 관리하며, 모듈화된 CSS 구조를 유지할 수 있습니다.</span></p>
<h4 class="attr_title">2. common 폴더:</h4>
<p class="attr_p">이 폴더는 프로젝트의 기반을 다지는 파일들을 포함합니다.</p>
<ul class="attr_list a__list dot">
<li><b>_base.scss:</b> CSS reset을 위한 파일로, 브라우저 간 일관된 스타일링을 위한 기본 스타일을 설정합니다.</li>
<li><b>_variables.scss:</b> 프로젝트 전반에 걸쳐 사용되는 <b>색상, 글꼴 크기 등의 변수를 정의</b>합니다.</li>
<li><b>_mixins.scss:</b> 재사용 가능한 CSS 코드 조각을 정의하는 <b>믹스인을 포함</b>합니다.</li>
<li><b>_placeholders.scss:</b> extend 모음으로, 다양한 선택자에서 재사용될 수 있는 <b>일련의 스타일 규칙</b>을 포함합니다.</li>
</ul>
<h4 class="attr_title">3. import 폴더:</h4>
<p class="attr_p"><span class="set-check-note">import 폴더는 기능 또는 페이지 이름으로 자유롭게 생성된 SCSS 파일들을 포함합니다.</span> 각 파일은 특정 부분 또는 컴포넌트의 스타일을 정의합니다.</p>
<p class="attr_p">파일 네이밍에는 <b>prefix</b>를 붙여 네이밍할 수 있으며, 하위 폴더를 생성하여 파일을 구분해 넣는 것도 가능합니다. 이는 프로젝트의 조직화를 돕고, 관련 스타일을 쉽게 찾을 수 있게 합니다.</p>
<h4 class="attr_title">4. lib 폴더:</h4>
<p class="attr_p"><span class="set-check-note">lib 폴더는 외부라이브러리 모음을 포함하는 선택적 폴더입니다.</span> 프로젝트에서 사용되는 외부 SCSS 라이브러리를 여기에 위치시킵니다.</p>
<p class="attr_p">SCSS 파일의 이런 기본적인 구조를 통해 각 SCSS 파일들을 체계적으로 관리할 수 있으며, 프로젝트의 생성에 필요한 스타일 시트를 쉽게 유지보수하고 확장할 수 있습니다. 특히 큰 프로젝트에서는 이런 방식의 구조화가 매우 중요하며, 작업의 효율성과 가독성을 높이는 데 기여할 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">3. 인코딩</h3>
<p class="attr_p">CSS와 SCSS 파일을 작성하고 컴파일할 때 인코딩 문제는 자주 마주치는 문제 중 하나입니다. 특히 Windows 환경에서는 인코딩 문제로 인해 컴파일 시 오류가 발생할 가능성이 높습니다. 이를 해결하기 위해서는 몇 가지 중요한 지침을 따르는 것이 중요합니다.</p>
<ul class="attr_list a__list dot">
<li><b>모든 SCSS 파일에는 charset을 선언해야 합니다:</b> 이는 파일이 올바르게 인코딩되어 컴파일러가 파일을 정확하게 해석할 수 있도록 보장합니다.</li>
<li><b>SCSS 파일은 최소한의 코드를 작성하도록 분할해야 합니다:</b> 컴파일 후에 charset 선언은 하나만 남게 되며, 따라서 여러 파일에서 charset을 선언해도 문제가 되지 않습니다. SCSS 파일을 분할하여 작업하는 것이 추후 관리에 있어서 유리합니다.</li>
<li><b>@charset 선언은 파일의 최상단에 위치해야 하며, 선언 전에 공백이 없도록 주의해야 합니다:</b> 이는 @charset이 파일의 맨 처음에 와야 정상적으로 인식되고 처리될 수 있음을 의미합니다.</li>
</ul>
<p class="attr_p">다음은 @charset을 올바르게 선언한 예시입니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
@charset "UTF-8";

body {
    margin: 0;
}</pre>
</div>
<p class="attr_p"><span class="set-check-note">이런 지침을 따름으로써, 인코딩 문제로 인한 컴파일 오류를 방지할 수 있고, 프로젝트의 스타일시트가 다양한 환경에서 일관되게 동작하도록 할 수 있습니다.</span> 따라서 모든 SCSS 파일에 @charset 선언을 추가하는 것이 중요합니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">4. Layer</h3>
<p class="attr_p">스타일 시트를 작성할 때, <span data-spell-viewer="Layer">계층적</span> 구조를 갖는 것은 중요합니다. 이 구조는 코드의 유지보수를 쉽게 하고, 다른 개발자들이 코드를 더 쉽게 이해할 수 있도록 돕습니다. 스타일 시트는 일반적으로 다음과 같이 최대 9단계로 나눌 수 있습니다:</p>
<ul class="attr_list a__list number">
<li>Settings</li>
<li>Tools</li>
<li>Generic</li>
<li>Base</li>
<li>Objects</li>
<li>Components</li>
<li>Pages</li>
<li>Themes</li>
<li>Utilities</li>
</ul>
<h4 class="attr_title">1. Settings</h4>
<p class="attr_p">사이트 전반에 사용되는 설정값들을 포함합니다. 예를 들면, <b>색상, 폰트, 브레이크포인트 등의 변수</b>가 여기에 해당합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
$breakpoints: (
  //'xsmall': 'screen',
  'small': 'screen and (min-width: 640px)',
  'medium': 'screen and (min-width: 1024px)',
  'large': 'screen and (min-width: 1280px)',
  'xlarge': 'screen and (min-width: 1440px)',
  'retina': 'screen and (-webkit-min-device-pixel-ratio:1.5)'
);</pre>
</div>
<h4 class="attr_title">2. Tools</h4>
<p class="attr_p"><b>[믹스인|s=mixins]이나 함수</b> 같은 전처리기의 도구들을 모아두는 계층입니다. 이런 도구들은 전체 프로젝트에서 재사용될 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
@mixin background-rgba($color, $alpha) {
  $rgba: rgba($color, $alpha);
  $ie-hex-str: ie-hex-str($rgba);
  background-color: $rgba;
  filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=#{$ie-hex-str},EndColorStr=#{$ie-hex-str});
  &amp;:not([dummy]) {
    filter: progid:DXImageTransform.Microsoft.gradient(enabled='false');
  }
}</pre>
</div>
<h4 class="attr_title">3. Generic</h4>
<p class="attr_p"><span data-spell-viewer="reset">CSS 리셋</span>이나 <b>Normalize.css</b> 같은, <b>전역적으로 적용되는 범용 스타일</b>을 포함합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
html,
body {}
a,
input,
textarea,
button {}</pre>
</div>
<h4 class="attr_title">4. Base</h4>
<p class="attr_p">HTML 요소들(예: h1, a, p 등)의 기본 스타일을 설정합니다. 여기서는 프로젝트의 <b>기본적인 타이포그래피와 엘리먼트 스타일링을 정의</b>합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
button,
input[type='button'],
input[type='submit'],
input[type='reset'],
input[type='image'] {}</pre>
</div>
<h4 class="attr_title">5. Objects</h4>
<p class="attr_p">UI를 구성하는 객체(예: 그리드 시스템)와 같은, <b>디자인 패턴을 담은 스타일</b>입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
.row {}
.col-s12 {}
.col-m12 {}
.col-l12 {}</pre>
</div>
<h4 class="attr_title">6. Components</h4>
<p class="attr_p">재사용 가능한 UI 컴포넌트(예: 버튼, 카드, 모달 등)의 스타일을 정의합니다. 이 계층에서는 <b>프로젝트의 구체적인 UI 구성 요소들을 스타일링</b>합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
.combobox {}
.combobox__item {}
.combobox.is-expanded {}</pre>
</div>
<h4 class="attr_title">7. Pages</h4>
<p class="attr_p">특정 페이지에 특화된 스타일을 포함합니다. 이는 <b>페이지에 최적화된 스타일링이 필요한 경우</b>에 사용됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
.about-page {}</pre>
</div>
<h4 class="attr_title">8. Themes</h4>
<p class="attr_p">사이트의 다른 테마를 위한 스타일이 위치합니다. 이 계층을 통해 <b>다양한 테마</b>를 적용할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="html">
&lt;html class="dark-theme"&gt;
  &lt;body&gt;
    &lt;div class="spinner"&gt;&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
</div>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
// sample pattern 1
.combobox {
  .dark-theme &amp; {}
}

// sample pattern 2
.combobox {}
.dark-theme {
  .combobox {}
}</pre>
</div>
<p class="attr_p">또는 테마 스타일을 새로운 CSS 파일로 분리하여 작성할 수도 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="html">
&lt;link rel="stylesheet" href="/css/style.css"&gt;
&lt;link rel="stylesheet" href="/css/dark-theme.css"&gt;</pre>
</div>
<h4 class="attr_title">9. Utilities</h4>
<p class="attr_p">유틸리티 클래스들을 포함하며, 이는 <b>전체 프로젝트에 걸쳐 특정 스타일을 강제하기 위해 사용</b>됩니다. 여기에 포함된 클래스들은 보통 <b>!important</b>를 추가하여 다른 어떤 스타일보다 우선 적용됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
.blind {}</pre>
</div>
<p class="attr_p">위 구성에 따라 SCSS 파일을 구성하면 다음과 같은 구조를 만들 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
@import "settings/_breakpoints";
@import "settings/_colors";

@import "tools/_functions";
@import "tools/_mixins";

@import "generic/_normalize";

@import "base/_forms";
@import "base/_headings";
@import "base/_hr";
@import "base/_links";
@import "base/_lists";
@import "base/_page";
@import "base/_quotes";
@import "base/_tables";

@import "objects/_grid";

@import "components/_comment";
@import "components/_fields";
@import "components/_dialog";
@import "components/_drawer";
@import "components/_footer";
@import "components/_header";
@import "components/_page-title";
@import "components/_pagination";
@import "components/_post";
@import "components/_share-menu";

@import "pages/_about";
@import "pages/_archive";
@import "pages/_contact";
@import "pages/_error";
@import "pages/_faq";

@import "utilities/_blind";</pre>
</div>
<p class="attr_p"><span class="set-check-note">이런 계층 구조를 따르는 것은 프로젝트의 스타일 가이드를 명확하게 정의하고, 코드의 일관성과 재사용성을 향상시키는 데 중요한 역할을 합니다.</span> 각 계층은 서로 다른 목적을 가지며, 이런 계층화를 통해 개발 프로세스를 더 체계적이고 효율적으로 만들 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">5. 중첩</h3>
<p class="attr_p">SCSS에서 <span data-spell-viewer="Nesting">중첩</span>은 스타일을 보다 구조적으로 표현할 수 있게 해주지만, 과도하게 사용될 경우 코드의 복잡성을 증가시키고 유지보수를 어렵게 만들 수 있습니다. 따라서 몇 가지 지침을 따라야 합니다.</p>
<ul class="attr_list a__list dot">
<li><b>최대 3뎁스 중첩까지 사용하는 것을 권장합니다:</b> 이는 셀렉터의 개수가 아닌 SCSS 코드상의 중첩 깊이를 의미합니다. 이 규칙은 코드의 가독성과 유지보수성을 보장하는 데 도움이 됩니다.</li>
<li><b>3뎁스가 넘어갈 경우는 하위 연결자를 활용하거나 별도의 모듈로 뽑아내는 것을 고려해야 합니다:</b> 이는 너무 깊은 중첩이 발생하지 않도록 하며, 코드의 구조를 더 명확하게 해줍니다.</li>
<li><b>미디어 쿼리의 중괄호는 중첩에 포함하지 않습니다:</b> 미디어 쿼리는 반응형 디자인을 구현할 때 필수적이며, 이 규칙은 미디어 쿼리를 사용하는 데 있어 유연성을 제공합니다.</li>
</ul>
<p class="attr_p">올바른 사용 예는 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
.foo {
  .bar {
    .baz {}
    .qux.qux2 {}
    &amp;.bar2 .baz {}
  }
}</pre>
</div>
<p class="attr_p">다음의 경우에는 중첩이 <b>4뎁스</b>까지 발생하는데, 이런 깊은 중첩은 피하는 것이 좋습니다. 깊은 중첩은 코드를 이해하고 수정하기 위한 시간과 노력을 증가시키는 만큼, 가능한 한 간결하고 명확한 코드를 작성하기 위해 노력해야 하며, 불가피할 경우에는 중첩의 마직막을 알려주는 주석을 추가해주는 것이 좋습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
.foo {
  .bar {
    .baz {}
    .qux {
      .qux2 {}
    } // .qux
    &amp;.bar2 {
      .baz {}
    } // .bar2
  }
}</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">6. Style Rules</h3>
<p class="attr_p">SCSS 파일 작성 시, 들여쓰기 및 선언 순서는 코드의 가독성과 유지보수를 크게 향상시킬 수 있는 중요한 요소입니다. 다음은 효과적인 SCSS 스타일 규칙을 따르는 방법에 대한 일반적인 지침입니다.</p>
<ul class="attr_list a__list dot">
<li><b>중첩 마다 들여쓰기를 합니다:</b> 이는 코드의 구조를 더 명확하게 이해할 수 있게 해줍니다.</li>
<li><b>하위 선택자가 시작될 때 빈 줄을 추가합니다:</b> 이는 하위 선택자들 간의 구분을 더욱 명확하게 해주어 가독성을 높여줍니다.</li>
<li><b>extend 및 include는 상단에 모아쓰고 그 뒤에 빈 줄을 추가합니다:</b> 이는 믹스인과 확장을 한눈에 파악할 수 있도록 도와줍니다.</li>
<li><b>재선언이 필요한 경우 include를 필요한 위치에 추가할 수 있습니다:</b> 이는 특정 상황에서 스타일 규칙을 유연하게 적용할 수 있게 해줍니다.</li>
<li><b>SCSS 파일에서는 속성마다 개행을 합니다:</b> 이는 컴파일 과정에서 설정에 따라 공백과 여백을 없앨 수 있기 때문에, SCSS 파일 내에서는 가독성에 중점을 둡니다.</li>
<li><b>속성 선언 순서를 일관되게 유지합니다:</b> 이는 다음 작업자가 속성을 쉽게 찾을 수 있게 해주며, 코드의 일관성을 유지할 수 있게 해줍니다.</li>
</ul>
<p class="attr_p">올바른 사용 예:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
.foo {
    // @extend, @include는 상단에 모아쓰고 그 뒤 빈 줄을 추가한다.
    @extend %a;
    @extend %b;
    @include abc(n);

    // 속성 별 개행.
    display: block;
    overflow: hidden;
    position: relative;
    z-index: 10;
    width: 100px;
    margin: 0;
    padding: 0;
    border: 1px solid red;
    background: red;
    font-weight: bold;
    letter-spacing: -1px;
    text-decoration: underline;

    // 상황에 따라 하단에 위치할 수도 있음.
    @include bcd(n);

    // 하위 선택자가 시작될 때 빈 줄 추가.
    .bar {
        ...
    }
}</pre>
</div>
<p class="attr_p"><extend|code>개행을 하지 않고, [</extend|code>와 <span class="set-check-note">@include|code] 다음에 빈 줄을 추가하지 않는 등의 방식으로 코드를 작성하면, 가독성을 크게 떨어뜨릴 수 있습니다.</span> 또한, 들여쓰기를 하지 않거나, 하위 선택자 전에 빈 줄을 추가하지 않는 방법도 피해야 합니다. 이러한 스타일 규칙을 준수함으로써, 코드의 가독성을 높이고, 팀 내에서의 협업을 용이하게 만들 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">7. 띄어쓰기</h3>
<p class="attr_p">코드를 작성할 때 가독성은 매우 중요한 요소입니다. 특히, SCSS와 같은 스타일 시트에서는 띄어쓰기를 통해 코드의 가독성을 크게 향상시킬 수 있으며, 개발자 도구와의 일관성을 유지하는 데도 도움이 됩니다. 이와 관련하여 몇 가지 지침을 제시합니다.</p>
<p class="attr_p"><span class="set-check-note"><Operator>연산자</Operator>와 <Combinator>연결자</Combinator>는 기호 좌/우측을 한 칸 띄웁니다.</span> 이 규칙은 코드를 더 읽기 쉽게 만들어 줍니다. 특히, 연산을 수행할 때 또는 선택자를 연결할 때 이를 적용합니다.</p>
<p class="attr_p">예를 들어, 연산자를 사용할 때:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
// '-' 와 '*' 앞/뒤를 한 칸 띄운다.
$height - ($width * 2)</pre>
</div>
<p class="attr_p">이 방식은 변수 간의 연산 시 가독성을 높여줍니다.</p>
<p class="attr_p">연결자를 사용할 때:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
// '&gt;' 와 '+' 앞/뒤를 한 칸 띄운다.
.title &gt; .tx:after
.title + div</pre>
</div>
<p class="attr_p">이는 특정 선택자 간의 관계를 더 명확하게 표현할 수 있게 해주며, 선택자가 더 잘 눈에 띄도록 합니다.</p>
<p class="attr_p"><span class="set-check-note">띄어쓰기는 코드의 일관성과 가독성을 높이는 간단하지만 효과적인 방법입니다.</span> 코드를 작성할 때 이러한 규칙을 적용함으로써, 다른 개발자들이 코드를 이해하기 쉽게 만들고, 작업의 효율성을 높일 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">8. 주석</h3>
<p class="attr_p">주석은 코드의 이해를 돕고, 개발 과정에서 의도와 목적을 명확히 전달하는 데 중요한 역할을 합니다. SCSS에서 주석을 사용하는 방법에는 몇 가지 권장 사항이 있습니다.</p>
<p class="attr_p"><span class="set-check-note">CSS의 주석 표현인 <code>/* 주석 */</code>으로 <code>import</code>되는 파일 상단에 파일명을 표기하세요.</span> 이는 개발자 도구로 디버깅 시, 특히 SCSS 사용하지 않는 개발자나 서비스에 초기 투입된 경우, 선언 위치를 파악하는 데 도움이 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
@charset "utf-8";
/* _layout.scss */</pre>
</div>
<p class="attr_p"><span class="set-check-note">그 외의 주석은 컴파일되지 않도록 <code>//</code>으로 표기합니다.</span> 이 방식은 기능(믹스인, 변수 등)에 대한 설명이나 UI 구성요소에 대한 주석을 남길 때 유용합니다. 하지만, 이미 기존 CSS에 <code>/* 주석 */</code>으로 선언되어 있던 것을 굳이 <code>//</code> 주석으로 수정할 필요는 없습니다. 기존 코드의 주석 방식을 유지하는 것이 좋습니다.</p>
<p class="attr_p">CSS에 반드시 컴파일되어야 하는 주석이 있다면, <code>/* */</code>로 표기해야 하며, 이는 컴파일된 CSS 파일 내에서도 주석이 보존되어야 할 때 사용됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
@charset "utf-8";
/* _layout.scss */

// Header
...

// Footer
...</pre>
</div>
<p class="attr_p"><span class="set-check-note">주석 사용 규칙을 따름으로써, 코드의 가독성을 높이고 다른 개발자가 코드를 이해하는 데 도움을 줄 수 있습니다.</span> 주석은 코드의 일부분으로, 효과적인 커뮤니케이션 도구로 활용될 수 있음을 기억할 필요가 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">9. 네이밍</h3>
<h4 class="attr_title">1. Mixin</h4>
<p class="attr_p">문자 및 연결자에는 <b>Camel Case</b>를 사용하는 것을 권장합니다. 이는 <code>mixin</code>이 클래스명<b>(_, Underbar)</b>, CSS 속성명<b>(-, Hyphen)</b>과 구분되도록 하기 위함입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
@mixin testBox() {
    ...
}

@mixin testBox($test) {
    ...
}</pre>
</div>
<h4 class="attr_title">2. 변수</h4>
<p class="attr_p"><b>지역변수</b>는 블록 내에서 선언된 변수로, 범위는 블록 내에서만 유효하며, <b>전역변수</b>는 블록 밖에서 선언된 변수로, 전체 범위에서 유효합니다. 만약, <b>특정 요소/모듈의 속성 값</b>을 사이트 전체에서 사용하는 경우, 해당 속성 값을 전역변수로 사용합니다.</p>
<ul class="attr_list a__list dot">
<li><b>지역변수(로컬 변수):</b> <b>소문자</b>를 사용합니다.</li>
<li><b>전역변수(글로벌 변수):</b> <b>g-소문자</b> 형태로 표기합니다.</li>
<li><b>상수:</b> <b>대문자</b>를 사용합니다. 상수는 선언 이후 변하지 않는 값을 의미합니다. CSS에서는 활용도가 낮은 편이지만, 사용한다면 대문자로 표기하는 것을 권장합니다.</li>
<li><b>연결자:</b> <b>- (Hyphen)</b>을 사용합니다.</li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
$g-body-color: #fff;
$g-font-family-base: Dotum, '돋움', Helvetica, AppleSDGothicNeo, sans-serif;
$g-font-family-tahoma: tahoma, sans-serif;

.local {
    $color-point: #ff0078;
    $margin-endpage: 15px;
}</pre>
</div>
<p class="attr_p">디렉토리 경로를 변수로 선언할 때는 아래와 같은 규칙을 사용하는 것을 권장합니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="scss">
$g-path: '../';
$g-path-img: $g-path + 'img/';

.class {
  background-image: url($g-path-img + 'event_banner.png');
}</pre>
</div>
<p class="attr_p">이런 <span class="set-check-note">네이밍 규칙을 따름으로써, 코드의 일관성을 유지하고, 프로젝트 팀원 간의 협업을 용이하게 만들 수 있습니다.</span> 효과적인 네이밍은 프로젝트의 가독성과 관리 효율성을 높이는 중요한 요소입니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">10. Mixin과 Extend</h3>
<p class="attr_p">Sass를 사용할 때, @extend와 @mixin은 스타일 규칙을 재사용하기 위한 두 가지 주요 방법이지만, 이 둘의 사용에 있어서는 다음의 지침을 따르는 것을 권장합니다.</p>
<ul class="attr_list a__list dot">
<li><b>CSS 전처리기가 지원하는 extend 문법은 가급적 사용하지 마세요:</b> @extend는 CSS 규칙을 다른 선택자에 적용할 수 있게 해주어 코드의 중복을 줄여주는 기능을 합니다. 하지만, 이것이 생성하는 CSS는 예측하기 어렵고, 관리하기 어려운 긴 체인을 만들 수 있습니다.</li>
<li><b>extend 대신 mixin으로 대체하세요:</b> @mixin은 스타일 블록을 정의하여 재사용할 수 있게 해주며, 필요에 따라 다른 값들을 인자로 전달할 수 있습니다. @mixin은 @extend보다 유연성이 뛰어나고, 생성되는 CSS의 구조를 더 잘 통제할 수 있게 해줍니다.</li>
</ul>
<p class="attr_p">Sass 사용에 있어서 @extend와 @mixin를 적절하게 사용하는 것은 중요합니다. @extend의 사용은 특정한 상황에서만 사용을 고려하고, 대부분의 경우에는 @mixin이 더 나은 선택이 될 수 있으며, 코드의 명확성과 유지보수성을 향상시키는 데 도움이 됩니다.</p>
<p class="attr_p">더 자세한 내용과 가이드라인은 다음의 Sass 가이드라인과 CSS Wizardry의 글을 참고하시기 바랍니다.</p>
<ul class="attr_list a__list dot">
<li>Sass 가이드라인: <a href="https://sass-guidelin.es/ko/#extend" target="_blank" data-target="external">https://sass-guidelin.es/ko/#extend</a></li>
<li>CSS Wizardry에서의 @extend와 @mixin 사용 가이드: <a href="https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/" target="_blank" data-target="external">https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/</a></li>
</ul>
<p class="attr_p">이런 가이드라인을 따름으로써, 보다 깔끔하고 관리하기 쉬운 CSS 코드를 작성할 수 있으며, CSS 전처리기의 기능을 최대한 활용하되, 코드의 복잡성을 증가시키지 않는 방향으로 사용하는 것이 중요합니다.</p>
</div>
</section>`;
