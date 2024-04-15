export const contentHtml = `<section>
<p>
  아토믹 디자인은 웹 개발과 인터페이스 설계에서 매우 인기 있는 방법론 중 하나로, 작은 단위(원자)로 시작하여 점차
  복잡한 구조(분자, 유기체, 템플릿, 페이지)를 구축하는 방식입니다. FSD(Feature-Sliced Design)의 각 레이어층을
  아토믹 디자인 패턴에 매칭해보겠습니다.
</p>
<div>
  <h4>App</h4>
  <ul>
    <li> 아토믹 디자인에서 템플릿 또는 페이지</li>
    <li>
      App 레이어는 <span data-spell="application">애플리케이션</span>의 전반적인 구조와 전역 설정을 담당합니다.
      이는 아토믹 디자인에서의 템플릿(구조적 틀과 레이아웃을 정의) 또는 페이지(실제 내용이 채워진 최종 단계)에
      해당할 수 있습니다. 애플리케이션의 심장부로서, 구조와 흐름을 정의하기 때문입니다.
    </li>
  </ul>
</div>
<div>
  <h4>Pages</h4>
  <ul>
    <li> 아토믹 디자인에서 페이지</li>
    <li>
      Pages 레이어는 사용자가 상호작용하는 최종 화면을 구성합니다. 아토믹 디자인에서 페이지는 설계된 구성 요소들이
      실제 데이터와 함께 배치되어 사용자에게 보여지는 최종 단계입니다. 이 레이어는 사용자 인터페이스의 구체적인
      실현을 담당합니다.
    </li>
  </ul>
</div>
<div>
  <h4>Widgets</h4>
  <ul>
    <li> 아토믹 디자인에서 분자 또는 유기체</li>
    <li>
      Widgets는 독립적인 UI 컴포넌트를 의미합니다. 이는 아토믹 디자인에서의 분자(여러 원자의 결합) 또는
      유기체(여러 분자의 결합, 복잡한 UI 구성 요소)에 해당합니다. 재사용 가능한 독립 모듈로서, 다양한 페이지나
      상황에서 활용될 수 있습니다.
    </li>
  </ul>
</div>
<div>
  <h4>Features</h4>
  <ul>
    <li> 아토믹 디자인에서 유기체</li>
    <li>
      Features 레이어는 사용자 시나리오와 직접적인 비즈니스 가치를 제공하는 기능을 중심으로 구성됩니다. 아토믹
      디자인의 유기체에 가까운데, 여러 UI 구성 요소(분자)가 결합하여 복잡한 기능을 이루는 단위입니다.
    </li>
  </ul>
</div>
<div>
  <h4>Entities</h4>
  <ul>
    <li> 아토믹 디자인에서 페이지 또는 템플릿의 데이터 모델</li>
    <li>
      Entities는 비즈니스 엔티티와 데이터 모델을 나타냅니다. 아토믹 디자인의 직접적인 구성 요소는 아니지만,
      페이지나 템플릿에서 사용되는 데이터 구조를 정의하는 데 필요합니다. 데이터 관리의 관점에서 볼 때 중요한
      요소입니다.
    </li>
  </ul>
</div>
<div>
  <h4>Shared</h4>
  <ul>
    <li> 아토믹 디자인에서 원자 또는 분자</li>
    <li>
      Shared 레이어는 재사용 가능한 컴포넌트와 유틸리티를 포함합니다. 이는 아토믹 디자인의 원자(가장 기본적인 구성
      요소) 또는 분자(여러 원자의 결합)에 해당할 수 있습니다. 코드의 재사용성과 유지보수를 위한 기반 요소로
      활용됩니다.
    </li>
  </ul>
</div>
<table>
  <caption>디자인 시스템 계층 비교</caption>
  <thead>
    <tr>
      <th>FSD</th>
      <th>ADS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>App</td>
      <td>Template or Page</td>
    </tr>
    <tr>
      <td>Pages</td>
      <td>Page</td>
    </tr>
    <tr>
      <td>Widgets</td>
      <td>Molecules or Organisms</td>
    </tr>
    <tr>
      <td>Features</td>
      <td>Organisms</td>
    </tr>
    <tr>
      <td>Entities</td>
      <td>Data Model (Page or Template)</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Atoms or Molecules</td>
    </tr>
  </tbody>
</table>
<p>
  이렇게 FSD의 각 레이어는 아토믹 디자인의 다양한 단계와 매칭될 수 있으며, 각각의 역할과 목적에 따라 그에 맞는
  아토믹 디자인의 요소로 연결될 수 있습니다.
</p>
</section>`;
