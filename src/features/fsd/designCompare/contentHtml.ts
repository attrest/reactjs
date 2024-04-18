export const contentHtml = `<section class="attr_section">
<p class="attr_p">아토믹 디자인은 웹 개발과 인터페이스 설계에서 매우 인기 있는 방법론 중 하나로, 작은 단위(원자)로 시작하여 점차 복잡한 구조(분자, 유기체, 템플릿, 페이지)를 구축하는 방식입니다. FSD(Feature-Sliced Design)의 각 레이어층을 아토믹 디자인 패턴에 매칭해보겠습니다.</p>
<table class="attr_table a__table">
<caption>디자인 시스템 계층 비교</caption>
<colgroup>
<col>
<col>
</colgroup>
<thead>
<th>FSD</th>
<th>ADS</th>
</thead>
<tbody>
<tr>
<td class="col-1" data-title="FSD"><div class="cell-inner-wrap">App</div></td>
<td class="col-2" data-title="ADS"><div class="cell-inner-wrap">Template or Page</div></td>
</tr>
<tr>
<td class="col-1" data-title="FSD"><div class="cell-inner-wrap">Pages</div></td>
<td class="col-2" data-title="ADS"><div class="cell-inner-wrap">Page</div></td>
</tr>
<tr>
<td class="col-1" data-title="FSD"><div class="cell-inner-wrap">Widgets</div></td>
<td class="col-2" data-title="ADS"><div class="cell-inner-wrap">Molecules or Organisms</div></td>
</tr>
<tr>
<td class="col-1" data-title="FSD"><div class="cell-inner-wrap">Features</div></td>
<td class="col-2" data-title="ADS"><div class="cell-inner-wrap">Organisms</div></td>
</tr>
<tr>
<td class="col-1" data-title="FSD"><div class="cell-inner-wrap">Entities</div></td>
<td class="col-2" data-title="ADS"><div class="cell-inner-wrap">Data Model (Page or Template)</div></td>
</tr>
<tr>
<td class="col-1" data-title="FSD"><div class="cell-inner-wrap">Shared</div></td>
<td class="col-2" data-title="ADS"><div class="cell-inner-wrap">Atoms or Molecules</div></td>
</tr>
</tbody>
</table>
<h4 class="attr_title">App</h4>
<ul class="attr_list a__list dot">
<li>아토믹 디자인에서 <b>템플릿</b> 또는 <b>페이지</b></li>
<li><b>App 레이어는 <span data-spell="application">애플리케이션</span>의 전반적인 구조와 전역 설정을 담당</b>합니다. 이는 아토믹 디자인에서의 <b>템플릿(구조적 틀과 레이아웃을 정의)</b> 또는 <b>페이지(실제 내용이 채워진 최종 단계)</b>에 해당할 수 있습니다. <b>애플리케이션의 심장부로서, 구조와 흐름을 정의</b>하기 때문입니다.</li>
</ul>
<h4 class="attr_title">Pages</h4>
<ul class="attr_list a__list dot">
<li>아토믹 디자인에서 <b>페이지</b></li>
<li><b>Pages 레이어는 사용자가 상호작용하는 최종 화면을 구성</b>합니다. 아토믹 디자인에서 페이지는 설계된 구성 요소들이 실제 데이터와 함께 배치되어 사용자에게 보여지는 최종 단계입니다. 이 레이어는 <b>사용자 인터페이스의 구체적인 실현을 담당</b>합니다.</li>
</ul>
<h4 class="attr_title">Widgets</h4>
<ul class="attr_list a__list dot">
<li>아토믹 디자인에서 <b>분자</b> 또는 <b>유기체</b></li>
<li><b>Widgets는 독립적인 UI 컴포넌트를 의미</b>합니다. 이는 아토믹 디자인에서의 <b>분자(여러 원자의 결합)</b> 또는 <b>유기체(여러 분자의 결합, 복잡한 UI 구성 요소)</b>에 해당합니다. <b>재사용 가능한 독립 모듈로서, 다양한 페이지나 상황에서 활용</b>될 수 있습니다.</li>
</ul>
<h4 class="attr_title">Features</h4>
<ul class="attr_list a__list dot">
<li>아토믹 디자인에서 <b>유기체</b></li>
<li><b>Features 레이어는 사용자 시나리오와 직접적인 비즈니스 가치를 제공하는 기능을 중심으로 구성</b>됩니다. 아토믹 디자인의 유기체에 가까운데, <b>여러 UI 구성 요소(분자)가 결합하여 복잡한 기능을 이루는 단위</b>입니다.</li>
</ul>
<h4 class="attr_title">Entities</h4>
<ul class="attr_list a__list dot">
<li>아토믹 디자인에서 페이지 또는 템플릿의 <b>데이터 모델</b></li>
<li><b>Entities는 비즈니스 엔티티와 데이터 모델</b>을 나타냅니다. 아토믹 디자인의 직접적인 구성 요소는 아니지만, <b>페이지나 템플릿에서 사용되는 데이터 구조를 정의</b>하는 데 필요합니다. 데이터 관리의 관점에서 볼 때 중요한 요소입니다.</li>
</ul>
<h4 class="attr_title">Shared</h4>
<ul class="attr_list a__list dot">
<li>아토믹 디자인에서 <b>원자</b> 또는 <b>분자</b></li>
<li><b>Shared 레이어는 재사용 가능한 컴포넌트와 유틸리티를 포함</b>합니다. 이는 아토믹 디자인의 <b>원자(가장 기본적인 구성 요소)</b> 또는 <b>분자(여러 원자의 결합)</b>에 해당할 수 있습니다. <b>코드의 재사용성과 유지보수를 위한 기반 요소로 활용</b>됩니다.</li>
</ul>
<hr />
<p class="attr_p">이렇게 FSD의 각 레이어는 아토믹 디자인의 다양한 단계와 매칭될 수 있으며, 각각의 역할과 목적에 따라 그에 맞는 아토믹 디자인의 요소로 연결될 수 있습니다.</p>
</section>`;
