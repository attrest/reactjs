export const contentHtml = `<section class="attr_section">
<p class="attr_p attr_letter">React에서 국제화(i18n)를 구현하는 가장 효과적인 방법 중 하나는 <b>react-i18next</b> 라이브러리를 사용하는 것입니다. 이 라이브러리는 유연성이 높고 React 프로젝트와 잘 통합됩니다.</p>
<div class="attr_div">
<h3 class="attr_title">1. 패키지 설치</h3>
<p class="attr_p">먼저, 필요한 npm 패키지를 설치합니다. 터미널에서 다음 명령을 실행하세요:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector</pre>
</div>
<ul class="attr_list a__list dot">
<li><b>i18next:</b> 국제화(i18n)를 위한 핵심 라이브러리입니다. 번역 관리, 언어 변경 등의 기능을 제공합니다.</li>
<li><b>react-i18next:</b> i18next를 리액트와 통합하기 위한 라이브러리입니다. useTranslation 훅 등 리액트 컴포넌트 내에서 i18n을 쉽게 사용할 수 있도록 도와줍니다.</li>
<li><b>i18next-http-backend:</b> 번역 파일을 원격 서버에서 로드할 수 있도록 지원합니다. 이를 통해 클라이언트에 번역 파일을 직접 포함시키지 않고 요청 시 불러올 수 있습니다.</li>
<li><b>i18next-browser-languagedetector:</b> 사용자의 브라우저 언어 설정을 감지하여 자동으로 해당 언어로 앱을 설정할 수 있게 해줍니다.</li>
</ul>
</div>
<div class="attr_div">
<h3 class="attr_title">2. i18next 설정</h3>
<p class="attr_p">애플리케이션의 최상위 컴포넌트(예: <b>src/index.js</b> 또는 <b>App.js</b>)에 <b>i18next</b>를 설정합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // 서버에서 리소스 로드
  .use(LanguageDetector) // 브라우저 언어 감지
  .use(initReactI18next) // 리액트와 i18next 바인딩
  .init({
    fallbackLng: 'en', // 기본 언어 설정
    debug: true,
    interpolation: {
      escapeValue: false, // XSS 보호
    },
  });

export default i18n;</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">3. 번역 파일 구성</h3>
<p class="attr_p"><b>public/locales</b> 폴더를 생성하고, 각 언어별로 JSON 파일을 만듭니다 (예: <b>en/translation.json</b>, <b>ko/translation.json</b>).</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
# public/locales/en/translation.json:
{
  "welcome": "Welcome to React"
}


# public/locales/ko/translation.json:
{
  "welcome": "리액트에 오신 것을 환영합니다"
}</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">4. 번역 텍스트 사용</h3>
<p class="attr_p"><code>useTranslation</code> 훅을 사용하여 번역된 텍스트를 로드합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return &lt;h1&gt;{t('welcome')}&lt;/h1&gt;;
}

export default App;</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">5. 언어 변경 기능 추가</h3>
<p class="attr_p">언어를 동적으로 변경할 수 있는 기능을 추가합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    &lt;div&gt;
      &lt;h1&gt;{t('welcome')}&lt;/h1&gt;
      &lt;button onClick={() =&gt; i18n.changeLanguage('en')}&gt;English&lt;/button&gt;
      &lt;button onClick={() =&gt; i18n.changeLanguage('ko')}&gt;한국어&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default App;</pre>
</div>
<p class="attr_p">이런 단계들을 통해 리액트 <span data-spell="application">애플리케이션</span>에 다국어 지원을 효과적으로 추가할 수 있으며, 각 언어 및 문화에 맞는 적절한 콘텐츠를 제공하면서 글로벌 사용자 경험을 향상시킬 수 있습니다.</p>
</div>
</section>`;
