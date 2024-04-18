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
<p class="attr_p">리액트(React)에서 데이터 관리는 항상 중요한 과제입니다. 여러 상태 관리 라이브러리가 이 과제를 해결하려는 다양한 접근 방식을 제공하는데, <span class="set-check-note">Redux와 Recoil 같은 라이브러리는 클라이언트 상태와 서버 상태를 함께 관리하는 경우가 많습니다.</span> 하지만, <span class="set-check-note">React Query는 클라이언트 상태와 서버 상태를 분리하여 관리하게 해주어, 데이터 관리를 직관적이고 효율적으로 할 수 있습니다.</span></p>
<p class="attr_p"><span class="set-check-note">React Query를 사용하면 비동기 로직을 쉽게 다룰 수 있습니다.</span> 이는 개발자가 데이터 상태 관리에 들이는 노력을 줄이고, 더 중요한 사용자 인터페이스(UI) 및 사용자 경험(UX) 개선에 더 많은 시간을 할애할 수 있도록 도와줍니다. 또한, React Query는 데이터를 효율적으로 관리하며, 오류 처리와 데이터 로딩 상태 관리를 사용자 친화적으로 만들어 주는 다양한 기능을 제공합니다.</p>
<p class="attr_p">이렇게 React Query는 복잡한 데이터 관리 작업을 더 간단하게 만들어 주어, <span data-spell="application">애플리케이션</span>의 전체적인 코드 품질과 개발 속도를 향상시킬 수 있습니다. 이러한 이유로 많은 현대적인 웹 개발 프로젝트에서 선호되는 도구 중 하나입니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">React Query의 핵심 기능 및 장단점</h3>
<h4 class="attr_title">코드 간소화와 효율적 데이터 관리</h4>
<p class="attr_p">전통적인 React 개발 방식에서는 데이터 패칭과 상태 관리를 위해 상당한 양의 보일러플레이트 코드가 필요했습니다. <span class="set-check-note">기존 방식은 데이터를 호출할 때마다 결과를 저장할 상태값을 생성하고, 데이터의 존재 여부를 판단하기 위해 <code>isLoading</code>과 같은 상태도 별도로 관리해야 했습니다.</span> 또한, <code>useEffect</code>를 사용하여 데이터를 패칭하는 등의 번거로운 작업을 수행해야 했습니다.</p>
<p class="attr_p">React Query을 도입하면 이러한 복잡성을 대폭 줄여줍니다. <span class="set-check-note">React Query를 사용하면 코드의 양이 줄어들고, 데이터 관리가 깔끔하게 정리되며, 사용법도 아주 간단하여 도입이 어렵지 않습니다.</span> 이 라이브러리는 다음과 같은 주요 장점을 제공합니다:</p>
<ul class="attr_list a__list number">
<li><b>자동 상태 관리:</b> React Query는 <code>isLoading</code>, <code>isError</code>, <code>data</code> 등의 상태를 자동으로 관리해줍니다. 개발자는 별도의 상태 관리 로직을 작성할 필요 없이 이러한 상태들을 즉시 사용할 수 있습니다.</li>
<li><b>효율적인 데이터 패칭:</b> <code>useQuery</code>와 <code>useMutation</code> 같은 훅을 사용하여 데이터 패칭과 업데이트를 간단하게 처리할 수 있습니다. 이는 코드를 더욱 간결하게 만들고, 개발 과정을 효율적으로 합니다.</li>
<li><b>향상된 사용자 경험:</b> <code>onSuccess</code>, <code>onError</code>와 같은 콜백 함수를 제공하여, 데이터 패칭의 성공 또는 실패 후에 즉각적인 피드백을 제공할 수 있습니다. 이는 사용자 경험을 크게 향상시킵니다.</li>
</ul>
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

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getServerData = async (): Promise&lt;Todo[]&gt; =&gt; {
  const response = await fetch('https://api.example.com/projects');
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: Todo[] = await response.json();
  return data;
};

