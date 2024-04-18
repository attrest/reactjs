export const contentHtml = `<p>
  웹 개발에 있어 애니메이션은 사용자 경험을 풍부하게 만들고, 웹사이트에 생동감을 불어넣는 중요한 요소입니다.
  <span data-spell-viewer="GreenSock Animation Platform">GSAP</span>는 타임라인 기반의 자바스크립트 라이브러리로,
  다양한 웹 프레임워크와의 호환성과 뛰어난 성능으로 많은 개발자들의 선택을 받고 있는데, GSAP의 주요 장점은 다음과
  같습니다:
</p>
<ul>
  <li>
    <b>높은 점유율:</b> Vue와 React, 두 가장 인기 있는 프론트엔드 프레임워크를 모두 지원하며, 관련 자바스크립트
    기반 라이브러리 중 가장 높은 점유율을 자랑합니다.
  </li>
  <li>
    <b>성능 우위:</b> 비슷한 점유율을 보이는 다른 인기있는 애니메이션 라이브러리인 MIT 라이센스의
    <a href="https://animejs.com/" target="_blank" data-target="external" data-title="Anime.js">Anime.js</a>와
    비교했을 때, GSAP가 성능상의 우위를 보입니다.
  </li>
  <li>
    <b>유연성:</b> 타임라인 기반의 애니메이션 제어는 복잡한 애니메이션 시퀀스를 쉽게 구현할 수 있게 해주어,
    개발자에게 큰 유연성을 제공합니다.
  </li>
</ul>
<p>
  하지만, GSAP는 오픈소스가 아니며, 일부 추가 기능은 상용 라이센스를 요구하는 만큼, 필요한 기능을 제공하고 있는지
  확인 할 필요가 있으며, 이는 프로젝트의 <span data-spell="budget">예산</span>이나 라이센스 정책에 따라 고려해야
  할 부분입니다. GSAP를 시작하기 위해서는, 공식 문서와 스타터 템플릿을 활용할 수 있습니다:
</p>
<ul>
  <li>
    GSAP Docs:
    <a href="https://gsap.com/docs/v3/" target="_blank" data-target="external">https://gsap.com/docs/v3/</a>
  </li>
  <li>
    GSAP React:
    <a href="https://gsap.com/resources/React/" target="_blank" data-target="external">https://gsap.com/resources/React/</a>
  </li>
  <li>
    Starter Templates:
    <a href="https://gsap.com/resources/frameworks?_highlight=vue#starter-templates" target="_blank" data-target="external">https://gsap.com/resources/frameworks?_highlight=vue#starter-templates</a>
  </li>
  <li>
    GSAP &amp; Vue3 Starters:
    <a href="https://stackblitz.com/@GSAP-dev/collections/gsap-vue3-starters" target="_blank" data-target="external">https://stackblitz.com/@GSAP-dev/collections/gsap-vue3-starters</a>
  </li>
  <li>
    Animejs vs GSAP:
    <a href="https://npmtrends.com/animejs-vs-gsap" target="_blank" data-target="external">https://npmtrends.com/animejs-vs-gsap</a>
  </li>
</ul>
<div>
  <h3>GSAP란?</h3>
  <p>
    웹 개발 분야에서 애니메이션은 사용자 경험을 개선하고, 웹사이트나
    <span data-spell="application">애플리케이션</span>에 생동감을 불어넣는 핵심 요소 중 하나입니다. 이러한
    애니메이션을 구현하는 방법은 다양하지만, <b>The GreenSock Animation Platform(GSAP)</b>는 특히 프론트엔드
    개발자와 디자이너들 사이에서 각광받고 있는 타임라인 기반의 애니메이션 자바스크립트 라이브러리입니다.
  </p>
  <p>
    GSAP의 가장 큰 장점은 CSS의 keyframes와 animations를 사용하는 것보다 더욱 정밀한 애니메이션 컨트롤을 가능하게
    하며, 가볍고 사용하기 쉽다는 점으로, 복잡한 애니메이션 효과를 간단하게 구현할 수 있게 해, 개발 과정을 상당히
    단순화시켜줍니다.
  </p>
  <figure>
    <img src="/img/gsap/gsap-timelinebased-animation-javascript-library-01.gif" alt="" loading="lazy">
    <figcaption>
      <cite><a href="https://gsap.com/showcase/" target="_blank">GSAP, showcases</a></cite>
    </figcaption>
  </figure>
  <p>
    또한, GSAP을 사용하면 CSS와 바닐라 자바스크립트만으로는 도달하기 어려운 세밀한 움직임과 동작의 연속성을 훨씬
    쉽게 구현할 수 있습니다. 예를 들어, 스크롤링 기반의 애니메이션 또는 여러 요소가 차례로 움직이는 복잡한
    시퀀스를 구현할 때, 속도, 가속도, 감속, 움직이는 경로 등을 자유롭게 설정할 수 있으며, GSAP의 다양한
    <a href="https://gsap.com/showcase/" target="_blank" data-target="external" data-title="GSAP - showcases">Showcase</a>에서 확인할 수 있는 바와 같이, 웹사이트나 애플리케이션에 놀라운 비주얼 효과를 더할 수 있습니다.
  </p>
  <figure>
    <img src="/img/gsap/gsap-timelinebased-animation-javascript-library-02.gif" alt="" loading="lazy">
    <figcaption>
      <cite><a href="https://gsap.com/showcase/" target="_blank">GSAP, showcases</a></cite>
    </figcaption>
  </figure>
</div>
<div>
  <h3>GSAP의 기능과 장점</h3>
  <p>GSAP의 사용이 많은 웹 개발자들에게 선호되는 이유는 다음과 같은 장점들로 요약됩니다.</p>
  <ul>
    <li>
      <b>성능 및 부드러운 애니메이션:</b>
      <span>GSAP은 하드웨어 가속을 활용하여 탁월한 성능과 부드러운 애니메이션 경험을 제공합니다.</span>
      이는 웹사이트의 렌더링 성능을 최대화하여 사용자에게 매끄러운 인터랙션을 보장합니다.
    </li>
    <li>
      <b>크로스 브라우징 지원:</b>
      <span>GSAP의 애니메이션은 거의 모든 주요 브라우저에서 일관된 경험을 제공합니다.</span>
      이로 인해 개발자는 브라우저 간 호환성 문제에 대해 덜 걱정하면서 프로젝트를 진행할 수 있습니다.
    </li>
    <li>
      <b>강력한 애니메이션 기능:</b> GSAP은 <b>이동, 회전, 크기 조절</b>과 같은 기본적인 애니메이션에서부터 복잡한
      <span data-spell-viewer="Tween">트윈</span>, <span data-spell-viewer="Trigger">트리거</span>,
      <span data-spell-viewer="Sequence">시퀀스</span> 등의 고급 기능을 포함한 광범위한 애니메이션 효과를 구현할
      수 있는 기능을 제공합니다.
    </li>
    <li>
      <b>간편한 사용법:</b> GSAP의 API는 사용하기 쉽고 직관적이며, 개발자가 빠르게 애니메이션을 작성하고 제어할 수
      있도록 설계되어, 애니메이션의 구현 과정을 상당히 단순화시켜줍니다.
    </li>
    <li>
      <b>풍부한 생태계와 지원:</b> GSAP은 활발한 개발자 커뮤니티와 잘 문서화된 자료, 풍부한 온라인 튜토리얼,
      다양한 플러그인을 보유하고 있어, 개발자가 필요한 기능을 쉽게 확장할 수 있습니다.
    </li>
    <li>
      <b>재사용성과 유지보수의 용이성:</b> GSAP을 사용하면 애니메이션 코드를 모듈화하여 재사용할 수 있고, 코드의
      가독성이 뛰어나고 유지보수가 용이하여, 프로젝트의 생산성을 크게 향상시킵니다.
    </li>
    <li>
      <b>다양한 요소에 대한 애니메이션 제어:</b> GSAP은 DOM 요소 뿐만 아니라 CSS 속성, SVG, Canvas 등 다양한
      형태의 요소를 애니메이션할 수 있어, 보다 범용적이고 유용한 라이브러리로 활용할 수 있습니다.
    </li>
  </ul>
</div>
<div>
  <h3>1. GSAP 시작하기</h3>
  <p>
    GSAP를 프로젝트에 도입하는 방법은 크게 두 가지가 있습니다. CDN을 사용하는 방법과 npm을 통한 설치 방법으로
    각각에 대해 설명합니다.
  </p>
  <h4>CDN을 통한 GSAP 설정</h4>
  <p>
    <a href="Content Delivery Network" data-target="article-content">CDN</a>은 데이터를 사용자에게 더 빠르게
    전송할 수 있도록 전 세계에 분산된 서버 네트워크를 활용합니다. GSAP와 같은 라이브러리를 CDN을 통해 사용하는
    것은 몇 가지 장점이 있습니다.
  </p>
  <ul>
    <li>
      <b>속도와 효율성:</b> 사용자의 위치에 가장 가까운 서버에서 라이브러리를 로드하기 때문에 로딩 시간이
      단축됩니다.
    </li>
    <li>
      <b>간편한 설정:</b> 별도의 설치 과정 없이 HTML 문서에 스크립트 태그를 추가하는 것만으로 GSAP 라이브러리를
      사용할 수 있습니다.
    </li>
  </ul>
  <p>
    GSAP를 CDN을 통해 사용하기 위해서는 다음과 같은 스크립트 태그를 HTML 문서의 <code>&lt;head&gt;</code> 태그나
    <code>&lt;body&gt;</code> 태그 끝에 추가하기만 하면 됩니다.
  </p>
  <div>
    <pre data-lang="javascript">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"&gt;&lt;/script&gt;</pre>
  </div>
  <h4>npm을 통한 GSAP 설치 및 사용법</h4>
  <p>
    <a href="Node Package Manager" data-target="article-content">npm</a>을 통한 설치는 모던 웹 개발 환경에서 매우
    일반적인 접근 방식입니다. npm을 사용하면 프로젝트를 의존성으로 관리할 수 있으며, 버전 관리 및 업데이트가
    용이합니다.
  </p>
  <ul>
    <li>
      <b>프로젝트 내에서 관리:</b> 프로젝트의 <b>package.json</b> 파일에 플러그인이 기록되어, 프로젝트와 함께
      버전이 관리됩니다.
    </li>
    <li>
      <b>모듈화된 사용:</b> 필요한 기능만을 가져와 사용할 수 있어, 프로젝트의 크기와 로딩 시간을 최적화할 수
      있습니다.
    </li>
  </ul>
  <p>
    GSAP를 npm을 통해 설치하려면, 터미널 또는 명령 <span data-spell="prompt">프롬프트</span>에서 다음과 같은
    명령어를 실행합니다.
  </p>
  <div>
    <pre data-lang="javascript">npm install gsap</pre>
  </div>
  <p>
    설치가 완료된 후, JavaScript 파일 내에서 GSAP를 다음과 같이 <code>import</code>하여 사용할 수 있습니다.
  </p>
  <div>
    <pre data-lang="javascript">import gsap from 'gsap';
gsap.to('.yourElement', { duration: 1, x: 100 });</pre>
  </div>
</div>`;
