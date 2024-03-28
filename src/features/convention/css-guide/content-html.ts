export const contentHtml = `<section class="section__convention-guide">
<p>
  CSS 코드를 깔끔하고 효율적으로 작성하는 것은 웹 개발에서 중요한 부분을 차지합니다. 여기 몇 가지 기본적인
  규칙들을 정리해 보았습니다.
</p>
<div>
  <h3>1. 기본 규칙</h3>
  <ul>
    <li>
      <b>들여쓰기는 2개의 공백 문자(소프트탭)을 사용하세요:</b> 이는 코드를 더 읽기 쉽게 만듭니다. 만약 다른
      규칙을 사용한다면, 그 규칙에 따라 일관성 있게 작성하는 것이 중요합니다.
    </li>
    <li>
      <b>프로퍼티는 한 줄에 하나씩 작성하세요:</b> 이 방식 역시 코드의 가독성을 높여줍니다. 프로퍼티를 작성할
      때에는 다른 규칙으로 통일하여 작성해도 괜찮습니다. 또한 프로퍼티는 영문 소문자로 작성하는 것이 좋습니다.
      이는 일반적인 규칙으로 널리 받아들여지고 있는 규칙입니다.
    </li>
    <li>
      <b>가능한 따옴표를 생략하세요:</b> 가능한 한 따옴표를 생략하는 것이 가장 좋습니다. 따옴표를 사용해야 하는
      경우, 일반적으로 작은 따옴표(')를 사용하는 것이 좋고, <b>@charset 선언</b>과 <b>타입 선택자</b>에는 큰
      따옴표(")를 사용해야 합니다.
    </li>
  </ul>
  <p>
    이런 기본 규칙들을 따르면, CSS 코드를 더 깔끔하고 효율적으로 관리할 수 있습니다. 코드의 가독성과 유지 보수성을
    높이는 것은 웹 개발의 중요한 부분이므로, 이러한 규칙들을 잘 숙지하고 적용해 보시기 바랍니다.
  </p>
</div>
<div>
  <h3>2. Charset</h3>
  <p>
    웹 페이지나 문서를 작성할 때, 문자 인코딩은 매우 중요한 부분입니다. 여기에 해당하는 간단하지만 중요한 규칙이
    있습니다.
  </p>
  <p>
    <span>문서의 언어셋은 UTF-8로 최상위에 선언하세요.</span> 이는 국제적으로 가장 널리
    사용되는 인코딩 방식이며, 다양한 언어와 특수 문자를 지원합니다. 이 규칙은 웹 페이지가 다양한 언어의 텍스트를
    정확하게 표시할 수 있도록 보장합니다.
  </p>
  <p>다음은 언어셋을 선언하는 방법입니다:</p>
  <div>
    <pre data-lang="css">@charset "UTF-8";</pre>
  </div>
  <p>
    만약 문서가 이미 언어셋이 정해진 번들링 파일로 제공된다면, 별도로 선언할 필요가 없습니다. 이는 파일이 이미
    적절한 인코딩을 가지고 있다는 것을 의미합니다.
  </p>
  <p>
    <b>UTF-8</b> 인코딩을 사용함으로써, 웹 개발자는 전 세계 사용자들이 자신의 웹 사이트나
    <span data-spell="application">애플리케이션</span>을 원활하게 이용할 수 있도록 할 수 있습니다. 이는 국제적인
    웹 표준을 따르면서, 사용자 경험을 크게 향상시키는 방법 중 하나입니다.
  </p>
</div>
<div>
  <h3>3. Selectors</h3>
  <p>
    CSS 선택자를 사용할 때는 몇 가지 중요한 점을 기억해야 합니다. 이러한 원칙들은 깔끔하고 효율적인 스타일 시트를
    작성하는 데 도움이 됩니다.
  </p>
  <ul>
    <li>
      <b>선택자는 가급적 중첩하지 마세요:</b> 선택자의 중첩을 최소화함으로써, 나중에 추가적인 코드가 필요한 경우를
      줄일 수 있습니다. 이는 또한 구성 요소의 명확성을 강화하고, 스타일의 영향 범위를 제한하는 데 도움이 됩니다.
    </li>
    <li>
      <b>렌더링 성능 최적화를 위해 클래스, 가상 선택자 외의 선택자는 사용을 피하세요:</b> 너무 복잡한 선택자는
      렌더링 성능에 부정적인 영향을 줄 수 있습니다.
    </li>
    <li>
      <b>너무 많은 캐스케이딩 스타일을 가진 시스템을 구축하는 것은 해로울 수 있습니다:</b> 이는 코드의 복잡성을
      증가시키고, 유지보수를 어렵게 만들 수 있습니다.
    </li>
  </ul>
  <p>다음은 나쁜 예와 좋은 예를 보여주는 예시입니다:</p>
  <div>
    <pre data-lang="html">    &lt;div class="modal"&gt;
&lt;div class="modal-header"&gt;
  &lt;h3&gt;모달 제목&lt;/h3&gt;
&lt;/div&gt;
&lt;div class="modal-body"&gt;
  &lt;h3&gt;모달 부제목&lt;/h3&gt;
  &lt;p&gt;모달에 대한 내용, 추가 텍스트 및 폼 등이 여기에 들어갑니다.&lt;/p&gt;
&lt;/div&gt;
&lt;div class="modal-footer"&gt;
  &lt;button class="btn"&gt;완료&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;</pre>
  </div>
  <div>
    <pre data-lang="css">/* Bad */
.modal h3 {
text-align: center;
}

.modal .modal-header h3 {
text-align: left;
}

/* Good */
.modal-header h3 {
text-align: center;
}</pre>
  </div>
  <p>
    참고:
    <a href="https://markdotto.com/2012/03/02/stop-the-cascade/" target="_blank" data-target="external">https://markdotto.com/2012/03/02/stop-the-cascade/</a>
  </p>
</div>
<div>
  <h3>4. z-index</h3>
  <p>
    CSS에서 <code>z-index</code>를 관리하는 방법은 웹 페이지의 다양한 요소들 사이의 시각적 계층을 결정하는 데
    중요한 역할을 합니다. 잘 관리되지 않은 <code>z-index</code> 값은 요소들의 렌더링 순서를 혼란스럽게 만들 수
    있습니다. 따라서, <code>z-index</code>를 체계적으로 관리하는 것이 중요한데, 여기에 몇 가지 팁과 방법을
    소개합니다.
  </p>
  <p>
    <span>CSS 전처리기의 믹스인을 활용하여 <code>z-index</code> 스택을 체계적으로 관리할 수 있습니다.</span>
    이 방법을 통해 코드를 간결하게 유지하면서도, 필요한 <code>z-index</code> 값을 쉽게 조정할 수 있습니다.
  </p>
  <p>참고로, SCSS에서는 다음과 같이 사용할 수 있습니다:</p>
  <div>
    <pre data-lang="scss">    // 이 코드는 .foo 클래스에 z-index: 203000을 적용합니다.
.foo {
position: absolute;
@include layer-index('floating', 3000);
}</pre>
  </div>
  <p>다음은 <code>z-index</code>를 활용하여 구분할 수 있는 엘리먼트 층의 예시입니다.</p>
  <dl>
    <dt>1. Normal</dt>
    <dd>평범한 엘리먼트입니다.</dd>
    <dd>Value: -1 ~ 99999</dd>
    <dt>2. Inline-popover</dt>
    <dd>마우스 오버 또는 클릭 등의 이벤트로 특정 상황에서 상위에 노출되어야 하는 엘리먼트입니다.</dd>
    <dd>Preset Value: 10 ~ 19</dd>
    <dd>Value Range: 1000000 ~ 1999999</dd>
    <dt>3. Floating</dt>
    <dd>플로팅 레이어는 항상 상위에 떠있어야 하기 때문에, <b>Inline-popover</b> 보다 높은 범위를 적용합니다.</dd>
    <dd>Preset Value: 20 ~ 29</dd>
    <dd>Value: 2000000 ~ 2999999</dd>
    <dt>4. Dialog</dt>
    <dd>다이얼로그는 본문보다 위에 노출되어야 하기 때문에, <b>Floating</b> 보다 높은 범위를 적용합니다.</dd>
    <dd>Preset Value: 30 ~ 39</dd>
    <dd>Value: 3000000 ~ 3999999</dd>
    <dt>5. Popover</dt>
    <dd>
      이벤트 트리거링으로 상위에 노출되어야 하는 엘리먼트 층으로, <code>position: fixed;</code>이거나
      <code>&lt;body&gt;</code>의 자식으로 존재하는 경우 사용합니다.
    </dd>
    <dd>Preset Value: 40 ~ 49</dd>
    <dd>Value: 4000000 ~ 4999999</dd>
    <dt>6. Toast</dt>
    <dd>토스트는 사용자가 확인할 수 있도록 항상 페이지의 최상위에 노출되어야 하는 엘리먼트입니다.</dd>
    <dd>Preset Value: 50 ~ 59</dd>
    <dd>Value: 5000000 ~ 5999999</dd>
    <dt>7. Super</dt>
    <dd>무조건 최상위에 노출되어야 하는 엘리먼트 층으로, 정말 필요할 때만 사용하는 특수 레이어 층입니다.</dd>
    <dd>Preset Value: 60 ~ 69</dd>
    <dd>Value: 6000000 ~ 6999999</dd>
    <dt>8. Skip</dt>
    <dd>스킵 네비게이션은 어디서든 접근 가능해야 하므로 다른 레이어에 절대 가려지지 않아야 합니다.</dd>
    <dd>Preset Value: 70 ~ 79</dd>
    <dd>Value: 7000000 ~ 7999999</dd>
  </dl>
  <p>
    이런 분류는 요소들의 시각적 계층을 명확히 구분하는 데 도움이 되며, 각 요소의 특성에 맞는
    <code>z-index</code> 값을 할당함으로써, 웹 페이지의 시각적 구성을 보다 효과적으로 관리할 수 있습니다. 이
    방법을 통해, 요소들 사이의 상호작용을 명확하게 하고, 사용자 경험을 개선할 수 있습니다.
  </p>
</div>
<div>
  <h3>5. Import</h3>
  <p>
    CSS에서 스타일시트를 로드하는 방법은 웹 페이지의 로딩 속도와 직접적으로 연관이 있습니다. CSS의
    <import@code>@import 문법은 성능 문제를 가지고 있으므로, 절대 사용하지 마세요!] 이 규칙은 웹 페이지의 로딩 시간을
      최적화하는 데 중요한 영향을 미칩니다. [</import@code>를 사용하는 것보다 더 나은 다른 방법들을 고려하세요.
  </p>
  <p>다음은 CSS를 효율적으로 로드하는 몇 가지 권장되는 방법입니다:</p>
  <ul>
    <li>
      <b>여러 개의 &lt;link&gt; 엘리먼트로 작성하기:</b> 이 방식은 각 스타일시트가 병렬로 로드되게 하여 로딩
      시간을 단축할 수 있습니다.
    </li>
    <li>
      <b>하나의 CSS 파일로 작성하기:</b> 모든 스타일시트를 하나의 파일로 병합하여 요청 수를 줄이는 것이 좋습니다.
      이는 서버와 클라이언트 간의 통신 부담을 줄여줍니다.
    </li>
    <li>
      <b>CSS 전처리기의 import 문법 사용하기:</b> CSS 전처리기를 사용하면, 개발 시에는 여러 파일로 작업할 수
      있지만, 최종적으로는 하나의 파일로 병합하여 배포할 수 있습니다.
    </li>
    <li>
      <b>번들러 등의 도구를 이용하여 하나의 CSS 파일로 병합하기:</b>
      <span data-spell-viewer="Webpack">웹팩</span>이나 <span data-spell-viewer="Gulp">걸프</span> 같은 도구를
      사용하여 개발 과정에서 여러 CSS 파일을 하나로 병합할 수 있습니다.
    </li>
  </ul>
  <h4>Bad Case</h4>
  <div>
    <pre data-lang="html">    &lt;!-- Too Bad --&gt;
&lt;style&gt;
@import url("style1.css");
@import url("style2.css");
@import url("style3.css");
&lt;/style&gt;</pre>
  </div>
  <h4>Good Case</h4>
  <div>
    <pre data-lang="html">    &lt;!-- Good --&gt;
&lt;!-- 각 파일이 병렬로 로드되어 성능이 개선됩니다. --&gt;
&lt;link rel="stylesheet" href="style1.css"&gt;
&lt;link rel="stylesheet" href="style2.css"&gt;
&lt;link rel="stylesheet" href="style3.css"&gt;

&lt;!-- Very Nice --&gt;
&lt;!-- 모든 CSS를 하나의 요청으로 로드하여 성능을 최적화합니다. --&gt;
&lt;link rel="stylesheet" href="bundle.css"&gt;</pre>
  </div>
  <p>
    <span>스타일시트를 효율적으로 관리하고 로드하는 것은 웹 사이트의 성능을 크게 향상시킬 수 있습니다.</span>
    가능한 방법을 적절히 활용하여 사용자의 웹 사이트 경험을 개선해 보시기 바랍니다.
  </p>
</div>
<div>
  <h3>6. Media Query</h3>
  <p>
    미디어 쿼리를 사용하는 것은 웹사이트의 반응형 디자인을 구현하는 데 중요한 역할을 합니다. 다음은 미디어 쿼리를
    효과적으로 관리하는 방법에 대한 몇 가지 권장 사항입니다.
  </p>
  <p>
    <span>미디어 쿼리는 컴포넌트 단위로 분류하여 관련 규칙 바로 뒤에 작성하세요.</span> 이
    방법을 사용하면, 관련 스타일 규칙이 한 곳에 모이게 되어, 코드의 가독성이 크게 향상됩니다. 이는 개발자가 각
    컴포넌트의 스타일을 더 쉽게 찾고 이해할 수 있게 해줍니다.
  </p>
  <p>
    예를 들어, <code>.foo-a</code>와 <code>.foo-b</code> 클래스에 대한 스타일이 있고, 이들에 대한 미디어 쿼리
    규칙을 추가하려고 한다면, 각 컴포넌트의 스타일 정의 바로 뒤에 미디어 쿼리를 위치시키는 것이 좋습니다:
  </p>
  <div>
    <pre data-lang="css">.foo-a {}
.foo-b {}
@media (min-width: 768px) {
.foo-a {}
.foo-b {}
}

.bar {}</pre>
  </div>
  <p>
    만약 이 방법이 어렵거나, 특정 사정으로 불가능하다면,
    <span>문서의 마지막에 모든 미디어 쿼리를 모아서 작성하는 것도 하나의 방법입니다.</span>
    이렇게 하면 모든 반응형 디자인 관련 스타일이 한 곳에 모이게 되어, 관리하기가 더 용이해집니다.
  </p>
  <div>
    <pre data-lang="css">.foo-a {}
.foo-b {}

.bar {}

@media (min-width: 768px) {
.foo-a {}
.foo-b {}
}</pre>
  </div>
  <p>
    이러한 접근 방식은 미디어 쿼리를 활용하여 웹사이트의 반응형 디자인을 더 효과적으로 구현할 수 있도록 도와주는
    방법으로, 코드의 구조를 명확하게 하고, 관리를 용이하게 하는 것은 웹 개발에서 매우 중요한 요소입니다. 이를 통해
    웹사이트의 유지보수가 용이해지고, 다양한 화면 크기와 디바이스에 대응하는 능력이 향상될 수 있습니다.
  </p>
</div>
<div>
  <h3>7. Nesting</h3>
  <p>
    중첩은 매우 유용하지만, 이를 사용함에 있어 주의가 필요합니다.
    <span>너무 많은 선택자의 중첩은 피해야 하는데, 이는 코드의 복잡성을 증가시키고, 컴파일된 CSS가 비효율적이고
      관리하기 어려운 형태로 변할 수 있기 때문입니다.</span>
    선택자의 중첩을 피하는 것은 코드의 가독성과 유지보수성을 높이는 데 중요한 역할을 합니다.
  </p>
  <p>다음은 선택자 중첩의 나쁜 예와 좋은 예를 보여줍니다:</p>
  <div>
    <pre data-lang="css">/* Bad */
.foo.bar {
color: #abc;
}

/* Good */
.foo__bar {
color: #abc;
}</pre>
  </div>
  <p>
    이 예에서는 BEM(Block, Element, Modifier) 방법론과 같은 명명 규칙을 사용하여 <code>.foo</code>와
    <code>.bar</code>를 하나의 클래스로 결합했습니다. 이 방법은 중첩을 피하면서도, 관련 요소 간의 관계를 명확하게
    표현할 수 있게 해줍니다.
  </p>
</div>
<div>
  <h3>8. Reset</h3>
  <p>
    CSS를 작성할 때 초기화 스타일의 설정은 웹 개발의 기본이지만 중요한 단계입니다. 초기화 스타일은 브라우저 간의
    일관성을 유지하고, 예상치 못한 스타일링 문제를 방지하기 위해 사용됩니다. 그러나 초기화 방법을 선택할 때는 몇
    가지 고려해야 할 사항이 있습니다.
  </p>
  <ul>
    <li>
      <b>초기화 스타일은 서비스에 맞게 정의하세요:</b> 이는 각 프로젝트의 요구 사항과 사용되는 기술 스택에 따라
      달라질 수 있으며, 가장 적합한 초기화 방식을 선택하는 것이 중요합니다. 예를 들어, 사이트의 디자인이 복잡하고
      많은 커스텀 스타일을 포함한다면, 더 세밀한 초기화가 필요할 수 있습니다.
    </li>
    <li>
      <b>normalize.css 또는 Bootstrap 등의 프레임워크를 사용한다면 초기화를 생략하세요:</b> 이러한 프레임워크들은
      이미 일반적인 초기화 스타일을 포함하고 있어서 별도로 초기화 스타일을 정의할 필요가 없습니다.
    </li>
  </ul>
  <p>
    <span>초기화 스타일은 웹 개발의 첫걸음으로, 일관된 스타일링과 예상 가능한 레이아웃을 보장하는 데
      필수적입니다.</span>
    프로젝트를 시작하기 전에 적절한 초기화를 선택하고 적용하는 것이 중요합니다.
  </p>
</div>
<div>
  <h3>9. Vendor Prefix</h3>
  <p>
    CSS를 작성할 때, <span data-spell-viewer="vendor prefixes">벤더 프리픽스</span>를 사용하는 것은 브라우저
    호환성을 확보하기 위한 중요한 방법으로, 이 프리픽스들은 특정 브라우저에서만 사용되는 CSS 속성에 대해, 그
    속성이 완전히 표준화되기 전에 실험적으로 사용될 수 있게 해줍니다. 그렇지만 이를 사용함에 있어서 주의해야 할
    부분도 있습니다.
  </p>
  <p>
    <span>벤더 프리픽스 프로퍼티는 일반 프로퍼티보다 먼저 선언해야 합니다.</span> 이 규칙은
    CSS의 선언 순서에 관한 것으로, 브라우저가 해당 속성을 지원하는 경우 표준 속성을 사용하도록 보장합니다.
  </p>
  <p>다음은 벤더 프리픽스의 사용에 있어 좋지 않은 예와 좋은 예입니다:</p>
  <div>
    <pre data-lang="css">/* Bad */
.foo {
box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
}

/* Good */
.foo {
-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
}</pre>
  </div>
  <p>
    예시와 같이 -webkit-box-shadow가 먼저 선언되고, 이어서 표준 box-shadow 속성이 선언되어야 합니다. 이런 구조는
    브라우저가 표준 속성을 우선적으로 사용하도록 하며, 필요한 경우에만 벤더 프리픽스를 활용하게 하는 방법으로, 웹
    사이트가 다양한 환경에서 일관된 사용자 경험을 제공할 수 있도록 할 수 있습니다.
  </p>
</div>
<div>
  <h3>10. Naming</h3>
  <p>
    CSS에서 네이밍 규칙을 잘 정의하고 사용하는 것은 프로젝트의 <b>유지보수성, 확장성, 그리고 가독성</b>을 크게
    향상시킬 수 있습니다. 이와 관련하여, <b>BEM(Block, Element, Modifier)</b>과
    <b>ITCSS(Inverted Triangle CSS)</b>를 결합한 <b>BEMIT 방법론</b>은 강력한 네이밍 전략이 될 수 있습니다.
  </p>
  <p>다음은 강력한 네이밍 전략을 위한 몇 가지 유의사항입니다:</p>
  <ul>
    <li>
      <b>스타일 제어를 위해 아이디 선택자의 사용을 피하세요:</b> 아이디 선택자는 스펙이피시티(specificity) 문제를
      야기할 수 있으며, 재사용성이 떨어집니다.
    </li>
    <li>
      <b>클래스명은 반드시 엘리먼트의 의미를 전부 담아서 네이밍하세요:</b> 이는 해당 클래스가 어떤 목적을 가지고
      있는지 명확하게 표현해야 함을 의미합니다.
    </li>
    <li>
      <b>클래스명은 페이지에 상속받지 않으며, 디자인보다는 구조, 기능, 목적을 나타내는 이름으로 네이밍해야
        합니다.:</b>
      이는 클래스명을 통해 해당 스타일의 목적이나 역할을 쉽게 이해할 수 있도록 돕습니다.
    </li>
  </ul>
  <h4>BEM 네이밍 규칙</h4>
  <p>BEM 방법론에 따른 기본 네이밍 규칙은 다음과 같습니다:</p>
  <ul>
    <li><b>Syntax:</b> &lt;BLOCK&gt;[__&lt;ELEMENT&gt;][--&lt;MODIFIER&gt;][.is|has-&lt;STATE&gt;]</li>
    <li><b>BLOCK:</b> 독립적인 구성요소를 나타냅니다.</li>
    <li><b>ELEMENT:</b> BLOCK 내부의 구성요소를 나타냅니다.(__, Double Underbar를 사용하여 BLOCK과 연결)</li>
    <li><b>MODIFIER:</b> BLOCK 또는 ELEMENT의 변형을 나타냅니다. (--, Double Hyphen을 사용하여 연결)</li>
    <li>
      <b>STATE:</b> 상태 클래스는 modifier에서 분리하여 따로 관리합니다. (.is- 또는 .has-를 사용하여 상태를 표현)
    </li>
  </ul>
  <p>예를 들어, 다음과 같은 HTML 구조와 CSS 네이밍을 구성할 수 있습니다:</p>
  <div>
    <pre data-lang="html">    &lt;div class="widget"&gt;
&lt;div class="widget__wrapper widget__wrapper--dark"&gt;
  &lt;input class="input" type="text" aria-label="Text Field"&gt;
  &lt;button class="btn" type="reset"&gt;Reset&lt;/button&gt;
  &lt;button class="btn btn--submit is-disabled" type="submit" disabled&gt;Submit&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;</pre>
  </div>
  <p>여기서 사용된 클래스명은 다음과 같은 구조를 가집니다:</p>
  <ul>
    <li><code>.widget</code>는 BLOCK을 나타냅니다.</li>
    <li><code>.widget__wrapper</code>는 <b>BLOCK</b> 내부의 <b>ELEMENT</b>를 나타냅니다.</li>
    <li><code>.widget__wrapper--dark</code>는 <b>ELEMENT</b>의 <b>MODIFIER</b>를 나타냅니다.</li>
    <li><code>.btn.is-disabled</code>는 <b>BLOCK</b>의 <b>STATE</b>를 나타냅니다.</li>
    <li><code>.btn--submit</code>은 <b>BLOCK</b>의 다른 <b>MODIFIER</b>를 나타냅니다.</li>
    <li>
      <code>.btn--submit.is-disabled</code>는 <b>MODIFIER</b>가 <b>특정 STATE</b>에 있는 <b>BLOCK</b>을
      나타냅니다.
    </li>
  </ul>
  <p>
    이렇게
    <span>BEMIT 방법론을 적용함으로써, CSS 클래스의 의도와 구조를 명확하게 표현할 수 있습니다.</span>
    이 접근 방식은 코드의 재사용성과 유지보수성을 높이며, 대규모 프로젝트에서도 효과적인 스타일 관리를 가능하게
    합니다.
  </p>
</div>
<div>
  <h3>참고 자료</h3>
  <ul>
    <li>
      choegyumin,
      <a href="https://github.com/choegyumin/markup-coding-conventions?tab=readme-ov-file" target="_blank" data-target="external" data-title="markup-coding-conventions">"markup-coding-conventions"</a>
    </li>
    <li>
      Naver,
      <a href="https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf" target="_blank" data-target="external" data-title="NHN Coding Convention">"NHN Coding Convention"</a>
    </li>
  </ul>
</div>
</section>`;
