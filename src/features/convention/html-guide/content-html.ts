export const contentHtml = `<section class="section__convention-guide">
<p>
  HTML 코드 작성에 관한 규칙은 웹 페이지 개발의 기본이며, 코드의 가독성과 유지보수성을 크게 향상시킵니다. 먼저
  스타일 가이드에 자주 사용되는 용어의 정의를 설명합니다.
</p>
<div>
  <h3>1. 용어</h3>
  <ul>
    <li><b>엘리먼트(Element):</b> HTML 문서를 구성하는 요소(태그)를 의미합니다.</li>
    <li><b>애트리뷰트(Attribute):</b> 엘리먼트에 부여할 수 있는 특성을 의미합니다.</li>
    <li><b>선택자(Selector):</b> 엘리먼트를 식별할 수 있는 이름을 의미합니다.</li>
    <li>
      <b>스타일(Style):</b> 엘리먼트에 부여할 <span data-spell-viewer="Style Sheet">스타일 시트</span>를 의미하며,
      <span data-spell-viewer="Inline Style">인라인 스타일</span>,
      <span data-spell-viewer="Internal Style">내부 스타일</span>,
      <span data-spell-viewer="External Style">외부 스타일</span>, CSS의 네가지로 구분합니다.
    </li>
    <li><b>프로퍼티(Property):</b> 스타일과 관련된 문맥일 경우 스타일 시트의 속성을 의미합니다.</li>
    <li><b>프리픽스(Prefix)와 서픽스(Suffix):</b> 네이밍 시 사용되는 접두사, 접미사를 의미합니다.</li>
    <li><b>컴포넌트(Component):</b> 하나 이상의 기능 또는 역할을 가진 컨텐츠 단위의 UI 구성요소를 의미합니다.</li>
  </ul>
</div>
<div>
  <h3>2. 기본 규칙 및 주석</h3>
  <ul>
    <li>
      <b>들여쓰기는 2개의 공백 문자(소프트탭)를 사용하세요:</b> 이는 코드의 구조를 눈에 띄게 하여 가독성을
      높입니다. 물론, 팀 내에서 다른 규칙으로 통일하여 작성하는 것도 가능합니다.
    </li>
    <li>
      <b>모든 엘리먼트 명과 애트리뷰트 명은 케밥 표기법(kebab-case)으로 작성하세요:</b> 단어와 단어 사이에
      하이픈(-, Hyphen)을 사용하여 작성하세요. HTML 요소의 명명 규칙에 일관성을 부여합니다.
    </li>
    <li>
      <b>모든 애트리뷰트 값은 큰 따옴표(")로 감싸세요:</b> 이는 HTML 표준 규칙을 따르는 것으로, 값의 시작과 끝을
      명확하게 합니다.
    </li>
    <li><b>닫는 태그가 선택적이라도 생략하지 마세요:</b> 이 규칙은 HTML 문서의 정확성을 보장합니다.</li>
  </ul>
  <h4>주석 표시</h4>
  <p>
    <span>기본 주석은 <code>&lt;!-- ---&gt;</code>으로 표기하며, 수정사항 등을 기재하기 위한 주석에는 년도와 날짜,
      수정 내용을 반드시 표기해야 합니다.</span>
    이는 코드의 변경 사항을 추적하고 이해하는 데 도움이 됩니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- START: 20240326 수정 및 추가 --&gt;
&lt;div&gt;수정 내용&lt;/div&gt;
&lt;!-- END: 20240326 수정 및 추가 --&gt;</pre>
  </div>
</div>
<div>
  <h3>3. Doctype</h3>
  <p>
    <span>Doctype은 HTML5 DTD로 선언하세요.</span> 이는 문서가 HTML5 표준을 따르고 있음을
    명시하는 것으로, 웹 페이지의 호환성과 정확한 렌더링을 보장하는 데 필수적입니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!DOCTYPE html&gt;</pre>
  </div>
  <p>
    <span><span data-spell-viewer="Self-Closing Tags">자기 마침 태그</span> 사용 시, 후행 슬래시(/)를 사용하지
      마세요.</span>
    HTML5에서는 이러한 슬래시가 필요하지 않으며, 불필요한 문법을 제거하여 코드의 간결성을 유지하는 데 도움이
    됩니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- Bad --&gt;
&lt;input /&gt;
&lt;br /&gt;

&lt;!-- Good --&gt;
&lt;input&gt;
&lt;br&gt;</pre>
  </div>
  <p>
    <span><code>&lt;html&gt;</code> 태그에 <code>lang</code> 애트리뷰트를 선언하세요.</span>
    이는 <b>User Agent</b>가 문서의 언어를 올바르게 해석하도록 돕고,
    <span data-spell="Search Engine Optimization">검색 엔진 최적화</span> 및
    <span data-spell-viewer="speech synthesizers">음성 장치</span>에 중요한 역할을 합니다. 언어 코드는 문서 전체의
    주요 언어를 나타냅니다.
  </p>
  <div>
    <pre data-lang="html">&lt;html lang="ko"&gt;</pre>
  </div>
  <p>
    <span><code>lang</code> 애트리뷰트는 User Agent가 언어를 올바로 해석할 수 있게 도와주며, 검색과 음성 장치에
      활용됩니다.</span>
    또한, 문서의 주 언어 코드를 명확히 선언하는 것은 국제화된 콘텐츠의 접근성을 높이는 데 기여하며, 이 규칙들을
    준수함으로써, 개발자는 웹 페이지가 다양한 브라우저와 장치에서 올바르게 작동하고, 사용자에게 최적의 경험을
    제공할 수 있도록 보장할 수 있습니다.
  </p>
</div>
<div>
  <h3>4. &lt;head&gt; Metadata</h3>
  <p>
    <code>&lt;head&gt;</code> 엘리먼트 내부의 메타데이터 작성은 웹 페이지의 기본 설정과
    <span data-spell="Search Engine Optimization">검색 엔진 최적화</span>에 중요한 역할을 합니다. 이러한 설정들은
    웹 페이지가 브라우저와 다양한 디바이스에서 올바르게 표시되고 인식될 수 있도록 돕습니다.
  </p>
  <p>
    <span>문서의 언어셋은 UTF-8로 선언하세요.</span> 이는 국제적인 문자 지원을 가능하게
    하며, 모든 텍스트와 문자가 정확하게 표현되도록 합니다.
  </p>
  <div>
    <pre data-lang="html">&lt;meta charset="utf-8"&gt;</pre>
  </div>
  <p>
    <span>PC용 웹사이트는 최신 버전의 IE로 렌더링하기 위해 문서모드를 Edge로 선언하세요.</span>
    이는 웹사이트가 <b>Internet Explorer</b>에서도 최신 표준에 따라 올바르게 렌더링되도록 합니다.
  </p>
  <div>
    <pre data-lang="html">&lt;meta http-equiv="X-UA-Compatible" content="IE=Edge"&gt;</pre>
  </div>
  <p>
    <code>&lt;head&gt;</code> 엘리먼트의 자식 엘리먼트는 아래의 순서대로 작성하는 것이 좋습니다:
  </p>
  <ul>
    <li>Charset</li>
    <li>X-UA-Compatible</li>
    <li>Viewport</li>
    <li>Title</li>
    <li>Meta</li>
    <li>Style</li>
    <li>JavaScript</li>
  </ul>
  <p>
    이 순서는 웹 페이지가 로드될 때 필수 정보들이 우선적으로 처리되도록 하며, 효율적인 페이지 로딩과 렌더링을
    지원합니다.
  </p>
  <div>
    <pre data-lang="html">&lt;meta charset="utf-8"&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi"&gt;
&lt;title&gt;Hello, World!&lt;/title&gt;
&lt;meta property="og:title" content="Hello, World!" /&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;script src="script.js"&gt;&lt;/script&gt;</pre>
  </div>
</div>
<div>
  <h3>5. Elements</h3>
  <h4>1. &lt;body&gt; 래퍼 엘리먼트</h4>
  <p>
    <span>본문의 화면 조작을 위해, 필요에 따라 본문을 숨기거나 본문 위에 다른 레이어 엘리먼트가 겹칠 수 있는 상황을
      고려하여 본문을 래퍼 엘리먼트에 작성하세요.</span>
  </p>
  <div>
    <pre data-lang="html">&lt;body&gt;
&lt;div id="app"&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
&lt;/div&gt;
&lt;div role="dialog" class="dialog"&gt;&lt;/div&gt;
&lt;/body&gt;</pre>
  </div>
  <h4>2. 스타일 제어가 어려운 엘리먼트</h4>
  <p>
    <span>스타일 제어에 한계가 있는 엘리먼트(예: <code>&lt;table&gt;</code>, <code>&lt;select&gt;</code>)는
      유지보수를 용이하게 하기 위해 <code>&lt;div&gt;</code>나 <code>&lt;span&gt;</code> 엘리먼트로 감싸는 것을
      권장합니다.</span>
    이는 나중에 발생할 유지보수를 고려한 조치입니다. 불필요한 엘리먼트 상속은 피해야 합니다!
  </p>
  <div>
    <pre data-lang="html">&lt;!-- Not Bad --&gt;
&lt;table class="table"&gt;&lt;/table&gt;
&lt;select class="combobox"&gt;&lt;/select&gt;

&lt;!-- Good --&gt;
&lt;div class="table"&gt;
&lt;table&gt;&lt;/table&gt;
&lt;/div&gt;
&lt;span class="combobox"&gt;
&lt;select&gt;&lt;/select&gt;
&lt;/span&gt;</pre>
  </div>
  <h4>3. 테이블 제목</h4>
  <p>
    <span><code>&lt;caption&gt;</code> 엘리먼트의 뷰를 숨길 때는 새로운 엘리먼트로 감싸서 숨기세요.</span>
    이 방법은 브라우저에 따라 발생할 수 있는 스타일 깨짐 문제를 방지합니다.
    <span>테이블의 제목이 필요없거나 이미 제공되었다면 생략하고, 컨텐츠를 중복 제공하는 것을 피하세요.</span>
    <code>aria-labelledby</code> 애트리뷰트의 사용이 권장됩니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- Bad --&gt;
&lt;table&gt;
&lt;caption class="blind"&gt;My Caption&lt;/caption&gt;
&lt;/table&gt;

&lt;!-- Good --&gt;
&lt;table&gt;
&lt;caption&gt;
  &lt;div class="blind"&gt;My Caption&lt;/div&gt;
&lt;/caption&gt;
&lt;/table&gt;</pre>
  </div>
  <div>
    <pre data-lang="html">&lt;!-- Bad --&gt;
&lt;h4&gt;Table Title&lt;/h4&gt;
&lt;table&gt;
&lt;caption&gt;
  &lt;div class="blind"&gt;My Caption&lt;/div&gt;
&lt;/caption&gt;
&lt;/table&gt;

&lt;!-- Not Bad --&gt;
&lt;h4&gt;Table Title&lt;/h4&gt;
&lt;table&gt;&lt;/table&gt;

&lt;!-- Good --&gt;
&lt;h4 id="my_table"&gt;Table Title&lt;/h4&gt;
&lt;table aria-labelledby="my_table"&gt;&lt;/table&gt;</pre>
  </div>
  <h4>4. 입력 필드</h4>
  <p>
    <span>회원가입 폼의 입력 필드처럼 너비, 높이가 유동적인 경우, 인라인 스타일로 제어하세요.</span>
    이는 불필요한 클래스 생성을 방지하며, 코드를 더 깔끔하게 유지하는 데 도움이 됩니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- Bad --&gt;
&lt;input type="text" class="input input__width-120"&gt;
&lt;input type="text" class="input input__width-180"&gt;

&lt;!-- Good --&gt;
&lt;input type="text" class="input" style="width:120px"&gt;
&lt;input type="text" class="input" style="width:180px"&gt;</pre>
  </div>
  <p>
    이러한 규칙들은 HTML 문서의 접근성, 가독성, 그리고 유지보스성을 향상시키는 데 중요한 역할을 합니다. 개발
    과정에서 이러한 베스트 프랙티스를 따르는 것은, 모든 사용자가 웹 사이트를 원활하게 이용할 수 있도록 보장하는
    동시에, 나중에 발생할 수 있는 유지보수의 부담을 줄여줍니다.
  </p>
</div>
<div>
  <h3>6. Attributes</h3>
  <p>
    HTML에서 애트리뷰트를 사용할 때 명확한 규칙과 순서를 따르는 것은 코드의 가독성과 유지보수성을 향상시키는 데
    중요합니다.
  </p>
  <h4>1. 선언 순서</h4>
  <p>
    <span>애트리뷰트는 변하지 않는 것부터 먼저 선언하세요.</span> 이 규칙은 애트리뷰트의
    순서를 일관되게 유지하여, 비슷한 엘리먼트들 사이에서 검색과 이해를 용이하게 합니다.
  </p>
  <div>
    <pre data-lang="html">&lt;input class="input" type="text" id="user_id" name="UserId" title="아이디" style="width:120px"&gt;
&lt;input class="input" type="password" id="user_pw" name="UserPw" title="비밀번호" style="width:120px"&gt;</pre>
  </div>
  <h4>2. Boolean 애트리뷰트</h4>
  <p>
    <span>HTML5에서는 Boolean 애트리뷰트를 선언하는 것 만으로도 <code>true</code> 값을 가집니다.</span>
    필요하지 않다면 <b>Boolean</b> 애트리뷰트의 값을 명시적으로 작성하지 마세요. 이는 코드를 더 간결하게 유지하며,
    의도를 명확히 전달하는 데 도움이 됩니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- Not Bad --&gt;
&lt;button disabled="true"&gt;&lt;/button&gt;

&lt;!-- Good --&gt;
&lt;button disabled&gt;&lt;/button&gt;</pre>
  </div>
  <h4>3. name 애트리뷰트</h4>
  <p>
    <span><code>name</code> 애트리뷰트 값은 비즈니스 로직을 작성하는 언어의 네이밍 규칙에 맞게 작성하는 것을
      권장합니다.</span>
    이는 코드의 일관성을 유지하고, 다른 개발자가 코드를 이해하고 유지보수하는 데 도움이 됩니다.
  </p>
  <div>
    <pre data-lang="html">&lt;!-- PascalCase --&gt;
&lt;form class="form" id="my_form" name="MyForm"&gt;
&lt;input class="input" type="text" id="my_user_name" name="MyUserName"&gt;
&lt;/form&gt;</pre>
  </div>
  <p>
    이러한 애트리뷰트 작성 규칙과 순서는 HTML 문서의 구조를 더 명확하게 하고, 향후 코드 수정이나 추가 개발 시
    시간을 절약할 수 있게 합니다. 코드를 처음 작성할 때 조금 더 세심한 주의를 기울임으로써, 장기적으로 보다
    깨끗하고 유지보수가 용이한 코드 베이스를 구축할 수 있습니다.
  </p>
</div>
<div>
  <h3>7. Import</h3>
  <p>
    HTML5에서 <b>CSS</b>와 <b>JavaScript(JS)</b> 파일을 불러올 때의 규칙은 웹 페이지의 로딩 속도와 성능에 직접적인
    영향을 미칩니다.
  </p>
  <ul>
    <li>
      <code>HTML5에서 CSS와 JS 파일을 불러올 때 [type</code> 애트리뷰트는 이미 기본값을 가집니다.@note] 필요하지
      않다면 이를 선언하지 마세요. 이 규칙은 코드의 간결성을 유지하며, 불필요한 선언으로 인한 혼란을 방지합니다.
    </li>
    <li>
      <code>[&lt;script&gt;</code> 엘리먼트는 가급적 <code>&lt;head&gt;</code> 또는
      <code>&lt;body&gt;</code> 엘리먼트의 가장 마지막에 작성하세요.@note] 웹브라우저는
      <code>&lt;script&gt;</code> 엘리먼트를 만나면, 그 처리가 끝날 때까지 HTML 파싱을 멈추기 때문입니다. 이는 웹
      페이지의 로딩 시간에 영향을 줄 수 있으므로, 사용자 경험을 개선하기 위해 스크립트 로딩을 페이지 로딩의 맨
      마지막 단계로 미루는 것이 좋습니다.
    </li>
  </ul>
  <p>
    이러한 규칙을 따름으로써, 개발자는 웹 페이지의 로딩 속도를 개선하고, 사용자에게 더욱 부드러운 웹 사이트 방문
    경험을 제공할 수 있습니다. 특히, 모던 웹 개발에서 성능 최적화는 중요한 고려 사항 중 하나이므로, 이와 같은
    베스트 프랙티스를 적극적으로 적용하는 것이 권장됩니다.
  </p>
</div>
<div>
  <h3>8. Form</h3>
  <p>
    폼 요소는 사용자 인터랙션의 중심이므로, 그것들을 마크업할 때는 명확한 구조와 접근성을 고려해야 합니다.
  </p>
  <p>
    <span>폼 컨트롤 요소를 마크업할 때는 <code>&lt;form&gt;</code>, <code>&lt;fieldset&gt;</code>,
      <code>&lt;legend&gt;</code> 요소를 사용하여 선언합니다.</span>
    이 구조는 폼 요소의 의미를 분명히 하고, 사용자가 폼을 이해하기 쉽게 만듭니다.
  </p>
  <div>
    <pre data-lang="html">&lt;form&gt;
&lt;fieldset&gt;
&lt;legend&gt;개인정보&lt;/legend&gt;
...
&lt;/fieldset&gt;
&lt;/form&gt;</pre>
  </div>
  <h4>1. fieldset</h4>
  <p>
    <code>&lt;fieldset&gt;</code>은 <code>&lt;form&gt;</code> 요소의 자식 노드로 선언하여 폼 컨트롤 요소들을
    그루핑하기 위해 사용됩니다. 이는 폼 내 요소들의 관계를 명확히 하여, 폼의 구조를 더 잘 이해할 수 있게 합니다.
  </p>
  <div>
    <pre data-lang="html">&lt;form&gt;
&lt;fieldset&gt;
&lt;legend&gt;개인정보&lt;/legend&gt;
…
&lt;/fieldset&gt;
&lt;/form&gt;</pre>
  </div>
  <h4>2. legend</h4>
  <p>
    <code>&lt;legend&gt;</code>는 폼 컨트롤 그룹인 <code>&lt;fieldset&gt;</code>의 자식 요소로서, 폼 컨트롤
    요소들의 그룹 이름을 표현하기 위해 사용됩니다. 이는 그룹의 목적을 사용자에게 명확히 전달하는 데 중요합니다.
  </p>
  <div>
    <pre data-lang="html">&lt;form&gt;
&lt;fieldset&gt;
&lt;legend&gt;개인 정보&lt;/legend&gt;
…
&lt;/fieldset&gt;
&lt;/form&gt;</pre>
  </div>
  <h4>3. input</h4>
  <p>
    <span>스크린 리더 사용자는 <code>&lt;label&gt;</code> 요소, <code>title</code> 애트리뷰트,
      <code>alt</code> 애트리뷰트를 통해 각 요소에 독립적으로 접근해도 폼을 이해할 수 있습니다.</span>
    이는 폼의 접근성을 크게 향상시킵니다.
  </p>
  <div>
    <pre data-lang="html">&lt;label for="user_id"&gt;아이디&lt;/label&gt; &lt;input type="text" id="user_id" name="user_id"&gt;
&lt;input type="image" src="btn_confirm.gif" alt="확인"&gt;
&lt;input type="text" id="num1" name="num1" title="지역번호"&gt;
&lt;input type="text" id="num2" name="num" title="국번"&gt;
&lt;input type="text" id="num3" name=”num” title="전화번호"&gt;</pre>
  </div>
  <h5>type이 text인 경우</h5>
  <ul>
    <li>
      동일한 스타일의 텍스트필드이나 너비값이 다를 경우 <code>style</code> 애트리뷰트를 이용하여
      <code>width</code> 값을
    </li>
    <li>제어합니다.</li>
    <li>
      <code>type</code>이 <code>radio</code>, <code>checkbox</code>인 경우, 선택적으로
      <code>name</code> 애트리뷰트를 이용하여 항목 그룹을 만듭니다.
    </li>
    <li>기본 선택에 대한 표현이 필요할 경우 <code>checked="checked"</code>라고 표기합니다.</li>
  </ul>
  <h5>type이 image인 경우</h5>
  <p><code>alt</code> 애트리뷰트를 반드시 선언합니다.</p>
  <h5>type 이 file인 경우</h5>
  <div>
    <pre data-lang="html">&lt;input type="image" src="img/btn_confirm.gif" alt="확인"&gt;
#PRE lang=html



<code>type</code> 애트리뷰트를 선언합니다.

#PRE lang=html
&lt;input type="file"&gt;</pre>
  </div>
  <h5>type 이 button, reset, submit 인 경우</h5>
  <p><code>type</code> 애트리뷰트를 선언합니다.</p>
  <div>
    <pre data-lang="html">&lt;input type="button"&gt;</pre>
  </div>
  <h4>4. select</h4>
  <p>
    <span>동일한 스타일의 셀렉트 박스나 너비 값이 다른 경우, 선택적으로 <code>style</code> 애트리뷰트를 이용하여
      <code>width</code> 값을 제어합니다.</span>
    이는 스타일 제어의 유연성을 제공하며, 불필요한 클래스 생성을 방지합니다.
  </p>
  <div>
    <pre data-lang="html">&lt;label for="grade"&gt;등급&lt;/label&gt;
&lt;select id="grade" style="width:100px"&gt;
&lt;option&gt;1등급&lt;/option&gt;
&lt;option&gt;2등급&lt;/option&gt;
&lt;/select&gt;

&lt;select title="등급" style="width:100px"&gt;
&lt;option&gt;등급&lt;/option&gt;
&lt;/select&gt;</pre>
  </div>
  <h4>5. label</h4>
  <p>
    <code>&lt;label&gt;</code> 요소는 <code>for</code> 애트리뷰트를 부여하여 해당 요소의 <code>id</code> 값과
    동일한 이름으로 연결합니다. 이는 폼 요소와 레이블 사이의 명확한 연결을 생성하여, 폼의 접근성을 향상시킵니다.
  </p>
  <div>
    <pre data-lang="html">&lt;input type="radio" name="alignment" id="align_left"&gt;
&lt;label for="align_lft"&gt;왼쪽 정렬&lt;/label&gt;

&lt;input type="checkbox" name="alignment" id="align_right"&gt;
&lt;label for="align_right"&gt;오른쪽 정렬&lt;/label&gt;

&lt;!-- &lt;label&gt; 안에 &lt;input&gt; 앨리먼트가 있는 경우 --&gt;
&lt;label&gt;&lt;input type="checkbox" name="sports"&gt;축구&lt;/label&gt;</pre>
  </div>
  <h4>6. textarea</h4>
  <p>
    <span><code>&lt;textarea&gt;</code>의 <code>cols</code>, <code>rows</code> 애트리뷰트를 선언하여, CSS를
      정상적으로 불러오지 못하는 상황에서도 사용에 문제가 없도록 합니다.</span>
    이는 사용자 경험을 개선하는 데 기여합니다.
  </p>
  <div>
    <pre data-lang="html">&lt;textarea cols="30" rows="5"&gt;&lt;/textarea&gt;</pre>
  </div>
  <h4>7. button</h4>
  <p>
    <span><code>&lt;button&gt;</code>에는 <code>type</code> 애트리뷰트를 선언하여, 그 역할을 명확히 합니다.</span>
    예를 들어, 폼 전송 역할을 하는 버튼은 <code>submit</code> 타입을 사용합니다. 이는 버튼의 기능을 명확히 하여
    사용자의 혼란을 방지합니다.
  </p>
  <div>
    <pre data-lang="html">&lt;button type="button"&gt;열기&lt;/button&gt;
&lt;button type="submit"&gt;전송&lt;/button&gt;</pre>
  </div>
  <p>
    이와 같은 규칙과 구조를 따르면, 폼은 더 사용하기 쉽고, 모든 사용자에게 접근 가능해집니다. 이는 웹 접근성을
    향상시키고, 사용자 경험을 개선하는 중요한 단계입니다.
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
