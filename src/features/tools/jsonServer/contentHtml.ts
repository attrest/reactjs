export const contentHtml = `<section class="attr_section">
<p class="attr_p attr_letter">JSON Server는 개발 단계에서 프로토타이핑이나 모의(Mocking) API를 신속하게 생성하기 위한 도구로, 실제 백엔드 서비스 없이 프론트엔드 <span data-spell="application">애플리케이션</span> 개발에 필요한 RESTful API를 모방할 수 있습니다.</p>
<div class="attr_div">
<h3 class="attr_title">설치하기</h3>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm install -g json-server</pre>
</div>
<p class="attr_p">React 프로젝트 내에서만 사용하려면 해당 디렉토리로 이동 후 다음 명령어를 실행합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm install json-server --save-dev</pre>
</div>
<p class="attr_p">json-server를 시작할 때는 다음 명령어를 실행합니다. 아래와 같은 명령어를 입력하면 포트 3009에서 db.json 파일을 기반으로 하는 API 서버가 실행되어 React <span data-spell="application">애플리케이션</span>에서 백엔드 없이도 데이터를 송수신할 수 있는 환경이 마련됩니다.</p>
<p class="attr_p">서버가 실행되고 나면 React 컴포넌트 내에서 <b>axios</b>나 <b>fetch</b>를 사용해 이 서버와 통신하며 개발을 진행할 수 있다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
json-server --watch db.json --port 3009</pre>
</div>
<p class="attr_p"><b>package.json</b>에 실행 스크립트를 추가하여 쉽게 서버를 시작할 수 있다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
"scripts": {
  "start-server": "json-server --watch db.json --port 3009"
}</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">RESTful 지원</h3>
<p class="attr_p">JSON Server를 사용하는 가장 큰 장점 중 하나는 간단한 JSON 파일을 통해 복잡한 API를 모의할 수 있다는 점입니다. 기본적으로 JSON Server는 제공된 JSON 파일을 데이터베이스로 사용하여, 해당 데이터에 대한 REST API를 자동으로 생성합니다.</p>
<p class="attr_p">예를 들어, 아래와 같이 프로젝트 루트에 db라는 폴더를 생성하고 여기에 db.json이란 파일을 추가한 후 아래와 같이 데이터를 추가하여 저장합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="json">
{
  "todos": [
    {
      "id": "1",
      "description": "Json Server 테스트하기",
      "isCompleted": true
    },
    {
      "id": "3",
      "description": "Next.js 셋팅 적용하기",
      "isCompleted": true
    },
    {
      "id": "4",
      "description": "Build 테스트 하기",
      "isCompleted": true
    }
  ]
}</pre>
</div>
<p class="attr_p">위와 같은 데이터 구조의 <b>db.json</b> 파일을 기반으로 JSON Server를 실행하면 다음과 같은 API 엔드포인트가 생성됩니다.</p>
<ul class="attr_list a__list dot">
<li>GET /todos</li>
<li>GET /todos/1</li>
<li>POST /todos</li>
<li>PUT /todos/1</li>
<li>PATCH /todos/1</li>
<li>DELETE /todos/1</li>
<li>...</li>
</ul>
<p class="attr_p">이를 통해 각각의 데이터 타입에 대해 CRUD(Create, Read, Update, Delete) 연산을 수행하는 API를 갖게 됩니다. 만약 새로운 todo를 추가하고 싶다면, <code>POST</code> 요청을 <code>/todos</code> 엔드포인트에 보내면 되고, 특정 todo의 내용을 수정하고 싶을 때는 <code>PUT</code> 또는 <code>PATCH</code> 요청을 <code>/todos/{id}</code> 엔드포인트에 보내면 됩니다.</p>
<p class="attr_p">다음은 React 개발 환경에서 fetch API를 사용하여 엔드포인트와 통신하는 샘플 코드입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// todolist 가져오기
fetch('http://localhost:3009/todos')
  .then((response) =&gt; response.json())
  .then((json) =&gt; console.log(json));


// 새로운 todo 추가
fetch('http://localhost:3009/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ description: '할 일', isCompleted: false })
})
.then(response =&gt; response.json())
.then(json =&gt; console.log(json))

// 특정 post 업데이트
fetch('http://localhost:3009/todos/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ description: '수정된 할 일' })
})
.then(response =&gt; response.json())
.then(json =&gt; console.log(json))</pre>
</div>
<p class="attr_p">이와 같이 JSON Server는 간단한 설정과 적은 코드로 빠르게 백엔드 프로토타이핑을 할 수 있게 도와주며, 개발자는 복잡한 백엔드 설정 없이 프론트엔드 개발에 집중할 수 있고, API 응답을 테스트할 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">유연성</h3>
<p class="attr_p">JSON Server의 유연성은 사용자가 API의 동작을 쉽게 커스터마이징 할 수 있음을 의미합니다.</p>
<ul class="attr_list a__list dot">
<li><b>동적 데이터 생성:</b> 사용자는 자바스크립트 함수를 활용하여 가짜 데이터를 동적으로 생성할 수 있으며, 이는 개발 과정에서 다양한 시나리오를 테스트하는 데 유용합니다.</li>
<li><b>라우팅 규칙 커스터마이징:</b> JSON Server는 URL 라우트를 재정의할 수 있는 기능을 제공하여, 사용자가 특정 API 엔드포인트의 동작을 변경할 수 있습니다. 예를 들어, <code>/api/todos/1</code>과 같은 요청이 들어왔을 때, 사용자는 서버가 <code>/todos/1</code>로 라우팅 하도록 설정할 수 있습니다.</li>
<li><b>미들웨어 사용:</b> JSON Server는 Express.js를 기반으로 구축되어 있으므로, Express 미들웨어를 사용하여 API 요청과 응답을 중간에서 가공할 수 있습니다. 예를 들어, 요청 로그를 기록하거나 API 응답에 공통적인 헤더를 추가하는 것 등이 가능합니다.</li>
<li><b>응답 시뮬레이션:</b> 개발자는 지연 응답, 상태 코드 변경, 헤더 커스터마이징 등을 통해 다양한 응답 시나리오를 시뮬레이션 할 수 있습니다. 이를 통해 프론트엔드 <span data-spell="application">애플리케이션</span>이 다양한 백엔드 상황에 어떻게 반응하는지 테스트 할 수 있습니다.</li>
<li><b>데이터베이스 스냅샷:</b> 언제든지 현재의 데이터베이스 상태를 파일로 저장하여 스냅샷을 만들 수 있습니다. 이는 데이터를 복원하거나 특정 상태로 API를 다시 시작하는 데 유용합니다.</li>
<li><b>커스텀 라우트 핸들러:</b> 개발자는 특정 API 요청에 대해 커스텀 라우트 핸들러를 작성할 수 있으며, 이를 통해 복잡한 로직이나 외부 시스템과의 통신 등을 처리할 수 있습니다.</li>
</ul>
<p class="attr_p">JSON Server의 유연성은 JSON Server가 단순한 프로토타이핑 도구를 넘어서, 실제 <span data-spell="application">애플리케이션</span>의 복잡한 요구 사항을 모의할 수 있도록 만드는 핵심적인 특징입니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">데이터 저장</h3>
<p class="attr_p">JSON Server는 사용자의 데이터를 <b>db.json</b> 파일에 저장함으로써 데이터의 지속성을 제공합니다. 이는 실제 데이터베이스를 모방한 것으로, 파일 시스템을 사용하여 데이터를 저장하고 검색할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="json">
{
  "todos": [
    {
      "id": "1",
      "description": "Json Server 테스트하기",
      "isCompleted": true
    },
    {
      "id": "3",
      "description": "Next.js 셋팅 적용하기",
      "isCompleted": true
    },
    {
      "id": "4",
      "description": "Build 테스트 하기",
      "isCompleted": true
    }
  ]
}
</pre>
</div>
<p class="attr_p"><b>db.json</b> 파일의 초기 상태가 다음과 같이 주어져 있다고 가정했을 때, 이 상태에서 사용자가 새로운 게시글을 추가하는 <b>HTTP POST</b> 요청을 JSON Server에 보내면, 서버는 이를 처리하여 <b>db.json</b> 파일에 해당 데이터를 추가합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
POST: /posts HTTP/1.1
Host: localhost:3009
Content-Type: application/json

{
  "description": "할 일 추가",
  "isCompleted": false
}</pre>
</div>
<p class="attr_p">JSON Server는 위와 같은 요청을 받으면 다음과 같이 db.json 파일을 업데이트합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="json">
{
  "todos": [
    {
      "id": "1",
      "description": "Json Server 테스트하기",
      "isCompleted": true
    },
    {
      "id": "3",
      "description": "Next.js 셋팅 적용하기",
      "isCompleted": true
    },
    {
      "id": "4",
      "description": "Build 테스트 하기",
      "isCompleted": true
    },
    {
      "id": "5",
      "description": "할 일 추가",
      "isCompleted": false
    }
  ]
}</pre>
</div>
<p class="attr_p">여기서 중요한 점은, JSON Server가 데이터의 추가, 수정, 삭제가 이루어질 때마다 db.json 파일을 자동으로 갱신한다는 것으로, 이를 통해 개발자는 서버를 재시작하더라도 이전 상태를 유지할 수 있으며, 실제 백엔드 서비스에 필요한 데이터 관리 기능을 모의 실행 할 수 있습니다.</p>
<p class="attr_p">이와 같은 방식은 프론트엔드 개발 시 백엔드 서버의 구현 전 또는 백엔드 서버가 사용 불가능한 상황에서도 <span data-spell="application">애플리케이션</span>의 데이터 처리 로직을 개발하고 테스트할 수 있게 해주는 효과적인 방법이 될 수 있으며, 빠른 프로토타이핑과 테스트를 가능하게 하여 개발 과정을 가속화할 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">지원 기능</h3>
<p class="attr_p">json-server 에서는 단순히 데이터를 넣고 조회하는 것 외에도 <b>페이징, 필터링, 정렬, 수정, 삭제</b> 등의 기능을 지원합니다.</p>
<h4 class="attr_title">정렬(sort)</h4>
<p class="attr_p">소팅을 할때는 쿼리 파라미터로 <code>_sort</code>와 <code>_order</code>를 설정하면 됩니다. 다음 요청들은 <code>id</code>를 기준으로 역순, 혹은 순서대로 값을 불러옵니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
GET /todos?_sort=id&amp;_order=DESC
GET /todos?_sort=id&amp;_order=ASC</pre>
</div>
<h4 class="attr_title">연산자(Operators)</h4>
<p class="attr_p">특정 필드가 주어진 값보다 크거나 작은 데이터들을 불러올때는, <code>_gte</code>, <code>_lte</code>, <code>_ne</code>를 사용합니다.</p>
<ul class="attr_list a__list dot">
<li><b>gte:</b> 크거나 같다</li>
<li><b>lte:</b> 작거나 같다</li>
<li><b>ne:</b> 일치하지 않는다</li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
GET /todos?id_gte=10
GET /todos?id_lte=10
GET /todos?id_ne=10</pre>
</div>
<h4 class="attr_title">제한(limit)</h4>
<p class="attr_p">한번에 불러올 데이터 수를 제한 할때는, <code>_limit</code>을 사용합니다. 다음 요청은 데이터 수를 <code>20</code>으로 제한하여 데이터를 불러옵니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
GET /todos?_limit=20</pre>
</div>
<h4 class="attr_title">삭제(Delete)</h4>
<p class="attr_p">데이터를 삭제할때는 일반 REST API 서버의 흐름을 따릅니다. 주소의 뒷부분에 데이터의 아이디를 넣어서 <code>DELETE</code> 메소드로 요청을 하면 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
DELETE /todos/10</pre>
</div>
<h4 class="attr_title">수정(Modify)</h4>
<p class="attr_p">데이터를 수정 할때는 두가지 방법으로 진행합니다. <code>PUT</code> 메소드는 데이터를 아예 대치하고, <code>PATCH</code> 메소드는 리퀘스트 바디에서 주어진 필드만 수정합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
{
    "id": 1,
    "description": "hello",
    "isCompleted": true
}</pre>
</div>
<p class="attr_p">위와 같은 데이터가 있을 때, <code>PUT</code> 요청을 보낸다면, 데이터는 다음과 같이 업데이트 될 것입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
PUT /todos/1

{
    "description": "bye"
}</pre>
</div>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="json">
{
    "id": 1,
    "description": "bye"
}</pre>
</div>
<p class="attr_p">이 경우, <code>isCompleted</code> 필드가 주어지지 않았기 때문에 다른 데이터가 날라가버립니다. 따라서, <code>PUT</code> 메소드로 수정을 해야 하는 경우엔 <code>description</code>과 <code>isCompleted</code>를 둘 다 전달해주어야합니다.</p>
<p class="attr_p"><code>PATCH</code> 메소드의 경우엔 아예 데이터 전체를 갈아끼우는게 아니라, 요청 리퀘스트 바디 에서 주어진 필드만 수정을 하기때문에 필드가 빠져있어도 정상적으로 업데이트 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
PATCH /todos/1

{
    "description": "bye"
}</pre>
</div>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
{
    "id": 1,
    "description": "bye",
    "isCompleted": true
}</pre>
</div>
</div>
</section>`;