export default function ReactExample01() {
  const [state, setState] = useState&lt;any[]&gt;([]);

  useEffect(() =&gt; {
    getServerData()
      .then((dataList) =&gt; setState(dataList))
      .catch((e) =&gt; setState([]));
  }, []);

  return &lt;div&gt;{JSON.stringify(state)}&lt;/div&gt;;
}
</pre>
</div>
<h4 class="attr_title">React Query 사용의 장점</h4>
<p class="attr_p"><span class="set-check-note">React Query를 사용하면 이 과정을 <code>useQuery</code> 한 줄로 처리할 수 있습니다.</span> 이로 인해 코드의 양이 감소하고, 사이드 이펙트를 제거할 수 있습니다. 또한, 데이터 패칭 방식을 표준화할 수 있으며, <code>enabled</code> 옵션을 이용한 동기적 실행이 가능해집니다. React Query를 사용한 코드 예는 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getServerData = async (): Promise&lt;Todo[]&gt; =&gt; {
  const response = await fetch('https://api.example.com/projects');
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: Todo[] = await response.json();
  return data;
};

export default function ReactExample02() {
  const { data } = useQuery&lt;Todo[], Error&gt;({ queryKey: ["data"], queryFn: getServerData });
  return &lt;div&gt;{JSON.stringify(data)}&lt;/div&gt;;
}
</pre>
</div>
<h4 class="attr_title">동기적 실행의 예</h4>
<p class="attr_p">동기적 실행에 대한 전통적인 접근 방식은 여러 상태와 <code>useEffect</code>를 필요로 합니다. React Query를 사용하면 <code>enabled</code> 옵션을 통해 필요한 데이터가 있을 때만 API 호출이 이루어지도록 설정할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useQuery, QueryFunctionContext } from "@tanstack/react-query";

