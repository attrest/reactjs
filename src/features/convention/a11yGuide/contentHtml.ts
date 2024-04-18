export const contentHtml = `<section class="attr_section">
<p class="attr_p">CSS를 활용하여 웹사이트와 앱의 접근성을 높이는 데 도움이 되는 팁들을 소개합니다. CSS를 사용함에 있어서 그 가능성은 무한하며, 다양한 속성들이 우리의 일을 용이하게 해주지만, 잘못 사용될 경우 사용자 경험을 저하시킬 수도 있습니다.</p>
<p class="attr_p">실제로, 아래와 같이 단 세 줄의 CSS 코드만으로도 웹사이트의 접근성을 크게 저해할 수 있는 만큼, 이런 문제를 회피하기 위해서라도 다양한 기술과 고려해야 할 사항들, 그리고 접근 방식에 대해 알아 둘 필요가 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
:focus {
  outline: 0;
}</pre>
</div>
<div class="attr_div">
<h3 class="attr_title">가독성 향상을 위한 텍스트 스타일링</h3>
<p class="attr_p">[오늘날의 웹 디자인은 이미지, 아이콘, 동영상과 같은 다양한 요소들이 중요하게 취급되지만, 대부분의 웹사이트에서는 여전히 텍스트가 주요 콘텐츠를 구성합니다.] 때문에 텍스트는 모든 기기에서 쉽게 읽히기 위해, 폰트 속성의 스타일링, 테스팅, 그리고 미세 조정이 중요하며, 이 과정에 상당한 시간이 소요되기도 합니다.</p>
<figure class="attr_figure">
<img class="attr_img" src="/img/a11y/writing-css-with-accessibility-in-mind-01.jpg" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite><a href="https://marvelapp.com/blog/body-text-small/" target="_blank">Marvel, 사용자가 화면에서 떨어진 거리에 따라 글꼴 크기는 확대되어야 합니다.</a></cite></figcaption>
</figure>
<h4 class="attr_title">글꼴 크기의 변화</h4>
<p class="attr_p">과거에는 <b>12px</b>이 본문 텍스트의 표준 글꼴 크기였지만, 해상도가 높아진 기기들의 등장으로 평균 글꼴 크기가 15px~18px 정도로 커졌습니다. 최근에는 글꼴 크기가 <b>20px</b> 이상으로 증가하는 경향이 있는데, 이는 사용자 경험에 있어 긍정적인 변화로, 텍스트는 스마트폰에서는 충분히 커야 하며, TV 같은 큰 화면에서도 멀리서 읽을 수 있는 정도의 사이즈여야 합니다. 따라서 화면 크기에 따라 글꼴 크기를 조정하는 것이 중요합니다.</p>
<p class="attr_p">또한 서체의 다양성을 고려할 때, 표준적인 최소 크기를 설정하기 어렵지만, 일반적으로 작은 화면에서는 <b>18px~20px</b> 정도가 적당하며, 이 정도 사이즈의 텍스트로 작성되었을 때, 사용자가 어떤 환경에서든 콘텐츠를 쉽게 읽을 수 있고, 전반적인 웹 접근성과 사용자 경험이 향상되었다고 합니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">텍스트 가독성을 위한 라인 높이 조정</h3>
<p class="attr_p">[웹에서 텍스트를 읽을 때, 라인 높이(줄 간격)는 중요한 요소 중 하나로, 브라우저의 기본 설정은 대략 1.2로 설정되어 있지만, 웹 콘텐츠 접근성에 따르면, 문단 내 라인 높이는 최소 1.5로 권장된다고 합니다.]</p>
<figure class="attr_figure">
<img class="attr_img" src="/img/a11y/writing-css-with-accessibility-in-mind-02.jpg" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite>Manuel Matuzovic, medium</cite></figcaption>
</figure>
<p class="attr_p">위 이미지와 같이 라인 높이를 조정함으로써, 텍스트 블록 내의 문단은 더욱 읽기 쉬워지고 시각적으로 매력적인 콘텐츠가 되는데, 적절한 줄 간격은 텍스트를 눈에 더 잘 띄게 하고, 정보의 소화를 돕기 때문입니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">텍스트 정렬의 영향</h3>
<p class="attr_p"><code>양쪽 정렬된 텍스트가 시각적으로 매력적으로 보일 수 있다는 의견이 있지만, 양쪽 정렬은 나쁜 관행으로 간주될 수 있습니다.] 그 이유는 [text-align: justify</code> 속성이 줄마다 같은 길이를 만들기 위해 단어 사이의 간격을 조정하기 때문입니다. 이로 인해 발생하는 불균일한 공백은 가독성을 저하시키고 산만함을 유발할 수 있습니다.</p>
<figure class="attr_figure">
<img class="attr_img" src="/img/a11y/writing-css-with-accessibility-in-mind-03.jpg" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite>Manuel Matuzovic, 양쪽 정렬된 텍스트의 불규칙한 단어 간격과 hypens 속성</cite></figcaption>
</figure>
<p class="attr_p">가독성을 향상시키기 위해 hyphens 속성으로 단어를 구분하는 방법도 있지만, CSS에서 지정할 수 있는 <code>hyphens: auto</code> 속성은 모든 언어와 브라우저에서 잘 지원되지 않으며, 예상대로 작동하지 않을 수 있다는 한계가 있습니다. 따라서, 텍스트를 왼쪽 또는 오른쪽으로 정렬하는 것이 더 권장되는 방식이며, 이는 불균일한 단어 간격 문제를 방지하고, 텍스트의 가독성을 높이는 데 도움이 됩니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">문단 너비 최적화</h3>
<p class="attr_p"><b>디자인 전문가들은 문단 내 줄당 45에서 85자 사이를 유지하는 것이 좋다고 권장합니다.] 이 중 [이상적인 문단 너비는 약 65자</b>로 여겨지며, 이런 길이는 <b>독자가 텍스트를 읽을 때 최적의 가독성</b>을 제공한다고 합니다.</p>
<p class="attr_p">이를 위해, 텍스트 블록의 너비를 조절할 때는 <code>ch</code> 단위를 사용하는 것이 유용합니다. [1ch는 숫자 '0'의 너비와 동일하며, font-family나 font-size가 변경될 때 자동으로 조정됩니다.] 예를 들어, 최대 너비를 65자로 설정하려면 다음과 같이 CSS에서 설정할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
p {
  /* 최대 너비 65자 */
  max-width: 65ch;
}</pre>
</div>
<p class="attr_p">[반응형 타이포그래피 기술을 사용할 경우에는, 매우 큰 화면에서도 콘텐츠가 제대로 보이는지 테스트해야 합니다.] 글꼴 크기에 제한을 두지 않으면, 특정 뷰포트 크기에서는 텍스트의 가독성이 떨어질 수 있습니다. 반응형 타이포그래피 설정에 대한 자세한 내용이나 제한을 두는 방법에 익숙하지 않다면, Mike Riethmuller의 반응형 타이포그래피에 대한 정밀한 제어에 관한 글을 참고하시기 바랍니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">가상 요소로 콘텐츠를 추가할 때 고려사항</h3>
<p class="attr_p">CSS의 <code>::before</code>와 <code>::after</code> 가상 요소를 사용하면, 웹 페이지 요소의 앞이나 뒤에 디자인 요소를 추가할 수 있는 유용하고 일반적인 방법을 제공합니다. 이는 특히, 디자인 변경이 필요할 때 CSS만으로 간단히 수정할 수 있게 해주는 편리한 속성입니다.</p>
<p class="attr_p">그렇지만, 가상 요소의 content 속성을 이용해 실제 내용을 추가하는 것에 대해서는 신중해야 합니다. [관심사의 분리 원칙에 따라, 웹 페이지의 내용은 HTML 파일, 데이터베이스, 또는 API를 통해 제공되어야 하며, CSS를 통해 제공되어서는 안 됩니다.] 예를 들어, 아래와 같이 사용하는 것은 권장되지 않습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
h2::before {
  content: "DON'T DO THIS";
}</pre>
</div>
<p class="attr_p">가상 요소의 <code>content</code> 속성을 통해 폰트 아이콘이나 특수 문자와 같은 비텍스트 콘텐츠를 추가할 경우, 일부 스크린 리더는 이렇게 생성된 콘텐츠를 인식하고 설명할 수 있다는 점을 명심해야 합니다. 생성된 콘텐츠가 단순히 시각적 목적을 위한 것이라면, 보조 기술에서는 이를 숨겨야 하며, 이런 경우, <code>aria-hidden</code> 속성을 사용하여 접근성을 고려한 설계를 할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="html">
&lt;span class="icon icon-key" aria-hidden="true"&gt;&lt;/span&gt;</pre>
</div>
<p class="attr_p">이런 접근은 웹 페이지의 접근성을 향상시키는 동시에, 디자인과 콘텐츠 관리를 더욱 명확하게 분리하는 데 도움이 됩니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">인쇄 가능한 웹 페이지</h3>
<p class="attr_p">우리는 디지털 시대에 살고 있지만, 사람들은 여전히 문서를 인쇄하거나 PDF로 저장하는 등, 화면 외의 매체를 사용합니다. 이에 따라, 웹 페이지가 인쇄될 때도 접근성이 좋고 사용하기 쉽도록 해야 하며, 디지털 콘텐츠의 인쇄 가능성을 고려하는 것은 디자인 과정에서 중요한 부분입니다.</p>
<h4 class="attr_title">@media 블록을 사용한 인쇄 최적화</h4>
<p class="attr_p">CSS의 <code>@media print</code> 블록을 사용하면, 네비게이션 메뉴나 광고 처럼 인쇄 시에는 불필요하거나 의미가 없는 요소를 숨기거나 조정할 수 있습니다. 이런 방식은 인쇄물이나 PDF 저장 시 웹 페이지의 핵심 콘텐츠를 강조하고 사용자 경험을 향상시키는 데 도움이 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
@media print {
  .header {
    position: static;
  }
  nav {
    display: none;
  }
}</pre>
</div>
<h4 class="attr_title">인쇄된 링크의 가시성 추가</h4>
<p class="attr_p"><code>인쇄된 웹 페이지에서는 링크가 종종 쓸모없게 되는데, 링크의 실제 목적지를 알 수 없기 때문입니다.] 하지만, CSS를 사용하여 링크의 [href</code> 속성 값을 드러내어 문서에 표시할 수 있습니다. 이는 <span data-spell="Audience">독자</span>가 인쇄된 문서에서도 링크된 웹 페이지의 위치를 알 수 있도록 돕습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
@media print {
  a[href^="http"]:not([href*="mywebsite.com"])::after {
    content: " (" attr(href) ")";
  }
}</pre>
</div>
<p class="attr_p">위 코드는 웹사이트의 자체 링크를 제외하고, 모든 외부 링크 옆에 해당 링크의 URL을 추가로 표시합니다. 이렇게 하면, 인쇄물에서도 링크가 가리키는 목적지를 쉽게 확인할 수 있으며, 인쇄된 콘텐츠의 가독성과 유용성을 크게 향상시킬 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">브라우저 호환성을 고려한 CSS 속성 값 대체</h3>
<p class="attr_p">[우리는 때때로 웹 디자인을 할 때, 특정 CSS 속성 값을 사용하려고 하지만, 일부 브라우저에서는 그 속성 값을 지원하지 않을 수 있습니다.] 이런 상황에서 완전한 지원이 이루어지지 않는 속성 값에 대한 대안을 제공하는 것이 중요합니다. 이를 통해, 사용자 경험을 저하시키지 않으면서도 원하는 디자인 효과를 얻을 수 있습니다.</p>
<p class="attr_p">예를 들어, IE나 오래된 버전의 Edge에서는 <code>vmax</code> 단위를 인식하지 못합니다. 이런 경우, 브라우저가 이해할 수 있는 대체 속성 값을 먼저 제공하고, 실제로 사용하고자 하는 값을 설정해야 합니다. 아래와 같이 작성하면, <code>vmax</code>를 이해하지 못하는 브라우저는 <code>50vw</code>를 적용하고, <code>vmax</code>를 이해하는 브라우저는 50vmax를 적용하게 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
div {
  width: 50vw; /* 대체 값 */
  width: 50vmax; /* 원하는 값 */
}</pre>
</div>
<p class="attr_p">이런 방식으로, <code>vmax</code>를 이해하지 못하는 브라우저도 문제 없이 대체 속성 값(<code>50vw</code>)을 사용하여 적절한 폭을 가진 요소를 표시할 수 있고, vmax를 지원하는 브라우저는 최종적으로 <code>50vmax</code> 값을 적용하여, 개발자가 의도한 대로 디자인을 구현할 수 있습니다. 이렇게, CSS에서는 선언한 순서에 따라 속성 값이 적용되기 때문에, 이를 활용하여 더 넓은 범위의 브라우저 호환성을 확보할 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">웹 접근성을 위한 콘텐츠 숨기기 전략</h3>
<p class="attr_p">웹 문서에서 <code>&lt;h1&gt;</code>부터 <code>&lt;h6&gt;</code>까지의 제목 태그는 브라우저와 다른 소프트웨어에게 문서의 구조와 각 부분들의 연관성을 알려주는 데 매우 유용하게 사용됩니다. 이런 문서 개요는 <span data-spell="Search Engine Optimization">SEO</span> 측면에서도 매우 중요하며, 스크린 리더 사용자들이 사이트를 탐색하는 데도 큰 도움이 됩니다.</p>
<p class="attr_p">하지만, 가끔 디자인상의 이유로 제목을 시각적으로 표시하지 않아야 하는 경우도 있습니다. 예를 들어, 디자인 자체가 충분히 구조를 전달하는 상황이 있는데, 이런 경우에는 제목을 마크업에서 단순히 제거하는 것이 아니라, 시각적으로만 숨기는 것이 바람직합니다. 이는 CSS가 있든 없든 문서의 구조를 명확하게 유지하는 데 있어 중요한 전략입니다.</p>
<p class="attr_p">CSS를 사용하여 콘텐츠를 숨기는 방법은 다양하며, 각각의 방법은 특정 시나리오에 더 적합할 수 있습니다. 예를 들어, 폼의 라벨을 시각적으로 숨기는 것도 하나의 방법이지만, 사용자 경험(UX) 측면에서는 라벨을 숨기는 것은 일반적으로 권장되지 않는 방식입니다. 즉, 콘텐츠를 숨기는 방법을 선택할 때는 접근성과 사용자 경험을 고려해야 합니다.</p>
<h4 class="attr_title">1. 모든 사람으로부터 콘텐츠 숨기기</h4>
<p class="attr_p">콘텐츠를 사용자, 스크린 리더 및 검색 엔진 모두로부터 완전히 숨기려면, <code>hidden</code> 속성을 사용하거나 <code>visibility: hidden;</code> 또는 <code>display: none;</code>을 설정할 수 있습니다. 이 방법은 사용자도 볼 수 없는 것은 물론, 스크린 리더나 검색 엔진도 읽을 수 없으며, 콘텐츠를 완전히 숨기고 싶을 때 유용합니다.</p>
<h4 class="attr_title">2. 시각적으로만 콘텐츠 숨기기</h4>
<p class="attr_p">콘텐츠를 시각적으로만 숨기고, 스크린 리더나 검색 엔진이 접근할 수 있도록 하려면, 다음과 같이 <code>.visually-hidden</code> 클래스를 추가해서 사용할 수 있습니다. 이 기법은 콘텐츠를 시각적으로는 숨기되 접근성을 유지하고자 할 때 적합합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
.visually-hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
}</pre>
</div>
<p class="attr_p">특히, 이 클래스는 사용자가 포커스 시에만 내용을 볼 수 있는 <b>스킵 링크</b> 등에 사용하기 적합합니다.</p>
<h4 class="attr_title">3. 의미론적으로 콘텐츠 숨기기</h4>
<p class="attr_p">시각적으로 콘텐츠를 표시하되, 스크린 리더에서는 숨기고 싶은 경우라면, <code>aria-hidden="true"</code> 속성을 추가하여 콘텐츠를 스크린 리더로부터 숨길 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="html">
&lt;button&gt;
  &lt;span class="icon icon-hamburger" aria-hidden="true"&gt;&lt;/span&gt;
  &lt;span class="text"&gt;Menu&lt;/span&gt;
&lt;/button&gt;</pre>
</div>
<h4 class="attr_title">4. 기타 방법들</h4>
<p class="attr_p">음수 <code>text-indent</code>, 제로 <code>font-size</code> 또는 <code>height</code>를 사용하는 것과 같은 다른 방법들도 존재합니다. 이런 방법들은 특정 상황에서 유용할 수 있지만, 사용할 때 주의가 필요합니다.</p>
<ul class="attr_list a__list dot">
<li><b>음수 text-indent:</b> 음수 <code>text-indent를</code> 사용하여 콘텐츠를 화면 밖으로 밀어내는 방법은 스크린 리더 사용자들에게 혼란을 줄 수 있으며, 검색 엔진은 이 방법을 <b>‘키워드 숨기기’</b> 기법으로 간주할 수 있어, <span data-spell="Search Engine Optimization">SEO</span> 점수에 부정적인 영향을 미칠 수 있습니다.</li>
<li><b>제로 font-size:</b> 텍스트의 <code>font-size</code>를 <code>0</code>으로 설정하는 것은 콘텐츠를 실질적으로 숨기지만, 이 방법은 스크린 리더와 검색 엔진 모두에게 콘텐츠가 보이지 않게 만들 수 있으며, 이로 인해 정보의 접근성을 저해하고 <span data-spell="Search Engine Optimization">SEO</span>에 부정적인 영향을 미칠 수 있습니다.</li>
<li><b>제로 height:</b> <code>height</code>를 <code>0</code>으로 설정하여 요소를 숨기는 것은 시각적으로는 콘텐츠를 숨길 수 있으나, 포커스가 가능한 요소(예: 링크, 버튼 등)가 포함되어 있는 경우, 키보드 사용자들이 포커스할 수 있게 되어 혼란을 일으킬 수 있습니다.</li>
</ul>
<p class="attr_p">각각의 방법을 적절하게 활용하여, 웹 페이지의 접근성과 사용자 경험을 향상시키면서 디자인 요구 사항을 충족시킬 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">대비의 중요성</h3>
<p class="attr_p">[디자인에서 텍스트와 배경 사이에 충분한 대비를 제공하는 것은 매우 중요합니다.] 이는 저시력자뿐만 아니라 시각적 장애가 없는 사람들에게도 큰 도움이 되는데, 예를 들어, 맑은 날 밖에서 스마트폰을 사용할 때 높은 대비가 얼마나 중요한지를 생각해 보면, 가독성의 중요성을 이해할 수 있습니다.</p>
<h4 class="attr_title">색상 대비의 중요성</h4>
<p class="attr_p">[색상 대비란 서로 다른 두 색상이 얼마나 잘 구별되는지를 나타내는 것으로, 이는 두 색상이 색상 휠의 다른 부분에 위치할 때 발생하며, 두 색상의 차이가 클수록 대비가 높아집니다.] 웹 디자인과 개발에서, 텍스트와 배경 사이의 적절한 색상 대비는 중요한 요소입니다.</p>
<p class="attr_p">[세계보건기구에 따르면, 인구의 약 4%가 시각 장애를 가지고 있으며, 남성의 7~12%와 여성의 1% 미만이 색상 시력 결함을 겪고 있다고 합니다.] 이런 장애는 대비에 대한 민감도를 감소시키며, 일부는 색상 구별 능력까지 저하시킵니다. 이는 웹 콘텐츠의 색상 대비가 시각적 정보를 전달하는 데 있어 핵심적인 역할을 한다는 것을 의미합니다.</p>
<p class="attr_p">때문에 텍스트와 그 배경 사이의 대비는 중등도 저시력을 가진 사람들이 읽을 수 있을 정도로 높아야 합니다. <b>웹 접근성 이니셔티브</b>는 이를 위해 색상 대비를 측정하기 위한 비율을 정의했으며, 이 기준들은 디자이너와 개발자가 텍스트가 배경에 대해 충분한 대비를 이루고 있는지 판단하는 데 도움을 줍니다.</p>
<h4 class="attr_title">웹 접근성과 대비 비율</h4>
<p class="attr_p">대비 비율은 배경 대비 텍스트의 가시성을 수치로 나타냅니다. 이 비율은 1:1(동일한 색상)에서 21:1(검정과 흰색 같은 극대의 대비)까지 변할 수 있으며, <code>#777777</code>색상의 텍스트가 <code>#DDDDDD</code> 배경 위에 있을 때, 대비 비율은 <b>3.3:1</b>입니다.</p>
<figure class="attr_figure">
<img class="attr_img" src="/img/a11y/writing-css-with-accessibility-in-mind-03.jpg" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite><a href="http://leaverou.github.io/contrast-ratio/" target="_blank">대비 비율</a></cite></figcaption>
</figure>
<h5 class="attr_title">WCAG 2.0 기준</h5>
<p class="attr_p">[웹 콘텐츠 접근성 지침 2.0에 따르면, 배경과 텍스트 사이의 최소 대비 비율은 4.5:1이어야 하며, 이는 24px 미만(굵지 않은 경우) 및 19px 미만(굵은 경우)인 텍스트에 적용됩니다.] 더 큰 텍스트의 경우, 3:1 비율로도 충분한데, 이런 기준은 레벨 AA의 최소 요구사항을 충족하기 위한 것입니다.</p>
<h5 class="attr_title">레벨 AAA의 더 높은 기준</h5>
<p class="attr_p">레벨 AAA의 규정을 충족하기 위해서는, 일반 텍스트의 최소 대비 비율이 7:1이고, 굵은 텍스트는 최소 4.5:1이 되어야 하는데, 이런 높은 기준은 더욱 우수한 접근성을 목표로 할 때 적용됩니다.</p>
<h5 class="attr_title">아이콘과 대비 규정</h5>
<p class="attr_p">[아이콘을 사용할 때도 텍스트 대비 규정을 충족하는 아이콘을 사용하는 것이 좋습니다.] 이는 규정 준수를 위한 필수 사항은 아니지만, 모든 사용자가 콘텐츠를 쉽게 인식할 수 있도록 돕습니다.</p>
<p class="attr_p">이렇게 대비 비율은 웹 접근성을 높이는 데 핵심적인 역할을 하며, 모든 사용자가 콘텐츠를 더 잘 이해하고 사용할 수 있도록 돕습니다. 디자인 과정에서 이러한 기준을 고려하는 것은 웹사이트를 더 포용적이고 접근성이 높은 곳으로 만드는 중요한 단계입니다.</p>
<h4 class="attr_title">대비 비율 측정 도구</h4>
<p class="attr_p">대비 비율을 계산하는 공식이 있지만, 수동으로 계산할 필요는 없습니다. 다양한 도구들을 사용할 수 있는데, Chrome과 같은 최신 브라우저에서는 개발자 도구를 통해 직접 대비 비율을 확인할 수도 있습니다.</p>
<figure class="attr_figure">
<img class="attr_img" src="/img/a11y/writing-css-with-accessibility-in-mind-04.jpg" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite>Manuel Matuzovic, Chrome 개발자 도구에서의 대비 비율</cite></figcaption>
</figure>
<h5 class="attr_title">1. 온라인</h5>
<ul class="attr_list a__list dot">
<li><b>대비 비율 by Lea Verou:</b> <a href="http://leaverou.github.io/contrast-ratio/#blue-on-red" target="_blank" data-target="external">http://leaverou.github.io/contrast-ratio/#blue-on-red</a></li>
<li><b>Colour Contrast Check by Jonathan Snook:</b> <a href="https://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333" target="_blank" data-target="external">https://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333</a></li>
<li><b>Wave 도구:</b> <a href="http://wave.webaim.org/" target="_blank" data-target="external">http://wave.webaim.org/</a></li>
<li><b>Accessible Color Spaces by Kevin Gutowski:</b> <a href="http://kevingutowski.github.io/color.html" target="_blank" data-target="external">http://kevingutowski.github.io/color.html</a></li>
</ul>
<h5 class="attr_title">2. 브라우저 확장 프로그램 및 개발자 도구</h5>
<ul class="attr_list a__list dot">
<li><b>Chrome 개발자 도구 감사 패널:</b> <a href="https://www.youtube.com/watch?v=b0Q5Zp_yKaU&amp;list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" target="_blank" data-target="external">https://www.youtube.com/watch?v=b0Q5Zp_yKaU&amp;list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g</a></li>
<li><b>tota11y:</b> <a href="http://khan.github.io/tota11y/" target="_blank" data-target="external">http://khan.github.io/tota11y/</a></li>
<li><b>aXe:</b> <a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd" target="_blank" data-target="external">https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd</a></li>
</ul>
<h5 class="attr_title">3. 기타</h5>
<ul class="attr_list a__list dot">
<li><b>Sketch용 색상 대비 분석기:</b> <a href="https://github.com/getflourish/Sketch-Color-Contrast-Analyser" target="_blank" data-target="external">https://github.com/getflourish/Sketch-Color-Contrast-Analyser</a></li>
</ul>
<h4 class="attr_title">고대비 버전 제공을 통한 접근성 개선</h4>
<p class="attr_p">[웹 콘텐츠 접근성 지침에 따라, 모든 디자인 요소가 충분한 대비를 제공하지 않는 경우에도, Alternate Version 조항을 활용하여 접근성 기준을 만족시킬 수 있습니다.] 이는 사용자에게 페이지의 고대비 버전으로의 링크 제공하거나, 모든 요소가 접근성 기준에 부합하도록 하는 페이지를 변경하는 컨트롤을 제공해야 합니다.</p>
<h5 class="attr_title">고대비 대안 제공의 기준</h5>
<ul class="attr_list a__list dot">
<li><b>눈에 띄는 배치:</b> 고대비 버전으로의 링크나 변경 컨트롤은 사용자가 쉽게 찾을 수 있도록 페이지에 눈에 띄게 배치되어야 합니다.</li>
<li><b>대비 요구사항 충족:</b> 링크나 컨트롤 자체도 대비 요구사항을 충족해야 합니다. 이는 사용자가 이러한 기능을 사용할 때 어려움을 겪지 않도록 보장하기 위함입니다.</li>
<li><b>동일한 정보와 기능 포함:</b> 고대비 버전 페이지는 원본 페이지와 동일한 정보와 기능을 포함해야 합니다. 이는 사용자가 필요한 모든 콘텐츠에 접근할 수 있도록 보장합니다.</li>
<li><b>모든 기준 충족:</b> 새로운 페이지는 모든 원하는 접근성 기준을 충족해야 합니다. 이는 단순히 대비만이 아니라 모든 접근성 관련 요소를 고려해야 함을 의미합니다.</li>
</ul>
<p class="attr_p">고대비 버전의 제공은 디자인이 기본적으로 충분한 대비를 제공하지 못하는 경우의 유용한 대안이 될 수 있습니다. 이 접근 방식은 사용자가 웹사이트의 내용을 더 쉽게 이해하고 사용할 수 있도록 하는 동시에, WCAG 기준을 충족시킬 수 있는 방법입니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">콘텐츠 배치와 접근성</h3>
<p class="attr_p">콘텐츠의 배치 순서를 변경하는 다양한 방법이 있으며, <code>Flexbox</code>의 <code>order</code>와 <code>flex-direction</code> 그리고 <code>Grid</code>의 <code>order</code>, <code>grid-auto-flow</code>와 같은 속성들을 사용할 수 있습니다. 이런 기능들은 매우 유용하지만, 콘텐츠의 DOM 순서와 시각적 표현 사이의 일관성이 끊어질 수 있는 만큼 주의해서 사용해야 합니다.</p>
<figure class="attr_figure">
<img class="attr_img" src="/img/a11y/writing-css-with-accessibility-in-mind-05.jpg" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite>Manuel Matuzovic, medium</cite></figcaption>
</figure>
<h4 class="attr_title">키보드와 스크린 리더 사용자의 경험</h4>
<p class="attr_p">시각적으로 재배치된 콘텐츠는 키보드 사용자가 <b>Tab 키</b>를 사용하여 이미지 간을 이동할 때 예측 불가능함을 초래할 수 있습니다. 만약, 포커스 스타일이 없는 라면, 사용자는 다음에 어떤 요소가 강조될지 알 수 없게 되어 더욱 혼란스러울 수 있습니다.</p>
<p class="attr_p">또한, 이렇게 시각적으로 재배치된 예측 불가능한 레이아웃은 스크린 리더 사용자에게도 문제가 될 수 있습니다. <b>스크린 리더는 DOM의 순서대로 콘텐츠를 읽기 때문에, 시각적 순서를 변경하는 경우 사용자 경험에 혼란을 줄 수 있습니다.</b> 모든 스크린 리더 사용자가 시각 장애를 가진 것은 아니며, 저시력이나 학습 장애가 있는 사용자들도 화면에 표시되는 내용을 보완하기 위해 스크린 리더를 사용할 수 있음을 고려해야 합니다.</p>
<h4 class="attr_title">디자인과 마크업의 일관성</h4>
<p class="attr_p">[콘텐츠의 순서 문제는 플렉스나 그리드 아이템뿐만 아니라 모든 종류의 위치 지정에 적용됩니다.] 즉, 스타일 없이도 의미 있는 방식으로 콘텐츠를 정렬하는 것이 중요하며, 디자인에서의 순서와 일치하는지 확인해야 합니다. 만약, 디자인과 일치하지 않는 경우, 디자인 자체를 재고해야 할 수도 있습니다.</p>
<p class="attr_p">CSS에서 콘텐츠를 올바르게 위치시키지 못하는 것을 이유로 마크업에서 요소들을 임의로 재배열하는 것은 피해야 하면, 웹 접근성을 위해서는 콘텐츠의 순서와 구조를 신중하게 고려해야 합니다. 모든 사용자가 콘텐츠를 쉽게 탐색하고 이해할 수 있도록 하기 위해, 콘텐츠의 DOM 순서와 시각적 표현이 일관되게 유지될 수 있도록 해야 합니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">포커스 스타일의 중요성</h3>
<p class="attr_p">웹사이트를 키보드만으로 탐색할 수 있게 하는 것은 매우 중요합니다. 키보드에 의존하는 사용자들은 다양한 배경을 가지고 있으며, 이는 운동 장애, 시각 장애를 가진 사람들, 혹은 다른 이유로 마우스나 트랙패드를 사용할 수 없는 사람들을 포함합니다.</p>
<h4 class="attr_title">CSS를 이용한 포커스 스타일 적용</h4>
<p class="attr_p">CSS의 <code>:focus</code> 의사 클래스를 사용하여 포커스 가능한 요소에 스타일을 적용할 수 있으며, 이를 통해, 사용자가 어떤 요소에 포커스를 맞추고 있는지 시각적으로 명확하게 표시 할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
a:focus {
  background-color: #000000;
  color: #FFFFFF;
}</pre>
</div>
<h4 class="attr_title">기본 포커스 스타일의 한계</h4>
<p class="attr_p">브라우저마다 기본 포커스 스타일에 대한 일관성이 부족하고 때로는 디자인과 잘 어울리지 않을 수 있습니다. 따라서, 사용자 경험을 개선하고 디자인에 맞는 맞춤형 포커스 스타일을 제공하는 것이 권장됩니다.</p>
<p class="attr_p">하지만, 대체 스타일을 제공하지 않고 기본 윤곽선(예: 점선 윤곽, 파란색 또는 주황색 라인 등)을 제거하는 것은 키보드로 탐색하는 사용자들에게 큰 불편을 야기할 수 있습니다. 포커스 위치를 알 수 없게 되면, 해당 사용자들은 웹사이트를 사용할 수 없게 됩니다. 따라서, 대체 스타일을 제공하지 않고 기본 포커스 스타일을 단순히 제거하는 것은 피해야 합니다.</p>
<p class="attr_p">이렇게 포커스 스타일은 모든 사용자가 웹사이트를 효과적으로 탐색할 수 있도록 하는 데 중요한 역할을 하는 요소로, 웹사이트를 디자인할 때, 접근성을 염두에 두고 사용자가 현재 포커스한 요소를 쉽게 식별할 수 있도록 하는 맞춤형 포커스 스타일을 고려하는 것이 중요합니다.</p>
<h4 class="attr_title">키보드 사용자와 마우스 사용자의 구분</h4>
<p class="attr_p">웹 디자인에서 자주 마주치는 문제 중 하나는 브라우저 간 포커스 스타일의 일관성 부족과 마우스 사용 시에도 포커스 스타일이 나타나는 것입니다. 마우스 사용자에게 포커스 스타일은 종종 불필요하거나 심지어 방해가 되고 미학적으로도 불쾌함을 유발 할 수 있습니다.</p>
<h5 class="attr_title">키보드 사용자를 위한 접근성</h5>
<p class="attr_p">웹 페이지의 요소에 포커스가 있을 때 <code>outline</code> 속성을 제거하는 것은 권장되지 않습니다. 이는 해당 요소가 키보드 사용자에게 접근 불가능해질 수 있기 때문으로, 필요한 것은 키보드 사용과 마우스 사용을 구별하는 방법입니다.</p>
<p class="attr_p"><b>CSS Level 4</b>의 <code>:focus-ring</code> 가상 클래스를 사용하면 이 문제를 해결할 수 있습니다. <code>:focus-ring</code>은 요소가 포커스를 받고, 사용자 에이전트(브라우저)가 요소에 명시적인 포커스 스타일을 적용해야 한다고 판단할 때 적용됩니다. 이 선택자는 다음과 같이 사용됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
/* 기본 윤곽선 제거 */
  :focus {
  outline: none;
}

/* 윤곽선이 필요할 때만 추가 */
:focus-ring {
outline: 2px solid blue;
}</pre>
</div>
<p class="attr_p">하지만, 안타깝게도 현재 대부분의 브라우저는 <code>:focus-ring</code>을 표준으로 구현하지 않고 있습니다. 다만, Firefox는 <code>-moz-focus-ring</code>을 지원하며, <code>.focus-ring</code> 클래스를 적절하게 추가하는 가벼운 폴리필을 사용하여 이를 해결할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
// 자바스크립트가 활성화되어 작동하고, 
// .focus-ring 클래스가 없는 모든 포커스 가능한 요소를 선택하여 윤곽선을 제거합니다.
.js-focus-ring :focus:not(.focus-ring) {
  outline-width: 0;
}</pre>
</div>
<h4 class="attr_title">포커스된 자식 요소를 가진 부모 요소 스타일링</h4>
<p class="attr_p"><code>:focus-within</code>은 상대적으로 새로운 CSS 가상 클래스로, 현재 포커스된 자식 요소를 가진 부모 요소를 선택할 수 있게 해줍니다. 이 가상 클래스는 이미 대부분의 주요 브라우저에서 지원되고 있는데, 자식 항목 중 하나가 포커스를 받을 때, 부모 요소에 특정 스타일을 적용하는 것은 사용자 경험을 향상시키는 좋은 방법입니다.</p>
<p class="attr_p">예를 들어, <b>form</b> 내의 입력 필드가 포커스를 받을 때 다음과 같이 그림자를 추가하여 시각적으로 강조할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
form:focus-within {
  box-shadow: 0 0 4px 6px rgba(80,88,156,0.2);
}</pre>
</div>
<p class="attr_p">이 스타일은 자식 요소가 포커스를 받았을 때 부모 요소에 시각적인 피드백을 제공하여, 사용자가 현재 어떤 폼 필드에 포커스가 있는지 더 쉽게 인식할 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">그리드와 문서 구조</h3>
<p class="attr_p">그리드 레이아웃은 웹 디자인에서 매우 유용한 도구입니다. <b>CSS Grid Layout</b>의 등장으로 디자이너와 개발자는 이전보다 더 유연하게 아이템을 위치시킬 수 있게 되었습니다. 하지만, 그리드는 문서 구조에 심각한 오류를 추가할 수 있는데, 바로 Grid Layout의 유연함 만큼 디자인 순서와 DOM 순서가 일치하지 않는 경우가 생길 수 있기 때문입니다.</p>
<p class="attr_p">예를 들어, 제목(<code>&lt;h2&gt;</code>)과 목록(<code>&lt;ul&gt;</code>)으로 구성된 레이아웃이 있을 때, 이 요소들을 그리드 컨테이너에 배치하려고 하면, 직접적인 자식만 그리드에 배치되는 그리드의 특성 때문에 예상과 다르게 보일 수 있습니다. 즉, <code>&lt;ul&gt;</code> 안의 <code>&lt;li&gt;</code> 요소들을 그리드 아이템으로 만들고 싶지만, 그리드의 제한 때문에 이는 직접적으로 가능하지 않습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="html">
&lt;div class="wrapper"&gt;
  &lt;h2&gt;Heading&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;Element 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Element 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Element 3&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Element 4&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Element 5&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Element 6&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>
</div>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
.wrapper {
  display: grid;
  grid-template-columns: 120px repeat(2, 1fr);
  grid-gap: 20px;
}
h2 {
  grid-column: 2 / -1;
}</pre>
</div>
<h4 class="attr_title">잘못된 해결책: 구조 변경</h4>
<p class="attr_p">구조를 단순화시켜 <code>&lt;ul&gt;</code>을 제거하고 <code>&lt;li&gt;</code>를 <code>&lt;div&gt;</code>로 변환하는 것은 문서의 구조와 의미를 해칠 수 있기 때문에, 최악의 해결책이 될 수 있습니다.</p>
<h4 class="attr_title">가능한 해결책</h4>
<ul class="attr_list a__list dot">
<li><b>display: contents 사용:</b> 이 속성을 사용하면 요소의 자식들이 부모의 직접적인 자식처럼 보이게 할 수 있지만, 현재는 Firefox에서만 지원됩니다.</li>
<li><b>다른 그리드 정의:</b> <code>&lt;ul&gt;</code>에 다른 그리드를 정의하는 것은 이상적이지 않지만, 구조를 단순화하거나 의미를 해치는 것보다 낫습니다. 이 방법을 사용하면 <code>&lt;ul&gt;</code>이 전체 그리드를 차지하고 부모 그리드에서 일부 값을 상속받을 수 있습니다.</li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
ul {
  /* 전체 그리드를 차지함 */
  grid-column: 1 / -1;
  /* 다른 그리드를 생성하고 부모 그리드에서 값을 상속받음 */
  display: inherit;
  grid-template-columns: inherit;
  grid-gap: inherit;
  /* display: contents를 이해하는 브라우저를 위해 display 덮어쓰기 */
  display: contents;
}</pre>
</div>
<p class="attr_p">그리드 레이아웃을 사용할 때는 문서의 구조와 의미를 유지하는 것이 중요하며, 디자인과 DOM 순서의 일치시키면서, 콘텐츠의 의미와 접근성을 손상시키지 않고 문제를 해결할 수 있는 방법을 찾는 것이 중요합니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">결론</h3>
<p class="attr_p">[웹 디자인과 개발 과정에서 DOM 및 포커스 순서를 올바르게 설정하고, 고대비를 고려하는 것은 매우 중요합니다.] 이런 기본적인 접근성 고려 사항을 통해, 모든 사용자가 웹사이트를 더 쉽게 이해하고 사용할 수 있도록 도울 수 있으며, 이는 단순히 특정 그룹의 사용자에게만 유익한 것이 아니라, 모든 사용자의 웹 사용 경험을 향상시킬 수 있는 기초가 됩니다.</p>
<p class="attr_p">웹사이트를 디자인하고 개발할 때, 웹 접근성을 고려하는 것만으로도 이미 훌륭한 작업을 하고 있는 것으로, 접근성은 선택적인 요소가 아니라, 웹사이트를 설계하고 구현하는 과정에서 필수적으로 고려해야 하는 기본적인 요소입니다. 이런 접근성을 향상시키기 위한 작은 노력들이 모여, 모든 사용자에게 더 나은 웹 경험을 제공할 수 있습니다.</p>
</div>
<p class="attr_p source">참고 자료: Manuel Matuzovic, <a href="https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939" target="_blank" data-target="external" data-title="Writing CSS with Accessibility in Mind">"Writing CSS with Accessibility in Mind"</a></p>
</section>`;
