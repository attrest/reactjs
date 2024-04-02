export const contentHtml = `<section>
<p>
  리액트와 같은 현대적인 프레임워크에서 컴포넌트 기반 개발은 어떻게 우리가 웹
  <span data-spell="application">애플리케이션</span>을 설계하고 구축하는지 근본적으로 변화시켰는데, 과거의
  <b>container-presentational</b> 패턴에서 볼 수 있듯이, 컴포넌트의 재사용성과 관심사의 분리는 개발자들 사이에서
  중요한 고려 사항이 되었습니다. 그렇지만 이런 패턴을 사용하면서, 개발자들은 시간이 지남에 따라 컴포넌트를
  관리하는 데 있어 몇 가지 문제에 직면하게 됩니다.
</p>
<div>
  <h3>컴포넌트 개발시 겪는 일반적인 문제들</h3>
  <p>
    웹 개발에서 컴포넌트의 파편화와 명확한 설계 기준의 부재는 프로젝트의 진행을 느리게 하고, 유지보수의 복잡성을
    증가시킵니다. 예를 들어, <b>디자인 시스템 내에서 관리되지 않은 버튼</b>이 있다면, 이 버튼은 페이지마다 다른
    폰트 크기, 배경색, 테두리 둥글기 등을 가질 수 있습니다. 이로 인해 디자이너나 유관 부서와의 소통이 불필요하게
    복잡해지며, 개발 팀은 여러 버전의 버튼을 유지보수해야 하는 부담을 짊어지게 됩니다.
  </p>
  <p>
    또한, <b>컴포넌트 구조 설계 시 명확한 기준이 없다면</b>, 팀원들은 각자의 생각하는 기준에 따라 컴포넌트를
    나누게 됩니다. 이러한 상황은 성격이 비슷한 컴포넌트끼리 묶어 여러 방식으로 페이지를 표현할 수 있음에도
    불구하고, 관심사가 너무 많거나 재사용 및 확장이 어려운 컴포넌트를 만들어내는 문제를 초래합니다. 무엇보다,
    <span>기준이 명확하지 않으면 코드 리뷰와 같은 중요한 개발 과정이 어려워지고, 결과적으로 좋은 구조의 컴포넌트를
      만드는 데 큰 장애가 됩니다.</span>
  </p>
  <p>
    이런 문제들을 해결하는 효과적인 방법 중 하나로 제안된 것이 바로 <b>Atomic Design System</b>입니다.
    <span data-spell-viewer="Atoms">Atomic Design System은 디자인과 개발 과정을 체계화하여 각 컴포넌트가 일관된 규칙에 따라 생성되고 유지보수될
      수 있게 만들기 위한 방법론입니다]. 이 시스템은 [원자</span>, <span data-spell-viewer="Molecules">분자</span>, <span data-spell-viewer="Organisms">유기체</span>,
    <span data-spell-viewer="Templates">템플릿</span>, <span data-spell-viewer="Pages">페이지</span>로 이루어진
    계층적 구조를 통해, 컴포넌트의 재사용성을 극대화하고, 디자인의 일관성을 보장합니다. 따라서, Atomic Design
    System을 통해 개발 팀은 명확한 설계 기준을 마련하고, 프로젝트 전반의 유지보수를 단순화할 수 있습니다.
  </p>
</div>
<div>
  <h3>아토믹 디자인의 구조</h3>
  <p>
    아토믹 디자인 시스템의 구현은 디지털 인터페이스 설계와 개발의 패러다임을 전환합니다. Brad Frost에 따르면,
    <span>디자인 시스템은 조직이 디지털 인터페이스를 디자인하고 구축하는 방식에 대한 컴프리헨시브 가이드입니다.</span>
    이런 시스템은 서비스의 고유한 타이포그래피, 컬러 팔레트, UI 컴포넌트와
    <span data-spell-viewer="variants">변형</span>, 레이아웃/그리드 시스템 등을 포함하는 여러 하위 시스템으로
    구성되는데, 아토믹 디자인은 이 모든 요소를 체계적으로 관리하고 조화롭게 통합하는
    <a href="https://bradfrost.com/blog/post/design-systems-are-for-user-interfaces/" target="_blank" data-target="external" data-title="design systems are for user interface">방법론</a>을 제공합니다.
  </p>
  <figure>
    <img src="/img/atomic/atomic-design-system-01.png" alt="" loading="lazy">
    <figcaption><cite>atomicdesign.bradfrost.com</cite></figcaption>
  </figure>
  <p>
    <a href="https://atomicdesign.bradfrost.com/chapter-2/" target="_blank" data-target="external" data-title="Atomic Design Methodology">아토믹 디자인</a>의 핵심은 모든 것을 <span data-spell-viewer="Atoms">원자</span>로 보고, 이 원자들이 결합하여
    <span data-spell-viewer="Molecules">분자</span>를 형성하며, 분자가 다시
    <span data-spell-viewer="Organisms">유기체</span>로 결합해 전체를 이룬다는 점입니다. 이 방식은 디자인 요소를
    분해하고 재조합하는 과정에서 높은 수준의 일관성과 재사용 가능성을 보장합니다.
  </p>
  <p>
    단계별로 컴포넌트를 <b>atom, molecule, organism, template, pag</b>e의 5가지 레벨로 나누는 아토믹 디자인은,
    추상적인 개념에서 구체적인 구현으로 점진적으로 발전시키는 단계별 기준을 가지고 있으며, 이 과정을 통해 개발자와
    디자이너가 일관성을 유지하며 프로젝트를 확장하여, 최종 콘텐츠를 효과적으로 제공할 수 있습니다.
  </p>
  <p>
    이런
    <span>아토믹 디자인의 접근 방식은 디자인 시스템 내에서 발생할 수 있는 문제를 해결하고, 팀 간의 커뮤니케이션을
      강화합니다.</span>
    또한, 공통 컴포넌트의 정의와 관리를 통해 디자인의 기초 요소들을 일관되게 유지할 수 있으며, 이는 프로젝트의
    복잡성을 줄이고 유지보수를 간소화하고, 다양한 화면 크기와 플랫폼에서의 일관된 사용자 경험을 보장하는 데에도
    중요한 역할을 합니다.
  </p>
  <h4>1. Atom</h4>
  <p>
    아토믹 디자인 시스템에서 <b>"Atom"</b>은 디자인의 기본 블록을 의미합니다. 즉,
    <span>Atom은 더 이상 분해할 수 없는 기본 컴포넌트로, 가장 단순한 형태의 UI 요소를 말합니다.</span>
    이는 <b>label, input, button</b> 같은 기본 HTML element 태그뿐만 아니라,
    <b>글꼴, 애니메이션, 컬러 팔레트, 레이아웃</b> 같이 더 추상적인 요소도 포함할 수 있습니다.
  </p>
  <p>
    하지만, atom은 그 자체로는 추상적인 개념을 표현할 수 있는 반면, 단일 컴포넌트로 사용하기에는 어려움이 있을 수
    있습니다. 예를 들어, 레이아웃과 같은 atom은 그 자체로 실제 페이지에서 바로 사용하기에는 유용하지 않을 수
    있으며, 이런 이유로, atom은 보통 다른 atom과 결합하여 더 복잡한 <b>"Molecule"</b> 혹은
    <b>"Organism"</b> 단위를 형성함으로써, 실제 디자인에서 유용하게 사용될 수 있습니다.
  </p>
  <figure>
    <img src="/img/atomic/atomic-design-system-02.png" alt="" loading="lazy">
    <figcaption><cite>label, input, button atom</cite></figcaption>
  </figure>
  <h4>2. Molecule</h4>
  <p>
    <span>"Molecule"은 아토믹 디자인 시스템에서 조금 더 복잡한 단계를 나타내며, 여러 개의 Atom을 결합하여 자신만의
      고유한 특성을 가지게 됩니다.</span>
    예를 들어, <b>button</b>과 <b>input</b>을 결합하면, 사용자가 정보를 입력하고 버튼을 클릭하여 그 정보를
    전송하는 <b>form</b>이라는 <b>Molecule</b>을 형성할 수 있습니다. 이런 Molecule의 중요한 특징 중 하나는 하나의
    명확한 기능을 수행한다는 것으로, <span data-spell-viewer="SRP">Single Responsibility Principle</span>의 원칙을
    따르며, 이로 인해 특정 기능이 필요한 곳 어디서든 재사용될 수 있습니다.
  </p>
  <p>
    Molecule의 SRP는 크게 세 가지 주요 이점을 제공하는데, 바로 재사용성, UI에서의 일관성, 그리고 테스트를 하기가
    용이하다는 것입니다. 이는 개발자와 디자이너가 더 효율적으로 작업할 수 있게 해주며, 사용자 경험의 일관성을
    유지하는 데에도 크게 기여합니다.
  </p>
  <figure>
    <img src="/img/atomic/atomic-design-system-03.png" alt="" loading="lazy">
    <figcaption><cite>search form molecule</cite></figcaption>
  </figure>
  <h4>3. Organism</h4>
  <p>
    <b>"Organism"</b>은 아토믹 디자인 시스템에서 더 복잡한 구조를 나타냅니다.
    <b>Organism은 명확한 영역과 특정 컨텍스트를 가지고, 서비스 내에서 표현될 수 있습니다]. 이 단계에서는 Atom과
      Molecule, 그리고 필요에 따라 다른 Organism까지 조합하여 사용할 수 있는데, 예를 들어, 웹사이트의 header는
      [logo(Atom)</b>, <b>navigation(Molecule)</b>, <b>search form(Molecule)</b>을 포함하여 구성될 수 있습니다. 이러한 조합을 통해
    특정 기능을 수행하는, 완성도 높은 인터페이스 부분이 완성됩니다.
  </p>
  <p>
    <span>Organism의 중요한 특징 중 하나는 좀 더 구체적으로 표현되고, 특정 컨텍스트를 가진다는 점입니다.</span>
    이는 Organism을 특정 부분에서만 사용할 수 있게 하며, <b>Atom</b>이나 <b>Molecule</b>에 비해 재사용성이
    상대적으로 낮다는 특성을 갖게 합니다. 하지만, 이러한 특성 때문에 Organism은 웹사이트나 앱의 구체적인 부분을
    더욱 효과적으로 설계하고 구현할 수 있게 됩니다.
  </p>
  <figure>
    <img src="/img/atomic/atomic-design-system-04.png" alt="" loading="lazy">
    <figcaption><cite>header organism</cite></figcaption>
  </figure>
  <h4>4. Template</h4>
  <p>
    <b>"Template"</b>는 아토믹 디자인 시스템에서 실제 페이지를 만들기 위한 기반이 됩니다.
    <span>Template는 여러 개의 Organism과 Molecule로 구성되며, 실제 컴포넌트들을 레이아웃에 배치하여 구조를 잡는
      와이어프레임입니다.</span>
    이는 실제 콘텐츠가 없는 페이지 수준의 스켈레톤으로 정의할 수 있으며, 디자인의 전반적인 구조와 흐름을
    시각화하는 데 중요한 역할을 합니다.
  </p>
  <p>
    Template 단계의 핵심은 실제 콘텐츠를 배치하기 전에, 페이지가 어떻게 구성될지에 대한 명확한 틀을 제공한다는
    점으로, 이런 접근 방식은 개발 과정에 유연성을 제공하며, 다양한 콘텐츠가 삽입되어도 일관된 사용자 경험을 유지할
    수 있게 합니다.
  </p>
  <figure>
    <img src="/img/atomic/atomic-design-system-05.png" alt="" loading="lazy">
    <figcaption>
      <cite>layout이 적용된 molecule과 organism으로 구성된 template</cite>
    </figcaption>
  </figure>
  <h4>5. Page</h4>
  <p>
    <b>"Page"</b>는 아토믹 디자인 시스템에서 최종 사용자에게 보여지는 실제 콘텐츠와 인터페이스의 결합을
    나타냅니다.
    <span>Page는 유저가 볼 수 있는 실제 콘텐츠를 담고 있는 Template의 인스턴스라고 할 수 있으며, 이 단계에서는
      디자인의 구조와 레이아웃이 실제 콘텐츠와 만나고, 사용자가 경험할 최종 페이지의 모습이 완성됩니다.</span>
  </p>
  <p>
    예를 들어, 장바구니 페이지라면, 사용자가 상품을 하나도 담지 않았을 때의 모습과 10개의 상품을 담았을 때의
    모습은 같은 Template을 기반으로 하지만, 실제로 담긴 콘텐츠에 따라 다르게 보이게 됩니다. 이는 다양한 콘텐츠를
    Template에 적용하여 생성된 다양한 Page 인스턴스를 볼 수 있음을 의미합니다.
  </p>
  <p>
    <span>Page 단계에서의 주요 과제는 Template이 제공하는 구조 내에서 실제 콘텐츠와 인터랙션을 효과적으로 통합하여,
      사용자에게 최적의 경험을 제공하는 것입니다.</span>
    이를 통해 사용자는 기능적이며, 시각적으로 일관성 있는 인터페이스를 경험할 수 있습니다.
  </p>
  <figure>
    <img src="/img/atomic/atomic-design-system-06.png" alt="" loading="lazy">
    <figcaption>
      <cite>여러가지 콘텐츠를 template에 적용하여 최종 UI를 보여주는 page</cite>
    </figcaption>
  </figure>
  <h4>선형 프로세스가 아닌 멘탈 모델</h4>
  <p>
    아토믹 디자인을 처음 접하는 사람들은 종종 이를 단순한 선형적 프로세스로 오해할 수 있습니다. 하지만
    <span>아토믹 디자인은 선형 프로세스가 아닌, UI를 응집력 있는 전체와 그 구성 요소들로 생각할 수 있도록 돕는 멘탈
      모델입니다.</span>
    이는 단순히 <b>button</b>과 같은 요소들을 개별적으로 디자인한 후 모든 것을 합쳐 응집력 있는 전체를 만드는
    방식이 아니라는 의미입니다.
  </p>
  <p>
    실제로, 단순한 선형적 프로세스로만 볼 때, 아토믹 디자인의 단위를 나누는 기준은 주관적일 수 있고, 팀원 간 이
    기준을 좁히는 데 상당한 시간을 소요할 수 있습니다. 초기에는 Brad Frost의 아토믹 디자인이 제시한 기준대로
    컴포넌트를 나누면 될 것이라고 생각할 수 있지만, 실제로는 프로젝트의 특성과 팀의 요구에 맞추어 조정하는 과정이
    필요합니다. 따라서 아토믹 디자인을 적용할 때는 팀 내에서 공유되는 이해와 합의가 중요하며, 이를 통해 UI
    모델링을 진행하는 것이 바람직합니다.
  </p>
</div>
<div>
  <h3>아토믹 디자인을 적용하면서 주의할 점들</h3>
  <h4>Molecule과 Organism 을 나누는 기준의 주관성</h4>
  <p>
    아토믹 디자인을 적용하면서 가장 주의해야 할 점 중 하나는
    <b>Molecule과 Organism을 나누는 기준의 주관성</b>입니다. <b>Molecule</b>은 Atom으로 구성되며,
    <span data-spell-viewer="SRP">Single Responsibility Principle</span>에 따라 하나의 책임만을 지니게 됩니다.
    반면, <b>Organism</b>은 Atom, Molecule, 그리고 때때로 다른 Organism으로 구성되어, 서비스에서 <b>Layout</b>을
    기준으로 나눌 수 있는 명확한 영역을 갖게 됩니다.
  </p>
  <p>
    컴포넌트에 컨텍스트가 있는 경우라면 Organism으로 분류되며, 컨텍스트 없이 UI적인 요소로 SRP를 지킬 수 있다면
    재사용하기 쉬운 Molecule로 작성됩니다. 즉, 이런 기준에 따르면,
    <span>Molecule의 컴포넌트 네이밍은 주로 UI적인 네이밍이 포함되어야 하고, Organism 네이밍은 컨텍스트를 반영해야
      합니다.</span>
    만약 기준이 모호한 경우라면, 일단 Organism으로 작성한 후 코드 리뷰를 통해 적절하게 변경할 수 있도록 팀 내에서
    논의를 하는 것이 좋습니다.
  </p>
  <figure>
    <img src="/img/atomic/atomic-design-system-07.png" alt="" loading="lazy">
    <figcaption><cite>molecule과 organism 컴포넌트</cite></figcaption>
  </figure>
  <h4>Organism을 나누는 기준</h4>
  <p>
    <span>Organism을 나누는 기준은 UI에서 명확한 영역을 가지는 것입니다.</span> 하지만 이
    <b>'명확한 영역'</b>에 대한 정의는 상당히 주관적일 수 있으며, 결과적으로 여러 가지 방식으로 해석될 수
    있습니다. Organism을 나누는 방법에는 크게 두 가지 접근 방식이 있습니다:
  </p>
  <ul>
    <li>
      <b>큰 영역으로 나누기:</b> A와 같이 UI의 큰 영역 전체를 하나의 Organism으로 간주할 수 있습니다. 이 방식은
      보다 큰 단위의 영역을 한 번에 관리하려 할 때 유용할 수 있습니다.
    </li>
    <li>
      <b>비슷한 유형의 책임을 그루핑하여 구분하기:</b> B와 같이 공통된 컨텍스트를 기반으로 비슷한 유형의 책임을
      가진 구성요소들을 그룹화하여 Organism을 정의할 수 있습니다. [이 방식은 적당한 책임을 가진 컴포넌트를 작성할
      수 있게 해주며, 네이밍보다는 Organism 영역을 어떻게 구분했는지에 집중하는 것이 중요]합니다.
    </li>
  </ul>
  <p>
    예를 들어, <b>"CommentListToolbar"</b> 컴포넌트는 댓글 데이터를 다루는 책임을 가지고 있으며,
    <b>"Comment"</b> 컴포넌트는 레이아웃에서 댓글을 리스트로 표현할 때 여백 처리를 쉽게 할 수 있는 구조를
    제공합니다. 이런 접근 방식은 공통된 컨텍스트 내에서 각 컴포넌트의 역할을 명확히 하여, <b>Organism</b>의 정의를
    더욱 명확하게 하고, 프로젝트 전반의 일관성을 유지하는 데 도움을 줍니다.
  </p>
  <h4>중복 컴포넌트가 생기거나 불필요한 Props이 증가하는 약간 다른 Organism의 문제</h4>
  <p>
    <span>아토믹 디자인을 적용하면서 발생할 수 있는 문제 중 하나는 약간 다른 Organism에 대해 중복 컴포넌트가 생기거나
      불필요한 Props이 증가하는 것입니다.</span>
    예를 들어, <b>Comment</b> 컴포넌트에서 댓글 아이콘과 댓글 개수 영역이 빠지거나 프로필 사진, 닉네임, 댓글
    작성일이 한 줄로 표시되어야 하는 요구 사항이 추가될 수 있습니다.
  </p>
  <p>
    이 경우, 새로운 Organism을 만들거나 기존 컴포넌트에 추가 Props를 받는 방법을 고려할 수 있지만,
    <span>새로운 컴포넌트를 만드는 것은 비슷한 컴포넌트의 중복을 초래할 수 있고, Props의 경우에도 마찬가지로 문제가
      될 수 있습니다.</span>
  </p>
  <p>
    이에 대한 해결책 중 하나로, <b>Organism</b> 내에서 <b>Compound</b> 컴포넌트를 이용하는 방법이 있습니다.
    Compound 컴포넌트는 컴포넌트 구조에 유연하게 대처할 수 있게 하며, Organism의 정의를 다시 하거나 다른 단위의
    아토믹 컴포넌트로 재정의하여 문제를 해결할 수 있습니다.
  </p>
  <div>
    <pre data-lang="react">      &lt;Comment&gt;
  &lt;div&gt;
    &lt;Comment.ProfileImage src="profile-image-url.jpg" /&gt;
    &lt;Comment.Name&gt;사용자 이름&lt;/Comment.Name&gt;
    &lt;Comment.Info&gt;추가 정보&lt;/Comment.Info&gt;
  &lt;/div&gt;
  &lt;Comment.Content&gt;댓글 내용입니다.&lt;/Comment.Content&gt;
  &lt;div&gt;
    &lt;Icon type={IconType.Heart} /&gt;
    {/* ... 추가 컴포넌트 */}
  &lt;/div&gt;
&lt;/Comment&gt;</pre>
  </div>
  <p>
    위와 같이
    <span>컴포넌트를 객체처럼 구성하고 점(.) 표기법을 사용해 하위 컴포넌트에 접근하는 패턴은 주로 라이브러리나
      프레임워크 내에서 컴포넌트의 확장성과 모듈성을 높이는 데 사용됩니다.</span>
    이 방식은 컴포넌트 간의 계층 관계를 명확하게 표현하고, 관련 컴포넌트들을 그룹화하여 관리하기 용이하며,
    사용자가 필요한 하위 컴포넌트만을 선택적으로 사용할 수 있게 해, 유연성을 높입니다.
  </p>
  <p>
    다음은 Comment 컴포넌트와 그 하위 컴포넌트들(ProfileImage, Name, Info, Content)을 생성하고, 점 표기법으로
    접근하는 방법에 대한 예시입니다:
  </p>
  <div>
    <pre data-lang="react">      import React, { ReactNode } from 'react';

// Comment 컴포넌트의 Props 타입 정의
interface CommentProps {
  children: ReactNode;
}

const Comment: React.FC&lt;CommentProps&gt; &amp; {
  ProfileImage: React.FC&lt;ProfileImageProps&gt;;
  Name: React.FC&lt;NameProps&gt;;
  Info: React.FC&lt;InfoProps&gt;;
  Content: React.FC&lt;ContentProps&gt;;
} = ({ children }) =&gt; {
  return &lt;div&gt;{children}&lt;/div&gt;;
};

// ProfileImage 컴포넌트의 Props 타입 정의
interface ProfileImageProps {
  src: string;
}

Comment.ProfileImage = function ProfileImage({ src }: ProfileImageProps) {
  return &lt;img src={src} alt="profile" /&gt;;
};

// Name 컴포넌트의 Props 타입 정의
interface NameProps {
  children: ReactNode;
}

Comment.Name = function Name({ children }: NameProps) {
  return &lt;div&gt;{children}&lt;/div&gt;;
};

// Info 컴포넌트의 Props 타입 정의
interface InfoProps {
  children: ReactNode;
}

Comment.Info = function Info({ children }: InfoProps) {
  return &lt;div&gt;{children}&lt;/div&gt;;
};

// Content 컴포넌트의 Props 타입 정의
interface ContentProps {
  children: ReactNode;
}

Comment.Content = function Content({ children }: ContentProps) {
  return &lt;div&gt;{children}&lt;/div&gt;;
};

// Icon 컴포넌트와 IconType enum
enum IconType {
  Heart = "heart",
  // 기타 아이콘 타입 정의
}

interface IconProps {
  type: IconType;
}

const Icon: React.FC&lt;IconProps&gt; = ({ type }) =&gt; {
  // 아이콘을 렌더링하는 로직
  return &lt;div&gt;Icon: {type}&lt;/div&gt;;
};

// 사용 예
function App() {
  return (
    &lt;Comment&gt;
      &lt;div&gt;
        &lt;Comment.ProfileImage src="profile-image-url.jpg" /&gt;
        &lt;Comment.Name&gt;사용자 이름&lt;/Comment.Name&gt;
        &lt;Comment.Info&gt;추가 정보&lt;/Comment.Info&gt;
      &lt;/div&gt;
      &lt;Comment.Content&gt;댓글 내용입니다.&lt;/Comment.Content&gt;
      &lt;div&gt;
        &lt;Icon type={IconType.Heart} /&gt;
        {/* ... 추가 컴포넌트 */}
      &lt;/div&gt;
    &lt;/Comment&gt;
  );
}

export default App;</pre>
  </div>
  <p>
    이 예시처럼 Comment 컴포넌트는 자식 컴포넌트들을 래핑하는 역할을 하며, 실제 UI 구성 요소들은 Comment의 하위
    컴포넌트(ProfileImage, Name, Info, Content)로 정의됩니다. 각 하위 컴포넌트는 Comment 객체의 속성으로 할당되어,
    외부에서 접근이 가능합니다.
  </p>
</div>
<div>
  <h3>결론</h3>
  <p>아토믹 디자인 시스템의 장점과 단점은 다음과 같습니다:</p>
  <h4>장점</h4>
  <ul>
    <li>
      <span>디자인 시스템 구성에 있어서 가이드라인으로 활용할 수 있습니다.</span> 이는
      개발자와 디자이너가 보다 일관된 인터페이스를 개발할 수 있도록 도와줍니다.
    </li>
    <li>
      <span>애플리케이션과 분리하여 컴포넌트를 개발하고 테스트할 수 있습니다.</span> 스타일
      가이드와 같은 도구에서 볼 수 있으며, 이는 개발 과정의 효율성을 높입니다.
    </li>
    <li>
      <span>컴포넌트의 재사용성이 극대화됩니다.</span> 이로 인해 개발 시간과 비용을
      절약하고, 프로젝트 전반의 유지보수가 용이해집니다.
    </li>
  </ul>
  <h4>단점</h4>
  <ul>
    <li>
      <span>의존성과 복잡도가 까다로울 수 있습니다.</span> 예를 들어, 특정 컴포넌트에서
      필요한 변경 사항을 적용하기 위해 Props를 추가하거나 새로운 컴포넌트를 만드는 등의 선택은 개발 과정을
      복잡하게 만들 수 있습니다.
    </li>
    <li>
      Props로 해결할 경우, 어디까지 Props로 지정해야 할지 모호해질 수 있으며, 새로운 컴포넌트를 만들 경우,
      컴포넌트가 무한 증식될 수 있고, 재사용성이 떨어지고, 각 컴포넌트의 기능을 명확하게 구분하기 어려워질 수
      있습니다.
    </li>
  </ul>
  <p>
    앞에서 살펴본 것 처럼, 아토믹 디자인 방법론을 무조건적으로 따르기보다는, 웹 개발과 디자인 환경에 맞는 장치나
    규칙을 만들며 디자인 시스템을 구축해 나가는 것이 중요합니다. 아토믹 디자인을 도입함으로써 얻을 수 있는 장점을
    최대화하고 단점을 최소화하기 위해서는 프로젝트의 특성을 고려한 유연한 접근 방식이 필요합니다.
  </p>
</div>
</section>`;
