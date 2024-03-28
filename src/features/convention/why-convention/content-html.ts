export const contentHtml = `<section class="section__convention-guide">
<p>
  코딩 컨벤션은 단순히 코드를 예쁘게 꾸미는 것 이상의 의미를 갖습니다. 이것은 프로그래밍 언어를 사용하는 모든
  사람들에게 공통된 언어, 일종의 의사소통 도구로 작용합니다. 하나의 프로젝트에 여러 개발자가 참여하게 되면, 각자의
  스타일로 코드를 작성하게 되는데, 이렇게 되면, 프로젝트는 마치 여러 언어로 쓰인 책처럼 혼란스러워질 수 있습니다.
  코딩 컨벤션은 이러한 혼란을 방지하고, 모든 참여자가 동일한 언어와 스타일로 코드를 작성하게 함으로써, 프로젝트의
  일관성을 유지할 수 있게 돕습니다.
</p>
<p>
  코딩 컨벤션의 가장 큰 장점은 바로 읽고 관리하기 쉬운 코드를 작성할 수 있다는 것입니다. 코드는 단순히 컴퓨터가
  이해할 수 있는 언어가 아닌, 미래의 자신이나 다른 개발자가 이해할 수 있도록 작성되어야 합니다. 즉, 코딩 컨벤션을
  따르는 것은 마치 글쓰기에서 문법을 지키는 것과 같이, 코드에도 '문법'을 적용하는 것입니다. 이로써, 코드의
  가독성이 향상되고, 유지보수가 용이해집니다. 여기서는 코딩 컨벤션에 대한 일반론을 소개합니다.
</p>
<div>
  <h3>마크업 컨벤션의 필요성</h3>
  <p>
    마크업 개발은 단순히 웹사이트나 <span data-spell="application">애플리케이션</span>의 '외양'을 꾸미는 것 이상의
    복잡한 과정을 포함합니다. 이 과정은 디자인, 브라우저의 호환성, 스크립트의 효율성, 웹 사이트의 성능, 그리고
    접근성과 같은 여러 중요한 요소들과 긴밀하게 연결되어 있습니다.
    <span>마크업 컨벤션은 이러한 다양한 요소들 사이의 조화를 이루며, 유지보수 비용을 최소화하기 위한 통일된 코드
      작성법을 제시하기 위한 가이드입니다.</span>
  </p>
  <p>
    웹 개발 프로젝트에서는 코드를 처음 작성한 개발자가 프로젝트의 끝까지 모든 유지보수를 담당하는 경우가 드뭅니다.
    실제로, 대부분의 경우 프로젝트는 시간이 지남에 따라 여러 개발자의 손을 거치게 되는데, 이런 현실적인 측면에서,
    <span>마크업 컨벤션은 최초의 개발자뿐만 아니라 후에 프로젝트에 참여하는 개발자들도 코드를 빠르고 정확하게 이해할
      수 있도록 함으로써, 코드의 유지보수 비용을 절감하고 업무의 효율을 높이는 결정적인 역할을 합니다.</span>
  </p>
  <p>
    따라서, 마크업 컨벤션을 적용하는 것이 개별적인 코딩 스타일의 선택보다 더 중요하며, 가장 중요한 것은 어떤 코딩
    컨벤션을 선택하는지가 아니라, 어떻게 통일된 기준으로 소스 코드를 작성하느냐 일 것입니다. 이렇게 함으로써, 팀
    내의 의사소통이 원활해지고, 프로젝트 전반에 걸쳐 일관성을 유지할 수 있으며, 무엇보다 프로젝트의 품질과
    유지보수성이 크게 향상될 수 있습니다.
  </p>
</div>
<div>
  <h3>코딩 컨벤션 용어 정리</h3>
  <p>
    코딩 컨벤션을 이해하고 적용하기 위해서는 먼저 기본적인 용어들에 대한 이해가 필요합니다. 이 섹션에서는 코딩
    컨벤션에서 자주 사용되는 핵심 용어들을 간략히 정리하고 설명합니다. 이런 용어들은 코드를 작성하고, 해석하며,
    다른 개발자와의 소통을 원활하게 하는 데 필수적인 역할을 합니다.
  </p>
  <ul>
    <li>
      <b>엘리먼트(Element):</b> HTML 문서를 구성하는 기본 단위입니다. 태그라고도 하며, 웹 페이지의 구조를 정의하는
      데 사용됩니다. <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code> 등이 있습니다.
    </li>
    <li>
      <b>애트리뷰트(Attribute):</b> 엘리먼트에 부여할 수 있는 추가 정보를 말합니다. 이는 해당 엘리먼트의 행동이나
      모양을 조정하는 데 사용됩니다. <code>&lt;img src="image.jpg" alt="description"&gt;</code>에서
      <code>src</code>와 <code>alt</code>는 이미지 엘리먼트의 애트리뷰트입니다.
    </li>
    <li>
      <b>선택자(Selector):</b> CSS에서 사용되는 용어로, 스타일을 적용할 HTML 엘리먼트를 식별하는 데 사용됩니다.
      선택자의 예로는 <b>태그 이름, 클래스 이름, ID 등</b>이 있으며, 이를 통해 특정 엘리먼트나 엘리먼트 그룹에
      스타일 규칙을 적용할 수 있습니다.
    </li>
    <li>
      <b>컴포넌트(Component):</b> 재사용 가능한 UI 구성 요소를 말합니다. 하나 이상의 기능 또는 역할을 가지며, 모던
      웹 개발에서는 이러한 컴포넌트를 조합하여 복잡한 사용자 인터페이스를 구성합니다. 예를 들어,
      <b>버튼, 입력 필드, 네비게이션 바 등</b>이 컴포넌트의 예가 될 수 있습니다.
    </li>
  </ul>
  <p>
    용어의 의미를 정확하게 아는 것은 개발자들 사이의 커뮤니케이션을 용이하게 하며, 코드의 구조와 의도를 명확하게
    전달하는 데 핵심적인 역할을 합니다.
    <span>특히, 팀 내 혹은 오픈 소스 커뮤니티에서 협업할 때, 이런 용어들에 대한 명확한 이해는 프로젝트의 효율성과
      품질을 크게 향상시킬 수 있으며, 코드를 작성하거나 리뷰할 때, 이 용어들을 정확히 알고 사용하는 것은 원활한
      의사소통과 효율적인 코드 관리의 첫걸음입니다.</span>
  </p>
</div>
<div>
  <h3>일반적인 Syntax 규칙</h3>
  <p>
    코딩 컨벤션의 <b>Syntax</b> 규칙은 코드의 가독성과 일관성을 높이는 데 매우 중요한 역할을 하며, 이런 규칙의
    목적은 개발자가 코드를 더 빠르고 정확하게 이해할 수 있도록 돕는데 있습니다. 이런 기본적인 Syntax 규칙을
    따름으로써, 코드의 품질과 프로젝트의 유지보수성을 크게 개선할 수 있습니다.
  </p>
  <ul>
    <li>
      <b>들여쓰기:</b> 코드의 구조를 명확하게 보여주는 핵심 요소입니다. 일반적으로 2개의 공백 문자(소프트 탭) 혹은
      4개의 공백 문자(하드 탭)를 사용하는 것이 권장되며, 이를 통해 코드의 계층 구조를 눈에 띄게 하여, 읽기 쉽고
      이해하기 쉬운 코드를 만듭니다.
    </li>
    <li>
      <b>엘리먼트 명과 애트리뷰트 명의 작성:</b> <span data-spell-viewer="Snake Case">스네이크 표기법</span> 또는
      <span data-spell-viewer="Camel Case">카멜 표기법</span>,
      <span data-spell-viewer="Kebab Case">케밥 표기법</span>을 사용하여 모든 엘리먼트 명과 애트리뷰트 명을
      작성합니다. 이 방식은 단어 사이에 언더스코어(_), 대시(-), 대문자 등을 사용하여 구분하며, 코드의 일관성을
      유지하고 가독성을 향상시킵니다.
    </li>
    <li>
      <b>애트리뷰트 값의 표기:</b> 모든 애트리뷰트 값은 큰 따옴표("")로 감싸야 합니다. 이는 HTML 및 XML 문서의
      표준 규칙으로, 값의 시작과 끝을 명확하게 표시해야 합니다.
    </li>
    <li>
      <b>닫는 태그:</b> 선택적으로 생략이 가능한 닫는 태그도 생략하지 않고 명시하는 것이 좋습니다. 예를 들어,
      <b>&lt;/li&gt;</b>, <b>&lt;/body&gt;</b>와 같은 태그는 생략하지 않음으로써 문서의 정확성을 보장합니다.
    </li>
    <li>
      <b>빈 줄의 사용:</b> 코드 사이의 빈 줄은 1줄을 초과하지 않아야 합니다. 이는 코드의 구분을 명확하게 하고,
      과도한 공백의 사용을 방지합니다.
    </li>
  </ul>
</div>
<div>
  <h3>Doctype</h3>
  <p>문서는 HTML5 <span data-spell-viewer="Document Type Definition">DTD</span>로 선언합니다.</p>
  <div>
    <pre data-lang="html">&lt;!DOCTYPE html&gt;</pre>
  </div>
  <p>
    HTML5에서는 <code>&lt;input&gt;</code>과 <code>&lt;br&gt;</code> 같은 태그를 닫지 않아도 되며, 이는 HTML5의
    유연성과 간소화된 문법을 반영하여 개발자들이 더 깔끔하고 간결한 코드를 작성할 수 있게 합니다. 특히, HTML5는
    멀티미디어 콘텐츠의 통합, 그래픽 작업, 성능 향상 등 다양한 측면에서 이전 버전보다 크게 개선된 정의인 만큼,
    이런 최신 웹 표준을 준수하고, 이에 따른 마크업 기법을 숙지하고 적용하는 것이 중요합니다.
  </p>
  <p>
    HTML5에서는 <span data-spell-viewer="Self-Closing Tags">자기 마침 태그</span>에 후행 슬래시<b>(/)</b>를
    사용하지 않습니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- Bad --&gt;
&lt;input /&gt;
&lt;br /&gt;

&lt;!-- Good --&gt;
&lt;input&gt;
&lt;br&gt;</pre>
  </div>
</div>
<div>
  <h3>Naming Rule</h3>
  <p>
    명확하고 일관된 네이밍 규칙은 코드의 가독성을 높이고, 유지보수를 용이하게 하는 데 결정적인 역할을 합니다.
    네이밍 규칙은 코드 내에서 <b>변수, 함수, 클래스, ID 등</b>의 이름을 어떻게 지정할지에 대한 지침을 제공합니다.
    일반적으로 이름은 영문 소문자, 숫자, 언더스코어(_)로 작성해야 하며, 이는 코드의 일관성을 유지하고, 다른
    개발자가 코드를 이해하는 데 도움이 됩니다.
  </p>
  <h4>id, class Naming Rule</h4>
  <p>
    HTML과 CSS에서 id와 class의 네이밍 규칙은 더욱 중요합니다.
    <span>id는 문서 전체에서 고유한 식별자이므로, 한 문서 내에서 동일한 id를 여러 번 사용하지 않아야 합니다.</span>
    id는 주로 JavaScript에서 요소를 선택하거나 CSS에서 특정한 스타일을 적용하는 데 사용됩니다. 반면, class는 문서
    내에서 여러 번 사용할 수 있으며, 주로 스타일을 적용하는 데 사용됩니다. 일반적으로, 레이아웃 요소를 제외한
    id에는 스타일을 지정하지 않는데, 이는 id와 class의 역할을 명확히 구분하는 데 도움이 됩니다.
  </p>
  <p>
    코딩 컨벤션을 통해 이런 네이밍 규칙을 적용함으로써, 코드는 더욱 체계적이고 일관성 있게 관리될 수 있는데, 이는
    결국 개발자 간의 협업 시 코드의 명확한 전달과 이해를 가능하게 하며, 프로젝트의 품질을 높이는 데 기여합니다.
  </p>
</div>
<div>
  <h3>HTML 코드 작성 규칙</h3>
  <p>
    웹 개발 과정에서 HTML 코드의 품질을 보장하는 것은 매우 중요합니다. 이를 위해,
    <span>HTML 문서는 <span data-spell-viewer="World Wide Web Consortium">W3C</span>의 명세에 맞게 작성되어야 하며,
      W3C Validation을 통과해야 합니다.</span>
    이 과정은 코드가 웹 표준을 준수하고 있음을 보장하며, 브라우저 간 호환성 및 웹 접근성을 향상시키는 데 중요한
    역할을 합니다.
  </p>
  <h4>기본 규칙</h4>
  <p>
    DTD를 제외한 모든 엘리먼트와 애트리뷰트는 소문자로 작성되어야 하며, 이를 통해 코드의 일관성을 유지하고,
    가독성을 향상시킬 수 있습니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- Bad --&gt;
&lt;SPAN Class="Desc"&gt;설명&lt;/SPAN&gt;

&lt;!-- Good --&gt;
&lt;span class="desc"&gt;설명&lt;/span&gt;</pre>
  </div>
  <h4>주요 HTML 엘리먼트 작성 규칙</h4>
  <p>
    웹 접근성은 모든 사용자가 웹 사이트의 정보와 기능에 동등하게 접근할 수 있도록 보장하는 것을 목표로 합니다.
    이를 위해
    <span>HTML 엘리먼트를 작성할 때는 몇 가지 핵심 규칙을 따라야 하며, <code>label</code>, <code>title</code>,
      <code>alt</code> 애트리뷰트 등을 사용하여 스크린 리더 사용자가 주변 맥락에 대한 이해 없이도 각 요소에
      독립적으로 접근하여 폼을 이해할 수 있도록 해야 합니다.</span>
    이는 HTML 문서의 접근성을 크게 향상시키는 기법입니다.
  </p>
  <h5>input 요소</h5>
  <ul>
    <li>
      <b>type이 text인 경우:</b> 동일한 스타일의 텍스트 필드에 대해, 너비 값을 다르게 설정하고자 할 때는
      <code>style</code> 애트리뷰트를 사용하여 <code>width</code> 값을 직접 제어하는 것이 좋습니다. 이는 불필요한
      클래스 생성을 방지하며, 코드를 깔끔하게 유지합니다.
    </li>
    <li>
      <b>type이 radio 또는 checkbox인 경우:</b> 항목들을 그룹핑하기 위해 <code>name</code> 애트리뷰트를 선택적으로
      사용합니다. 이는 폼 요소의 그룹핑을 명확히 하여, 사용자가 폼을 이해하고 작성하는 데 도움이 됩니다.
    </li>
    <li>
      <b>type이 image인 경우:</b> <code>alt</code> 애트리뷰트는 반드시 선언해야 합니다. 이는 이미지가 로드되지
      않는 환경에서도 사용자가 이미지의 내용을 이해할 수 있도록 합니다.
    </li>
  </ul>
  <div>
    <pre data-lang="html">&lt;!-- Bad --&gt;
&lt;input type="text" class="input input--width-120"&gt;
&lt;input type="text" class="input input--width-180"&gt;

&lt;!-- Good --&gt;
&lt;input type="text" class="input" style="width:120px"&gt;
&lt;input type="text" class="input" style="width:180px"&gt;</pre>
  </div>
  <h5>label 요소</h5>
  <p>
    <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>와 같은 폼 요소에는
    <code>for</code> 애트리뷰트를 부여하여 해당 요소의 <code>id</code> 값과 동일한 이름으로 연결합니다. 이는
    레이블과 폼 요소 간의 명확한 관계를 설정하며, 접근성을 향상시킵니다. 단, 레이블 명이 위치할 공간이 없는
    경우에는 <code>title</code> 애트리뷰트로 대체할 수 있습니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- for, id를 이용하는 방법 --&gt;
&lt;input type="radio" name="alignment" id="align_left"&gt;
&lt;label for="align_left"&gt;왼쪽 정렬&lt;/label&gt;

&lt;!-- &lt;label&gt;안에 &lt;input&gt; 엘리먼트를 넣는 방법 --&gt;
&lt;label&gt;&lt;input type="checkbox" name="alignment"&gt;왼쪽 정렬&lt;/label&gt;</pre>
  </div>
  <h5>img 요소</h5>
  <p>
    <code>img</code> 요소를 사용할 때는 <code>src</code>, <code>width</code>, <code>height</code>,
    <code>title</code>, <code>alt</code>, <code>usemap</code> 애트리뷰트를 선택적으로 선언합니다. 특히,
    <code>src</code>와 <code>alt</code> 애트리뷰트에는 <code>import</code>한 이름과 동일한 값을 표기하여, 이미지를
    볼 수 없는 환경에서도 내용을 확인할 수 있게 해주는 것이 좋습니다. <code>title</code> 애트리뷰트는 브라우저에서
    독립적으로 툴팁을 표현하기 위해 사용되며, <code>alt</code> 애트리뷰트와 함께 선언되어야 합니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- import, src, alt 애트리뷰트 사용 예 --&gt;
import EventBanner from '../../event_banner01.jpg'

&lt;img src={EventBanner} alt="EventBanner"&gt;
&lt;img src={EventBanner} width="30" height="10" title="이벤트 배너" alt="이벤트 배너" usemap="#event_banner"&gt;</pre>
  </div>
  <h4>HTML 애트리뷰트 작성 규칙</h4>
  <p>
    <span>엘리먼트에서 class와 style을 선언할 때는 선언 순서를 준수해야 하며, 이들을 제일 뒷부분에 선언하는 것이
      좋습니다.</span>
    이 규칙은 코드의 일관성을 유지하고, 다른 개발자가 코드를 더 쉽게 이해하고 수정할 수 있도록 돕습니다.
    애트리뷰트의 순서를 비슷하게 유지함으로써, 코드를 검색하고 읽기 편해집니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- Good --&gt;
&lt;input type="text" id="user_id" title="사용자" class="input-txt" style="width:100px"&gt;</pre>
  </div>
  <h5>애트리뷰트의 선언 순서</h5>
  <ul>
    <li>type / src</li>
    <li>id / title / name</li>
    <li>class</li>
    <li>style</li>
  </ul>
  <h5>Boolean 애트리뷰트</h5>
  <p>
    Boolean 애트리뷰트는 HTML5에서 Boolean 애트리뷰트를 선언하는 것만으로도 true 값을 가지게 됩니다. 따라서,
    필요하지 않다면 Boolean 값을 명시적으로 작성하지 않는 것이 좋습니다. 이는 코드를 더 깔끔하게 유지하고, 의도치
    않은 오류를 방지하는 데 도움이 됩니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- Not Bad --&gt;
&lt;button disabled="true"&gt;&lt;/button&gt;

&lt;!-- Good --&gt;
&lt;button disabled&gt;&lt;/button&gt;</pre>
  </div>
  <h5>name 애트리뷰트</h5>
  <p>
    <span>name 애트리뷰트는 비즈니스 로직을 작성하는 언어의 네이밍 규칙에 맞게 작성하는 것이 권장됩니다.</span>
    예를 들어, <b>Snake Case</b>를 사용하는 경우, 동일한 네이밍 규칙을 HTML 내의 <code>name</code> 애트리뷰트에도
    적용해야 합니다. 이런 일관된 네이밍 전략은 코드의 가독성과 유지보수성을 크게 향상시킵니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- Snake Case --&gt;
&lt;form class="form" id="my_form" name="my_form"&gt;
&lt;input class="input" type="text" id="my_user_name" name="my_user_name"&gt;
&lt;/form&gt;</pre>
  </div>
  <p>
    HTML 코드 작성 시 이러한 베스트 프랙티스를 따름으로써, 개발자는 더 나은 웹 표준 준수, 브라우저 호환성, 그리고
    접근성을 보장할 수 있으며, 이는 최종적으로 사용자 경험의 향상으로 이어질 수 있습니다.
  </p>
</div>
<div>
  <h3>마치며</h3>
  <p>
    코딩 컨벤션은 단순히 코드를 '잘' 작성하는 것 이상의 깊은 의미를 갖습니다. 이는 개발자들 사이의 효과적인
    의사소통, 코드의 일관성 유지, 그리고 프로젝트의 유지보수성 향상을 목표로,
    <span>코딩 컨벤션을 따르는 것은 마치 글쓰기에서 문법을 준수하는 것과 같이, 코드에도 '문법'을 적용하여 가독성을
      높이고, 이해를 용이하게 하는 방법입니다.</span>
    이를 통해 코드는 더욱 직관적으로 작성될 수 있으며, 개발 과정에서 발생할 수 있는 오류를 줄이고, 팀 내외의
    협업을 원활하게 합니다.
  </p>
  <p>
    코딩 컨벤션의 범위는 네이밍 규칙에서부터, 문법의 사용, HTML 엘리먼트의 작성 방법에 이르기까지 다양하지만,
    <span>W3C Validation을 통과하는 HTML 코드 작성, 접근성을 고려한 폼 요소의 사용, 그리고 명확한 네이밍 규칙의
      적용은 모든 개발자가 지향해야 할 기본적인 코딩의 표준이라고 할 수 있습니다.</span>
    이런 규칙을 통해, 개발자는 코드의 품질을 높이고, 프로젝트의 성공 가능성을 크게 향상시킬 수 있습니다.
  </p>
</div>
</section>`;
