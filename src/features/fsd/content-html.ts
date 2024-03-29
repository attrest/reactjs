export const contentHtml = `<section>
<p>
  웹 개발에서 프런트엔드 아키텍처는 항상 변화하는 기술 위에서 안정성과 유연성을 유지할 수 있도록 가이드를 하는
  중요한 역할을 합니다. FSD는 바로 이런 과제에 대응하는 최신의 아키텍쳐 기법으로, 프런트엔드 개발자라면 누구나
  공감할 수 있는 모듈 간의 느슨한 결합과 높은 응집력을 달성하며 쉽게 확장 가능한 아키텍처 기법을 제공합니다.
</p>
<p>
  <span data-spell-viewer="Feature-Sliced Design, FSD">기능 분할 설계</span> 아키텍처는 단순히 새로운 아키텍처
  방법론을 넘어, 프런트엔드 개발의 패러다임을 변화시킬 잠재력을 지닌 새로운 접근법으로, 모듈의 세분화를 통해,
  복잡성을 관리하고 생산성을 극대화하는 방법을 제안합니다. 우선 <span data-spell-viewer="layer">레이어</span>,
  <span data-spell-viewer="slice">슬라이스</span>, <span data-spell-viewer="segment">세그먼트</span>의 세 가지
  개념부터 알아보겠습니다.
</p>
<figure>
  <img src="/img/fsd/feature-sliced-design-01.png" alt="" loading="lazy">
</figure>
<div>
  <h3>프런트엔드 아키텍처의 기초</h3>
  <p>
    프런트엔드 아키텍처에서, 기능 분할 설계의 핵심은 <span data-spell-viewer="layer">레이어</span>의 정교한 구성에
    있습니다. 레이어는 프로젝트의 최상위 디렉토리를 형성하며,
    <span data-spell="application">애플리케이션</span> 분해의 첫 번째 단계입니다. 각 레이어에는 그 자체의 고유한
    책임 영역이 할당되어 있으며, 이를 통해 비즈니스 지향적인 구조를 구성합니다.
  </p>
  <figure>
    <img src="/img/fsd/feature-sliced-design-02.png" alt="" loading="lazy">
  </figure>
  <ul>
    <li>
      <b>app:</b> <span data-spell="application">애플리케이션</span>의 심장부로서, 프로바이더, 라우터 등 전역
      설정이 이루어지는 곳입니다. 애플리케이션의 진입점이자 초기화 지점으로, 모든 고유 로직의 시작점입니다.
    </li>
    <li>
      <b>pages:</b> <span data-spell="application">애플리케이션</span>의 각 페이지를 담당하며,
      <b>사용자가 상호작용하는 화면의 구조</b>를 정의합니다.
    </li>
    <li>
      <b>widgets:</b> 독립적인 UI 컴포넌트로, <b>다양한 페이지에서 재사용될 수 있는 독립 모듈</b>을 포함합니다.
    </li>
    <li>
      <b>features:</b> 사용자 시나리오와 기능을 중심으로 구성되어, 비즈니스 가치를 직접적으로 전달합니다. 예를
      들어, <b>좋아요 버튼이나 리뷰 작성 기능 등</b>이 여기에 해당합니다.
    </li>
    <li>
      <b>entities:</b> 사용자, 리뷰, 댓글 같은 비즈니스 엔티티를 나타내며,
      <span data-spell="application">애플리케이션</span>의 핵심 데이터 모델을 구성합니다. 선택적인 레이어입니다.
    </li>
    <li>
      <b>shared:</b> <b>특정 비즈니스 로직에 종속되지 않는 재사용 가능한 컴포넌트와 유틸리티</b>를 포함하며,
      코드의 재사용성과 유지보수를 강화합니다. UI 키트, axio 설정,
      <span data-spell="application">애플리케이션</span> 설정 등이 포함됩니다.
    </li>
  </ul>
  <p>
    app 레이어의 다음에는 여러 단계로 이루어진 '등록'과 같이, 여러 페이지에 걸쳐 있는 프로세스를 처리하는
    <b>processes</b>라는 레이어를 넣기도 하지만, 현재는 더 이상 사용되지 않는 것으로 간주됩니다.
  </p>
  <p>
    <span>기능 분할 설계에서 레이어들은 명확히 정의된 책임과 함께, 각 계층 구조를 통해 코드베이스를
      조직화합니다.</span>
    이 계층 구조는 한 방향으로만 흐름을 촉진하여, 예측 가능하고 유지보수가 용이한 코드 구현을 가능하게 하는 만큼,
    레이어가 잘 구성되어 있다면, 확장성과 유연성이 높은 프런트엔드 아키텍처를 구현할 수 있습니다.
  </p>
  <figure>
    <img src="/img/fsd/feature-sliced-design-03.png" alt="" loading="lazy">
    <figcaption><cite>github의 FSD 설계</cite></figcaption>
  </figure>
  <p>
    기능 분할 설계의 이러한 접근 방식은 모듈화를 넘어서는 전략적인 구조적 재편을 통해, 프런트엔드 개발의 복잡성을
    효율적으로 관리하고, 팀의 생산성을 극대화하는 길을 제시합니다.
  </p>
  <table>
    <colgroup>
      <col>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr><th>Layer</th>
      <th>Can use</th>
      <th>Can be used by</th>
    </tr></thead>
    <tbody>
      <tr>
        <td data-title="Layer"><div>app</div></td>
        <td data-title="Can use">
          <div>shared, entities, features, widgets, pages, processes</div>
        </td>
        <td data-title="Can be used by"><div>-</div></td>
      </tr>
      <tr>
        <td data-title="Layer"><div>processes</div></td>
        <td data-title="Can use">
          <div>shared, entities, features, widgets, pages</div>
        </td>
        <td data-title="Can be used by"><div>app</div></td>
      </tr>
      <tr>
        <td data-title="Layer"><div>pages</div></td>
        <td data-title="Can use">
          <div>shared, entities, features, widgets</div>
        </td>
        <td data-title="Can be used by"><div>processes, app</div></td>
      </tr>
      <tr>
        <td data-title="Layer"><div>widgets</div></td>
        <td data-title="Can use"><div>shared, entities, features</div></td>
        <td data-title="Can be used by">
          <div>pages, processes, app</div>
        </td>
      </tr>
      <tr>
        <td data-title="Layer"><div>features</div></td>
        <td data-title="Can use"><div>shared, entities</div></td>
        <td data-title="Can be used by">
          <div>widgets, pages, processes, app</div>
        </td>
      </tr>
      <tr>
        <td data-title="Layer"><div>entities</div></td>
        <td data-title="Can use"><div>shared</div></td>
        <td data-title="Can be used by">
          <div>features, widgets, pages, processes, app</div>
        </td>
      </tr>
      <tr>
        <td data-title="Layer"><div>shared</div></td>
        <td data-title="Can use"><div>-</div></td>
        <td data-title="Can be used by">
          <div>entities, features, widgets, pages, processes, app</div>
        </td>
      </tr>
    </tbody>
  </table>
  <p>
    표와 같이 계층 구조에서 레이어의 위치가 낮을수록 코드의 더 많은 곳에서 사용될 가능성이 높기 때문에, 레이어를
    변경하는 것이 더 위험합니다. 예를 들어, <b>shared</b> 레이어의 UI 키트는 <b>features</b>, <b>widgets</b>,
    심지어 <b>pages</b> 레이어에서도 사용될 수 있습니다.
  </p>
</div>
<div>
  <h3>슬라이스를 통한 세밀한 구조화</h3>
  <p>
    기능 분할 설계에서 레이어가 큰 그림이라면, 슬라이스는 이 그림을 더욱 세밀하게 구분하는 역할을 합니다.
    <span>슬라이스라고 부르는 이 세부 분류는 <span data-spell="application">애플리케이션</span> 분해의 두 번째 수준을
      나타내며, 각 레이어 내에서 비즈니스 엔티티에 따라 코드를 구조적으로 그룹화합니다.</span>
    이런 방식은 프로젝트의 복잡성을 효과적으로 관리하고, 관련 코드를 논리적으로 조직화하는 데 중추적인 역할을
    합니다.
  </p>
  <figure>
    <img src="/img/fsd/feature-sliced-design-04.png" alt="" loading="lazy">
  </figure>
  <p>
    <span>각 레이어 단계에 추가되는 슬라이스의 네이밍은 프로젝트의 비즈니스 영역에 직접적으로 영향을 받기 때문에,
      프로젝트별로 다양성을 갖게 됩니다.</span>
    예를 들어, 사진 갤러리와 같은 프로젝트에서는 <b>'사진'</b>, <b>'앨범'</b>, <b>'갤러리'</b>와 같은 슬라이스가
    필요할 것이고, 소셜 네트워크 프로젝트에서는 <b>'게시물'</b>, <b>'사용자'</b>, <b>'뉴스피드'</b>와 같은
    슬라이스가 있을 수 있습니다. 이러한 슬라이스들은 프로젝트의 핵심 비즈니스 로직을 반영하며, 각각의 슬라이스는
    프로젝트 내에서 중요한 역할을 수행합니다.
  </p>
  <p>
    또한 슬라이스 내의 코드는 직접적으로 공유되지 않아야 하며, 이를 통해 코드의 재사용성과 유지보수성을 크게
    향상시킬 수 있습니다. 슬라이스 간에는 격리 규칙이 엄격히 적용되어, 서로 간에 코드를 직접 공유하지 않기 때문에
    코드베이스 내에서 <b>명확한 경계를 유지</b>하며, 각 슬라이스의 독립성을 보장할 수 있습니다.
  </p>
  <p>
    이런 접근 방식은 프론트엔드 아키텍처에서 중요한 이점을 제공하는데, 슬라이스를 통해 개발자는 프로젝트의 구조를
    더욱 명확하게 이해할 수 있으며, 각 비즈니스 영역의 요구 사항에 따라 코드를 효율적으로 조직할 수 있습니다.
    또한, 이런 구조를 통해 새로운 기능의 추가나 기존 기능의 수정 시, 관련 코드를 쉽게 찾고, 변경의 영향을 최소화할
    수 있습니다.
  </p>
  <p>
    기능 분할 설계에서 슬라이스의 사용은 단순히 코드를 그룹화하는 것 이상의 의미를 가집니다. 이는 프로젝트의
    비즈니스 로직을 반영하는, 구조적이고 의미 있는 방식으로 코드를 조직화하는 전략입니다. 이를 통해 프로젝트는
    더욱 확장 가능하고 유지보수가 용이한 형태로 발전될 수 있습니다.
  </p>
</div>
<div>
  <h3>세그먼트를 통한 기능 분할 설계의 구체화</h3>
  <p>
    슬라이스를 통해 프로젝트를 비즈니스 중심의 구성 요소로 나눌 수 있는데, 이런 슬라이스 내부에서 더욱 세분화된
    구조를 실현하는 것이 바로 <b>세그먼트</b>의 역할입니다.
    <span>세그먼트는 슬라이스 내 코드를 목적에 따라 분류하고 조직화하여, 코드의 가독성과 유지보수성을 높이는 데
      중요한 기능을 합니다.</span>
  </p>
  <ul class="no-style">
    <li><b>1. api:</b> 필요한 서버 요청.</li>
    <li><b>2. UI:</b> 슬라이스의 UI 컴포넌트.</li>
    <li><b>3. model:</b> 비즈니스 로직, 즉 상태와의 상호 작용. <b>actions</b> 및 <b>selectors</b>가 이에 해당</li>
    <li><b>4. lib:</b> 슬라이스 내에서 사용되는 보조 기능.</li>
    <li><b>5. config:</b> 슬라이스에 필요한 구성값이지만 구성 세그먼트는 거의 필요하지 않음.</li>
    <li><b>6. consts:</b> 필요한 상수.</li>
  </ul>
  <p>
    <span>각 슬라이스 내에서 세그먼트는 특정 작업 분야에 초점을 맞춥니다.</span> 예를 들어,
    <b>api</b> 세그먼트는 서버 요청과 같은 외부 통신을 처리하며, <b>UI</b> 세그먼트는 사용자 인터페이스 컴포넌트를
    포함합니다. 이와 마찬가지로, <b>model</b> 세그먼트는 비즈니스 로직과 상태 관리를 담당하며, 여기에는
    <b>actions</b> 및 <b>selectors</b>가 포함됩니다. 또한, <b>lib</b> 세그먼트는 슬라이스 내에서 사용되는 보조
    기능을 제공하고, <b>consts</b> 세그먼트는 필요한 상수들을 정의합니다.
  </p>
  <p>
    이런 세분화는 개발자가 프로젝트의 특정 부분을 신속하게 이해하고 수정할 수 있게 돕는데, 이를 통해 프로젝트의
    복잡성을 관리하고, 각 기능의 독립성을 유지하면서도 전체적인 조화를 이루도록 보장합니다. 특히, 대규모 팀에서
    작업할 때, 이런 구조는 코드 베이스 내에서 신속한 탐색을 가능하게 하며, 개발 과정에서의 혼란을 최소화합니다.
  </p>
  <p>
    기능 분할 설계에서 세그먼트의 도입은 프로젝트의 세부 사항에 대한 명확한 이해와 함께, 각 팀의 멤버가 특정
    부분에 집중할 수 있게 하여 전체적인 생산성을 증진시켜줍니다. 이는 고도로 조직화된 코드 베이스를 통해,
    프로젝트의 확장성과 유연성을 더욱 강화시키는 결과를 낳습니다.
  </p>
</div>
<div>
  <h3>슬라이스와 세그먼트를 연결하는 공개 API</h3>
  <p>
    <span>기능 분할 설계 방법론에서 각 슬라이스와 세그먼트의 효율적인 상호작용을 보장하는 중요한 메커니즘은 공개
      API입니다.</span>
    공개 API는 프로젝트의 각 구성 요소가 제공하는 기능과 컴포넌트를 외부에 노출하는 역할을 하며, 이를 통해 필요한
    기능만을 선택적으로 사용할 수 있게 됩니다. 이 시스템의 핵심은 <b>index.js</b> 또는 <b>index.ts</b> 파일로, 각
    슬라이스 또는 세그먼트의 진입점 역할을 합니다.
  </p>
  <p>
    <span>공개 API의 주요 원칙은 <span data-spell="application">애플리케이션</span>의 다른 부분이 오직 인덱스 파일을
      통해서만 슬라이스나 세그먼트의 기능에 접근할 수 있도록 하는 것입니다.</span>
    이런 접근 방식을 통해 코드의 격리와 캡슐화를 촉진하여, 내부 로직의 변경이 외부에 미치는 영향을 최소화합니다.
    따라서,
    <span>공개 API를 통한 상호작용은 코드베이스의 유지보수를 용이하게 하고, 프로젝트의 확장성에 긍정적인 영향을
      미칩니다.</span>
  </p>
  <p>
    <span>공개 API는 또한, <span data-spell="application">애플리케이션</span>의 모듈성을 강화하는 중요한 역할을
      합니다.</span>
    각 슬라이스와 세그먼트가 제공하는 기능이 명확하게 정의되어 있기 때문에, 개발자는 필요한 기능을 쉽게 찾아서
    사용할 수 있고, 불필요한 의존성을 피할 수 있습니다. 이는 큰 규모의 프로젝트에서 특히 중요한데, 이를 통해
    개발자들은 전체 시스템의 복잡성을 효과적으로 관리할 수 있습니다.
  </p>
  <p>
    공개 API를 사용함으로써, 프로젝트 팀은 코드 변경 시 재사용성을 높이고, 전체적인 프로젝트의 안정성을 유지할 수
    있습니다. 이는 <span data-spell="application">애플리케이션</span>의 슬라이스 또는 세그먼트 간의 결합도를
    낮추고, 각 기능의 독립성을 보장함으로써 달성될 수 있으며, 결과적으로, 프로젝트는 더욱 견고하고 유연한 구조를
    갖게 되고, 미래의 요구 사항과 변화에 쉽게 대응할 수 있습니다.
  </p>
  <figure>
    <img src="/img/fsd/feature-sliced-design-05.png" alt="" loading="lazy">
  </figure>
</div>
<div>
  <h3>아키텍처 심화</h3>
  <h4>추상화와 비즈니스 로직</h4>
  <p>
    기능 분할 설계 아키텍처를 깊이 이해하기 위해서는, <b>추상화 수준과 비즈니스 로직의 분포</b>에 주목해야 합니다.
    이 아키텍처에서는 레이어의 계층에 따라 추상화 수준과 비즈니스 로직의 복잡성이 달라집니다.
    <span>계층이 높은 레이어, 즉 사용자에게 더 가까운 레이어는 특정 비즈니스 요구 사항에 더 많이 종속되며, 복잡한
      비즈니스 로직을 포함하는 경향이 있습니다.</span>
    이는 직접적인 사용자 상호작용과 기능 구현에 필수적인 부분입니다.
  </p>
  <p>
    <span>반면, 계층이 낮은 레이어, 즉 시스템의 핵심부에 가까운 레이어는 추상화 수준이 더 높습니다.</span>
    이 레이어들은 일반적으로 재사용성이 높고, 레이어 자체의 자율성이 적으며, 전체 시스템의 기반 기능을 제공합니다.
    예를 들어, <b>데이터 모델링, 네트워크 통신, 데이터 캐싱</b>과 같은 기능은 이러한 낮은 계층에서 처리됩니다.
  </p>
  <figure>
    <img src="/img/fsd/feature-sliced-design-06.png" alt="" loading="lazy">
  </figure>
  <p>
    아키텍처에서는 이런 균형을 이해하는 것이 중요하며, 이는 시스템의 유연성과 확장성을 결정하는 핵심 요소가
    됩니다. 높은 계층의 비즈니스 로직은 <span data-spell="application">애플리케이션</span>의 구체적인 기능과
    직접적으로 관련되어 있기 때문에, 특정 사용 사례에 최적화되어 있는 반면, 이와 대조적으로, 낮은 계층의 추상화된
    기능은 다양한 애플리케이션과 시나리오에서 재사용할 수 있어, 시스템의 범용성을 제공합니다.
  </p>
  <p>
    이런 분리와 균형은 프로젝트가 성장하고 변화하는 비즈니스 요구 사항에 적응할 수 있게 해주며,
    <span>비즈니스 로직과 추상화 사이의 적절한 분리는 코드의 유지보수성을 높이고, 장기적으로 시스템의 안정성과 성능을
      보장합니다.</span>
  </p>
  <h4>FSD로 해결 가능한 문제들</h4>
  <p>
    기능 분할 설계는 프런트엔드 아키텍처의 복잡성을 관리하기 위한 혁신적인 접근 방식으로, 이 방법론은 결합도를
    낮추고 응집력을 높이는 것을 목표로 합니다. 이는 대부분의 개발 과정에서 매우 중요한 과제로, FSD는
    <span data-spell-viewer="OOP">객체 지향 프로그래밍</span>의 핵심 개념인
    <b>다형성, 캡슐화, 상속, 그리고 추상화</b>를 통해 이러한 목표를 달성합니다.
  </p>
  <ul>
    <li>
      <span>FSD에서 추상화와 다형성은 레이어를 통해 달성됩니다.</span> 각 레이어는 특정
      추상화 수준을 가지며, 이는 낮은 레이어가 더 추상적이 되도록 하여 더 높은 레이어에서 재사용될 수 있게 합니다.
      이런 구조는 레이어가 특정 매개변수나 속성에 따라 다양하게 작동할 수 있도록 함으로써 다형성의 원칙을
      적용합니다.
    </li>
    <li>
      <span>캡슐화는 슬라이스와 세그먼트의 공개 API를 통해 달성됩니다.</span> 이는 슬라이스
      또는 세그먼트 내부의 세부 사항을 격리시키며, 필요한 기능과 컴포넌트만을 외부에 노출시킵니다. 공개 API의
      사용은 슬라이스 또는 세그먼트의 내부 구현을 변경해도 외부 사용에 영향을 미치지 않도록 보장하며, 이는 코드의
      격리 및 재사용성을 촉진합니다.
    </li>
    <li>
      <span>상속은 레이어를 통해 달성됩니다.</span> 이는 더 높은 레이어가 낮은 레이어의
      기능을 재사용할 수 있게 하며, 이 구조는 코드의 중복을 줄이고,
      <span data-spell="application">애플리케이션</span>의 일관성을 유지하는 데 도움이 됩니다.
    </li>
  </ul>
  <p>
    FSD의 이러한 접근 방식은 프런트엔드 개발에서 오랫동안 직면해온 문제들을 해결합니다.
    <b>결합도를 낮추고 응집력을 높이는 이러한 전략</b>은 <span data-spell="application">애플리케이션</span>의
    유지보수성을 향상시키고, 개발 팀이 더 빠르고 효율적으로 작업할 수 있게 합니다. 결국, FSD는 개발 과정을
    단순화하고, 코드베이스의 확장성과 유연성을 높이는 강력한 아키텍처 방법론이라고 할 수 있습니다.
  </p>
  <h4>고전적인 아키텍처와 FSD 비교</h4>
  <p>
    고전적인 소프트웨어 아키텍처는 그 단순함과 접근성으로 인해 많은 개발자들에게 친숙한 개념이지만, 이런
    아키텍처는 시간이 지남에 따라 명확한 한계를 드러냅니다. 특히, 프로젝트의 복잡성과 규모가 커질수록
    <b>컴포넌트 간의 암묵적 연결과 모듈의 복잡성</b>으로 인해 유지보수가 점점 어려워지는 문제가 발생합니다.
    고전적인 아키텍쳐의 명확한 표준은 없지만, 일반적으로 다음과 같은 구조를 볼 수 있습니다.
  </p>
  <figure>
    <img src="/img/fsd/feature-sliced-design-07.png" alt="" loading="lazy">
    <figcaption><cite>고전적 아키텍쳐 구조의 예</cite></figcaption>
  </figure>
  <p>
    기능 분할 설계는 이런 고전적 아키텍처의 한계를 극복하기 위해 등장했으며, 명확한 구조와 표준화를 통해
    <b>애플리케이션의 확장성과 유지보수성을 대폭 향상</b>시킵니다. FSD는 모듈 간의 결합을 최소화하고, 응집력을
    높이며, 애플리케이션의 각 부분을 명확히 분리함으로써, 복잡한 시스템도 쉽게 관리하고 확장할 수 있게 합니다.
  </p>
  <p>
    <span>고전적 아키텍처와 비교했을 때, FSD의 주요 장점 중 하나는 코드의 문제점을 조기에 식별하고 해결할 수 있다는
      점입니다.</span>
    FSD는 개발 과정에서 발생할 수 있는 문제들을 '나중'이 아니라 '지금' 해결하도록 강제하는데, 이런 접근 방식은
    프로젝트의 초기 단계에서부터 견고한 기반을 마련하고, 장기적으로 시간과 자원을 절약할 수 있도록 합니다.
  </p>
  <p>
    하지만, FSD를 효과적으로 적용하기 위해서는 <b>더 높은 이해도와 기술 수준이 요구</b>되며, 고전적인 아키텍처에
    익숙한 개발자들에게는 FSD의 개념과 접근 방식이 처음에는 어려울 수도 있습니다. 하지만, FSD의 원리와 장점을
    이해하고 적용하면, 프로젝트의 질을 극적으로 향상시킬 수 있습니다. 즉, FSD는 단순한 코드 구조의 변경을 넘어서,
    개발 프로세스와 팀의 문화를 혁신하는 강력한 도구가 될 수 있고, 프로젝트가 진화하고 성장함에 따라, 지속 가능한
    개발과 효율적인 유지보수의 핵심 요소로 자리매김하게 될 것입니다.
  </p>
  <h4>단순 모듈식 아키텍처와 FSD 비교</h4>
  <p>
    단순 모듈식 아키텍처는 프로젝트의 초기 단계나 작은 규모의 프로젝트에서 매력적인 선택지로 여겨질 수 있습니다.
    이는 <b>기능을 별도의 모듈이나 컴포넌트로 분리</b>하는 것을 기본 원칙으로 하며, 초기 개발 속도와 프로토타입
    제작에 유리한 점이 있습니다. 그렇지만, 프로젝트의 규모가 커지고 복잡성이 증가함에 따라 몇 가지 결정적인 단점이
    드러나게 됩니다.
  </p>
  <ul>
    <li> 기능의 모듈 할당이 명확하지 않아, 개발자 간의 혼란이 발생할 수 있습니다.</li>
    <li> 모듈 간의 의존성 관리에 어려움이 있으며, 이로 인해 코드의 재사용성과 유지보수성이 저하됩니다.</li>
    <li> 비즈니스 엔티티의 관리가 비효율적일 수 있으며, 글로벌 함수에 대한 암시적 종속성이 구조를 더욱 복잡하게
      만듭니다.</li>
  </ul>
  <p>
    기능 분할 설계는 이런 단점을 해결하는 방법론으로,
    <b>모듈 간의 결합을 느슨하게 하고, 응집력을 높이는 설계 원칙</b>을 제공합니다. FSD는 각 기능, 컴포넌트, 그리고
    비즈니스 로직을 명확하게 분리하여, 코드의 가독성과 재사용성을 향상시키며, 프로젝트의 확장성과 유지보수성을
    강화합니다.
  </p>
  <p>
    <span>단순 모듈식 아키텍처와 비교했을 때, FSD의 주요 장점은 복잡한 시스템에서도 명확한 구조와 경계를 유지한다는
      것입니다.</span>
    이는 개발 팀이 더 효율적으로 협업할 수 있게 하며, 프로젝트의 규모가 확장됨에 따라 발생할 수 있는 다양한 문제를
    미리 방지합니다.
  </p>
  <p>
    기능 분할 설계는 단순 모듈식 아키텍처보다 높은 초기 학습 곡선을 요구할 수 있지만, 장기적인 프로젝트의 성공을
    위한 투자로 간주되어야 합니다. MVP 개발이나 수명이 짧은 프로젝트의 경우 단순 모듈식 아키텍처가 유용할 수
    있지만, 지속 가능하고 확장성 있는 <span data-spell="application">애플리케이션</span>을 구축하려는 경우에는
    기능 분할 설계가 더 적합한 접근 방식입니다.
  </p>
  <h4>Next.js와 기능 분할 설계의 통합</h4>
  <p>
    Next.js와 기능 분할 설계를 함께 사용하는 경향은 현대 웹 개발에서 점점 더 증가하고 있습니다. 이 Next.js와 기능
    분할 설계 방법론의 결합은 고도의 유연성과 확장성을 제공하며, 대규모
    <span data-spell="application">애플리케이션</span> 개발의 복잡성을 관리할 수 있는 효과적인 방법을 제시합니다.
    그렇지만, Next.js와의 통합 과정에서 <b>페이지 라우팅과 애플리케이션 구조</b>와 같은 특정 영역에서 충돌이
    발생할 수 있습니다.
  </p>
  <h5>Pages</h5>
  <p>
    Next.js의 pages 디렉토리는 <span data-spell="application">애플리케이션</span> 내의 각 페이지에 대한 라우팅을
    자동으로 처리합니다. 반면, FSD에서는 pages 레이어가 애플리케이션의 페이지들을 담고 있는 구조로 사용됩니다. 이
    두 접근 방식의 충돌을 해결하기 위한 한 가지 방법은 Next.js의 페이지를 <code>[root]/pages/</code>에 배치하고,
    FSD의 페이지 구조를 <code>[root]/src/pages/</code> 내에 두는 것입니다. 이런 구조를 통해 Next.js의 라우팅
    시스템과 FSD의 모듈화된 페이지 관리를 모두 활용할 수 있는 방법을 구현 할 수 있습니다.
  </p>
  <p>
    다른 접근 방식으로는 <b>pages-flat</b>과 <b>pages</b>라는 두 개의 별도 디렉토리를 유지하는 것입니다. 이 방식은
    실제 페이지 코드를 <b>pages-flat</b>에 저장하고, 필요에 따라 <b>pages</b>로 내보내는 구조를 만듭니다. 이는
    Next.js의 파일 기반 라우팅 시스템과 FSD의 페이지 구조 사이의 충돌을 해결하는 또 다른 유연한 방법입니다.
  </p>
  <h5>App</h5>
  <p>
    Next.js는 app 레이어의 기본 기능을 내장하고 있으며, 페이지와 독립적으로 전체
    <span data-spell="application">애플리케이션</span>에 대해 실행해야 할 경우, 레이아웃 패턴을 사용하여 이를
    관리할 수 있습니다. Next.js의 레이아웃 패턴은 전체 애플리케이션에 걸쳐 일관된 레이아웃을 제공하는 강력한
    방법으로, 이 접근 방식은 Next.js의 라우팅 기능과 FSD의 구조적 이점을 결합하여, 개발자가 더 세밀하게
    애플리케이션의 구조를 제어할 수 있게 합니다.
  </p>
  <ul>
    <li>
      <a href="https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern" target="_blank" data-target="external" data-title="Next.js Layout Pattern">Next.js Layout Pattern</a>
    </li>
  </ul>
  <p>
    Next.js와 FSD의 통합은 현대 웹 개발의 복잡성을 효과적으로 관리하고, 대규모
    <span data-spell="application">애플리케이션</span>의 유지보수와 확장을 용이하게 하는 방법을 제공합니다. 이런
    통합을 통해 개발자는 Next.js의 빠른 개발 속도와
    <span data-spell="Search Engine Optimization">SEO</span> 친화적인 라우팅 시스템, 그리고 FSD의 체계적이고
    모듈화된 아키텍처의 장점을 모두 활용할 수 있습니다.
  </p>
</div>
<div>
  <h3>기능 분할 설계의 전망과 장단점</h3>
  <p>
    기능 분할 설계(FSD)는 현대 웹 개발 분야에서 갈수록 중요한 위치를 차지하고 있습니다.
    <b>은행, 핀테크, <span data-spell="business to business">B2B</span>, 전자상거래</b>와 같은 다양한 산업에서
    이미 FSD의 효과를 경험하고 있으며, 기업들이 직면한 복잡한 도전과제를 해결하는데 기여하고 있습니다. 이런
    사실들로, FSD의 잠재력은 매우 높게 평가되며, Github와 같은 플랫폼에서의 활발한 커뮤니티 참여와 높은 별점으로도
    입증되고 있습니다.
  </p>
  <p>
    FSD는 아키텍처의 구성 요소를 <b>유연하게 교체, 추가, 또는 제거</b>할 수 있는 능력을 제공합니다. 이러한
    유연성은 프로젝트의 확장성을 보장하며, 개발 스택과 독립적으로 적용될 수 있는 아키텍처 표준화를 가능하게
    합니다. 또한, FSD는 모듈 간의 연결을 제어하고 명시적으로 만듦으로써, 예기치 않은 부작용 없이 시스템을
    안정적으로 유지할 수 있도록 하며, 아키텍처 방법론이 비즈니스 지향적이라는 점 또한 주목할 만한 장점입니다.
  </p>
  <p>
    그러나 FSD를 도입하고 활용하기 위해서는 높은 진입 장벽을 극복해야만 합니다. 이는 새로운 아키텍처 방법론에 대한
    충분한 인식과 팀 문화의 변화, 개념의 준수를 필요로 하는 것으로서, FSD는 단기적인 문제 해결에 그치지 않고,
    장기적인 관점에서 코드의 문제점과 개념에서 벗어난 부분을 즉시 확인하고 해결해야 하는 철학을 내포하고 있기
    때문입니다. 즉, FSD의 이런 접근 방식은 초기에는 도전적일 수 있지만, 결과적으로 프로젝트의 품질과 지속 가능성을
    크게 향상시키는 장점으로 작용할 수 있습니다.
  </p>
  <p>
    FSD는 적절하게 적용될 경우 주도적인 아키텍처 솔루션으로서의 위치를 확고히 할 것으로 보이며, 이는 단순히
    기술적인 문제 해결을 넘어, 개발 프로세스와 조직 문화에 긍정적인 변화를 가져올 잠재력을 지니고 있는 것으로
    평가됩니다.
  </p>
</div>
<div>
  <h3>참고 자료</h3>
  <ul>
    <li>
      <b>공식문서:</b>
      <a href="https://feature-sliced.design/" target="_blank" data-target="external">https://feature-sliced.design/</a>
    </li>
    <li>
      <b>예제 1. Github Client:</b>
      <a href="https://github.com/ani-team/github-client" target="_blank" data-target="external">https://github.com/ani-team/github-client</a>
    </li>
    <li>
      <b>예제 2. Nike Sneaker and Footwear Store:</b>
      <a href="https://github.com/noveogroup-amorgunov/nukeapp" target="_blank" data-target="external">https://github.com/noveogroup-amorgunov/nukeapp</a>
    </li>
    <li>
      <b>예제 3. Sudoku:</b>
      <a href="https://github.com/Shiyan7/sudoku-effector" target="_blank" data-target="external">https://github.com/Shiyan7/sudoku-effector</a>
    </li>
    <li>
      <b>참고 기사:</b> Yan Levin,
      <a href="https://dev.to/m_midas/feature-sliced-design-the-best-frontend-architecture-4noj" target="_blank" data-target="external" data-title="Feature-Sliced Design: The Best Frontend Architecture">"Feature-Sliced Design: The Best Frontend Architecture"</a>
    </li>
  </ul>
</div>
</section>`;
