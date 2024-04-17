export const contentHtml = `<section class="attr_section">
<p class="attr_p attr_letter">상태 관리란 웹 <span data-spell="application">애플리케이션</span>의 여러 구성 요소 사이에서 공유되는 데이터, 즉 <b>'상태'</b>를 효과적으로 관리하는 프로세스라고 할 수 있습니다. React 같은 현대적인 프레임워크와 라이브러리는 사용자 인터페이스를 상태 기반으로 렌더링하는데, 이는 애플리케이션의 상태가 변경될 때마다 해당하는 UI도 자동으로 업데이트된다는 의미로, Redux는 이러한 상태 변화를 예측 가능하고 조직적인 방식으로 관리하도록 설계되었습니다.</p>
<p class="attr_p">Redux는 React를 위해 설계된 예측 가능한 상태 컨테이너입니다. 개발자가 <span data-spell="application">애플리케이션</span> 상태를 효율적으로 관리할 수 있도록 도와주고, 더 크고 복잡한 애플리케이션을 구축하는 데 있어 필수적인 요소가 되었습니다.</p>
<div class="attr_div">
<h3 class="attr_title">Redux란?</h3>
<p class="attr_p">Redux는 React의 상태 관리를 위한 중요한 라이브러리입니다. Redux의 주요 목적은 <span data-spell="application">애플리케이션</span>의 상태를 예측 가능한 방식으로 관리하는 것입니다. 이를 통해 개발자는 앱의 복잡성을 효과적으로 제어하고, 상태 업데이트 관련 로직을 효율적으로 관리할 수 있습니다.</p>
<figure class="attr_figure">
<img class="attr_img" src="/img/redux/mastering-state-management-with-redux-01.png" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite>Without Redux vs. With Redux</cite></figcaption>
</figure>
<p class="attr_p"><span class="set-check-note">Redux의 가장 두드러진 특징은 <span data-spell="application">애플리케이션</span>의 전체 상태를 하나의 객체 트리에서 관리한다는 점입니다.</span> 이 단일 상태 트리는 애플리케이션 내 모든 상태 변화의 중심점으로 작용하며, 상태 변화를 일관되고 예측 가능한 방식으로 처리할 수 있게 해줍니다. 이러한 접근 방식 덕분에, Redux를 사용하는 애플리케이션에서는 상태의 현재 상황을 쉽게 파악하고, 시간에 따른 상태 변화를 추적할 수 있습니다.</p>
<p class="attr_p"><span class="set-check-note">Redux의 또 다른 중요한 이점은 컴포넌트의 상태 업데이트 관련 로직을 <span data-spell="application">애플리케이션</span>의 다른 부분으로 분리시킬 수 있다는 것입니다.</span> 이로 인해 개발자는 상태 관련 코드를 한 곳에서 관리하며, 애플리케이션 내 여러 부분에서 이를 재사용할 수 있으며, 결과적으로, 애플리케이션의 유지보수성과 확장성이 크게 향상됩니다.</p>
<p class="attr_p">Redux를 사용함으로써, 개발자는 복잡한 <span data-spell="application">애플리케이션</span>에서도 사용자 인터페이스의 상태를 쉽게 관리할 수 있으며, Redux의 단일 상태 트리와 상태 업데이트의 명확한 분리는 애플리케이션의 구조를 단순화하고, 개발 과정을 더욱 체계적으로 만들어 줍니다.</p>
<h4 class="attr_title">Redux의 기본 용어와 원리 이해하기</h4>
<p class="attr_p">Redux를 이해하고 효과적으로 사용하기 위해서는 그 기본 용어와 원리를 알아야 합니다. Redux의 구조와 흐름은 여러 핵심 개념에 의해 지탱되기 때문이죠. 이를 통해 개발자는 예측 가능하고 효율적인 방식으로 <span data-spell="application">애플리케이션</span>의 상태 관리를 할 수 있습니다.</p>
<h5 class="attr_title">1. 액션(Action)과 액션 생성함수(Action Creator)</h5>
<p class="attr_p"><span class="set-check-note">액션은 상태 변화를 일으키기 위한 정보를 담은 객체입니다.</span> 모든 액션은 type 필드를 반드시 가지고 있어야 하며, 이는 상태 변경을 위한 식별 정보 역할을 합니다. <span class="set-check-note">액션 생성함수는 이러한 액션 객체를 생성하는 함수로, 필요한 정보를 받아 액션 객체를 반환합니다.</span> 이 과정을 통해 코드의 재사용성과 관리의 편의성이 높아집니다.</p>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>액션</span></div>
</div>
<pre class="attr_pre" data-lang="js">
{
   type: 'LEARN_REDUX',
   data: {
       id: 1,
       text: '리덕스 배우기'
   }
}</pre>
</div>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>액션 생성함수</span></div>
</div>
<pre class="attr_pre" data-lang="js">
function learnRedux(data) {
  return {
    type: 'LEARN_REDUX',
    data,
  }
}</pre>
</div>
<h5 class="attr_title">2. 리듀서(Reducer)</h5>
<p class="attr_p"><span class="set-check-note">리듀서는 현재 상태와 액션 객체를 받아 새로운 상태를 반환하는 함수입니다.</span> 액션의 type에 따라 상태가 어떻게 변경될지를 정의합니다. <span class="set-check-note">리듀서는 <span data-spell="application">애플리케이션</span>의 상태 변화 로직을 담당하며, 순수 함수로 작성되어야 합니다.</span> 이는 예측 가능한 상태 관리를 가능하게 하는 핵심 원리 중 하나입니다.</p>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>리듀서</span></div>
</div>
<pre class="attr_pre" data-lang="js">
const initialState = {
 counter: 1,
}
function reducer(state = initialState, action) {
 switch (action.type) {
   case INCREMENT:
     return {
       counter: state.counter + 1,
     }
   default:
     return state
 }
}</pre>
</div>
<h5 class="attr_title">3. 스토어(Store)와 디스패치(Dispatch)</h5>
<p class="attr_p"><span class="set-check-note">스토어는 Redux <span data-spell="application">애플리케이션</span>의 상태를 저장하는 곳입니다.</span> 하나의 애플리케이션에는 단 하나의 스토어만 존재합니다. <span class="set-check-note">디스패치는 액션을 발생시켜 상태를 업데이트하는 방법입니다.</span> 액션 객체를 디스패치 함수에 전달함으로써, 액션에 따른 상태 변화가 리듀서를 통해 이루어집니다.</p>
<h5 class="attr_title">4. 구독(Subscribe)과 셀렉터(Selector)</h5>
<p class="attr_p"><span class="set-check-note">구독 기능을 통해 <span data-spell="application">애플리케이션</span>의 상태 변화를 감지하고 반응할 수 있습니다.</span> 리스너 함수를 구독하면, 상태가 업데이트될 때마다 해당 리스너 함수가 호출됩니다. <span class="set-check-note">셀렉터는 상태의 특정 부분을 효율적으로 조회하는 역할을 합니다.</span> 이는 애플리케이션의 성능 최적화에 기여합니다.</p>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>구독</span></div>
</div>
<pre class="attr_pre" data-lang="js">
const listener = () =&gt; {
 console.log('상태가 업데이트됨')
}
const unsubscribe = store.subsribe(listener)

unsubscribe() // 추후 구독을 비활성화할 때 함수를 호출</pre>
</div>
<p class="attr_p">Redux의 이러한 기본 구성 요소와 원리들은 상태 관리를 체계적이고 효율적으로 만들어 줍니다. 개발자는 이를 통해 복잡한 <span data-spell="application">애플리케이션</span>의 상태를 쉽게 관리하고, 애플리케이션의 안정성과 유지보수성을 높일 수 있습니다.</p>
<h4 class="attr_title">Redux에서의 상태 변화 흐름 파악하기</h4>
<p class="attr_p">리덕스의 상태 변화 흐름은 선형적이며 각 단계가 명확하게 연결되어 있어, <span data-spell="application">애플리케이션</span>의 데이터 흐름을 이해하기 쉽게 합니다. 이 흐름을 구성하는 네 가지 주요 요소는 <b>Component, Action, Reducer, Store</b>입니다. 이들 간의 상호작용을 통해 리덕스는 상태 관리의 복잡성을 효과적으로 해결합니다.</p>
<h5 class="attr_title">1. Component</h5>
<p class="attr_p"><span class="set-check-note">모든 것은 Component에서 시작됩니다.</span> 사용자 인터페이스에 해당하는 이 부분에서, 사용자의 상호작용이 발생하면 <span data-spell="application">애플리케이션</span>은 특정 액션을 발생시킵니다. 예를 들어, 사용자가 버튼을 클릭하는 행위는 특정 액션을 트리거 할 수 있습니다.</p>
<ul class="attr_list a__list dot">
<li><b>dispatch:</b> 액션을 발생시킴, <b>Component ▶ Action</b></li>
</ul>
<h5 class="attr_title">2. Action</h5>
<p class="attr_p"><span class="set-check-note">Action은 상태 변화를 일으키기 위해 필요한 정보를 담고 있는 객체입니다.</span> 각 액션은 반드시 type 필드를 포함해야 하며, 이는 상태 변화를 일으키는 데 필요한 유형을 정의합니다. <span class="set-check-note">액션은 Component로부터 발생하며, 리듀서로 전달됩니다.</span></p>
<ul class="attr_list a__list dot">
<li><b>handle:</b> action에 정의되어있는 내용이 reducer에 의해 핸들링됨, <b>Action ▶ Reducer</b></li>
</ul>
<h5 class="attr_title">3. Reducer</h5>
<p class="attr_p"><span class="set-check-note">Reducer는 이전 상태와 액션을 받아 새로운 상태를 반환하는 함수입니다.</span> 리듀서는 액션의 유형에 따라 상태 변화를 결정하며, 이 과정을 통해 <span data-spell="application">애플리케이션</span>의 상태가 업데이트됩니다. 리듀서의 순수 함수적 특성 덕분에 상태 변화는 예측 가능하고 관리하기 쉬워집니다.</p>
<ul class="attr_list a__list dot">
<li><b>update:</b> 핸들링에 따라서 상태값이 업데이트됨, <b>Reducer ▶ Store</b></li>
</ul>
<h5 class="attr_title">4. Store</h5>
<p class="attr_p"><span class="set-check-note">Store는 <span data-spell="application">애플리케이션</span>의 현재 상태를 저장하며, 리듀서로부터 업데이트된 상태를 받아 저장합니다.</span> 스토어는 애플리케이션의 상태에 대한 접근 및 업데이트를 중앙에서 관리합니다. 컴포넌트는 스토어를 <span data-spell-viewer="subscribe">구독</span>하여 상태 변화를 실시간으로 감지하고 반응할 수 있습니다.</p>
<p class="attr_p">이렇게 리덕스의 상태 변화 흐름은 <span data-spell="application">애플리케이션</span>에서 데이터를 효율적으로 관리하고, 상태 변화를 명확하게 추적할 수 있도록 도와주며, 리덕스를 사용함으로써 개발자는 복잡한 상태 관리 문제를 해결하고, 애플리케이션의 유지보수성과 확장성을 향상시킬 수 있습니다.</p>
<ul class="attr_list a__list dot">
<li><b>subscribe:</b> 업데이트된 스토어를 subscriber를 통해 실시간으로 받아와서 사용, <b>Store ▶ Component</b></li>
</ul>
<h4 class="attr_title">Redux의 핵심 원칙과 상태 관리 철학</h4>
<p class="attr_p">리덕스의 설계와 운용은 세 가지 핵심 원칙에 기반합니다. 이 원칙들은 리덕스를 사용하는 <span data-spell="application">애플리케이션</span>의 상태 관리 방식을 지침하며, 예측 가능하고 일관된 방식으로 상태 변화를 관리할 수 있도록 돕습니다. 이해하기 쉬운 애플리케이션 상태 관리를 위한 리덕스의 세 가지 규칙을 살펴보겠습니다.</p>
<h5 class="attr_title">1. 단일 스토어</h5>
<p class="attr_p"><span class="set-check-note">리덕스는 하나의 <span data-spell="application">애플리케이션</span> 안에는 단 하나의 스토어가 존재해야 한다는 원칙을 따릅니다.</span> 이는 애플리케이션의 모든 상태 정보를 한 곳에서 관리할 수 있게 하며, 상태 관리의 복잡성을 줄이고, 애플리케이션의 상태를 더 쉽게 추적할 수 있게 해줍니다. 단일 스토어를 사용함으로써, 애플리케이션의 데이터 흐름이 더 명확해지고, 디버깅 및 상태 변화 추적이 용이해집니다.</p>
<h5 class="attr_title">2. 상태의 불변성</h5>
<p class="attr_p"><span class="set-check-note">리덕스에서 상태는 읽기 전용입니다.</span> <span class="set-check-note">상태를 변경하고자 할 때, 기존 상태를 직접 수정하는 대신, 상태의 변화는 항상 새로운 객체를 생성하여 반영해야 합니다.</span> 이 원칙은 상태의 불변성을 보장하며, 상태 변화를 추적하기 쉽게 만듭니다. 불변성은 상태 변화를 예측 가능하게 만들며, 성능 최적화와 컴포넌트의 재사용성을 향상시킵니다.</p>
<h5 class="attr_title">3. 리듀서의 순수성</h5>
<p class="attr_p">마지막으로, <span class="set-check-note">리듀서 함수는 순수한 함수여야 합니다.</span> <span class="set-check-note">이는 리듀서가 동일한 입력에 대해 항상 동일한 출력을 반환하며, 외부 상태를 변경하지 않아야 함을 의미합니다.</span> 리듀서의 순수성은 리덕스의 상태 변화를 예측 가능하게 만들며, 액션에 따른 상태 변화를 투명하게 관리할 수 있도록 합니다. 순수한 리듀서는 <span data-spell="application">애플리케이션</span>의 상태 관리를 더욱 안정적이고 신뢰할 수 있게 만듭니다.</p>
<p class="attr_p">리덕스의 이 세 가지 원칙은 강력한 상태 관리를 가능하게 하며, 개발자가 보다 효율적으로 <span data-spell="application">애플리케이션</span>을 구축하도록 돕고, 리덕스를 단순히 라이브러리 이상의 것, 즉 애플리케이션을 설계하고 구축하는 철학으로 만드는 핵심입니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">Redux 구현</h3>
<p class="attr_p">React의 <b>@reduxjs/toolkit</b>는 Redux 개발을 보다 쉽고 간결하게 만들어주는 도구 모음입니다. <code>configureStore</code> 함수는 Redux 스토어를 설정하고 초기화하는 데 사용되며, <b>Redux DevTools</b> 확장 및 미들웨어를 자동으로 설정하는 등의 기능을 제공합니다.</p>
<h4 class="attr_title">1. 패키지 설치하기</h4>
<p class="attr_p">먼저, 프로젝트에 <b>Redux</b>와 <b>Redux Toolkit</b>을 설치해야 합니다. 터미널에서 다음 명령어를 실행합니다:</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm install @reduxjs/toolkit react-redux</pre>
</div>
<h4 class="attr_title">2. Redux 슬라이스 생성하기</h4>
<p class="attr_p"><span class="set-check-note">Redux의 주요 개념 중 하나는 <span data-spell="application">애플리케이션</span> 상태를 관리하는 store입니다.</span> 상태 관리 로직을 구성하는 방법 중 하나는 <b>'슬라이스'</b>를 사용하는 것입니다. 슬라이스는 상태의 일부분과 그 상태를 수정하는 <span data-spell-viewer="reducers">리듀서</span>, 그리고 해당 상태에 대한 <span data-spell-viewer="actions">액션</span>을 함께 묶은 것입니다.</p>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>features/counter/counterSlice.js</span></div>
</div>
<pre class="attr_pre" data-lang="js">
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state =&gt; {
      state.value += 1;
    },
    decrement: state =&gt; {
      state.value -= 1;
    },
    incrementByAmount: (state, action) =&gt; {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;</pre>
</div>
<h4 class="attr_title">3. 스토어 구성하기</h4>
<p class="attr_p"><code>configureStore</code> 함수를 사용하여 <span data-spell="application">애플리케이션</span>의 스토어를 설정합니다. 이 함수는 슬라이스 리듀서를 스토어에 연결합니다.</p>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>app/store.js</span></div>
</div>
<pre class="attr_pre" data-lang="js">
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});</pre>
</div>
<h4 class="attr_title">4. React 애플리케이션에 스토어 제공하기</h4>
<p class="attr_p"><code>&lt;Provider&gt;</code> 컴포넌트를 사용하여 React <span data-spell="application">애플리케이션</span> 전체에 걸쳐 스토어를 사용할 수 있도록 설정합니다. 이 컴포넌트는 <b>react-redux</b> 라이브러리에서 제공됩니다.</p>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>index.js</span></div>
</div>
<pre class="attr_pre" data-lang="js">
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

ReactDOM.render(
  &lt;Provider store={store}&gt;
    &lt;App /&gt;
  &lt;/Provider&gt;,
  document.getElementById('root')
);</pre>
</div>
<h4 class="attr_title">5. 스토어의 상태 사용 및 수정하기</h4>
<p class="attr_p">스토어의 상태를 읽거나 수정하기 위해, useSelector와 useDispatch 훅을 사용할 수 있습니다.</p>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>features/counter/Counter.jsx</span></div>
</div>
<pre class="attr_pre" data-lang="js">
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export function Counter() {
  const count = useSelector((state) =&gt; state.counter.value);
  const dispatch = useDispatch();

  return (
    &lt;div&gt;
      &lt;div&gt;{count}&lt;/div&gt;
      &lt;button onClick={() =&gt; dispatch(increment())}&gt;Increment&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(decrement())}&gt;Decrement&lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
</div>
<p class="attr_p">이렇게 구성하면, Redux를 사용하여 React <span data-spell="application">애플리케이션</span>에서 상태 관리 시스템을 효과적으로 구현할 수 있습니다. <b>Redux Toolkit</b>은 Redux의 복잡성과 보일러플레이트를 크게 줄여주어, 개발자가 상태 관리에 더 집중할 수 있도록 돕습니다.</p>
<h4 class="attr_title">상태 선택과 액션 디스패치</h4>
<h5 class="attr_title">선택자 사용 최적화</h5>
<p class="attr_p"><b>useSelector</b> 훅을 사용할 때, 컴포넌트가 스토어의 특정 부분에만 의존하도록 선택자 함수를 작성하는 것이 중요합니다. 이는 불필요한 렌더링을 방지하고 <span data-spell="application">애플리케이션</span>의 성능을 향상시키는 데 도움이 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="js">
const count = useSelector((state) =&gt; state.counter.value);</pre>
</div>
<p class="attr_p">위 예시에서는 <code>state.counter.value</code>만을 선택하여, <code>counter</code> 슬라이스의 <code>value</code> 상태에만 의존합니다. 스토어의 다른 부분이 변경되어도, 이 상태에 변화가 없다면 컴포넌트는 재렌더링되지 않습니다.</p>
<h5 class="attr_title">액션 디스패치하기</h5>
<p class="attr_p"><code>useDispatch</code> 훅을 사용하면, 컴포넌트에서 리덕스 스토어에 액션을 디스패치할 수 있습니다. 이를 통해 상태를 업데이트하거나 비동기 로직을 실행할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="js">
const dispatch = useDispatch();

// 액션 디스패치
dispatch(increment());</pre>
</div>
<h4 class="attr_title">비동기 작업과 미들웨어</h4>
<p class="attr_p">Redux Toolkit은 <code>createAsyncThunk</code> 함수를 제공하여 비동기 작업을 쉽게 처리할 수 있습니다. 예를 들어, 외부 API로부터 데이터를 가져오는 비동기 액션을 생성할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="js">
// features/counter/counterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCount = createAsyncThunk('counter/fetchCount', async () =&gt; {
  const response = await fetch('https://api.example.com/counter');
  const data = await response.json();
  return data.value;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle', // 'loading', 'succeeded', 'failed'
  },
  reducers: {
    // 리듀서들...
  },
  extraReducers: (builder) =&gt; {
    builder
      .addCase(fetchCount.pending, (state) =&gt; {
        state.status = 'loading';
      })
      .addCase(fetchCount.fulfilled, (state, action) =&gt; {
        state.status = 'succeeded';
        state.value += action.payload;
      })
      .addCase(fetchCount.rejected, (state) =&gt; {
        state.status = 'failed';
      });
  },
});</pre>
</div>
<p class="attr_p"><code>createAsyncThunk</code>를 사용하여 정의된 비동기 액션은 <code>pending</code>, <code>fulfilled</code>, <code>rejected</code>의 세 가지 상태를 가질 수 있으며, 이를 <code>extraReducers</code>를 통해 처리합니다. 이러한 접근 방식을 통해, <span data-spell="application">애플리케이션</span>에서 비동기 로직을 더욱 체계적이고 관리하기 쉽게 구성할 수 있습니다.</p>
<h5 class="attr_title">비동기 액션의 처리</h5>
<p class="attr_p"><code>createAsyncThunk</code>를 사용하여 비동기 액션을 생성할 때, 해당 액션은 자동으로 세 가지 상태의 액션 타입(즉, <code>pending</code>, <code>fulfilled</code>, <code>rejected</code>)을 갖게 됩니다. 이를 <code>extraReducers</code>에서 처리함으로써, 비동기 요청의 상태에 따라 <span data-spell="application">애플리케이션</span> 상태를 업데이트할 수 있습니다.</p>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>비동기 액션 생성</span></div>
</div>
<pre class="attr_pre" data-lang="js">
// 예: 사용자 정보를 가져오는 비동기 액션
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (userId, thunkAPI) =&gt; {
    const response = await fetch(\`https://api.example.com/user/\${userId}\`);
    const data = await response.json();
    return data;
  }
);</pre>
</div>
<div class="attr_pre_container">
<div class="attr_pre-header">
<div class="attr_pre-title"><span>비동기 액션 처리</span></div>
</div>
<pre class="attr_pre" data-lang="js">
// userSlice에서 비동기 액션 처리
extraReducers: (builder) =&gt; {
  builder
    .addCase(fetchUserData.pending, (state) =&gt; {
      state.loading = true;
    })
    .addCase(fetchUserData.fulfilled, (state, action) =&gt; {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(fetchUserData.rejected, (state, action) =&gt; {
      state.loading = false;
      state.error = action.error.message;
    });
}</pre>
</div>
<h5 class="attr_title">미들웨어 활용하기</h5>
<p class="attr_p">미들웨어는 Redux 스토어의 디스패치 메소드를 통해 전달되는 액션들 사이에 특정 작업을 수행하게 해줍니다. 예를 들어, <b>로깅, API 호출, 라우팅 등의 비동기 작업</b>을 처리할 수 있습니다. Redux Toolkit의 <code>configureStore</code>는 <b>Redux Thunk 미들웨어</b>를 기본적으로 포함하고 있어, 비동기 작업을 쉽게 관리할 수 있습니다.</p>
<p class="attr_p">Redux 미들웨어는 다음과 같은 방식으로 작동합니다:</p>
<ul class="attr_list a__list number">
<li><b>액션 캡처:</b> 미들웨어는 액션이 리듀서로 전달되기 전에 이를 캡처할 수 있습니다.</li>
<li><b>액션 변형:</b> 필요한 경우 미들웨어는 액션의 내용을 수정하거나 완전히 새로운 액션을 디스패치할 수 있습니다.</li>
<li><b>코드 실행:</b> 미들웨어는 액션이 디스패치될 때 비동기 작업(예: API 호출)을 실행하고, 결과에 따라 추가 액션을 디스패치할 수 있습니다.</li>
<li><b>액션 전달:</b> 미들웨어는 액션을 다음 미들웨어로 전달하거나, 모든 미들웨어를 통과한 후 최종적으로 리듀서로 전달할 수 있습니다.</li>
</ul>
<p class="attr_p">사용자 정의 미들웨어를 추가하려면, <code>configureStore</code>의 <code>middleware</code> 옵션을 사용합니다. <span class="set-check-note">미들웨어는 액션과 스토어의 상태를 '보는' 것 외에, 액션을 변경하거나, 추가 액션을 디스패치하거나, 현재 처리 중인 액션을 취소할 수도 있습니다.</span></p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="js">
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    // 여기에 리듀서들...
  },
  middleware: (getDefaultMiddleware) =&gt; getDefaultMiddleware().concat(logger),
});</pre>
</div>
<h5 class="attr_title">비동기 로직과의 상호작용</h5>
<p class="attr_p">비동기 액션과 미들웨어를 통해, Redux에서 비동기 로직을 처리하는 방법은 강력하면서도 유연합니다. 이를 통해 <span data-spell="application">애플리케이션</span>의 상태를 비동기적으로 업데이트하거나, 외부 API와의 상호작용을 관리할 수 있습니다. 또한, 액션의 생명 주기에 따라 <b>로딩 상태, 성공 상태, 에러 상태 등을 관리</b>함으로써 사용자 인터페이스를 보다 정확하게 제어할 수 있습니다.</p>
<p class="attr_p">Redux Toolkit과 함께 제공되는 이러한 도구들을 활용함으로써, 복잡한 상태 관리와 비동기 로직을 보다 쉽고 효과적으로 구성할 수 있습니다. 이 과정에서 중요한 것은 <span data-spell="application">애플리케이션</span>의 상태 변화를 예측 가능하게 유지하면서, 동시에 비동기 작업의 복잡성을 관리하는 것입니다. Redux Toolkit은 이러한 관리를 더욱 용이하게 만들어주는 몇 가지 기능을 제공합니다.</p>
<dl class="attr_list a__dl dot">
<dt>비동기 로직과 상태 관리의 통합</dt>
<dd><code>createAsyncThunk</code>와 <code>extraReducers</code>를 사용하는 것은 비동기 로직을 Redux 상태 관리 흐름에 자연스럽게 통합하는 방법입니다. 이 접근법은 <span data-spell="application">애플리케이션</span>의 상태를 업데이트하는 로직과 비동기 작업을 실행하는 로직을 명확하게 분리합니다. 이를 통해 개발자는 비동기 작업의 실행 결과에 따라 상태를 어떻게 변경할지를 선언적으로 기술할 수 있게 됩니다.</dd>
<dt>상태 업데이트의 예측 가능성 유지</dt>
<dd>Redux는 상태 업데이트의 예측 가능성을 유지하는 데 중점을 둡니다. <code>createAsyncThunk</code>를 사용하면, 비동기 작업의 각 단계(요청 시작, 성공, 실패)마다 상태를 어떻게 업데이트할지 명확하게 정의할 수 있습니다. 이는 액션 타입에 따라 상태를 업데이트하는 extraReducers의 로직에 반영됩니다. 이러한 접근 방식은 상태 업데이트가 일관되고 예측 가능한 방식으로 이루어지도록 돕습니다.</dd>
<dt>비동기 작업의 사이드 이펙트 관리</dt>
<dd>비동기 로직은 종종 여러 사이드 이펙트를 발생시킵니다. 예를 들어, API 요청은 네트워크 상태, 인증 토큰의 유효성 등 외부 조건에 따라 다르게 동작할 수 있습니다. Redux Toolkit은 이러한 비동기 작업을 체계적으로 관리할 수 있는 방법을 제공합니다. 특히, <code>createAsyncThunk</code>의 <code>rejected</code> 상태를 활용하면 에러 핸들링을 보다 세밀하게 처리할 수 있으며, 이를 통해 사용자에게 적절한 피드백을 제공할 수 있습니다.</dd>
<dt>비동기 작업의 복잡성 해결</dt>
<dd>대규모 <span data-spell="application">애플리케이션</span>에서는 여러 비동기 작업이 동시에 발생할 수 있습니다. Redux Toolkit을 사용하면, 이러한 복잡성을 관리하는 데 필요한 도구를 제공받을 수 있습니다. 예를 들어, <code>createAsyncThunk</code>로 생성된 액션은 비동기 작업을 추적하기 위한 고유 ID를 가질 수 있으며, 이를 통해 복수의 비동기 작업을 동시에 처리하는 경우에도 각 작업의 상태를 명확하게 관리할 수 있습니다.</dd>
</dl>
<p class="attr_p">Redux Toolkit을 사용하는 것은 <span data-spell="application">애플리케이션</span>의 상태 관리와 비동기 로직을 효과적으로 통합하는 방법입니다. createAsyncThunk와 같은 도구는 비동기 작업의 실행과 상태 업데이트의 복잡성을 줄이면서, 애플리케이션의 상태 변화를 예측 가능하고 관리하기 쉽게 만듭니다.</p>
<p class="attr_p">이를 통해 개발자는 사용자 경험을 향상시키는 데 집중할 수 있으며, <span data-spell="application">애플리케이션</span>의 안정성과 확장성을 보장할 수 있습니다. Redux Toolkit의 접근 방식은 개발자가 비동기 로직과 상태 관리의 복잡성을 간소화하면서도, 강력하고 유연한 애플리케이션 구조를 설계할 수 있게 해줍니다. 또한, 이러한 방법은 애플리케이션의 유지보수성을 높이고, 팀 내에서 상태 관리 전략을 일관되게 유지할 수 있도록 도와줍니다.</p>
<p class="attr_p">Redux Toolkit을 활용함으로써 개발자는 다음과 같은 이점을 얻을 수 있습니다:</p>
<ul class="attr_list a__list dot">
<li>액션 생성, 리듀서 작성, 상태 업데이트 로직을 간소화하여 개발 시간과 노력을 절약할 수 있습니다.</li>
<li>비동기 작업의 상태 관리를 명확하게 하여, 에러 핸들링과 사용자 피드백 제공을 개선할 수 있습니다.</li>
<li>애플리케이션의 상태 변화를 예측 가능하게 유지하여, 디버깅과 테스팅을 용이하게 만들 수 있습니다.</li>
<li>미들웨어와 함께 사용하여 비동기 로직의 사이드 이펙트를 효과적으로 관리할 수 있습니다.</li>
</ul>
<figure class="attr_figure">
<img class="attr_img" src="/img/redux/mastering-state-management-with-redux-02.png" alt="" loading="lazy" />
</figure>
</div>
<div class="attr_div">
<h3 class="attr_title">마치며</h3>
<p class="attr_p">웹 <span data-spell="application">애플리케이션</span>의 복잡성이 날로 증가하는 현 시점에서, 상태 관리의 중요성은 그 어느 때보다도 강조되며, 이들의 핵심은 <b>애플리케이션 상태를 중앙에서 투명하고 일관된 방식으로 관리하는 것</b>에 있습니다. 이를 통해 개발자는 애플리케이션의 상태 변화를 쉽게 추적하고, 예측 가능한 상태 관리 로직을 구축할 수 있습니다.</p>
<p class="attr_p">Redux가 제공하는 단일 스토어 원칙, 상태의 불변성, 그리고 리듀서의 순수성 같은 핵심 원칙들은 개발자가 더 안정적이고 효율적으로 <span data-spell="application">애플리케이션</span>을 개발할 수 있도록 돕고, 이런 원칙들은 애플리케이션의 성능 최적화와 유지보수를 용이하게 하고, 개발 과정을 보다 예측 가능하게 만들어줍니다.</p>
</div>
</section>`;
