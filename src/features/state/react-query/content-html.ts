export const contentHtml = `<section class="attr_section">
<div class="attr_div">
<h3 class="attr_title">React Query란?</h3>
<p class="attr_p attr_letter"><span class="set-check-note">React Query는 fetching, caching, 서버 데이터와의 동기화를 지원해주는 라이브러리입니다.</span> 이 라이브러리는 React <span data-spell="application">애플리케이션</span>에서 데이터를 관리하는 복잡한 작업들을 효과적으로 간소화해주어, 개발자가 좀 더 집중할 수 있는 환경을 제공합니다. React Query를 사용하면 복잡하고 장황한 코드 작성 없이도 <b>React Component</b> 내에서 API를 간단하고 직관적으로 사용할 수 있습니다.</p>
<h4 class="attr_title">React Query의 주요 기능</h4>
<ul class="attr_list a__list dot">
<li><b>데이터 Caching:</b> 자주 요청되는 데이터를 캐시하여, <span data-spell="application">애플리케이션</span>의 응답 시간과 성능을 개선합니다.</li>
<li><b>에러 처리:</b> 에러 상황을 세련되게 관리하고, 사용자 경험을 향상시키는 기능을 제공합니다.</li>
<li><b>Suspense와 Refresh:</b> 리액트의 Suspense 기능을 지원하고, 데이터 새로고침을 간편하게 설정할 수 있습니다.</li>
<li><b>선언적 데이터 Fetching:</b> 데이터 요청과 관련된 조건들을 선언적으로 설정할 수 있어, 코드의 가독성과 유지보수가 용이합니다.</li>
<li><b>서버 상태와의 동기화:</b> 서버의 최신 상태를 유지하면서 데이터의 일관성을 보장합니다.</li>
</ul>
<h4 class="attr_title">React Query를 사용해야 하는 이유</h4>
<p class="attr_p">리액트(React)에서 데이터 관리는 항상 중요한 과제입니다. 여러 상태 관리 라이브러리가 이 과제를 해결하려는 다양한 접근 방식을 제공하는데, <span class="set-check-note">Redux와 Recoil 같은 라이브러리는 클라이언트 상태와 서버 상태를 함께 관리하는 경우가 많습니다.</span> 하지만, React Query는 <span class="set-check-note">클라이언트 상태와 서버 상태를 분리하여 관리하게 해주어, 데이터 관리를 직관적이고 효율적으로 할 수 있습니다.</span></p>
<p class="attr_p"><span class="set-check-note">React Query를 사용하면 비동기 로직을 쉽게 다룰 수 있습니다.</span> 이는 개발자가 데이터 상태 관리에 들이는 노력을 줄이고, 더 중요한 사용자 인터페이스(UI) 및 사용자 경험(UX) 개선에 더 많은 시간을 할애할 수 있도록 도와줍니다. 또한, React Query는 데이터를 효율적으로 관리하며, 오류 처리와 데이터 로딩 상태 관리를 사용자 친화적으로 만들어 주는 다양한 기능을 제공합니다.</p>
<p class="attr_p">이렇게 React Query는 복잡한 데이터 관리 작업을 더 간단하게 만들어 주어, <span data-spell="application">애플리케이션</span>의 전체적인 코드 품질과 개발 속도를 향상시킬 수 있습니다. 이러한 이유로 많은 현대적인 웹 개발 프로젝트에서 선호되는 도구 중 하나입니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">React Query의 핵심 기능 및 장단점</h3>
<h4 class="attr_title">데이터 캐싱 기능</h4>
<p class="attr_p"><span class="set-check-note">React Query의 데이터 캐싱 기능은 동일한 데이터에 대한 중복 요청을 제거하고, "오래된" 데이터를 백그라운드에서 업데이트하여 데이터 업데이트를 최대한 신속하게 반영합니다.</span> 이 기능은 페이지네이션 및 데이터 지연 로드와 같은 성능 최적화 기법에 필수적입니다.</p>
<h4 class="attr_title">메모리 관리 및 구조적 공유</h4>
<p class="attr_p"><span class="set-check-note">서버 상태의 메모리 및 가비지 수집 관리를 효과적으로 수행하며, 구조적 공유로 쿼리 결과를 메모하는 기능을 제공합니다.</span> 이는 <span data-spell="application">애플리케이션</span>의 전반적인 메모리 사용 효율을 높이고, 성능을 개선하는 데 도움을 줍니다.</p>
<h4 class="attr_title">Refetch 옵션</h4>
<p class="attr_p">Refetch는 데이터가 최신 상태를 유지하도록 도와주는 기능입니다. 주요 Refetch 조건은 다음과 같습니다:</p>
<ul class="attr_list a__list number">
<li><b>refetchOnWindowFocus:</b> 윈도우에 포커스가 되었을 때</li>
<li><b>refetchOnMount:</b> 컴포넌트가 마운트될 때</li>
<li><b>refetchOnReconnect:</b> 네트워크 연결이 재연결될 때</li>
</ul>
<p class="attr_p"><span class="set-check-note">기본적으로 React Query는 이 세 가지 기능의 기본값을 모두 true로 설정합니다.</span> 또한, <code>queryKey</code>와 상태값을 넘겨줄 경우 상태값이 변경되면 자동으로 Refetch가 일어납니다.</p>
<h4 class="attr_title">StaleTime과 CacheTime</h4>
<ul class="attr_list a__list dot">
<li><b>StaleTime:</b> 데이터가 'fresh'에서 'stale' 상태로 변경되는 시간을 정의합니다. 기본적으로는 0이며, 데이터는 호출 즉시 stale 상태가 됩니다.</li>
<li><b>CacheTime:</b> 데이터가 비활성 상태일 때 캐시에 남아있는 시간을 말합니다. StaleTime이 지난 후에도, CacheTime 동안은 데이터가 캐시에서 유지되며, 이 시간이 지나면 가비지 콜렉터가 데이터를 수집합니다.</li>
</ul>
</div>
<div class="attr_div">
<h3 class="attr_title">React Query를 사용한 데이터 패칭의 단순화</h3>
<p class="attr_p">리액트에서 데이터를 패칭하는 과정은 여러 단계와 코드를 필요로 합니다. <span class="set-check-note">전통적인 방식에서는 데이터를 패칭하는 코드를 작성하고, 상태(state)를 만들어 <code>useEffect</code>를 이용해 컴포넌트가 마운트될 때 데이터를 패칭하여 상태에 저장합니다.</span> 이 과정은 세 가지 주요 단계로 요약될 수 있습니다:</p>
<ul class="attr_list a__list number">
<li>데이터 패칭 코드 작성</li>
<li>데이터를 저장할 상태 생성</li>
<li><code>useEffect</code>를 이용해 컴포넌트 마운트 시 데이터 패칭 후 상태 저장</li>
</ul>
<p class="attr_p">예를 들어, 전통적인 React 코드는 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useEffect, useState } from "react";

const getServerData = async () =&gt; {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(response =&gt; response.json());
  return data;
};

export default function App() {
  const [state, setState] = useState&lt;any[]&gt;([]);

  useEffect(() =&gt; {
    getServerData()
      .then(dataList =&gt; setState(dataList))
      .catch(e =&gt; setState([]));
  }, []);

  return &lt;div&gt;{JSON.stringify(state)}&lt;/div&gt;;
}</pre>
</div>
<h4 class="attr_title">React Query 사용의 장점</h4>
<p class="attr_p"><span class="set-check-note">React Query를 사용하면 이 과정을 <code>useQuery</code> 한 줄로 처리할 수 있습니다.</span> 이로 인해 코드의 양이 감소하고, 사이드 이펙트를 제거할 수 있습니다. 또한, 데이터 패칭 방식을 표준화할 수 있으며, <code>enabled</code> 옵션을 이용한 동기적 실행이 가능해집니다. React Query를 사용한 코드 예는 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useQuery } from "@tanstack/react-query";

const getServerData = async () =&gt; {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(response =&gt; response.json());
  return data;
};

export default function App() {
  const { data } = useQuery(["data"], getServerData);

  return &lt;div&gt;{JSON.stringify(data)}&lt;/div&gt;;
}</pre>
</div>
<h4 class="attr_title">동기적 실행의 예</h4>
<p class="attr_p">동기적 실행에 대한 전통적인 접근 방식은 여러 상태와 <code>useEffect</code>를 필요로 합니다. React Query를 사용하면 <code>enabled</code> 옵션을 통해 필요한 데이터가 있을 때만 API 호출이 이루어지도록 설정할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const { data: data1 } = useQuery(["data1"], getServerData);
const { data: data2 } = useQuery(["data2", data1], getServerData, {
  enabled: !!data1
});</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">React Query에서의 캐싱 기능</h3>
<p class="attr_p">React Query는 효과적인 데이터 관리를 위해 캐싱 기능을 제공합니다. <span class="set-check-note">캐싱은 특정 데이터의 복사본을 저장하여, 이후 동일한 요청의 재접근 속도를 높이는 기술입니다.</span> 이 기능을 활용하여 불필요한 API 호출을 줄이고, 캐싱된 데이터를 효율적으로 이용할 수 있습니다.</p>
<h4 class="attr_title">StaleTime과 CacheTime 설정</h4>
<h5 class="attr_title">StaleTime</h5>
<p class="attr_p">호출된 데이터의 "신선도"를 관리합니다. StaleTime은 캐시된 데이터의 유통기한을 설정하는 옵션이며, <span class="set-check-note">기본값은 0입니다.</span> 이는 데이터를 즉시 stale 상태로 간주하며, 별도의 설정 없이는 캐싱 기능을 활용하지 못합니다.</p>
<h5 class="attr_title">CacheTime</h5>
<p class="attr_p">캐싱된 데이터가 얼마나 오래 유지될지 결정합니다. 기본값은 5분이며, 이 시간 동안 데이터는 메모리에 남아있습니다. 예를 들어, 다음과 같은 설정을 사용할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const { data } = useQuery(['data', getServerData, {
  staleTime: 10 * 60 * 1000, // 10분
  cacheTime: 10 * 60 * 1000  // 10분
}])</pre>
</div>
<p class="attr_p">위 설정은 데이터가 10분 동안 새로운 호출 없이 캐싱된 상태로 제공될 수 있게 합니다.</p>
<h4 class="attr_title">데이터 갱신의 자동화</h4>
<p class="attr_p">React Query는 브라우저 포커스, 컴포넌트 마운트, 네트워크 재연결 등의 상황에서 데이터를 자동으로 갱신할 수 있는 옵션을 제공합니다:</p>
<ul class="attr_list a__list dot">
<li><b>refetchOnWindowFocus:</b> 창에 포커스가 돌아왔을 때 데이터를 새로고침합니다.</li>
<li><b>refetchOnMount:</b> 새로운 컴포넌트가 마운트되었을 때 데이터를 새로고침합니다.</li>
<li><b>refetchOnReconnect:</b> 네트워크에 재연결되었을 때 데이터를 새로고침합니다.</li>
</ul>
<h4 class="attr_title">클라이언트 데이터와 서버 데이터의 분리</h4>
<p class="attr_p">React Query를 사용하면, 클라이언트 데이터는 상태 관리 라이브러리가, 서버 데이터는 React Query가 관리합니다. 이 구조를 통해, 클라이언트와 서버 데이터를 명확하게 분리할 수 있으며, 데이터를 가져올 때는 <code>useQueries</code>를 사용하고, <code>onSuccess</code>와 <code>onError</code> 함수를 통해 성공 및 실패 시의 로직을 간단하게 구현할 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">React Query 설치 및 기본 설정</h3>
<p class="attr_p">React Query는 현대적인 React <span data-spell="application">애플리케이션</span>에서 데이터 패칭, 캐싱, 동기화를 간소화하고 최적화하는 데 필수적인 라이브러리입니다. 설치는 다음 명령어를 사용하여 진행할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm i react-query</pre>
</div>
<h4 class="attr_title">QueryClient 설정</h4>
<p class="attr_p">React Query를 사용하기 위해 필요한 첫 번째 단계는 <code>QueryClient</code> 객체를 생성하는 것입니다. 이 객체는 쿼리의 상태와 캐시를 관리합니다. 생성 방법은 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () =&gt; {
  return (
    &lt;QueryClientProvider client={queryClient}&gt;
      &lt;div&gt;
        &lt;Home /&gt;
      &lt;/div&gt;
    &lt;/QueryClientProvider&gt;
  );
};

export default App;</pre>
</div>
<p class="attr_p">여기서 <code>QueryClient</code>는 새 쿼리 클라이언트를 생성하고, <code>QueryClientProvider</code>는 리액트 컴포넌트 트리에 이를 제공하여 <span data-spell="application">애플리케이션</span>의 어느 곳에서나 쿼리 클라이언트에 접근할 수 있게 합니다.</p>
<h4 class="attr_title">Next.js에서의 구성</h4>
<p class="attr_p">Next.js 프로젝트에서 React Query를 사용할 때는 구성 방법이 약간 다를 수 있습니다. 예를 들어, 다음과 같은 구조를 사용할 수 있습니다:</p>
<h5 class="attr_title">1. QueryProvider 컴포넌트 생성하기</h5>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// components/provider/query-provider.tsx

"use client";
 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
 
export const QueryProvider = ({ children }: { children: React.ReactNode; }) =&gt; {
    const [queryClient] = useState(() =&gt; new QueryClient());
 
    return (
        &lt;QueryClientProvider client={queryClient}&gt;
            {children}
        &lt;/QueryClientProvider&gt;
    );
};</pre>
</div>
<h5 class="attr_title">2. RootLayout에서 QueryProvider 사용하기</h5>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// app/layout.tsx

import './globals.css';
import { QueryProvider } from "@/components/providers/query-provider";
 
export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
        &lt;html lang="en" suppressHydrationWarning&gt;
            &lt;body&gt;
               &lt;QueryProvider&gt;
                  {children}
               &lt;/QueryProvider&gt;
            &lt;/body&gt;
        &lt;/html&gt;
  );
}</pre>
</div>
<h4 class="attr_title">3. 개별 페이지에서 데이터 패칭하기</h4>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// page.tsx

const Page = () =&gt; {
   const getTodo = async () =&gt; {
      const res = await fetch("https://dummyjson.com/products");
      return await res.json();
   };
 
   const query = useQuery('todos', getTodo);
 
   return (&lt;ul&gt;
        {query.data.map(todo =&gt; (
          &lt;li key={todo.id}&gt;{todo.title}&lt;/li&gt;
        ))}
   &lt;/ul&gt;);
};</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">React Query의 useQuery 함수 사용하기</h3>
<p class="attr_p">React Query는 효율적인 서버 상태 관리를 위해 <code>useQuery</code>와 <code>useMutation</code> 함수를 제공합니다. <span class="set-check-note">기본적으로 <code>GET</code> 요청에는 <code>useQuery</code>가, <code>PUT</code>, <code>UPDATE</code>, <code>DELETE</code> 요청에는 <code>useMutation</code>이 사용됩니다.</span></p>
<h4 class="attr_title">useQuery의 기본 구조와 사용법</h4>
<p class="attr_p"><code>useQuery</code>는 데이터 패칭을 위해 주로 사용되며, 특히 <code>GET</code> 방식의 데이터 호출 시 사용됩니다. 함수는 다음과 같은 구조를 가지고 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const { data, isLoading, isError } = useQuery(queryKey, queryFn, options);</pre>
</div>
<p class="attr_p">여기서 각 파라미터의 역할은 다음과 같습니다:</p>
<ul class="attr_list a__list number">
<li><b>queryKey:</b> React Query는 고유한 쿼리 키(query key)를 사용하여 데이터 패칭 요청을 식별합니다. <span class="set-check-note">쿼리 키는 배열 형태로 제공되며, 첫 번째 인덱스에는 유니크한 문자열이 포함되는데, 이 유니크한 쿼리 키는 데이터의 캐싱과 재요청에 중요한 역할을 합니다.</span></li>
<li><b>queryFn:</b> 이 함수는 실제로 데이터를 서버에서 가져오는 비동기 작업을 수행합니다. <code>Promise</code>를 반환하는 비동기 함수로, <code>useQuery</code> 호출 시 정의할 수 있습니다.</li>
<li><b>options:</b> 쿼리 동작을 제어하는 다양한 옵션을 설정할 수 있습니다. 예를 들어, <code>staleTime</code> 옵션을 <code>Infinity</code>로 설정하면 데이터가 변하지 않을 것으로 예상되는 경우 유용합니다.</li>
</ul>
<h5 class="attr_title">주요 옵션들의 사용법</h5>
<p class="attr_p"><code>useQuery</code> 함수는 다양한 옵션을 통해 동작을 맞춤 설정할 수 있습니다:</p>
<ul class="attr_list a__list dot">
<li><b>enabled:</b> 이 옵션은 <code>useQuery</code>가 자동으로 데이터를 패칭하지 않도록 설정할 수 있습니다. <span class="set-check-note">기본 값은 <code>true</code>이며, <code>false</code>로 설정하면 자동 데이터 패칭을 막습니다.</span></li>
<li><b>staleTime:</b> 서버에서 가져온 데이터가 신선하다고 간주되는 기간을 설정합니다. <span class="set-check-note">기본 값은 0으로, 이는 데이터를 즉시 <code>stale</code>로 간주합니다. <code>Infinity</code>로 설정하면 데이터를 항상 신선하게 유지합니다.</span></li>
<li><b>cacheTime:</b> 패칭된 데이터가 메모리에 저장되는 시간을 정의합니다. <span class="set-check-note">기본 값은 5분이며, 이 시간 이후에는 데이터가 캐시에서 제거됩니다.</span></li>
<li><b>retry:</b> 데이터 패칭이 실패했을 때 재시도할지 여부를 결정합니다. <span class="set-check-note">기본적으로 <code>false</code>로 설정되어 있으며, <code>true</code> 또는 특정 횟수를 설정할 수 있습니다.</span></li>
<li><b>onSuccess와 onError:</b> 데이터 패칭 성공 또는 실패 시 호출되는 콜백 함수입니다. 각각 성공한 데이터나 오류 정보를 매개변수로 받습니다.</li>
<li><b>select:</b> 데이터를 변환하거나 가공할 때 사용합니다. 이 옵션은 패칭된 데이터를 필터링하거나 매핑하는 데 유용합니다.</li>
<li><b>keepPreviousData:</b> 이 옵션은 새로운 데이터가 로드되는 동안 이전 데이터를 유지할지 결정합니다. <span class="set-check-note">이는 페이지네이션 또는 데이터 업데이트 시 이전 상태를 보존하는 데 유용합니다.</span></li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () =&gt; {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const PostsComponent = () =&gt; {
  const { data, isLoading, isError } = useQuery(['posts'], fetchPosts, {
    staleTime: 5000,
    cacheTime: 1000 * 60 * 5,
    onSuccess: data =&gt; console.log('Data fetched successfully'),
    onError: error =&gt; console.error('Error fetching data', error)
  });

  if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (isError) return &lt;div&gt;Error loading the data.&lt;/div&gt;;
  return (
    &lt;ul&gt;
      {data.map(post =&gt; &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;)}
    &lt;/ul&gt;
  );
};</pre>
</div>
<h4 class="attr_title">서비스에서의 활용 예</h4>
<p class="attr_p">아래의 예시에서는 직무나 경력 등을 조회하기 위한 공통 코드 정보를 <code>useQuery</code>를 사용하여 호출하고 있습니다. 예를 들어, 변화되지 않을 데이터를 다룰 때 <code>staleTime</code>을 <code>Infinity</code>로 설정하여 불필요한 재패칭을 방지할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const { data } = useQuery(['careerData'], fetchCareerData, { staleTime: Infinity });</pre>
</div>
<h4 class="attr_title">반환된 객체 활용하기</h4>
<p class="attr_p">React Query는 데이터 패칭을 위한 강력한 도구로, 여러 유용한 속성을 반환 객체에 포함하여 개발자가 상태 관리를 쉽게 할 수 있도록 합니다.</p>
<ul class="attr_list a__list number">
<li><b>status:</b> <span class="set-check-note">비동기 로직의 현재 상태를 나타내며, <code>idle</code>, <code>loading</code>, <code>error</code>, <code>success</code>의 값 중 하나를 가집니다.</span> <code>idle</code>은 초기 상태로, 아직 데이터 요청이 시작되지 않았음을 의미합니다.</li>
<li><b>isLoading:</b> 데이터가 로딩 중인지 여부를 나타내며, 요청이 진행 중일 때 <code>true</code> 값을 반환합니다.</li>
<li><b>isFetching:</b> React Query가 데이터 요청 중인지 여부를 확인할 수 있습니다. <span class="set-check-note">이 속성은 백그라운드 업데이트 중인지 등의 상황에서 유용하게 사용됩니다.</span></li>
<li><b>isSuccess 및 isError:</b> 이 두 속성은 각각 데이터 요청의 성공 여부와 에러 발생 여부를 나타냅니다. <code>isSuccess</code>는 요청이 성공적으로 완료되었을 때 <code>true</code>가 되고, <code>isError</code>는 요청이 실패했을 때 <code>true</code>가 됩니다.</li>
<li><b>data:</b> <span class="set-check-note">서버로부터 요청하여 받은 데이터가 저장됩니다.</span> 이 속성은 요청이 성공적으로 완료되었을 때 접근할 수 있으며, 실패했을 경우 <code>undefined</code>가 될 수 있습니다.</li>
<li><b>error:</b> 요청 실패에 대한 상세한 에러 정보를 포함합니다. 이 속성은 요청이 에러로 인해 실패했을 때만 값이 존재합니다.</li>
<li><b>refetch:</b> <span class="set-check-note">이 메소드를 호출하면 React Query가 모든 옵션을 무시하고 서버에 데이터를 재요청합니다.</span> 이는 특정 상황에서 데이터를 수동으로 새로 고침할 필요가 있을 때 사용할 수 있습니다.</li>
</ul>
<p class="attr_p">이 속성들을 사용하여 로딩 상태나 에러 상태에 따른 UI 처리를 쉽게 구현할 수 있습니다. 예를 들어, 로딩 중이거나 에러가 발생했을 때 사용자에게 적절한 메시지를 보여줄 수 있습니다.</p>
<h5 class="attr_title">활용 예시</h5>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useQuery } from '@tanstack/react-query';

const fetchUserData = async () =&gt; {
  const response = await fetch("https://api.example.com/user");
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

const UserComponent = () =&gt; {
  const { data, isLoading, isError, error, refetch } = useQuery(['user'], fetchUserData);

  if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (isError) return &lt;div&gt;Error: {error.message}&lt;/div&gt;;

  return (
    &lt;div&gt;
      &lt;h1&gt;{data.name}&lt;/h1&gt;
      &lt;button onClick={() =&gt; refetch()}&gt;Refresh&lt;/button&gt;
    &lt;/div&gt;
  );
};</pre>
</div>
<h4 class="attr_title">React Query에서 동기적으로 데이터 패칭하기</h4>
<p class="attr_p">React Query는 데이터 의존성이 있는 상황에서 효과적으로 데이터를 패칭할 수 있는 기능을 제공합니다. 특히, <code>useQuery</code>의 <code>enabled</code> 옵션을 사용하면 의존 데이터가 준비될 때까지 데이터 패칭을 조건부로 실행할 수 있습니다.</p>
<h5 class="attr_title">useQuery의 enabled 옵션 활용</h5>
<p class="attr_p"><code>useQuery</code> 함수는 세 번째 인자로 넘겨지는 옵션 객체에서 <code>enabled</code> 속성을 통해 쿼리의 실행 여부를 제어할 수 있습니다. 이 옵션은 주로 데이터의 의존성 관리에 유용합니다. <span class="set-check-note">예를 들어, <span data-spell-viewer="bigData">어떤 데이터</span>를 기반으로 <span data-spell-viewer="smallData">추가적인 데이터</span>를 요청해야 할 경우, <code>bigData</code>가 성공적으로 패칭되기 전까지 <code>smallData</code>의 요청을 지연시킬 수 있습니다.</span></p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const { data: bigData } = useQuery(["bigData"], getBigData);
const { data: smallData } = useQuery(["smallData", bigData], () =&gt; getSmallData(bigData), {
    enabled: !!bigData
});</pre>
</div>
<h5 class="attr_title">동작 원리</h5>
<p class="attr_p">위 코드에서 bigData는 서버에서 먼저 요청받아야 하는 데이터이며, smallData는 bigData를 파라미터로 사용하여 서버에서 추가적으로 요청하는 데이터입니다. <code>enabled</code> 옵션을 <code>!!bigData</code>로 설정함으로써, <code>bigData</code>가 존재할 때, 즉, <code>true</code>일 때만 <code>smallData</code>의 요청이 실행됩니다. 이는 React Query가 <code>bigData</code>가 없는 상태에서는 <code>smallData</code>를 요청하지 않도록 합니다.</p>
<h5 class="attr_title">사용 시나리오</h5>
<p class="attr_p">이 기법은 데이터의 의존성이 명확하고, 특정 데이터를 기반으로 추가적인 데이터 처리가 필요한 상황에서 매우 유용합니다. 예를 들어, 사용자 정보를 먼저 받아온 후 그 정보를 기반으로 사용자의 상세 기록을 조회해야 할 때 사용할 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">useQueries로 여러 쿼리 동시에 실행하기</h3>
<p class="attr_p">React Query는 여러 데이터 요청을 효율적으로 관리할 수 있는 <code>useQueries</code> 함수를 제공합니다. 이 함수는 여러 개의 <code>useQuery</code>를 한 번에 실행할 수 있게 하며, <code>Promise.all()</code>과 유사하게 동작하여 복수의 요청을 동시에 처리합니다.</p>
<h4 class="attr_title">useQueries의 기본 사용법</h4>
<p class="attr_p"><code>useQueries</code>는 배열 형태로 여러 쿼리의 설정을 받아 처리하며, 각 쿼리는 고유의 <code>queryKey</code>와 <code>queryFn</code>, 그리고 필요에 따라 다른 옵션들을 설정할 수 있습니다. <span class="set-check-note">각 쿼리의 결과는 배열로 묶여 반환되며, 이는 개별 쿼리의 상태와 데이터를 쉽게 관리할 수 있게 합니다.</span></p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const results = useQueries({
  queries: [
    { queryKey: ['post', 1], queryFn: fetchPost, staleTime: Infinity },
    { queryKey: ['post', 2], queryFn: fetchPost, staleTime: Infinity }
  ]
});</pre>
</div>
<p class="attr_p">위 예시에서는 두 개의 게시물 데이터를 동시에 패칭합니다. 각 쿼리는 고유의 <code>queryKey</code>를 가지며, <code>fetchPost</code> 함수를 통해 데이터를 요청합니다. <code>staleTime: Infinity</code> 옵션은 패칭된 데이터가 변하지 않을 것으로 예상되어 재패칭되지 않게 설정됩니다.</p>
<h4 class="attr_title">활용 시나리오</h4>
<p class="attr_p"><code>useQueries</code>는 다음과 같은 상황에서 유용하게 사용됩니다:</p>
<ul class="attr_list a__list dot">
<li><b>동시에 다수의 데이터를 요청해야 할 때:</b> 예를 들어, 사용자 대시보드에 여러 데이터 세트를 동시에 표시해야 하는 경우, useQueries를 사용하여 각 데이터 세트를 병렬로 패칭할 수 있습니다.</li>
<li><b>의존성이 없는 여러 요청을 처리할 때:</b> 서로 독립적인 여러 API 호출을 한 번에 처리하고 싶을 때 useQueries는 코드의 복잡성을 줄이고 성능을 개선하는 데 도움을 줍니다.</li>
</ul>
<h4 class="attr_title">반환값 처리</h4>
<p class="attr_p"><code>useQueries</code>로부터 반환된 결과는 배열 형태로 제공되며, 각 요소는 해당 쿼리의 실행 결과인 <code>{ data, isError, isLoading, error }</code> 등을 포함합니다. 이를 통해 개별 쿼리의 상태를 쉽게 접근하고 관리할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
results.forEach(result =&gt; {
  if (result.isLoading) {
    console.log('Loading data...');
  } else if (result.isError) {
    console.error('Error fetching data:', result.error);
  } else {
    console.log('Data:', result.data);
  }
});</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">useInfiniteQuery로 무한 스크롤 구현하기</h3>
<p class="attr_p">React Query의 <code>useInfiniteQuery</code>는 무한 스크롤 및 페이징 기능을 쉽게 구현할 수 있도록 돕는 함수입니다. 이 기능은 여러 페이지의 데이터를 순차적으로 로드하면서 사용자에게 부드러운 스크롤 경험을 제공합니다.</p>
<h4 class="attr_title">useInfiniteQuery의 기본 사용법</h4>
<p class="attr_p"><code>useInfiniteQuery</code>는 <code>useQuery</code>와 비슷한 사용 방식을 가지지만, 여러 페이지 데이터를 관리하기 위한 추가 옵션이 있습니다. 이 함수는 객체 <code>{pageParams: [], pages: []}</code>를 반환하며, 페이지 데이터와 관련된 다양한 함수와 속성을 제공합니다:</p>
<ul class="attr_list a__list dot">
<li><b>fetchPreviousPage, fetchNextPage:</b> 이전 또는 다음 페이지 데이터를 패칭합니다.</li>
<li><b>hasNextPage, hasPreviousPage:</b> 추가 페이지가 있는지 여부를 확인합니다.</li>
<li><b>isFetchingNextPage, isFetchingPreviousPage:</b> 다음 또는 이전 페이지 데이터를 패칭 중인지 여부를 나타냅니다.</li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useInfiniteQuery } from '@tanstack/react-query';

const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey,
  queryFn: ({ pageParam = 1 }) =&gt; fetchPage(pageParam),
  getNextPageParam: (lastPage, allPages) =&gt; lastPage.nextCursor
});</pre>
</div>
<h4 class="attr_title">페이지 매개변수와 동적 패칭</h4>
<p class="attr_p"><code>useInfiniteQuery</code>는 <code>pageParam</code>을 사용하여 각 페이지 요청을 관리합니다. <code>getNextPageParam</code>은 페이지 요청 후 다음 페이지 번호를 계산하여 반환하는 함수입니다. 이 함수는 데이터의 마지막 페이지를 판단하는 데 중요한 역할을 합니다.</p>
<p class="attr_p"><span class="set-check-note">이 방식은 특히 검색 조건이나 사용자의 입력에 따라 데이터가 변경될 수 있는 경우에 유용합니다.</span> 예를 들어, 사용자의 검색 조건에 따라 다르게 데이터를 로드하는 경우, 각 페이지 로드 시 <code>pageParam</code>을 조정하여 적절한 데이터를 요청할 수 있습니다.</p>
<h4 class="attr_title">실제 적용 예시</h4>
<p class="attr_p">다음은 멘토 목록을 조회하는 화면에서 <code>useInfiniteQuery</code>를 사용한 예시입니다. 이 예시는 검색 키워드, 직무, 기업, 경력 등 다양한 조건을 반영하여 멘토 데이터를 페이지별로 로드합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMentorList } from '@/apis/search';

export default function MentorPage() {
    const fetchMentorList = async ({ pageParam = 1 }) =&gt; {
        const res = await getMentorList({ ...params, page: pageParam });

        if (res.status === 200) {
            const { count, mentors } = res.data.result;
            const isLast = count / params.pageSize &lt;= pageParam;

            return {
                count: count,
                items: mentors,
                nextPage: isLast ? undefined : pageParam + 1
            };
        }
    };

    const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: [queryKey, params],
        queryFn: fetchMentorList,
        staleTime: 60 * 1000,
        getNextPageParam: (lastPage) =&gt; lastPage.nextPage
    });

    return (
        &lt;&gt;
            {hasNextPage &amp;&amp; &lt;button onClick={() =&gt; fetchNextPage()}&gt;Load More&lt;/button&gt;}
        &lt;/&gt;
    );
}</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">useMutation로 데이터 업데이트하기</h3>
<p class="attr_p">React Query의 <code>useMutation</code>은 <code>POST</code>, <code>PUT</code>, <code>DELETE</code>와 같은 데이터 변경 요청을 처리하기 위한 강력한 기능을 제공합니다. 이는 데이터를 서버에 수정, 추가 또는 삭제하는 작업을 수행할 때 사용됩니다.</p>
<h4 class="attr_title">useMutation의 기본 사용법</h4>
<p class="attr_p"><code>useMutation</code>은 데이터 업데이트 작업을 쉽고 효율적으로 처리할 수 있게 해주며, 작업 성공 후 캐시된 데이터를 자동으로 업데이트할 수 있도록 지원합니다. 기본적인 사용 방법은 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const { mutate } = useMutation(mutationFn, {
  onSuccess: () =&gt; {
    queryClient.invalidateQueries(['data-key']);
  }
});</pre>
</div>
<p class="attr_p">여기서 <code>mutationFn</code>은 데이터를 서버에 요청하는 비동기 함수이며, <code>onSuccess</code>는 요청이 성공했을 때 실행되는 콜백 함수입니다.</p>
<h4 class="attr_title">데이터 캐시 무효화: invalidateQueries</h4>
<p class="attr_p"><code>useMutation</code>을 사용할 때 중요한 점은 데이터 업데이트 후 캐시된 데이터의 일관성을 유지하는 것입니다. <code>invalidateQueries</code> 함수는 기존에 캐싱된 데이터를 무효화하고, 필요한 경우 데이터를 새로 패칭합니다. 이는 데이터 업데이트가 반영된 최신 상태를 사용자에게 보여줄 수 있도록 합니다. <span class="set-check-note">데이터 업데이트 후 캐시 무효화를 수행하면, 사용자가 데이터의 최신 상태를 확인할 수 있습니다.</span></p>
<h5 class="attr_title">실제 적용 예시</h5>
<p class="attr_p">아래의 예시에서는 음성 대화 중에 메모를 작성하고 수정할 수 있는 기능이 구현되어 있습니다. 이 때 <code>useMutation</code>을 사용하여 메모를 수정하고, 수정이 완료되면 <code>invalidateQueries</code>를 호출하여 메모 리스트를 즉시 업데이트합니다. 이는 다음과 같이 구현할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMemo } from '@/apis';

const queryClient = useQueryClient();

const { mutate } = useMutation(updateMemo, {
  onSuccess: () =&gt; {
    queryClient.invalidateQueries(['memo-list']);
  }
});

// mutate 함수를 사용하여 메모를 수정
mutate({ memoId: 1, content: 'Updated content' });</pre>
</div>
<h4 class="attr_title">데이터 수동 업데이트: setQueryData</h4>
<p class="attr_p">React Query의 <code>setQueryData</code>는 서버 요청 없이 클라이언트 측에서 쿼리 데이터를 직접 조작할 수 있는 기능을 제공합니다. 이를 통해 네트워크 지연 없이 UI를 즉시 업데이트할 수 있으며, 사용자 경험을 크게 향상시킬 수 있습니다.</p>
<h5 class="attr_title">setQueryData의 기능과 사용법</h5>
<p class="attr_p"><code>setQueryData</code>는 <code>invalidateQueries</code>가 데이터를 무효화하고 서버로부터 새로운 데이터를 패칭하는 반면, 직접 원하는 데이터로 쿼리 데이터를 수동으로 설정할 수 있습니다. 이 방식은 데이터를 리패치할 필요 없이 즉시 화면에 반영되므로 사용자에게 빠른 반응을 제공할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const { mutate } = useMutation(updateData, {
  onSuccess: () =&gt; {
    const currentData = queryClient.getQueryData(["data-key"]);
    const newData = {...currentData, ...updatedValues};
    queryClient.setQueryData(["data-key"], newData);
  }
});</pre>
</div>
<h5 class="attr_title">실제 적용 예시</h5>
<p class="attr_p">다음은 북마크 추가 또는 삭제 기능을 <code>setQueryData</code>를 사용하여 즉시 반영하는 방법에 대한 예시입니다. 이 기능은 특히 데이터 리스트가 크고 복잡할 때 매우 유용합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useMutation, useQueryClient } from '@tanstack/react-query';

const queryClient = useQueryClient();

const toggleBookmark = async (mentorId) =&gt; {
  // 서버 요청을 통해 북마크 상태 변경
  return await changeBookmarkStatus(mentorId);
};

const { mutate } = useMutation(toggleBookmark, {
  onSuccess: (data, variables) =&gt; {
    const lists = queryClient.getQueryData(["mentor-list"]);
    const updatedLists = updateMentorList(data, variables, lists);
    queryClient.setQueryData(["mentor-list"], updatedLists);
  },
});

function updateMentorList(data, variables, lists) {
  const { pages, pageParams } = lists;
  let page = pages[data.pageKey];
  const key = page.findIndex(mentor =&gt; mentor.id === variables.mentorId);
  page[key].isBookmarked = !page[key].isBookmarked;

  return {
    pageParams,
    pages,
  };
}</pre>
</div>
<p class="attr_p">위 코드는 <code>useMutation</code>을 사용하여 북마크 상태를 변경하고, 변경이 성공하면 관련 데이터 리스트를 <code>setQueryData</code>를 통해 즉시 업데이트합니다. 이로 인해 사용자는 북마크 토글 작업이 마치 실시간으로 반영되는 것처럼 느낄 수 있습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">코드 간소화와 효율적 데이터 관리</h3>
<p class="attr_p">전통적인 React 개발 방식에서는 데이터 패칭과 상태 관리를 위해 상당한 양의 보일러플레이트 코드가 필요했습니다. <span class="set-check-note">기존 방식은 데이터를 호출할 때마다 결과를 저장할 상태값을 생성하고, 데이터의 존재 여부를 판단하기 위해 <code>isLoading</code>과 같은 상태도 별도로 관리해야 했습니다.</span> 또한, <code>useEffect</code>를 사용하여 데이터를 패칭하는 등의 번거로운 작업을 수행해야 했습니다.</p>
<p class="attr_p">React Query의 도입은 이러한 복잡성을 대폭 줄여줍니다. <span class="set-check-note">React Query를 사용하면 코드의 양이 줄어들고, 데이터 관리가 깔끔하게 정리되며, 사용법도 아주 간단하여 도입이 어렵지 않습니다.</span> 이 라이브러리는 다음과 같은 주요 장점을 제공합니다:</p>
<ul class="attr_list a__list number">
<li><b>자동 상태 관리:</b> React Query는 <code>isLoading</code>, <code>isError</code>, <code>data</code> 등의 상태를 자동으로 관리해줍니다. 개발자는 별도의 상태 관리 로직을 작성할 필요 없이 이러한 상태들을 즉시 사용할 수 있습니다.</li>
<li><b>효율적인 데이터 패칭:</b> <code>useQuery</code>와 <code>useMutation</code> 같은 훅을 사용하여 데이터 패칭과 업데이트를 간단하게 처리할 수 있습니다. 이는 코드를 더욱 간결하게 만들고, 개발 과정을 효율적으로 합니다.</li>
<li><b>향상된 사용자 경험:</b> <code>onSuccess</code>, <code>onError</code>와 같은 콜백 함수를 제공하여, 데이터 패칭의 성공 또는 실패 후에 즉각적인 피드백을 제공할 수 있습니다. 이는 사용자 경험을 크게 향상시킵니다.</li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useQuery } from '@tanstack/react-query';

const fetchUserData = async () =&gt; {
  const response = await fetch("https://api.example.com/user");
  return response.json();
};

function UserProfile() {
  const { data, isLoading, isError } = useQuery(['user'], fetchUserData);

  if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (isError) return &lt;div&gt;Error loading user data.&lt;/div&gt;;
  return &lt;div&gt;User Name: {data.name}&lt;/div&gt;;
}</pre>
</div>
<p class="attr_p">위 예시에서 볼 수 있듯이, React Query를 사용하면 데이터 패칭과 관련된 상태 관리를 명확하고 간단하게 처리할 수 있습니다. 이를 통해 개발자가 더 중요한 기능 개발에 집중할 수 있게 해주며, <span data-spell="application">애플리케이션</span>의 유지보수성을 향상시킵니다.</p>
</div>
</section>`;
