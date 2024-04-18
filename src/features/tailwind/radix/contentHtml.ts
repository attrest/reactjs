export const contentHtml = `<section class="attr_section">
<div class="attr_div">
<h3 class="attr_title">Radix UI란?</h3>
<p class="attr_p attr_letter"><a href="https://www.radix-ui.com" target="_blank" data-target="external" data-title="Radix: Start building your app now" class="link-preview">Radix UI</a>는 일명 Headless UI 라이브러리라고 불리는 개발 툴로, 디자인 없이 기능만을 제공하는 라이브러리입니다. 이는 기능 없이 디자인만 제공하는 라이브러리들과는 반대되는 콘셉트를 가지고 있어 프론트엔드 개발의 패러다임을 달리하고 있습니다.</p>
<p class="attr_p">프론트엔드 개발자가 UI 컴포넌트를 구현할 때 필요한 재사용 가능성과 접근성을 제공하는 Radix UI Primitives는 접근성을 고려하여, 로우 레벨의 UI 프리미티브를 제공함으로써, 개발자가 자신만의 디자인 시스템을 손쉽게 구축할 수 있도록 지원합니다.</p>
<p class="attr_p">또한, Radix UI는 다양한 UI/UX 기능들을 높은 품질로 제공하며, 어떤 CSS 도구와도 통합할 수 있게 함으로써 개발자의 생산성을 크게 향상시키는 역할을 합니다. 이는 프론트엔드 개발에서 접근성과 재사용성을 중시하는 현대적 개발 방식에 매우 적합한 선택입니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">Radix UI의 주요 특징</h3>
<p class="attr_p">Radix UI는 프론트엔드 개발자에게 필수적인 다양한 기능을 제공하는 라이브러리입니다. 이는 사용자 경험과 개발자 경험 모두를 향상시키기 위해 설계되었습니다.</p>
<ul class="attr_list a__list number">
<li><b>접근성(Accessible):</b> <span class="set-check-note">Radix UI의 컴포넌트는 WAI-ARIA 설계 패턴을 준수하며, 접근성과 관련된 다양한 구현 세부사항을 자동으로 처리합니다.</span> 이는 <code>aria</code> 및 <code>role</code> 속성, 포커스 관리, 키보드 탐색 등을 포함합니다. 자세한 정보는 접근성 문서에서 확인할 수 있습니다.</li>
<li><b>비스타일(Unstyled):</b> <span class="set-check-note">제공되는 컴포넌트는 스타일 없이 제공되므로, 사용자는 스타일링을 완벽하게 제어할 수 있습니다.</span> 바닐라 CSS, CSS 프리프로세서, CSS-in-JS 라이브러리 등 다양한 스타일링 도구와 함께 사용이 가능합니다.</li>
<li><b>개방성(Opened):</b> <span class="set-check-note">Radix Primitives는 사용자 정의가 가능하도록 설계되었습니다.</span> 각 구성요소의 부분을 세부적으로 액세스할 수 있으며, 이를 통해 <code>event listeners</code>, <code>props</code>, <code>refs</code>를 추가할 수 있습니다.</li>
<li><b>제어 유연성(Uncontrolled):</b> <span class="set-check-note">구성 요소는 기본적으로 uncontrolled 상태로 제공되지만, 필요에 따라 controlled로도 운용할 수 있습니다.</span> 이를 통해 로컬 상태를 생성하지 않고도 원활하게 컴포넌트를 시작하고 실행할 수 있습니다.</li>
<li><b>개발자 경험(Developer Experience):</b> <span class="set-check-note">Radix Primitives는 최상의 개발자 경험을 제공하는 것을 목표로 합니다.</span> 모든 구성 요소가 유사한 API를 공유하며, asChild prop을 구현하여 사용자가 렌더링된 요소를 완전히 제어할 수 있습니다.</li>
<li><b>점진적 채택(Incremental Adoption):</b> <span class="set-check-note">각 primitive은 개별적으로 설치할 수 있으며, 점진적 채택을 용이하게 합니다.</span> 원시 요소는 독립적으로 버전화되어 있어, 점진적으로 적용하기에 이상적입니다.</li>
</ul>
</div>
<div class="attr_div">
<h3 class="attr_title">Radix UI 설치 방법</h3>
<p class="attr_p">Radix UI는 프론트엔드 개발에 필수적인 라이브러리 중 하나로, 설치 과정은 매우 간단합니다. 다음 안내에 따라 Radix UI를 설치하실 수 있습니다.</p>
<h4 class="attr_title">1. 기본 설치 방법</h4>
<p class="attr_p">Radix UI의 <a href="https://www.radix-ui.com/docs/primitives/overview/getting-started" target="_blank" data-target="external" data-title="공식 문서">공식 문서</a>에는 자세한 설치 방법이 제공되고 있습니다. 터미널 또는 명령 <span data-spell="prompt">프롬프트</span>에서 아래의 명령어를 입력하면 기본 패키지를 설치할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm install @radix-ui/react</pre>
</div>
<h4 class="attr_title">2. 개별 UI 컴포넌트 설치</h4>
<p class="attr_p">프로젝트에 특정 UI 컴포넌트만 필요한 경우, 개별 컴포넌트를 선택하여 설치할 수 있습니다. 다음과 같이 필요한 컴포넌트를 선택하여 설치하세요.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tooltip</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">Radix UI를 이용한 드롭다운 메뉴 구현</h3>
<p class="attr_p">Radix UI는 다양한 UI 컴포넌트를 제공하는 라이브러리 중 하나로, 특히 드롭다운 메뉴 구성 요소의 구현을 매우 간단하게 할 수 있습니다. 아래의 절차를 따라 간단한 드롭다운 메뉴를 만드는 방법을 배울 수 있습니다.</p>
<h4 class="attr_title">1. 컴포넌트 가져오기</h4>
<p class="attr_p">먼저, <code>@radix-ui/react-dropdown-menu</code> 패키지를 설치한 후 필요한 컴포넌트를 React 프로젝트로 가져옵니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";</pre>
</div>
<h5 class="attr_title">드롭다운 메뉴의 기본 구조</h5>
<p class="attr_p"><code>DropdownMenu.Root</code>는 드롭다운 메뉴의 가장 기본이 되는 구성 요소입니다. 이 안에서 드롭다운 메뉴의 전체 구조를 정의합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
function App() {
  return (
    &lt;div&gt;
      &lt;DropdownMenu.Root&gt;
        &lt;DropdownMenu.Trigger&gt;
          &lt;button&gt;Click Me&lt;/button&gt;
        &lt;/DropdownMenu.Trigger&gt;
        &lt;DropdownMenu.Content&gt;
          &lt;DropdownMenu.Group&gt;
            &lt;DropdownMenu.Item&gt;
              &lt;p&gt;New Tab&lt;/p&gt;
            &lt;/DropdownMenu.Item&gt;
            &lt;DropdownMenu.Group&gt;
              &lt;DropdownMenu.Item&gt;
                &lt;p&gt;More tools&lt;/p&gt;
              &lt;/DropdownMenu.Item&gt;
            &lt;/DropdownMenu.Group&gt;
          &lt;/DropdownMenu.Content&gt;
        &lt;/DropdownMenu.Root&gt;
      &lt;/div&gt;
    );
  }
export default App;</pre>
</div>
<h5 class="attr_title">드롭다운 트리거 설정</h5>
<p class="attr_p"><code>DropdownMenu.Trigger</code> 컴포넌트를 사용하여 사용자가 클릭할 수 있는 트리거를 정의합니다. 이 예제에서는 <b>'Click Me'</b>라는 텍스트가 있는 버튼이 사용됩니다.</p>
<h5 class="attr_title">드롭다운 콘텐츠 구성</h5>
<p class="attr_p"><code>DropdownMenu.Content</code> 내부에서는 <code>DropdownMenu.Group</code> 및 <code>DropdownMenu.Item</code>을 사용하여 드롭다운 메뉴의 내용을 구성합니다. 이 예제에는 <b>'New Tab'</b>과 <b>'More tools'</b>라는 두 가지 메뉴 옵션이 포함되어 있습니다.</p>
<h4 class="attr_title">2. 컴포넌트 스타일 지정하기</h4>
<p class="attr_p">Radix UI는 개발자가 컴포넌트의 스타일을 완벽하게 제어할 수 있는 유연성을 제공합니다. 스타일을 지정하지 않은 상태로 컴포넌트를 제공함으로써, CSS-in-JS 라이브러리나 기존 CSS를 사용하여 [원하는 대로 스타일을 적용]할 수 있습니다.</p>
<h5 class="attr_title">컴포넌트에 클래스 이름 추가</h5>
<p class="attr_p">다음 예제는 Radix UI 드롭다운 메뉴 컴포넌트에 <code>className</code>을 추가하여, 각 요소를 쉽게 스타일링할 수 있도록 합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function App() {
  return (
    &lt;div&gt;
      &lt;DropdownMenu.Root&gt;
        &lt;DropdownMenu.Trigger className="trigger"&gt;
          &lt;button className="button"&gt;Click Me&lt;/button&gt;
        &lt;/DropdownMenu.Trigger&gt;
        &lt;DropdownMenu.Content className="content"&gt;
          &lt;DropdownMenu.Group&gt;
            &lt;DropdownMenu.Item className="item"&gt;
              &lt;p&gt;New Tab&lt;/p&gt;
            &lt;/DropdownMenu.Item&gt;
          &lt;/DropdownMenu.Group&gt;
          &lt;DropdownMenu.Group&gt;
            &lt;DropdownMenu.Item className="item"&gt;
              &lt;p&gt;More tools&lt;/p&gt;
            &lt;/DropdownMenu.Item&gt;
          &lt;/DropdownMenu.Group&gt;
        &lt;/DropdownMenu.Content&gt;
      &lt;/DropdownMenu.Root&gt;
    &lt;/div&gt;
  );
}
export default App;</pre>
</div>
<h5 class="attr_title">CSS로 스타일 지정</h5>
<p class="attr_p">CSS를 사용하여 각 클래스에 스타일을 적용할 수 있습니다. 다음은 CSS 코드 예제입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
.button {
  padding: 0.7rem 0.8rem;
  border: none;
  border-radius: 12px;
  background-color: #333333;
  color: #f2f2f2;
}
.trigger {
  border: none;
}
.content {
  margin: 1rem;
  padding: 0.7rem;
  background-color: #FFFFFF;
  color: #333333;
  border-radius: 7px;
}
.item {
  padding: 1rem;
  cursor: pointer;
  border-radius: 7px;
  font-weight: bold;
}
.item:hover {
  background-color: #333333;
  color: lightgray;
}</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">Radix UI 아이콘 사용하기</h3>
<p class="attr_p">Radix UI는 React 프로젝트에서 사용할 수 있는 다양한 아이콘을 제공합니다. 이 아이콘들을 사용하면 <span data-spell="application">애플리케이션</span>의 사용자 인터페이스를 [효과적으로 꾸밀 수 있습니다]. 아이콘 패키지의 설치부터 사용까지의 과정을 아래에서 자세히 설명합니다.</p>
<h4 class="attr_title">1. 아이콘 패키지 설치</h4>
<p class="attr_p">먼저, 터미널이나 명령 <span data-spell="prompt">프롬프트</span>에서 아래의 명령어를 입력하여 Radix UI 아이콘 패키지를 설치합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm install @radix-ui/react-icons</pre>
</div>
<h4 class="attr_title">2. 아이콘 사용 설정</h4>
<p class="attr_p">패키지 설치 후, React 컴포넌트에서 아이콘을 가져와 사용할 수 있습니다. 예를 들어, 드롭다운 메뉴 내 버튼과 메뉴 항목에 아이콘을 추가하는 방법은 다음과 같습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon, PlusIcon } from "@radix-ui/react-icons";

function App() {
  return (
    &lt;div&gt;
      &lt;DropdownMenu.Root&gt;
        &lt;DropdownMenu.Trigger className="trigger"&gt;
          &lt;button className="button"&gt;
            &lt;HamburgerMenuIcon /&gt;
          &lt;/button&gt;
        &lt;/DropdownMenu.Trigger&gt;
        &lt;DropdownMenu.Content className="content"&gt;
          &lt;DropdownMenu.Group&gt;
            &lt;DropdownMenu.Item className="item"&gt;
              &lt;p&gt;New Tab&lt;/p&gt;
              &lt;PlusIcon /&gt;
            &lt;/DropdownMenu.Item&gt;
          &lt;/DropdownMenu.Group&gt;
          &lt;DropdownMenu.Group&gt;
            &lt;DropdownMenu.Item className="item"&gt;
              &lt;p&gt;More tools&lt;/p&gt;
            &lt;/DropdownMenu.Item&gt;
          &lt;/DropdownMenu.Group&gt;
        &lt;/DropdownMenu.Content&gt;
      &lt;/DropdownMenu.Root&gt;
    &lt;/div&gt;
  );
}
export default App;</pre>
</div>
<h4 class="attr_title">3. CSS로 아이콘 스타일 지정</h4>
<p class="attr_p">마지막으로, CSS를 사용하여 아이콘과 메뉴 항목에 스타일을 적용할 수 있습니다. 아래 CSS 코드는 <code>.item</code> 클래스에 대한 스타일을 설정하여 아이템을 시각적으로 개선합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
.item {
  padding: 1rem;
  cursor: pointer;
  border-radius: 7px;
  font-weight: bold;
  display: flex;
  gap: 1rem;
}</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">Radix UI 컴포넌트 구현 예제</h3>
<p class="attr_p">Radix UI는 사용자 인터페이스를 향상시킬 수 있는 다양한 컴포넌트를 제공합니다. 아래 예제들은 <b>Dialog</b>, <b>Tooltip</b>, <b>Tabs</b> 컴포넌트를 각각 구현하는 방법을 보여줍니다.</p>
<h4 class="attr_title">1. Dialog 컴포넌트</h4>
<p class="attr_p">Dialog 컴포넌트를 사용하면 사용자에게 모달 대화 상자를 제공할 수 있습니다. Radix UI의 <code>DialogPrimitive</code>를 사용하여 구현한 예는 다음과 같습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import * as DialogPrimitive from '@radix-ui/react-dialog';

export default function MyDialog() {
  return (
    &lt;DialogPrimitive.Root&gt;
      &lt;DialogPrimitive.Trigger&gt;Open Dialog&lt;/DialogPrimitive.Trigger&gt;
      &lt;DialogPrimitive.Content&gt;
        Hello, this is a dialog.
      &lt;/DialogPrimitive.Content&gt;
    &lt;/DialogPrimitive.Root&gt;
  );
}</pre>
</div>
<p class="attr_p"><code>DialogPrimitive.Root</code>는 대화 상자의 최상위 컴포넌트이며, <code>Trigger</code>는 대화 상자를 열기 위한 버튼, <code>Content</code>는 대화 상자 내용을 담는 컴포넌트입니다.</p>
<h4 class="attr_title">2. Tooltip 컴포넌트</h4>
<p class="attr_p">Tooltip은 사용자에게 추가 정보를 제공하는 데 사용됩니다. Radix UI의 <code>TooltipPrimitive</code>로 구현한 툴팁은 아래와 같습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export default function MyTooltip() {
  return (
    &lt;TooltipPrimitive.Root&gt;
      &lt;TooltipPrimitive.Trigger&gt;
        Hover over me
      &lt;/TooltipPrimitive.Trigger&gt;
      &lt;TooltipPrimitive.Content&gt;
        This is a tooltip!
      &lt;/TooltipPrimitive.Content&gt;
    &lt;/TooltipPrimitive.Root&gt;
  );
}</pre>
</div>
<p class="attr_p"><code>TooltipPrimitive.Root</code>는 툴팁의 루트 컴포넌트, <code>Trigger</code>는 툴팁을 활성화하는 요소, <code>Content</code>는 툴팁의 내용을 담습니다.</p>
<h4 class="attr_title">3. Tabs 컴포넌트</h4>
<p class="attr_p">Tabs 컴포넌트는 여러 섹션의 내용을 효과적으로 표시하는 데 사용됩니다. Radix UI의 <code>TabsPrimitive</code>로 구현한 탭 예제는 다음과 같습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import * as TabsPrimitive from '@radix-ui/react-tabs';

export default function MyTabs() {
  return (
    &lt;TabsPrimitive.Root defaultValue="tab1"&gt;
      &lt;TabsPrimitive.List&gt;
        &lt;TabsPrimitive.Trigger value="tab1"&gt;Tab 1&lt;/TabsPrimitive.Trigger&gt;
        &lt;TabsPrimitive.Trigger value="tab2"&gt;Tab 2&lt;/TabsPrimitive.Trigger&gt;
      &lt;/TabsPrimitive.List&gt;
      &lt;TabsPrimitive.Content value="tab1"&gt;
        Content for Tab 1
      &lt;/TabsPrimitive.Content&gt;
      &lt;TabsPrimitive.Content value="tab2"&gt;
        Content for Tab 2
      &lt;/TabsPrimitive.Content&gt;
    &lt;/TabsPrimitive.Root&gt;
  );
}</pre>
</div>
<p class="attr_p"><code>TabsPrimitive.Root</code>는 탭의 루트 컴포넌트이며, List는 탭 헤더를 담는 컨테이너, 각 <code>Trigger</code>는 개별 탭 헤더, <code>Content</code>는 각 탭의 내용을 담습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">고품질 React 애플리케이션 구축을 위한 Radix UI</h3>
<p class="attr_p">Radix UI는 React 개발자들에게 강력한 도구를 제공합니다. 이 도구를 통해 [개발자는 기본 UI 복잡성에 대해 걱정하지 않고 <span data-spell="application">애플리케이션</span> 기능에 집중할 수 있습니다]. Radix UI는 스타일이 지정되지 않은 낮은 수준의 접근 가능한 컴포넌트 집합을 제공함으로써, 사용자 친화적인 웹 인터페이스를 구축할 수 있도록 지원합니다.</p>
<h4 class="attr_title">Radix UI의 장점</h4>
<ul class="attr_list a__list number">
<li><b>접근성 강화:</b> Radix UI 컴포넌트는 WAI-ARIA 가이드라인을 준수하며, 접근성을 고려하여 설계되었습니다. 이는 모든 사용자가 <span data-spell="application">애플리케이션</span>을 효과적으로 사용할 수 있도록 보장합니다.</li>
<li><b>스타일 유연성:</b> Radix UI는 스타일이 지정되지 않은 컴포넌트를 제공하여, 개발자가 <span data-spell="application">애플리케이션</span>의 브랜드 및 디자인 요구사항에 맞게 완벽하게 스타일을 제어할 수 있도록 합니다. 이를 통해 개발자는 독창적이고 맞춤형 디자인을 손쉽게 구현할 수 있습니다.</li>
<li><b>개발 효율성 증대:</b> Radix UI를 사용하면 기존의 복잡한 UI 로직을 처리하는 부담에서 벗어나, 핵심 기능 개발에 더 많은 시간과 노력을 집중할 수 있습니다. 이는 개발 프로세스를 간소화하고, 프로젝트 완성 시간을 단축시키는 데 도움이 됩니다.</li>
<li><b>초보자부터 전문가까지:</b> 노련한 개발자뿐만 아니라 초보자도 Radix UI의 간단하고 직관적인 API를 통해 쉽게 고품질의 <span data-spell="application">애플리케이션</span>을 구축할 수 있습니다. 이는 학습 곡선을 완만하게 만들며, 다양한 개발 배경을 가진 개발자들이 빠르게 적응하고 활용할 수 있게 합니다.</li>
</ul>
<p class="attr_p">Radix UI를 사용하여 고품질의 React <span data-spell="application">애플리케이션</span>을 구축하는 것은 단순히 코드를 작성하는 것 이상의 가치를 제공합니다. 이는 애플리케이션의 사용성, 접근성 및 디자인 품질을 향상시켜, 최종 사용자에게 보다 만족스러운 경험을 제공하도록 돕습니다.</p>
</div>
</section>`;