// queryKey의 타입을 정의하면서 QueryFunctionContext 사용
const getServerData = async ({ queryKey }: QueryFunctionContext&lt;string[]&gt;) =&gt; {
  const key = queryKey[1] as string; // 적절한 타입 어설션 추가
  console.log("key =&gt; ", key);

  // 예를 들어, key에 따라 다른 URL로 요청을 보낼 수 있습니다.
  const response = await fetch(\`https://api.example.com/projects/\${key}\`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export default function ReactExample03() {
  // 첫 번째 데이터 쿼리
  const { data: data1 } = useQuery({
    queryKey: ["data", "project1"],
    queryFn: getServerData,
  });

  // 두 번째 데이터 쿼리 (data1에 의존적)
  const { data: data2 } = useQuery({
    queryKey: ["data", "project2"],
    queryFn: getServerData,
    enabled: !!data1, // data1이 존재할 때만 이 쿼리가 활성화 됨
  });

  return (
    &lt;div&gt;
      &lt;p&gt;Data1: {JSON.stringify(data1)}&lt;/p&gt;
      &lt;p&gt;Data2: {JSON.stringify(data2)}&lt;/p&gt;
    &lt;/div&gt;
  );
}</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">React Query에서의 캐싱 기능</h3>
<p class="attr_p">React Query는 효과적인 데이터 관리를 위해 캐싱 기능을 제공합니다. <span class="set-check-note">캐싱은 특정 데이터의 복사본을 저장하여, 이후 동일한 요청의 재접근 속도를 높이는 기술입니다.</span> 이 기능을 활용하여 불필요한 API 호출을 줄이고, 캐싱된 데이터를 효율적으로 이용할 수 있습니다.</p>
<h4 class="attr_title">StaleTime과 CacheTime 설정</h4>
<h5 class="attr_title">StaleTime</h5>
<p class="attr_p">호출된 데이터의 "신선도"를 관리합니다. StaleTime은 캐시된 데이터의 유통기한을 설정하는 옵션이며, <span class="set-check-note">기본값은 0입니다.</span> 이는 데이터를 즉시 stale 상태로 간주하며, 별도의 설정 없이는 캐싱 기능을 활용하지 못합니다.</p>
<h5 class="attr_title">GcTime(CacheTime)</h5>
<p class="attr_p">이전 버전에서 사용하던 CacheTime이 GcTime으로 변경되었는데, 이는 데이터가 "<span data-spell-viewer="inactive">비활성</span>" 상태일 때, 즉 더 이상 사용되지 않는 동안 캐싱된 데이터가 얼마나 오래 유지될지 결정합니다. 기본값은 5분이며, 이 시간 동안 데이터는 메모리에 남아있습니다. 예를 들어, 다음과 같은 설정을 사용할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

// QueryClient 인스턴스 생성 시 옵션 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000, // 5 seconds
      gcTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  return (
    &lt;QueryClientProvider client={queryClient}&gt;
      &lt;MyComponent /&gt;
    &lt;/QueryClientProvider&gt;
  );
}

const fetchData = async () =&gt; {
  const response = await fetch("https://api.example.com/data");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

function MyComponent() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });

  if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (isError) return &lt;div&gt;Error: {error.message}&lt;/div&gt;;

  return &lt;div&gt;{JSON.stringify(data)}&lt;/div&gt;;
}

export default App;</pre>
</div>
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
npm i @tanstack/react-query</pre>
</div>
<h4 class="attr_title">QueryClient 설정</h4>
<p class="attr_p">React Query를 사용하기 위해 필요한 첫 번째 단계는 <code>QueryClient</code> 객체를 생성하는 것입니다. 이 객체는 쿼리의 상태와 캐시를 관리합니다. 생성 방법은 다음과 같습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
<h5 class="attr_title">3. 개별 페이지에서 데이터 패칭하기</h5>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// page.tsx

const Page = () =&gt; {
  const getTodo = async () =&gt; {
    const res = await fetch("https://api.project.com/products");
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
const {
  data, // 쿼리를 통해 반환된 데이터
  error, // 에러 객체
  isLoading, // 데이터 로딩 중인지 여부
  isError, // 에러 발생 여부
  isSuccess, // 쿼리가 성공적으로 완료되었는지 여부
  refetch, // 쿼리를 수동으로 다시 실행하는 함수
  // 기타 많은 상태 값들
} = useQuery({
  queryKey,
  queryFn,
  // 추가 설정 옵션
});</pre>
</div>
<p class="attr_p">여기서 각 파라미터의 역할은 다음과 같습니다:</p>
<ul class="attr_list a__list number">
<li><b>queryKey:</b> React Query는 고유한 쿼리 키(query key)를 사용하여 데이터 패칭 요청을 식별합니다. <span class="set-check-note">쿼리 키는 배열 형태로 제공되며, 첫 번째 인덱스에는 유니크한 문자열이 포함되는데, 이 유니크한 쿼리 키는 데이터의 캐싱과 재요청에 중요한 역할을 합니다.</span></li>
<li><b>queryFn:</b> 이 함수는 실제로 데이터를 서버에서 가져오는 비동기 작업을 수행합니다. <code>Promise</code>를 반환하는 비동기 함수로, <code>useQuery</code> 호출 시 정의할 수 있습니다.</li>
<li><b>options:</b> 쿼리 동작을 제어하는 다양한 옵션을 설정할 수 있습니다. 예를 들어, <code>staleTime</code> 옵션을 <code>Infinity</code>로 설정하면 데이터가 변하지 않을 것으로 예상되는 경우 유용합니다.</li>
</ul>
<h5 class="attr_title">주요 옵션들</h5>
<p class="attr_p"><code>useQuery</code> 함수는 다양한 옵션을 통해 동작을 맞춤 설정할 수 있습니다:</p>
<ul class="attr_list a__list dot">
<li><b>queryKey (필수):</b> 쿼리의 고유 식별자로 배열 또는 문자열을 사용할 수 있습니다. 쿼리 키가 변경되면 자동으로 쿼리가 업데이트됩니다.</li>
<li><b>queryFn (필수):</b> 데이터를 요청하는 비동기 함수입니다. 이 함수는 프로미스를 반환해야 하며, 데이터 또는 에러를 resolve 해야 합니다.</li>
<li><b>staleTime:</b> 데이터가 새롭다고 간주되는 시간(밀리초). 이 시간이 지나면 데이터는 "stale"로 간주됩니다. 기본값은 0입니다.</li>
<li><b>retry:</b> 쿼리가 실패했을 때 재시도할지 여부를 설정합니다. true, false, 또는 재시도 횟수를 지정할 수 있습니다.</li>
<li><b>refetchOnWindowFocus:</b> 윈도우가 포커스를 받을 때 데이터를 새로 고칠지 여부를 설정합니다. 기본값은 true입니다.</li>
<li><b>refetchInterval:</b> 주어진 시간 간격(밀리초)으로 데이터를 주기적으로 새로 고칩니다.</li>
<li><b>enabled:</b> 쿼리가 자동으로 실행되지 않도록 설정할 수 있습니다. 의존성이 충족되지 않은 경우 유용합니다.</li>
</ul>
<h5 class="attr_title">상태 값</h5>
<ul class="attr_list a__list dot">
<li><b>isFetching:</b> 쿼리 함수가 실행 중인지 여부입니다. 초기 로드 뿐만 아니라 배경 업데이트시에도 true가 될 수 있습니다.</li>
<li><b>isError:</b> 쿼리 실행 중 에러가 발생했는지 여부입니다.</li>
<li><b>dataUpdatedAt:</b> 마지막으로 데이터가 성공적으로 업데이트된 시각의 타임스탬프입니다.</li>
<li><b>errorUpdatedAt:</b> 마지막으로 에러가 업데이트된 시각의 타임스탬프입니다.</li>
<li><b>isStale:</b> 쿼리 데이터가 만료되었는지 여부입니다.</li>
</ul>
<h5 class="attr_title">진행 관리</h5>
<ul class="attr_list a__list dot">
<li><b>refetch:</b> 쿼리를 수동으로 다시 실행할 수 있는 함수입니다.</li>
<li><b>gcTime:</b> 캐시에서 사용되지 않는 데이터가 메모리에 유지되는 시간입니다. 기본값은 5분입니다.</li>
</ul>
<h5 class="attr_title">추가 기능</h5>
<ul class="attr_list a__list dot">
<li><b>select:</b> 쿼리 결과에서 특정 데이터를 변형하거나 선택하는 데 사용됩니다.</li>
<li><b>initialData:</b> 쿼리의 초기 데이터를 설정할 수 있습니다.</li>
</ul>
<p class="attr_p"><code>useQuery</code>는 데이터 패칭과 관련된 로직을 추상화하고, 컴포넌트에서 데이터를 쉽게 사용할 수 있도록 다양한 유틸리티와 상태 관리 기능을 제공합니다. 이를 통해 데이터 의존성이 있는 UI를 보다 쉽고 효과적으로 구현할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () =&gt; {
  const response = await fetch("https://api.project.com/projects");
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () =&gt; {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchPosts,
    staleTime: 5000  // 데이터는 5초 동안 신선함으로 간주됩니다.
  });

  if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (isError) return &lt;div&gt;Error loading the data.&lt;/div&gt;;
  return (
    &lt;ul&gt;
      {data?.map(post =&gt; &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;)}
    &lt;/ul&gt;
  );
};

export default PostsComponent;</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">useQueries로 여러 쿼리 동시에 실행하기</h3>
<p class="attr_p">React Query는 여러 데이터 요청을 효율적으로 관리할 수 있는 <code>useQueries</code> 훅을 제공합니다. 이 함수는 여러 개의 <code>useQuery</code>를 한 번에 실행할 수 있게 하며, <code>Promise.all()</code>과 유사하게 동작하여 복수의 요청을 동시에 처리합니다.</p>
<p class="attr_p"><code>useQueries</code> 훅을 사용하면 다양한 쿼리를 효율적으로 동시에 관리하고, 결과를 쉽게 조합하여 사용할 수 있으며, 이는 동적인 쿼리 수나 다양한 데이터 소스에서 정보를 가져와야 할 때 유용하게 사용될 수 있습니다.</p>
<h4 class="attr_title">useQueries의 기본 사용법</h4>
<p class="attr_p"><code>useQueries</code>는 배열 형태로 여러 쿼리의 설정을 받아 처리하며, 각 쿼리는 고유의 <code>queryKey</code>와 <code>queryFn</code>, 그리고 필요에 따라 다른 옵션들을 설정할 수 있습니다. <span class="set-check-note">각 쿼리의 결과는 배열로 묶여 반환되며, 이는 개별 쿼리의 상태와 데이터를 쉽게 관리할 수 있게 합니다.</span></p>
<p class="attr_p"><code>useQueries</code> 훅은 배열로 구성된 쿼리들을 실행할 수 있게 해주며, 각 쿼리는 <code>queryKey</code>와 <code>queryFn</code>을 포함한 설정 객체를 가지며, 여러 추가 옵션을 설정할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const ids = [1, 2, 3];
const results = useQueries({
  queries: ids.map((id) =&gt; ({
    queryKey: ['post', id],
    queryFn: () =&gt; fetchPost(id),
    staleTime: Infinity,
  })),
});</pre>
</div>
<h5 class="attr_title">옵션</h5>
<ul class="attr_list a__list dot">
<li><b>queries:</b> 실행할 쿼리들의 배열입니다. 각 쿼리는 useQuery와 동일한 옵션 객체를 받습니다.</li>
<li><b>queryClient:</b> 커스텀 QueryClient를 제공할 경우 사용합니다. 제공하지 않으면 가장 가까운 컨텍스트의 QueryClient가 사용됩니다.</li>
<li><b>combine:</b> 쿼리 결과를 단일 값으로 결합하는 함수입니다. 이 옵션을 사용하면 각 쿼리의 결과를 하나의 결과로 결합할 수 있습니다.</li>
</ul>
<h5 class="attr_title">반환 값</h5>
<p class="attr_p"><code>useQueries</code>는 쿼리 결과의 배열을 반환합니다. 반환되는 배열의 순서는 입력된 쿼리의 순서와 동일합니다.</p>
<h5 class="attr_title">결과 결합</h5>
<p class="attr_p">결과를 결합하고자 할 때 <code>combine</code> 옵션을 사용할 수 있습니다. 이 함수는 쿼리의 결과를 구조적으로 공유하여 가능한 한 참조 안정성을 유지하면서 단일 값으로 결합합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const combinedQueries = useQueries({
  queries: ids.map((id) =&gt; ({
    queryKey: ['post', id],
    queryFn: () =&gt; fetchPost(id),
  })),
  combine: (results) =&gt; {
    return {
      data: results.map((result) =&gt; result.data),
      pending: results.some((result) =&gt; result.isPending),
    };
  },
});</pre>
</div>
<p class="attr_p">위 예제에서 <code>combinedQueries</code>는 <code>data</code>와 <code>pending</code> 속성을 가진 객체가 됩니다. <code>data</code>는 각 쿼리의 데이터를 배열로, pending은 하나 이상의 쿼리가 대기 중인지 여부를 나타냅니다.</p>
<h5 class="attr_title">메모이제이션</h5>
<p class="attr_p"><code>combine</code> 함수는 함수 자체가 참조적으로 변경되거나 쿼리 결과가 변경될 때만 재실행됩니다. 이는 <code>combine</code> 함수가 인라인으로 제공되면 매 렌더링마다 실행될 수 있음을 의미합니다. 따라서 성능 최적화를 위해 <code>useCallback</code>을 사용하여 <code>combine</code> 함수를 메모이제이션하거나, 의존성이 없다면 외부에서 안정적인 함수 참조로 추출하는 것이 좋습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">useInfiniteQuery로 무한 스크롤 구현하기</h3>
<p class="attr_p"><code>useInfiniteQuery</code>는 무한 스크롤 또는 페이지네이션 구현 시 사용됩니다. 이 훅은 여러 페이지의 데이터를 순차적으로 불러오고 관리할 수 있는 기능을 제공합니다.</p>
<h4 class="attr_title">useInfiniteQuery의 기본 사용법</h4>
<p class="attr_p"><code>useInfiniteQuery</code>는 <code>useQuery</code>와 비슷한 사용 방식을 가지지만, 여러 페이지 데이터를 관리하기 위한 추가 옵션이 있습니다. 이 함수는 객체 <code>{pageParams: [], pages: []}</code>를 반환하며, 페이지 데이터와 관련된 다양한 함수와 속성을 제공합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const {
  fetchNextPage,
  fetchPreviousPage,
  hasNextPage,
  hasPreviousPage,
  isFetchingNextPage,
  isFetchingPreviousPage,
  data,
  ...result
} = useInfiniteQuery({
  queryKey,
  queryFn: ({ pageParam }) =&gt; fetchPage(pageParam),
  initialPageParam: 1,
  getNextPageParam: (lastPage, allPages) =&gt; lastPage.nextCursor,
  getPreviousPageParam: (firstPage, allPages) =&gt; firstPage.prevCursor,
  // 기타 옵션
});</pre>
</div>
<h5 class="attr_title">주요 옵션</h5>
<ul class="attr_list a__list dot">
<li><b>queryFn:</b> 데이터를 가져오는 비동기 함수입니다. <code>pageParam</code>을 인자로 받아 해당 페이지의 데이터를 요청합니다.</li>
<li><b>initialPageParam:</b> 첫 페이지 요청 시 사용될 초기 페이지 매개변수입니다.</li>
<li><b>getNextPageParam:</b> 새 데이터를 받았을 때 다음 페이지를 가져오기 위한 매개변수를 결정하는 함수입니다. 마지막 페이지 데이터를 기반으로 다음 페이지 키를 반환합니다.</li>
<li><b>getPreviousPageParam:</b> 새 데이터를 받았을 때 이전 페이지를 가져오기 위한 매개변수를 결정하는 함수입니다. 첫 페이지 데이터를 기반으로 이전 페이지 키를 반환합니다.</li>
<li><b>maxPages:</b> 캐시에 저장할 수 있는 최대 페이지 수입니다. 이 값을 초과하는 새 페이지가 요청되면, 가장 오래된 페이지부터 제거됩니다.</li>
</ul>
<h5 class="attr_title">반환 값</h5>
<ul class="attr_list a__list dot">
<li><b>data.pages:</b> 모든 페이지의 데이터를 포함하는 배열입니다.</li>
<li><b>data.pageParams:</b> 각 페이지 요청에 사용된 매개변수의 배열입니다.</li>
<li><b>isFetchingNextPage:</b> 다음 페이지를 가져오는 중인지 여부를 나타냅니다.</li>
<li><b>isFetchingPreviousPage:</b> 이전 페이지를 가져오는 중인지 여부를 나타냅니다.</li>
<li><b>fetchNextPage:</b> 다음 페이지의 데이터를 요청하는 함수입니다.</li>
<li><b>fetchPreviousPage:</b> 이전 페이지의 데이터를 요청하는 함수입니다.</li>
<li><b>hasNextPage:</b> 다음 페이지가 있는지 여부입니다.</li>
<li><b>hasPreviousPage:</b> 이전 페이지가 있는지 여부입니다.</li>
</ul>
<h4 class="attr_title">페이지 매개변수와 동적 패칭</h4>
<p class="attr_p"><code>useInfiniteQuery</code>는 <code>pageParam</code>을 사용하여 각 페이지 요청을 관리합니다. <code>getNextPageParam</code>은 페이지 요청 후 다음 페이지 번호를 계산하여 반환하는 함수입니다. 이 함수는 데이터의 마지막 페이지를 판단하는 데 중요한 역할을 합니다.</p>
<p class="attr_p"><span class="set-check-note">이 방식은 특히 검색 조건이나 사용자의 입력에 따라 데이터가 변경될 수 있는 경우에 유용합니다.</span> 예를 들어, 사용자의 검색 조건에 따라 다르게 데이터를 로드하는 경우, 각 페이지 로드 시 <code>pageParam</code>을 조정하여 적절한 데이터를 요청할 수 있습니다.</p>
<p class="attr_p"><b>fetchNextPage</b>와 <b>fetchPreviousPage</b> 함수는 사용자 행동에 응답하여 호출되어야 합니다. 자동화된 호출은 데이터 일관성을 해칠 수 있으며, 불필요한 네트워크 요청을 유발할 수 있습니다.</p>
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
        items: mentors,
        nextPage: isLast ? undefined : pageParam + 1,
        pageParam: pageParam // this might be optional depending on your logic
      };
    } else {
      throw new Error('Unable to fetch data');
    }
  };

    const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
      queryKey: ['mentorList', params], // Adjusted to be a more clear and structured query key
      queryFn: ({ pageParam }) =&gt; fetchMentorList({ pageParam }),
      getNextPageParam: (lastPage) =&gt; lastPage.nextPage,
      staleTime: 60000 // Changed to milliseconds to follow convention
    });

    return (
      &lt;&gt;
        &lt;div&gt;
          {data?.pages.map((page, index) =&gt; (
            &lt;div key={index}&gt;
              {page.items.map(mentor =&gt; (
                &lt;div key={mentor.id}&gt;{mentor.name}&lt;/div&gt;
              ))}
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
        {hasNextPage &amp;&amp; (
          &lt;button onClick={() =&gt; fetchNextPage()} disabled={isFetchingNextPage}&gt;
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          &lt;/button&gt;
        )}
      &lt;/&gt;
    );
}</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">useMutation로 데이터 업데이트하기</h3>
<p class="attr_p">React Query의 <code>useMutation</code>은 <code>POST</code>, <code>PUT</code>, <code>DELETE</code>와 같은 데이터 변경 요청을 처리하기 위한 강력한 기능을 제공합니다. 이는 데이터를 서버에 수정, 추가 또는 삭제하는 작업을 수행할 때 사용됩니다.</p>
<h4 class="attr_title">useMutation의 기본 사용법</h4>
<p class="attr_p"><code>useMutation</code>은 데이터 업데이트 작업을 쉽고 효율적으로 처리할 수 있게 해주며, 작업 성공 후 캐시된 데이터를 자동으로 업데이트할 수 있도록 지원합니다. <code>useMutation</code>은 비동기 함수(<code>mutationFn</code>)와 여러 추가 설정을 포함한 설정 객체를 인자로 받으며, 이 훅은 비동기 작업의 상태를 관리하고, 작업의 성공, 실패에 대한 콜백을 제공합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const {
  mutate,
  mutateAsync,
  data,
  error,
  isError,
  isSuccess,
  status,
  reset,
  ...otherProps
} = useMutation({
  mutationFn,
  ...options
});
</pre>
</div>
<h5 class="attr_title">주요 옵션</h5>
<ul class="attr_list a__list dot">
<li><b>mutationFn:</b> 비동기 작업을 수행할 함수입니다. 이 함수는 프로미스를 반환해야 하며, 성공적으로 데이터를 반환하거나 에러를 throw 할 수 있습니다.</li>
<li><b>onMutate:</b> 변이가 트리거 되기 전에 호출됩니다. 이 함수에서는 최적화 업데이트 등을 수행할 수 있습니다.</li>
<li><b>onSuccess:</b> 변이가 성공적으로 완료된 후에 호출됩니다. 변이 결과와 관련 데이터를 인자로 받습니다.</li>
<li><b>onError:</b> 변이가 에러와 함께 실패했을 때 호출됩니다. 에러 객체와 변이에 사용된 변수들을 인자로 받습니다.</li>
<li><b>onSettled:</b> 변이가 성공하든 실패하든 마지막에 호출됩니다. 데이터 또는 에러 객체를 인자로 받습니다.</li>
<li><b>retry:</b> 변이 실패 시 재시도할 횟수를 지정합니다. 불리언 값 또는 특정 횟수, 실패 횟수에 따라 재시도 여부를 결정하는 함수를 제공할 수 있습니다.</li>
<li><b>retryDelay:</b> 재시도 간의 지연 시간을 밀리초 단위로 지정합니다. 지연 시간을 계산하는 함수를 제공할 수도 있습니다.</li>
</ul>
<h5 class="attr_title">반환 값</h5>
<ul class="attr_list a__list dot">
<li><b>mutate:</b> 변이 함수를 실행합니다. 이 함수에는 변수와 함께 콜백 옵션을 추가할 수 있습니다.</li>
<li><b>mutateAsync:</b> mutate와 유사하지만 프로미스를 반환하여 await 가능합니다.</li>
<li><b>data:</b> 성공적으로 완료된 마지막 변이의 결과 데이터입니다.</li>
<li><b>error:</b> 발생한 마지막 에러 객체입니다.</li>
<li><b>status:</b> 변이의 현재 상태입니다 (idle, pending, error, success).</li>
<li><b>isIdle, isPending, isSuccess, isError:</b> 각 상태에 대한 불리언 플래그입니다.</li>
<li><b>reset:</b> 변이의 상태를 초기화합니다.</li>
</ul>
<h5 class="attr_title">사용 예시</h5>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const mutation = useMutation({
  mutationFn: updateUserData,
  onSuccess: (data) =&gt; {
    console.log('User data updated successfully:', data);
  },
  onError: (error) =&gt; {
    console.error('Failed to update user data:', error);
  },
  onSettled: () =&gt; {
    console.log('Mutation operation either succeeded or failed');
  }
});

// 변이 실행
mutation.mutate({ userId: 1, newData: { name: "John Doe" } });</pre>
</div>
<h4 class="attr_title">데이터 캐시 무효화: invalidateQueries</h4>
<p class="attr_p"><code>useMutation</code>을 사용할 때 중요한 점은 데이터 업데이트 후 캐시된 데이터의 일관성을 유지하는 것입니다. <code>invalidateQueries</code> 함수는 기존에 캐싱된 데이터를 무효화하고, 필요한 경우 데이터를 새로 패칭합니다. 이는 데이터 업데이트가 반영된 최신 상태를 사용자에게 보여줄 수 있도록 합니다. <span class="set-check-note">데이터 업데이트 후 캐시 무효화를 수행하면, 사용자가 데이터의 최신 상태를 확인할 수 있습니다.</span></p>
<h5 class="attr_title">실제 적용 예시</h5>
<p class="attr_p">아래의 예시에서는 음성 대화 중에 메모를 작성하고 수정할 수 있는 기능이 구현되어 있습니다. 이 때 <code>useMutation</code>을 사용하여 메모를 수정하고, 수정이 완료되면 <code>invalidateQueries</code>를 호출하여 메모 리스트를 즉시 업데이트합니다. 이는 다음과 같이 구현할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMemo } from '@/apis';

export default function UpdateMemoComponent() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateMemo,
    onSuccess: () =&gt; {
      // 'memo-list' 쿼리를 무효화하여 강제로 데이터를 새로 고침
      queryClient.invalidateQueries({
        queryKey: ['memo-list']
      });
    }
  });

  // mutate 함수를 사용하여 메모를 수정
  const updateMemoHandler = () =&gt; {
    mutate({ memoId: 1, content: 'Updated content' });
  };

  return (
    &lt;button onClick={updateMemoHandler}&gt;Update Memo&lt;/button&gt;
  );
}</pre>
</div>
<h4 class="attr_title">데이터 수동 업데이트: setQueryData</h4>
<p class="attr_p">React Query의 <code>setQueryData</code>는 서버 요청 없이 클라이언트 측에서 쿼리 데이터를 직접 조작할 수 있는 기능을 제공합니다. 이를 통해 네트워크 지연 없이 UI를 즉시 업데이트할 수 있으며, 사용자 경험을 크게 향상시킬 수 있습니다.</p>
<h5 class="attr_title">setQueryData의 기능과 사용법</h5>
<p class="attr_p"><code>setQueryData</code>는 <code>invalidateQueries</code>가 데이터를 무효화하고 서버로부터 새로운 데이터를 패칭하는 반면, 직접 원하는 데이터로 쿼리 데이터를 수동으로 설정할 수 있습니다. 이 방식은 데이터를 리패치할 필요 없이 즉시 화면에 반영되므로 사용자에게 빠른 반응을 제공할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateData } from '@/apis';

export default function UpdateDataComponent() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateData,
    onSuccess: (updatedValues) =&gt; {
      // 기존 쿼리 데이터를 가져오기
      const currentData = queryClient.getQueryData(['data-key']);
      // 새 데이터로 기존 데이터를 업데이트
      const newData = { ...currentData, ...updatedValues };

      // 쿼리 데이터를 새 데이터로 설정
      queryClient.setQueryData(['data-key'], newData);
    }
  });

  // 데이터 업데이트 트리거 함수
  const handleUpdate = () =&gt; {
    mutate({ key: 'value' });  // 여기에 필요한 매개변수를 넘겨줍니다.
  };

  return (
    &lt;button onClick={handleUpdate}&gt;Update Data&lt;/button&gt;
  );
}</pre>
</div>
<h5 class="attr_title">실제 적용 예시</h5>
<p class="attr_p">다음은 북마크 추가 또는 삭제 기능을 <code>setQueryData</code>를 사용하여 즉시 반영하는 방법에 대한 예시입니다. 이 기능은 특히 데이터 리스트가 크고 복잡할 때 매우 유용합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function MentorBookmarkComponent() {
  const queryClient = useQueryClient();

  const toggleBookmark = async (mentorId) =&gt; {
    // 서버 요청을 통해 북마크 상태 변경
    return await changeBookmarkStatus(mentorId);
  };

  const { mutate } = useMutation({
    mutationFn: toggleBookmark,
    onSuccess: (data, variables) =&gt; {
      // "mentor-list" 쿼리 데이터 가져오기
      const lists = queryClient.getQueryData(['mentor-list']);
      if (lists) {
        const updatedLists = updateMentorList(data, variables, lists);
        // "mentor-list" 쿼리 데이터 업데이트
        queryClient.setQueryData(['mentor-list'], updatedLists);
      }
    },
  });

  function updateMentorList(data, variables, lists) {
    const { pages, pageParams } = lists;
    return {
      ...lists,
      pages: pages.map(page =&gt;
        page.map(mentor =&gt;
          mentor.id === variables.mentorId
            ? { ...mentor, isBookmarked: !mentor.isBookmarked }
            : mentor
        )
      ),
      pageParams,
    };
  }

  // mutate 함수를 사용하여 멘토의 북마크 상태 토글
  const handleToggleBookmark = (mentorId) =&gt; {
    mutate(mentorId);
  };

  return (
    // UI 구성요소, 예를 들어 멘토 목록을 렌더링하는 컴포넌트 또는 각 멘토에 대한 북마크 토글 버튼 등을 포함
  );
}</pre>
</div>
<p class="attr_p">위 코드는 <code>useMutation</code>을 사용하여 북마크 상태를 변경하고, 변경이 성공하면 관련 데이터 리스트를 <code>setQueryData</code>를 통해 즉시 업데이트합니다. 이로 인해 사용자는 북마크 토글 작업이 마치 실시간으로 반영되는 것처럼 느낄 수 있습니다.</p>
</div>
</section>
`;
