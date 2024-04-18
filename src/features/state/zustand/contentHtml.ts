export const contentHtml = `<section class="attr_section">
<p class="attr_p attr_letter">프론트엔드 개발에서 상태는 웹 페이지의 렌더링에 영향을 미치는 모든 값을 포함하는 개념입니다. <span class="set-check-note">상태를 어떻게 관리하느냐에 따라 웹의 렌더링 효율이 달라질 수 있는 만큼, 상태 관리는 프론트엔드 개발자에게 중요한 작업 중 하나입니다.</span></p>
<p class="attr_p">이전까지 많은 프로젝트들은 <b>App.js</b>라는 최상위 컴포넌트에서 모든 데이터를 관리하면서, 이 데이터들을 하위 컴포넌트에 <code>props</code>로 전달하는 방식을 사용했습니다. 하지만, 이 방법은 <code>props</code> 전달이 깊어질수록 관리가 복잡해지는 문제를 발생시킵니다.</p>
<p class="attr_p">리액트는 각 컴포넌트가 독립적으로 상태를 관리할 수 있도록 설계되어 있습니다. 각 컴포넌트는 <code>useState</code> 훅을 사용하여 자신의 상태를 관리하며, 이 상태는 <code>props</code>를 통해 부모와 자식 간에 전파될 수 있습니다. 때문에, 프론트엔드 개발자는 상태의 시작점과 흐름을 이해하고 기억하는 것이 중요하며, 프로젝트의 규모가 커질수록 상태를 관리할 필요가 늘어납니다.</p>
<p class="attr_p">이렇게 프로젝트의 복잡성이 증가함에 따라 전역 상태 관리의 필요성이 부각되고 있는데, 이런 상태를 관리하기 위해 <b>Context API</b>, <b>Redux</b>, <b>React Query</b> 및 <b>Zustand</b>와 같은 다양한 상태 관리 도구가 널리 사용되고 있으며, Zustand는 이러한 도구 중 하나로, 편리하고 효율적인 상태 관리를 가능하게 합니다.</p>
<div class="attr_div">
<h3 class="attr_title">Zustand를 사용한 상태 관리와 주요 장점</h3>
<p class="attr_p"><span class="set-check-note">Zustand는 독일어로 '상태'를 의미하며, 간소화된 Flux 원리를 기반으로 한 상태 관리 솔루션입니다.</span> 이는 <b>Hooks</b>를 사용하여 편리한 API를 제공하며, 작고 빠르며 확장 가능한 특성을 지닙니다.</p>
<h4 class="attr_title">Zustand의 주요 장점</h4>
<ul class="attr_list a__list dot">
<li><b>간단한 사용법:</b> Zustand는 Redux나 Recoil과 달리, <span data-spell="application">애플리케이션</span>을 감싸는 별도의 provider 없이도 상태 관리가 가능합니다. 이는 개발 과정을 단순화시키며 빠른 개발을 가능하게 합니다.</li>
<li><b>최소한의 코드:</b> Zustand의 핵심 로직은 바닐라 자바스크립트 기준으로 단 42줄로 구성되어 있는 만큼, 매우 가벼운 솔루션입니다.</li>
<li><b>효율적인 렌더링:</b> 상태가 변경될 때만 컴포넌트를 렌더링하므로, 불필요한 리렌더링을 방지하여 성능을 향상시킵니다.</li>
<li><b>중앙 집중식 상태 관리:</b> <span class="set-check-note">상태 관리는 중앙 집중식으로 이루어지며, 단순하게 정의된 작업을 통해 업데이트됩니다.</span> 이는 Redux와 비슷하지만, Zustand는 Redux의 복잡성 없이 더 쉬운 상태 관리를 가능하게 합니다.</li>
<li><b>코드의 간결성:</b> Zustand는 별도의 컨텍스트 제공이 필요 없어 코드가 짧고 가독성이 높습니다.</li>
<li><b>보일러플레이트의 최소화:</b> 반복적인 코드 양을 최소화하여 프로젝트의 유지보수를 쉽게 합니다.</li>
<li><b>디버깅 용이:</b> <b>redux Devtools</b>와 호환되어 디버깅 과정을 간소화합니다.</li>
</ul>
</div>
<div class="attr_div">
<h3 class="attr_title">Zustand 설치 및 상태 관리 구현 방법</h3>
<h4 class="attr_title">1. Zustand 설치하기</h4>
<p class="attr_p">Zustand는 npm을 통해 쉽게 설치할 수 있습니다. 설치를 위해서는 터미널에 다음 명령어를 입력합니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm install zustand --save</pre>
</div>
<h4 class="attr_title">2. Store 생성 및 상태 정의</h4>
<p class="attr_p">Zustand를 사용하여 상태 관리를 수행하기 위해서는 <b>Store</b>를 생성해야 합니다. <span class="set-check-note">Store는 Hooks 형태로 생성되며, create 메서드를 사용하여 정의합니다.</span> Store 내부에서는 <span data-spell-viewer="state">상태</span>와 상태를 업데이트하는 함수를 정의할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { create } from "zustand";

export const useCounterStore = create((set) =&gt; ({
  count: 1,
  increse: () =&gt; set((state) =&gt; ({ count: state.count + 1 })),
}));</pre>
</div>
<p class="attr_p">위의 <code>useCounterStore</code>는 상태를 관리하는 Hook으로, <code>count</code>라는 상태와 이를 증가시키는 <code>increse</code> 함수를 포함하고 있습니다.</p>
<h4 class="attr_title">3. 컴포넌트 생성 및 Store 활용</h4>
<p class="attr_p">이제 React 컴포넌트에서 Zustand Store를 활용할 수 있으며, 다음과 같이 카운터 기능을 하는 컴포넌트를 생성할 수 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import React from "react";
import { useCounterStore } from "../Store";

const Counter = () =&gt; {
  const { count, increse } = useCounterStore();

  return (
    &lt;div className="counter"&gt;
      &lt;p&gt;{count}&lt;/p&gt;
      &lt;button onClick={increse}&gt;1씩 증가&lt;/button&gt;
    &lt;/div&gt;
  );
};

export default Counter;</pre>
</div>
<p class="attr_p">이 컴포넌트는 <code>useCounterStore</code> Hook을 이용해 <code>count</code> 상태와 <code>increse</code> 함수를 불러와 사용합니다. 버튼을 클릭하면 <code>count</code>가 <code>1</code>씩 증가합니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">Zustand의 동작 원리 이해하기</h3>
<p class="attr_p">Zustand는 불필요한 리렌더링을 방지하고 효율적인 상태 관리를 가능하게 하는 라이브러리입니다. 이는 <b>Context API</b>와 비교했을 때, 상태 변경 시 리렌더링을 방지하고 <b>'provider hell'</b> 문제를 해결할 수 있는 장점을 제공합니다.</p>
<h4 class="attr_title">1. Zustand의 기본 원리</h4>
<p class="attr_p"><span class="set-check-note">Zustand는 발행/구독 모델을 기반으로 작동하며, 상태는 클로저를 통해 내부적으로 관리됩니다.</span> 아래의 코드는 Zustand가 어떻게 상태를 관리하고 변경하는지를 설명하는 간소화된 버전입니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// vanilla.ts
const createStoreImpl = createState =&gt; {
  let state;
  const listeners = new Set();

  const setState = (partial, replace) =&gt; {
    // 상태 변경 로직 (생략)
  };

  const getState = () =&gt; state;

  const subscribe = listener =&gt; {
    // 리스너 등록 로직 (생략)
  };

  const api = { setState, getState, subscribe };
  state = createState(setState, getState, api);

  return api;
};

export const createStore = createState =&gt;
  createState ? createStoreImpl(createState) : createStoreImpl;</pre>
</div>
<h4 class="attr_title">2. 상태 변경 및 구독 메커니즘</h4>
<h5 class="attr_title">setState 함수</h5>
<p class="attr_p">이 함수는 상태를 변경할 때 사용됩니다. <span class="set-check-note">상태 변경 시, 주어진 함수나 객체를 기반으로 새 상태를 계산하고, 상태가 실제로 변경되었을 때만 상태를 갱신합니다.</span></p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const setState = (partial, replace) =&gt; {
  const nextState = typeof partial === "function" ? partial(state) : partial;

  if (!Object.is(nextState, state)) {
    const previousState = state;
    state = replace ?? typeof nextState !== "object"
      ? nextState
      : Object.assign({}, state, nextState);

    listeners.forEach(listener =&gt; listener(state, previousState));
  }
};</pre>
</div>
<h5 class="attr_title">subscribe 함수</h5>
<p class="attr_p">상태 변화를 구독하고 변화가 있을 때마다 반응할 수 있으며, 이 함수는 구독 해제 기능도 반환합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const subscribe = listener =&gt; {
  listeners.add(listener);
  return () =&gt; listeners.delete(listener);
};</pre>
</div>
<h4 class="attr_title">3. 사용 예시</h4>
<p class="attr_p">다음은 Zustand의 상태 관리를 실제로 어떻게 사용하는지 보여주는 예시입니다. 이 예시는 카운터의 상태를 관리하며, 상태가 변경될 때마다 콘솔에 상태 변경을 로그합니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const store = createStore(set =&gt; ({
  count: 0,
  setCount: newCount =&gt; set({ count: newCount }),
}));

store.subscribe(state =&gt; console.log("상태가 변경됨: ", state));
store.setState(state =&gt; ({ count: state.count + 1 }));</pre>
</div>
<h4 class="attr_title">4. Zustand와 React의 통합</h4>
<p class="attr_p">Zustand는 <b>createStore</b> 함수로 생성된 스토어를 <b>useSyncExternalStore</b> 훅을 사용하여 React 컴포넌트에서 활용합니다. 이 구조는 React 컴포넌트의 상태 관리를 간소화하며, 동시에 상태의 일관성을 유지하는 데 도움을 줍니다.</p>
<h5 class="attr_title">코드 구현 살펴보기</h5>
<p class="attr_p">아래는 Zustand와 React를 통합하는 방법에 대한 기본 코드 구조입니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// react.ts
import { useDebugValue } from "react";
import useSyncExternalStoreExports from "use-sync-external-store/shim/with-selector";
import { createStore } from "./vanilla";

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;

function useStore(api, selector, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}

const createImpl = createState =&gt; {
  const api =
    typeof createState === "function" ? createStore(createState) : createState;

  const useBoundStore = (selector, equalityFn) =&gt;
    useStore(api, selector, equalityFn);

  Object.assign(useBoundStore, api);

  return useBoundStore;
};

export const create = createState =&gt;
  createState ? createImpl(createState) : createImpl;</pre>
</div>
<p class="attr_p">이 코드는 Zustand 스토어를 생성하고, React 컴포넌트 내에서 상태를 선택적으로 구독할 수 있도록 합니다. <code>useSyncExternalStoreWithSelector</code>는 컴포넌트가 필요한 상태 부분만을 구독하도록 해, 불필요한 리렌더링을 방지하며 최적의 성능을 제공합니다. 주요 기능과 이점은 다음과 같습니다:</p>
<ul class="attr_list a__list dot">
<li><b>상태 동기화:</b> useSyncExternalStore를 이용하여 React와 외부 상태 저장소 간의 상태를 효과적으로 동기화합니다.</li>
<li><b>성능 최적화:</b> 선택적 상태 구독을 통해 컴포넌트의 불필요한 리렌더링을 줄이고 성능을 향상시킵니다.</li>
<li><b>디버깅 용이성:</b> useDebugValue를 사용하여 개발자 도구에서 상태를 쉽게 확인할 수 있습니다.</li>
</ul>
<h5 class="attr_title">useSyncExternalStore란?</h5>
<ul class="attr_list a__list dot">
<li><span class="set-check-note"><code>useSyncExternalStore</code>는 React Hook으로, 다양한 외부 저장소를 구독할 수 있게 해줍니다.</span> 이 Hook은 Redux나 Zustand 스토어, DOM 객체, Date 객체 등과 같은 외부 저장소뿐만 아니라 전역 변수도 포함할 수 있습니다. 반면, <code>props</code>, <code>context</code>, <code>useState</code>, <code>useReducer</code>와 같은 내부 저장소는 이 범주에 속하지 않습니다.</li>
<li>React 18의 등장으로 <code>concurrent</code> 렌더링이 도입되었으며, 이는 <code>startTransition</code>과 같은 동시성 기능을 활용할 때 렌더링을 일시적으로 중지할 수 있게 되었습니다. <span class="set-check-note">이런 기능은 브라우저가 렌더링 도중 freeze되는 것을 방지하고, 렌더링 중간에 이벤트를 처리할 수 있게 해 줍니다.</span></li>
<li><code>useSyncExternalStore</code>는 외부 상태를 효과적으로 관리하며 React 컴포넌트와의 상태 동기화를 쉽게 합니다. 이를 통해 렌더링 최적화와 동시성 처리에서 중요한 역할을 하며, 특히 크고 복잡한 <span data-spell="application">애플리케이션</span>에서 성능 개선을 도모할 수 있습니다.</li>
</ul>
<h4 class="attr_title">Tearing이란?</h4>
<p class="attr_p"><span class="set-check-note">Tearing은 동시성 렌더링이 도입된 React 환경에서 외부 저장소에 의존하는 라이브러리 사용 시 발생할 수 있는 시각적 불일치를 말합니다.</span> 이는 동일한 상태에 대해 UI가 여러 값을 표시할 때 나타나며, 사용자 경험을 저하시킬 수 있습니다.</p>
<h5 class="attr_title">동기(Synchronous) 렌더링에서의 처리</h5>
<p class="attr_p">동기 렌더링에서는 React 트리의 렌더링이 시작되면 외부 저장소에서 값을 가져와 일관되게 색상을 렌더링합니다. 이 과정에서 모든 컴포넌트는 동일한 값을 사용하여 렌더링되므로, UI는 항상 일관된 상태로 표시됩니다. <span class="set-check-note">이는 스토어 업데이트가 React 렌더링이 끝난 후에만 가능하므로, 다음 렌더링 시 모든 컴포넌트가 동일한 값을 유지하게 됩니다.</span></p>
<figure class="attr_figure bordered">
<img class="attr_img" src="/img/zustand/zustand-in-react-conveniently-manage-state-01.jpg" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite>Synchronous Rendering</cite></figcaption>
</figure>
<h5 class="attr_title">동시(Concurrent) 렌더링과 Tearing 발생</h5>
<p class="attr_p">동시 렌더링에서는 React가 렌더링을 일시 중단하고 다른 작업을 수행할 수 있습니다. 이 때 사용자가 외부 저장소 값을 변경하면, 이미 렌더링된 컴포넌트와 이후 렌더링되는 컴포넌트 간에 다른 색상이 표시될 수 있습니다. <span class="set-check-note">이로 인해 파란색과 빨간색이 혼재된 상태가 되어 tearing이 발생하고, 이는 시각적인 불일치를 초래합니다.</span></p>
<figure class="attr_figure bordered">
<img class="attr_img" src="/img/zustand/zustand-in-react-conveniently-manage-state-02.jpg" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite>Concurrent Rendering</cite></figcaption>
</figure>
<h5 class="attr_title">useSyncExternalStore의 역할과 기능</h5>
<p class="attr_p">React 18에서 소개된 <code>useSyncExternalStore</code>는 이러한 tearing 문제를 해결하기 위해 디자인된 새로운 Hook입니다. 이 Hook은 외부 저장소의 변경 사항을 구독하고 스냅샷을 통해 현재 상태 값을 안정적으로 제공합니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)</pre>
</div>
<ul class="attr_list a__list dot">
<li><b>subscribe:</b> 스토어가 변경될 때마다 호출되는 콜백 함수를 등록합니다.</li>
<li><b>getSnapshot:</b> 스토어의 현재 값을 반환합니다.</li>
<li><b>getServerSnapshot:</b> 서버 렌더링 시 사용되는 스냅샷을 반환합니다.</li>
</ul>
<p class="attr_p">이 Hook의 사용은 React 컴포넌트가 외부 저장소의 상태 변경에 따라 일관되게 렌더링되도록 보장하며, 렌더링 과정 중 발생할 수 있는 tearing을 효과적으로 방지합니다.</p>
<h5 class="attr_title">useSyncExternalStore 사용 예시</h5>
<p class="attr_p">useSyncExternalStore는 React의 외부 상태를 동기화하고 관리하기 위한 Hook입니다. 이 훅을 사용하여 상태의 불변성을 유지하면서 외부 상태를 React 컴포넌트와 효과적으로 연결할 수 있습니다.</p>
<p class="attr_p">먼저, 변경 가능한 상태와 함께 store 객체를 정의합니다. 이 객체에는 상태 변경, 상태 구독, 스냅샷 생성 기능이 포함되어 있습니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const store = {
  state: { count: 0 },
  setState: fn =&gt; {
    store.state = fn(store.state);  // 불변성을 유지하며 상태를 업데이트
    store.listeners.forEach(listener =&gt; listener());
  },
  listeners: new Set(),
  subscribe: callback =&gt; {
    store.listeners.add(callback);
    return () =&gt; store.listeners.delete(callback);
  },
  getSnapshot: () =&gt; {
    const snap = Object.freeze(store.state); // freeze는 선택적입니다
    return snap;
  },
};</pre>
</div>
<p class="attr_p">React 컴포넌트에서 <code>useSyncExternalStore</code>를 사용하여 store의 변경을 구독하고 현재 상태를 가져옵니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
function App() {
  const snap = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return (
    &lt;&gt;
      &lt;div&gt;{snap.count}&lt;/div&gt;
      &lt;button onClick={() =&gt; store.setState(state =&gt; ({ count: state.count + 1 }))}&gt;
        증가
      &lt;/button&gt;
    &lt;/&gt;
  );
}

export default App;</pre>
</div>
<p class="attr_p">이 예시에서는 증가 버튼을 클릭할 때마다 count 상태가 증가하고, 이 변경이 UI에 즉시 반영되는 것을 볼 수 있습니다. <span class="set-check-note">이는 <code>useSyncExternalStore</code>가 상태 변경을 효율적으로 관리하고 React 컴포넌트에 실시간으로 반영할 수 있음을 보여줍니다.</span></p>
<h5 class="attr_title">React 18의 마이그레이션 전략</h5>
<p class="attr_p"><code>useSyncExternalStore</code> 훅은 React 18에서 도입된 중요한 기능으로, 외부 저장소의 상태를 React 컴포넌트와 동기화하는 데 사용됩니다. 이 훅은 외부 데이터 소스의 변경 사항을 구독하고, 컴포넌트를 최신 상태로 업데이트하는 데 필요한 최소한의 리렌더링을 보장합니다.</p>
<p class="attr_p"><span class="set-check-note">React 18 이전 버전을 사용하는 개발자들을 위해 use-sync-external-store라는 별도의 패키지도 제공됩니다.</span> 이 패키지는 React 18의 <code>useSyncExternalStore</code> 훅의 기능을 이용할 수 있게 하여, 마이그레이션 과정을 용이하게 합니다. 이를 통해 개발자는 React의 최신 기능을 기존 프로젝트에 통합할 수 있는 옵션을 가집니다.</p>
<p class="attr_p"><code>useSyncExternalStoreWithSelector</code>는 <b>use-sync-external-store</b> 패키지에서 제공되는 유틸리티 훅입니다. 이 훅은 <code>useSyncExternalStore</code>의 기능에 더해, 선택적으로 <code>selector</code> 함수를 받아 <code>getSnapshot</code>의 결과를 자동으로 메모이제이션하는 기능을 지원합니다. 이는 성능 최적화를 도모하며, 특정 상태 조각만을 추출하여 필요한 컴포넌트만을 업데이트하도록 돕습니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">관련 링크</h3>
<ul class="attr_list a__list dot">
<li><a href="https://zustand-demo.pmnd.rs/" target="_blank" data-target="external" data-title="Zustand 공식 홈페이지">Zustand 공식 홈페이지</a></li>
<li><a href="https://plainenglish.io/blog/using-zustand-and-typescript-to-make-a-to-do-list-in-react" target="_blank" data-target="external" data-title="Zustand 공식 문서">Zustand 공식 문서</a></li>
<li><a href="https://github.com/pmndrs/zustand" target="_blank" data-target="external">https://github.com/pmndrs/zustand</a></li>
<li><a href="https://reactjs.org/blog/2022/03/29/react-v18.html" target="_blank" data-target="external">https://reactjs.org/blog/2022/03/29/react-v18.html</a></li>
<li><a href="https://github.com/reactwg/react-18/discussions/69" target="_blank" data-target="external">https://github.com/reactwg/react-18/discussions/69</a></li>
<li><a href="https://github.com/reactwg/react-18/discussions/86" target="_blank" data-target="external">https://github.com/reactwg/react-18/discussions/86</a></li>
<li><a href="React Conf 2021: React 18 for External Store Libraries" target="_blank" data-target="external">React Conf 2021: React 18 for External Store Libraries</a></li>
</ul>
</div>
</section>`;
