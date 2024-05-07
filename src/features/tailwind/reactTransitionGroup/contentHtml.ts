export const contentHtml = `<section class="attr_section">
<div class="attr_div">
<h3 class="attr_title">react-transition-group이란?</h3>
<p class="attr_p attr_letter">react-transition-group는 react-motion, framer-motion 같은 애니메이션 라이브러리가 아닌, 리액트에서 컴포넌트가 DOM에 마운팅되고 언마운팅되는 상황에 애니메이션을 적용할 수 있도록 도와주는 React 팀이 자체적으로 제공하는 라이브러리입니다.</p>
<h4 class="attr_title">Transition vs Animation</h4>
<p class="attr_p"><b>Transition</b>은 CSS 속성을 변경할 때 에니메이션 속도를 조절하는 방법을 제공합니다. 또한 종료 후에도 상태유지가 되지 않습니다.</p>
<p class="attr_p">반면 <b>Animation</b>은 <code>keyframe</code>을 설정할 수 있어서 <code>transition</code>보다 세세하게 설정할 수 있습니다. 또한 <code>animation-fill-mode</code>을 이용하면 에니메이션이 종료된 이후에도 원하는 상태를 유지할 수 있습니다.</p>
<p class="attr_p">물론, React 내에서도 Transition과 Animation을 이용하여 에니메이션을 구현할 수 있습니다. 그런데 이렇게 별도의 모듈이 없이도 구현이 가능한데, 왜 animation을 사용해야 할까요?</p>
<h4 class="attr_title">React에서 animation 모듈을 사용하는 이유</h4>
<ul class="attr_list a__list dot">
<li><b>코드가 보이지는 않지만 항상 html에 존재합니다:</b> <code>animation</code>을 구현할때는 <code>display:none</code>을 사용할 수 없어서 <code>hight</code>의 길이를 조절한다던지, <code>opacity</code>를 조절하는 등 보이지만 않게끔 처리를 한 뒤 에니메이션을 적용합니다. 이렇게 코드가 <code>html</code>에 항상 존재할 경우, 속도가 느려질 수 있습니다. 또한 접근성 면에서도 좋지 않고, 무엇보다 React 답지 않습니다.</li>
<li><b>state가 변경되어 재랜더링 시, 에니메이션이 동작하지 않는 경우가 생깁니다:</b> <code>state</code>가 변하면 에니메이션 유무를 추척하고 계산하여 렌더링 하지 않습니다.</li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const [modalIsOpen, setModalIsOpen] = useState(false);

return (
  &lt;&gt;
    {modalIsOpen &amp;&amp; &lt;Modal show={modalIsOpen} closed={closeModal} /&gt;}
    {modalIsOpen &amp;&amp; &lt;Backdrop show={modalIsOpen} /&gt;} {/* 여기주목! */}
  &lt;/&gt;
);</pre>
</div>
<p class="attr_p">위 코드의 경우, 만약 <code>modalIsOpen</code>이 <code>false</code>로 변경되었을 때 <code>Backdrop</code> 컴포넌트는 랜더링되지 않고, 에니메이션이 있어도 보이지 않게 됩니다.</p>
<p class="attr_p">즉, React에서 <code>transition</code>과 <code>animation</code>으로 일정부분을 커버할 수 있지만, 디테일한 에니메이션 기능이나 특정한 경우에는 에니메이션이 동작하지 않기 때문에 React 모듈을 사용해야 합니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">React Transition Group</h3>
<h4 class="attr_title">Transition</h4>
<p class="attr_p"><code>Transition</code> 컴포넌트는 에니메이션의 전환이 일어날 때 4가지 상태로 두어, 해당하는 전환 시점에 따라 컴포넌트를 조작할 수 있도록 도와주는 컴포넌트 입니다. 4가지 상태로는 <code>entering</code>, <code>entered</code>, <code>exiting</code>, <code>exited</code>가 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import Transition from 'react-transition-group/Transition';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    &lt;&gt;
      &lt;button onClick={onClickHandler}&gt;Open Modal&lt;/button&gt;
      &lt;Transition in={modalIsOpen} timeout={300}&gt;
        {state =&gt; &lt;p&gt;{state}&lt;/p&gt;}
      &lt;/Transition&gt;
    &lt;/&gt;
  );
}</pre>
</div>
<p class="attr_p">[</p>
<p class="attr_p">처음에는 exited@b], 한번 클릭하면 <b>entering → entered</b>, 다시한번 클릭하면 <b>exiting → exited</b> 입니다.</p>
<p class="attr_p">기존에 <code>state</code>로 감쌌던 컴포넌트를 <code>Transition</code>으로 감싸주면, <code>Transition</code>의 <code>in</code> 속성을 통해 감싼 부분이 보일지 말지를 결정합니다.(<code>in</code> 속성 값이 <code>true</code>면 표시되고 <code>false</code>면 표시되지 않습니다.)</p>
<h4 class="attr_title">timeout</h4>
<p class="attr_p"><code>Transition</code>의 <code>timeout</code> 속성은 애니메이션이 재생되는 시간을 결정합니다. <code>entering</code>에서 <code>entered</code>로, <code>eixiting</code>에서 <code>exited</code>로 전환할 때 걸리는 시간입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;Transition in={showBlock} timeout={300}&gt;
  &lt;div
    style={{
      backgroundColor: 'red',
      width: 100,
      height: 100,
      margin: 'auto',
    }}
  /&gt;
&lt;/Transition&gt;;</pre>
</div>
<h4 class="attr_title">mountOnEnter, unmountOnExit</h4>
<p class="attr_p"><code>Transition]@code에는 [mountOnEnter</code>, <code>unmountOnExit</code> 속성이 있습니다. lazy mount를 원한다면 <code>mountOnEnter</code>를 사용하고, 만약 <code>exiting</code>이 끝나고 난 뒤 mount 하지 않는것을 원한다면, <code>unmountOnExit</code>를 사용하면 됩니다ㅏ.</p>
<p class="attr_p">이 외에도 <code>onEnter</code>, <code>onEntering</code>, <code>onEntered</code>, <code>onExit</code>, <code>onExiting</code>, <code>onExited</code> 속성도 제공합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;Transition
  in={modalIsOpen}
  timeout={300}
  mountOnEnter
  unmountOnExit
  onEnter={() =&gt; console.log('onEnter')}
  onEntering={() =&gt; console.log('onEntering')}
  onEntered={() =&gt; console.log('onEntered')}
  onExit={() =&gt; console.log('onExit')}
  onExiting={() =&gt; console.log('onExiting')}
  onExited={() =&gt; console.log('onExited')}
&gt;
  {state =&gt; (
    &lt;&gt;
      &lt;Modal show={modalIsOpen} closed={closeModal} /&gt;
      &lt;Backdrop show={modalIsOpen} /&gt;
    &lt;/&gt;
  )}
&lt;/Transition&gt;</pre>
</div>
<p class="attr_p">아래는 modal에서 <code>Transition</code>을 적용하는 예제입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
// Modal.js
import React from 'react';
import './Modal.css';
import Transition from 'react-transition-group/Transition';

const modal = props =&gt; {
  return (
    &lt;Transition in={props.show} timeout={300} mountOnEnter unmountOnExit&gt;
      {state =&gt; {
        const cssClasses = [
          'Modal',
          state === 'entering'
            ? 'ModalOpen'
            : state === 'exiting'
            ? 'ModalClosed'
            : null,
        ];

        return (
          &lt;div className={cssClasses.join(' ')}&gt;
            &lt;h1&gt;A Modal&lt;/h1&gt;
            &lt;button className="Button" onClick={props.closed}&gt;
              Dismiss
            &lt;/button&gt;
          &lt;/div&gt;
        );
      }}
    &lt;/Transition&gt;
  );
};

export default modal;</pre>
</div>
<h4 class="attr_title">timeout(entering, exiting) 각각 설정하기</h4>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) =&gt; {
  return (
    &lt;Transition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
    &gt;
...
}</pre>
</div>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
/* css 밀리초 설정 */
.ModalOpen {
  animation: openModal 0.4s ease-out forwards;
}

.ModalClosed {
  animation: closeModal 1s ease-out forwards;
}</pre>
</div>
<p class="attr_p">위와 같이 <code>enter</code>, <code>exit</code>을 <code>key</code>로 갖는 json을 생성한 뒤, <code>Transition</code>의 속성인 <code>timeout</code>에 전달합니다.</p>
</div>
<div class="attr_div">
<h3 class="attr_title">CSSTransition</h3>
<p class="attr_p"><code>CSSTransition</code> 컴포넌트는 앞서 설명한 <code>Transition</code>의 모든 속성을 상속하며, 컴포넌트의 상태에 따른 CSS 속성을 부여하기 위해 사용됩니다. <code>Transition</code>과 다른 점은 <code>Transition</code>은 상태에만 관심이 있는 반면, CSSTransition은 상태에 따른 CSS 속성을 조금 더 쉽게 조작할 수 있습니다.</p>
<p class="attr_p"><code>Transition</code>으로 구현한 모달을 <code>CSSTransition</code>으로 마이그레이션 하였습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import CSSTransition from 'react-transition-group/CSSTransition';
import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = props =&gt; {
  return (
    &lt;CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-modal"
    &gt;
      &lt;div className="Modal"&gt;
        &lt;h1&gt;A Modal&lt;/h1&gt;
        &lt;button className="Button" onClick={props.closed}&gt;
          Dismiss
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/CSSTransition&gt;
  );
};

export default modal;</pre>
</div>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
@keyframes openModal {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  50% {
    opacity: 1;
    transform: translateY(20%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes closeModal {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  50% {
    opacity: 0.8;
    transform: translateY(60%);
  }

  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}

.fade-modal-enter {
}

.fade-modal-enter-active {
  animation: openModal 0.4s ease-out forwards;
}

.fade-modal-exit {
}

.fade-modal-exit-active {
  animation: closeModal 1s ease-out forwards;
}</pre>
</div>
<p class="attr_p"><code>classNames</code>에 지정한 이름으로 변환 상태를 세팅할 수 있습니다. 위의 예시 코드 경우, <code>classNames</code>을 <code>fade-modal</code>로 지정하여 <code>fade-modal-enter</code>, <code>fade-modal-enter-active</code>, <code>fade-modal-exit</code>, <code>fade-modal-exit-active</code>으로 변환 상태를 조작할 수 있습니다.</p>
<p class="attr_p"><code>CSSTransition</code>은 <code>class</code>를 사용자가 디테일하게 지정할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
        appear: "",
        appearActive: "",
      }}
    &gt;</pre>
</div>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="css">
/* css */
.ModalOpen {
  animation: openModal 0.4s ease-out forwards;
}

.ModalClosed {
  animation: closeModal 1s ease-out forwards;
}

@keyframes openModal {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  50% {
    opacity: 1;
    transform: translateY(20%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes closeModal {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  50% {
    opacity: 0.8;
    transform: translateY(60%);
  }

  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">TransitionGroup</h3>
<p class="attr_p"><code>TransitionGroup</code> 컴포넌트는 <code>Transition</code>이나 <code>CSSTransition</code>의 list를 관리할때 사용합니다. 아래는 list 관리 예제입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const listItems = this.state.items.map((item, index) =&gt; (
  &lt;CSSTransition key={index} classNames="fade" timeout={300}&gt;
    &lt;li className="ListItem" onClick={() =&gt; this.removeItemHandler(index)}&gt;
      {item}
    &lt;/li&gt;
  &lt;/CSSTransition&gt;
));

return (
  &lt;div&gt;
    &lt;button className="Button" onClick={this.addItemHandler}&gt;
      Add Item
    &lt;/button&gt;
    &lt;p&gt;Click Item to Remove.&lt;/p&gt;
    {/* &lt;ul className="List"&gt;{listItems}&lt;/ul&gt; */}
    &lt;TransitionGroup component="ul" className="List"&gt;
      {listItems}
    &lt;/TransitionGroup&gt;
  &lt;/div&gt;
);</pre>
</div>
</div>
<p class="attr_p source">참고 자료: <a href="https://reactcommunity.org/react-transition-group/" target="_blank" data-target="external">https://reactcommunity.org/react-transition-group/</a></p>
</section>`;
