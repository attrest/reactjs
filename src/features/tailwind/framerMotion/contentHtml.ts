export const contentHtml = `<section class="attr_section">
<p class="attr_p">Framer-motion 리액트 애니메이션 라이브러리</p>
<p class="attr_p attr_letter">Framer Motion은 React 애니메이션 라이브러리로서, 강력한 애니메이션 기능과 간편한 사용법을 제공합니다. Framer Motion은 React 컴포넌트와 함께 사용하기 쉽고, 선언적인 API를 통해 애니메이션을 구성할 수 있습니다.</p>
<figure class="attr_figure">
<img class="attr_img" src="/img/assets/framer-motion.gif" alt="" loading="lazy" />
<figcaption class="attr_caption"><cite>motion 활용 예시(SVG Drawing, Slide, Gesture, Modal)</cite></figcaption>
</figure>
<ul class="attr_list a__list dot">
<li><a href="https://github.com/framer/motion" target="_blank" data-target="external" data-title="Github">Github</a></li>
<li>MIT 라이센스</li>
<li><b>요구사항:</b> React 17+</li>
<li><b>공식 문서:</b> <a href="https://www.framer.com/docs/" target="_blank" data-target="external">https://www.framer.com/docs/</a></li>
</ul>
<div class="attr_div">
<h3 class="attr_title">1. 설치 및 사용 방법</h3>
<p class="attr_p">framer는 다음의 명령어로 설치할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
npm i framer-motion</pre>
</div>
<p class="attr_p">사용법은 간단합니다. 우선 라이브러리를 가져온 다음 <code>motion.div</code> 처럼, HTML 태그 앞에 <code>motion</code> 키워드를 붙여줍니다. 이렇게 <code>motion</code> 키워드가 붙은 요소를 <b>motion component</b>라고 합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { motion } from "framer-motion"

&lt;motion.div
  initial={{ scale: 0 }} 
  animate={{ scale: 1, rotateZ: 360 }}
/&gt;</pre>
</div>
<p class="attr_p">초기 상태를 <code>initial</code> 속성에 객체 형태로 넣고, 애니메이션 할 상태를 <code>animate</code> 속성에 객체 형태로 넣습니다. 이런 식으로 적절한 속성을 달아주기만 하면, <code>animate</code> 값이 변경되면서 Motion이 자동으로 애니메이션을 적용해 줍니다.</p>
<p class="attr_p">참고 예제: <a href="https://codesandbox.io/p/sandbox/framer-motion-keyframes-0fzv21?file=%2Fsrc%2FApp.tsx&amp;from-embed=" target="_blank" data-target="external">https://codesandbox.io/p/sandbox/framer-motion-keyframes-0fzv21?file=%2Fsrc%2FApp.tsx&amp;from-embed=</a></p>
</div>
<div class="attr_div">
<h3 class="attr_title">2. Animation</h3>
<h4 class="attr_title">Transitions</h4>
<p class="attr_p">기본적으로 Framer Motion 라이브러리는 쉽고 간편하게 애니메이션을 만들어주는데, 예를 들어, <code>x</code> 또는 <code>y</code>값 변경이나 <code>scale</code>이 바뀔 때는 튀는 듯한 스프링 효과를 적용하고, <code>opacity</code>나 <code>color</code>가 바뀔 때는 자연스러운 트윈 효과를 적용합니다.</p>
<p class="attr_p">또한, 사용자는 <code>transition</code> 속성으로 원하는 유형의 애니메이션을 정의할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}
/&gt;</pre>
</div>
<p class="attr_p">참고 예제: <a href="https://codesandbox.io/p/sandbox/framer-motion-transition-prop-j9m7d2?file=%2Fsrc%2Findex.tsx&amp;from-embed=" target="_blank" data-target="external">https://codesandbox.io/p/sandbox/framer-motion-transition-prop-j9m7d2?file=%2Fsrc%2Findex.tsx&amp;from-embed=</a></p>
<h4 class="attr_title">Enter animations</h4>
<p class="attr_p">motion 컴포넌트가 처음 생성될 때, <code>animate</code> 속성에 적용된 값이 <code>style</code> 또는 <code>inital</code> 에 정의된 값과 다르다면 <code>animate</code> 속성에 적용된 값으로 자동으로 애니메이션을 적용해 줍니다.</p>
<p class="attr_p">만약, 자동으로 적용하길 원치 않는다면 <code>inital</code> 값을 <code>false</code>로 설정해 주면 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div animate={{ x: 100 }} initial={false} /&gt;</pre>
</div>
<h4 class="attr_title">Exit animations</h4>
<p class="attr_p">리액트는 컴포넌트가 트리에서 삭제될 경우 "즉시" 사라져버리기 때문에 사라지는 애니메이션을 적용하기가 어렵다는 문제가 있는데, Motion의 <code>AnimatePresence</code> 컴포넌트를 사용하면 사라지는 애니메이션이 보여지는 동안 DOM에 유지되도록 할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;AnimatePresence&gt;
  {isVisible &amp;&amp; (
    &lt;motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    /&gt;
  )}
&lt;/AnimatePresence&gt;</pre>
</div>
<h4 class="attr_title">Keyframes</h4>
<p class="attr_p"><code>animate</code>의 값을 배열로 설정하면 Framer Motion이 각 값을 차례로 처리합니다. 만약, 현재값을 초기 키프레임으로 사용하고 싶다면 <code>null</code> 값을 주면 되는데, 이렇게 하면 애니메이션 되는 도중에 애니메이션이 시작되더라도 전환이 자연스러워집니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
  animate={{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}
/&gt;</pre>
</div>
<p class="attr_p">Framer Motion은 배열로 값을 넘기면 라이브러리가 알아서 값들을 균등하게 배치해주지만, 만약 정확한 타이밍을 지정하고 싶다면 <code>transition</code> 속성의 <code>times</code>를 사용하면 됩니다.</p>
<p class="attr_p">아래의 코드는 3초에 걸쳐 scale 애니메이션을 실행하며, [1 ⇢ 1.5]는 [0 ⇢ 0.2]에 걸쳐 실행되고, [1.5 ⇢ 1.1]은 [0.2 ⇢ 1]에 걸쳐 실행되는 코드입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
  animate={{ scale: [1, 1.5, 1.1] }}
  transition={{ duration: 3, times: [0, 0.2, 1] }}
/&gt;</pre>
</div>
<h4 class="attr_title">Gesture animations</h4>
<p class="attr_p"><code>hover</code>, <code>tap</code>, <code>drag</code>, <code>focus</code>, <code>inView</code> 등의 <a href="https://www.framer.com/motion/gestures/#animation-helpers" target="_blank" data-target="external" data-title="제스처">제스처</a>가 시작될 때 값 집합에 애니메이션을 적용할 수도 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
	initial={{ opacity: 0.2 }}
	whileInView={{
	  opacity: 1,
	  rotate: [0, 360],
	  borderRadius: ["20%", "50%"],
	  transition: { delay: 0.05 }
	}}
	whileHover={{
	  scale: 1.2,
	  transition: { type: "spring", stiffness: 400, damping: 10 }
	}}
/&gt;</pre>
</div>
<p class="attr_p">참고 예제: <a href="https://codesandbox.io/p/sandbox/framer-motion-gesture-animations-8c5y3?from-embed=" target="_blank" data-target="external">https://codesandbox.io/p/sandbox/framer-motion-gesture-animations-8c5y3?from-embed=</a></p>
<h4 class="attr_title">Variants</h4>
<p class="attr_p">단일 개체에 애니메이션을 설정하는 것은 쉽지만, DOM 전체에 파생되는 애니메이션이나, 차례로 이뤄지는 애니메이션을 설정하고 싶을 때는 어떻게 해야 할까요? 그럴 때는 <code>variants</code>을 사용합니다. <code>variants</code>는 미리 정의한 애니메이션 세트라고 할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}</pre>
</div>
<p class="attr_p">다음은 <code>motion</code> 컴포넌트에 <code>variants</code> 속성으로 사전 정의한 내용을 넘겨주는 코드입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div variants={variants} /&gt;</pre>
</div>
<p class="attr_p">초기 상태 <code>initial</code>과 적용할 애니메이션 <code>animate</code> 속성을 <code>variants</code> 객체에 있는 속성 이름으로 지정하면 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.h1
  initial="hidden"
  animate="visible"
  variants={variants}
/&gt;
 
&lt;motion.button
  initial="hidden"
  animate="visible"
  variants={variants}
/&gt;</pre>
</div>
<h4 class="attr_title">Propagation</h4>
<p class="attr_p">만약 <code>motion</code> 컴포넌트에 자식 요소가 있다면, 자식 요소가 자체 <code>animate</code> 속성을 정의하기 전까지 <code>variants</code>의 변화를 상속받도록 할 수 있습니다. 즉, <code>variants</code>에 정의한 속성명을 자식에게 그대로 물려줄 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const list = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
 
const item = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
}
 
return (
  &lt;motion.ul
    initial="hidden"
    animate="visible"
    variants={list}
  &gt;
    &lt;motion.li variants={item} /&gt;
    &lt;motion.li variants={item} /&gt;
    &lt;motion.li variants={item} /&gt;
  &lt;/motion.ul&gt;
)</pre>
</div>
<p class="attr_p">위 코드의 경우 <code>li</code>에 추가된 <code>variants={item}</code>을 통해 <code>initial="hidden"</code>과 <code>animate="visible"</code>이 자동으로 적용됩니다.</p>
<h4 class="attr_title">Orchestration</h4>
<p class="attr_p">앞의 예제는 item에 달린 애니메이션이 모두 동시에 시작됩니다. 하지만 <code>transition</code>에 추가적인 속성을 더해 자식 애니메이션의 실행을 조정할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};</pre>
</div>
<h4 class="attr_title">Dynamic variants</h4>
<p class="attr_p">함수를 정의해서 각 <code>variant</code>에 동적으로 애니메이션을 설정할 수도 있습니다. 이러한 <code>variant</code> 함수들은 컴포넌트의 <code>custom</code> 속성으로 넘어오는 값을 인자로 받습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const variants = {
  hidden: {
    opacity: 0.2,
    y: 15
  },
  visible: i =&gt; ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse"
    }
  })
};
 
return (
  &lt;ul&gt;
    {items.map((item, i) =&gt; (
      &lt;motion.li
        key={item}
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={i}
      &gt;
        {item}
      &lt;/motion.li&gt;
    ))}
  &lt;/ul&gt;
  );</pre>
</div>
<h4 class="attr_title">Manual Controls</h4>
<p class="attr_p">대부분 UI 인터랙션에 맞춰 애니메이션이 실행되지만, 좀더 복잡한 시퀀스를 구현하고 싶다면 <code>useAnimationControls</code> 훅을 사용하여 애니메이션을 수동으로 <b>시작/중지</b> 할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
 
export default function App() {
  const [show, setShow] = useState(false);
  const controls = useAnimationControls();
 
  useEffect(() =&gt; {
    if (show) {
      controls.start({ scale: 6 });
    }
  }, [controls, show]);
 
  return (
    &lt;div className="wrap"&gt;
      &lt;motion.h1 animate={controls}&gt;{show ? "Wow!" : "..."}&lt;/motion.h1&gt;
      &lt;button onClick={() =&gt; setShow(true)}&gt;setShow(true)&lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
</div>
<p class="attr_p">참고 예제: <a href="https://codesandbox.io/p/sandbox/framer-motion-side-menu-mx2rw?from-embed=" target="_blank" data-target="external">https://codesandbox.io/p/sandbox/framer-motion-side-menu-mx2rw?from-embed=</a></p>
</div>
<div class="attr_div">
<h3 class="attr_title">3. Motion components</h3>
<p class="attr_p"><code>motion</code> 컴포넌트는 <b>60fps</b> 애니메이션에 최적화된 DOM 기본 요소입니다. 숫자, 숫자를 포함한 문자열, 16진수 또는 RGB 색상값 등 원하는 값을 넣으면 Framer Motion이 자동으로 적용해줍니다.</p>
<h4 class="attr_title">Supported values</h4>
<p class="attr_p">일반적으로 같은 유형의 단위끼리(px to px) 애니메이션이 가능하지만,</p>
<p class="attr_p">HTML의 <code>x</code>, <code>y</code>, <code>width</code>, <code>height</code>, <code>top</code>, <code>left</code>, <code>right</code>, <code>bottom</code>은 다른 값 유형이라도 자유롭게 애니메이션될 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
  initial={{ x: "100%" }}
  animate={{ x: "calc(100vw - 50%)" }}
/&gt;</pre>
</div>
<h4 class="attr_title">Transform</h4>
<p class="attr_p">CSS Transform 속성은 GPU에 의해 가속화되므로 애니메이션을 하기에 좋은 속성입니다. 여러 개의 값이 있을 때는 <code>translate</code> &gt; <code>scale</code> &gt; <code>rotate</code> &gt; <code>skew</code> 순대로 적용되지만, 원한다면 <code>transformTemplate</code> 속성을 사용하여 사용자 정의를 해 줄 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const transform = ({ rotate, x }) =&gt; \`rotate(\${rotate}) translateX(\${x})\`
 
&lt;motion.div transformTemplate={transform} /&gt;</pre>
</div>
<h4 class="attr_title">CSS variables</h4>
<p class="attr_p">Framer Motion은 CSS 변수값도 애니메이션으로 처리할 수 있습니다.(단, 타입스크립트를 사용한다면, as any 로 타입 처리를 해주어야 합니다.)</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.ul
  initial={{ '--rotate': '0deg' } as any}
  animate={{ '--rotate': '360deg' } as any}
&gt;
  &lt;li style={{ transform: 'rotate(var(--rotate))' }} /&gt;
&lt;/motion.ul&gt;</pre>
</div>
<h4 class="attr_title">SVG line drawing</h4>
<p class="attr_p"><code>pathLength</code>, <code>pathSpacing</code>, <code>pathOffset</code> 속성을 사용하여 SVG 패스 애니메이션을 만들 수 있습니다. 0~1 사이의 값으로 설정되며, 여기서 1은 path의 측정된 길이를 뜻합니다.</p>
<p class="attr_p">패스 애니메이션은 <code>circle</code>, <code>ellipse</code>, <code>line</code>, <code>path</code>, <code>polygon</code>, <code>polyline</code>, <code>rect</code>와 호환됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const variants = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255,0)" },
  end: { pathLength: 1, fill: "rgba(255, 255, 255, 1)" }
};
 
&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"&gt;
  &lt;motion.path
    variants={variants}
    initial="start"
    animate="end"
    transition={{
      default: { duration: 1.8 },
      fill: { duration: 1, delay: 1.1 }
    }}
    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
  /&gt;
&lt;/svg&gt;</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">4. Layout animations</h3>
<p class="attr_p">Framer Motion의 강력한 강점 중 하나는 손쉽게 레이아웃 애니메이션을 설정할 수 있다는 것입니다. CSS 레이아웃은 사실 힘들고 어려운 작업인데, 예를 들어 height를 100px에서 500px로 만들고 트랜지션을 적용하면 리플로우(Reflow)가 발생하면서 성능이 저하되고, 트랜지션만으로는 한계가 있기도 합니다.</p>
<p class="attr_p">만약 CSS 레이아웃이 <code>justify-content</code> 상태일 때 <code>flex-start</code>와 <code>flex-end</code>를 트랜지션할 수 있을까요? Framer Motion은 이런 레이아웃 애니메이션도 가능하게 해줍니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div layout /&gt;</pre>
</div>
<p class="attr_p">위와 같이 <code>layout</code> 속성만 달아주면, 다음과 같이 리렌더링 결과로 발생하는 모든 레이아웃 변경사항을 감지해 애니메이션을 실행합니다.</p>
<ul class="attr_list a__list dot">
<li>목록 순서 변경</li>
<li>컴포넌트 자체에 설정된 스타일 변경(width, position 등)</li>
<li>부모 레이아웃의 변경(flexbox, grid 등)</li>
<li>그밖에 다른 모든 레이아웃 변경사항</li>
</ul>
<p class="attr_p">참고 예제: <a href="https://codesandbox.io/p/sandbox/framer-motion-2-layout-animations-kij8p?from-embed=" target="_blank" data-target="external">https://codesandbox.io/p/sandbox/framer-motion-2-layout-animations-kij8p?from-embed=</a></p>
<h4 class="attr_title">Scale correction</h4>
<p class="attr_p">모든 레이아웃 애니메이션은 <code>transform</code> 속성을 사용하여 부드럽게 구현됩니다. 하지만, <code>transform</code>을 사용하는 레이아웃 애니메이션은 때때로 자식 요소가 시각적으로 왜곡되곤 하는데, 이를 수정하기 위해 요소의 첫 번째 자식 요소에도 <code>layout</code> 속성을 지정할 수 있습니다.</p>
<p class="attr_p"><code>box-shadow</code>나 <code>border-radius</code> 속성이 왜곡되는 경우도 있지만, 값이 설정되어 있다면 <code>motion</code> 컴포넌트는 이를 자동으로 수정합니다. 만약 이런 값들을 애니메이션화 할 필요가 없다면 그냥 style로 지정하면 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div layout style={{ borderRadius: 20 }} /&gt;</pre>
</div>
<h4 class="attr_title">Customising layout animations</h4>
<p class="attr_p">레이아웃 애니메이션도 <code>transition</code> 속성으로 커스터마이징 가능합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div layout transition={{ duration: 0.3 }} /&gt;</pre>
</div>
<p class="attr_p">특별히 레이아웃 애니메이션에만 트랜지션을 지정하고 싶다면 <code>layout</code> 속성을 콕 집어 설정해 주면 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
  layout
  animate={{ opacity: 0.5 }}
  transition={{
    opacity: { ease: "linear" },
    layout: { duration: 0.3 }
  }}
/&gt;</pre>
</div>
<h4 class="attr_title">Animating within scroll containers</h4>
<p class="attr_p">스크롤 가능한 요소 내에서 레이아웃 애니메이션을 실행하고 싶다면 <code>layoutScroll</code> 속성을 넣어주면 됩니다. 그럼 라이브러리가 자식을 측정할 때 요소의 스크롤 옵셋을 고려할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div layoutScroll style={{ overflow: "scroll" }}/&gt;</pre>
</div>
<h4 class="attr_title">Coordinating layout animations</h4>
<p class="attr_p">컴포넌트가 리렌더링되면서 레이아웃이 변경되면 애니메이션이 자동으로 트리거됩니다. 그런데 만약 서로의 레이아웃에 영향을 주는 컴포넌트가 함께 있다면 어떨까요?</p>
<p class="attr_p">메뉴 하나를 클릭 해 펼치는 경우를 생각해보면, 클릭된 메뉴는 리렌더링 되지만 그 옆에 있는 다른 메뉴는 레이아웃 변경을 감지하지 못합니다. 이럴 때는 <code>LayoutGroup</code> 컴포넌트를 사용해 함께 묶어 줄 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { LayoutGroup } from "framer-motion"
 
function List() {
  return (
    &lt;LayoutGroup&gt;
      &lt;Accordion /&gt;
      &lt;Accordion /&gt;
    &lt;/LayoutGroup&gt;  
  )
}</pre>
</div>
<p class="attr_p">이렇게 그룹화된 컴포넌트 중 하나에서 레이아웃 변경이 감지되면 부가적인 리렌더링 없이 다른 모든 컴포넌트들에게도 레이아웃 애니메이션이 적용됩니다.</p>
<h4 class="attr_title">Shared layout animations</h4>
<p class="attr_p"><code>layoutId</code> 속성을 가진 기존 컴포넌트와 일치하는 새로운 컴포넌트가 추가될 경우, 이전 컴포넌트에서 자동으로 애니메이션이 적용됩니다. 이를 통해 이전 컴포넌트에서 새 컴포넌트를 보여줄 때 자연스러운 처리가 가능합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;ul&gt;
	{tabs.map((item) =&gt; (
	  &lt;li
	    key={item.label}
	    className={item === selectedTab ? "selected" : ""}
	    onClick={() =&gt; setSelectedTab(item)}
	  &gt;
	    {\`\${item.icon} \${item.label}\`}
	    {item === selectedTab ? (
	      &lt;motion.div className="underline" layoutId="underline" /&gt;
	    ) : null}
	  &lt;/li&gt;
	))}
&lt;/ul&gt;</pre>
</div>
<p class="attr_p">참고 예제: <a href="https://codesandbox.io/p/sandbox/framer-motion-layout-animations-snxgv?from-embed=" target="_blank" data-target="external">https://codesandbox.io/p/sandbox/framer-motion-layout-animations-snxgv?from-embed=</a></p>
</div>
<div class="attr_div">
<h3 class="attr_title">5. Gestures</h3>
<p class="attr_p">Framer Motion은 React에서 제공하는 기본 이벤트 리스너 세트를 확장해 제스처 애니메이션을 제공합니다. <code>motion</code> 컴포넌트에 <code>hover</code>, <code>tap</code>, <code>pan</code>, <code>viewport</code>, <code>drag</code> 등의 제스처 이벤트 리스너를 붙일 수 있습니다.</p>
<h4 class="attr_title">Animation helpers</h4>
<p class="attr_p">motion 컴포넌트는 <code>whileHover</code>, <code>whileTap</code>, <code>whileFocus</code>, <code>whileDrag</code>, <code>whileInView</code> 등의 다양한 애니메이션 제스쳐 속성을 제공합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.button
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
/&gt;</pre>
</div>
<p class="attr_p">애니메이션할 값을 직접 입력해도 되고, <code>variant</code> 속성을 통해 정의된 이름으로 설정할 수도 있습니다.</p>
<p class="attr_p">이 경우, <code>variants</code>에 정의된 속성명을 자식 요소에서 그대로 사용할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const buttonVariants = {
  hover: { scale: 2, rotzteZ: 90 }
};
 
&lt;motion.button
  whileHover="hover"
  variants={buttonVariants}
/&gt;</pre>
</div>
<h4 class="attr_title">Hover</h4>
<p class="attr_p">호버 제스처는 포인터가 컴포넌트 위로 이동하거나 컴포넌트를 떠날 때를 감지하며, <code>onMouseEnter</code>나 <code>onMouseLeave</code>와는 다르게 실제 마우스 이벤트 결과가 있을 때만 실행됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.a
	whileHover={{ scale: 1.1 }}
  onHoverStart={e =&gt; {}} // 컴포넌트 위로 포인터를 가져갈 때 실행
  onHoverEnd={e =&gt; {}}   // 컴포넌트에서 포인터가 떠날 때 실행
/&gt;</pre>
</div>
<p class="attr_p">참고 예제: <a href="https://codesandbox.io/p/sandbox/framer-motion-hover-animations-h44jpy?from-embed=" target="_blank" data-target="external">https://codesandbox.io/p/sandbox/framer-motion-hover-animations-h44jpy?from-embed=</a></p>
<h4 class="attr_title">Tap</h4>
<p class="attr_p">탭 제스처는 포인터가 동일한 컴포넌트를 눌렀다 뗄 때를 감지합니다. 어떤 구성요소에서 탭핑이 성공적으로 완료되면 <code>tap</code> 이벤트를 실행하고, 컴포넌트 외부에서 탭핑이 종료되면 <code>tapCancel</code> 이벤트를 실행합니다.</p>
<p class="attr_p">만약 컴포넌트가 드래그 가능한 컴포넌트의 자식인 경우 제스처 중 포인터가 3픽셀 이상 이동하면 탭 제스처가 자동으로 취소됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
  whileTap={{ scale: 0.9 }}
	onTap={e =&gt; {}}       // 탭 제스처가 성공적으로 종료될 때 실행
	onTapStart={e =&gt; {}}  // 탭 제스처가 시작될 때 실행
	onTapCancel={e =&gt; {}} // 탭 제스처가 컴포넌트 외부에서 끝날 때 실행
/&gt;</pre>
</div>
<p class="attr_p">참고 예제: <a href="https://codesandbox.io/p/sandbox/framer-motion-press-tap-animations-1igkgz?file=%2Fsrc%2Findex.tsx&amp;from-embed=" target="_blank" data-target="external">https://codesandbox.io/p/sandbox/framer-motion-press-tap-animations-1igkgz?file=%2Fsrc%2Findex.tsx&amp;from-embed=</a></p>
<h4 class="attr_title">Drag</h4>
<p class="attr_p">포인터가 구성 요소를 누르고 3픽셀 이상 이동할 때를 인식하며, 포인터를 놓으면 제스처가 종료됩니다. <code>drag="x"</code>를 통해 <code>x</code> 방향(또는 <code>y</code> 방향)으로만 드래그 되도록 설정할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div 
	drag
	dragConstraints={{top:100}} // 드래그 허용 영역(useRef hook으로 생성된 컴포넌트도 지정 가능)
	dragSnapToOrigin            // 드래그한 요소를 놓으면 원점으로 되돌아감
	dragElastic                 // constraints 밖으로 허용되는 움직임의 정도(0=없음, 1=전체)
	dragTransition={}           // 드래그 요소의 관성(inertia) 애니메이션을 지정
 /&gt;</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">6. Scroll Animations</h3>
<p class="attr_p">Framer Motion에는 다음과 같이 2가지의 스크롤 애니메이션 유형이 있습니다.</p>
<ul class="attr_list a__list dot">
<li><b>스크롤 링크(Scroll-linked):</b> 스크롤 진행 상황이 애니메이션 진행 상황과 연결됨, 모션 값(Motion Values)과 useScroll 훅을 사용해 구현할 수 있습니다.</li>
<li><b>스크롤 트리거(Scroll-triggered):</b> 요소가 뷰포트에 들어오거나 나갈 때 애니메이션이 트리거됨</li>
</ul>
<h4 class="attr_title">useScroll</h4>
<p class="attr_p">기본적으로 페이지 스크롤을 추적하며, 4개의 모션 값을 반환합니다.</p>
<ul class="attr_list a__list dot">
<li><b>scrollX, scrollY:</b> 절대 위치값</li>
<li><b>scrollXProgress, scrollYProgresss:</b> 정의된 오프셋 사이의 스크롤 값(0~1)</li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { motion, useScroll } from "framer-motion"
 
function Component() {
  const { scrollYProgress } = useScroll();
  
  return (
    &lt;motion.div style={{ scaleX: scrollYProgress }} /&gt;  
  )
}</pre>
</div>
<p class="attr_p">참고 예제: <a href="https://codesandbox.io/p/sandbox/framer-motion-usescroll-xwdxbt?from-embed=" target="_blank" data-target="external">https://codesandbox.io/p/sandbox/framer-motion-usescroll-xwdxbt?from-embed=</a></p>
<h4 class="attr_title">Scroll-triggered animations</h4>
<p class="attr_p"><code>whileInView</code> 속성 세트 또는 트랜지션을 정의하여 요소가 뷰에 있을 때 애니메이션을 적용할 수 있습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={} // 뷰포트가 감지되는 방식을 정의하는 뷰포트 옵션 개체
  onViewportEnter={()=&gt;{}}  // 뷰포트에 진입할 때 호출(단, 브라우저가 IntersectionObserver를 지원해야 함)
  onViewportLeave={()=&gt;{}}  // 뷰포트에서 떠날 때 호출(단, 브라우저가 IntersectionObserver를 지원해야 함)
/&gt;</pre>
</div>
<h4 class="attr_title">Viewport options</h4>
<ul class="attr_list a__list dot">
<li><b>once(boolean):</b> true인 경우, 뷰포트에 들어가면 whileInView 상태가 유지됩니다. 즉, 뷰포트 콜백이 호출되지 않습니다.</li>
<li><b>root(RefObject&lt;Element&gt;):</b> viewport.root와 조상 요소에 ref 객체를 넘기면, 해당 요소를 뷰포트 측정에 사용합니다.</li>
<li><b>margin(string):</b> 뷰포트 진입을 판단할 때 마진을 추가할 수 있습니다.</li>
<li><b>amount("some" | "all" | number):</b> 요소가 쬐끔(some) 보일 때 뷰포트와 교차한다고 판단할지, 전부(all) 또는 일정한 만큼 보일 때 판단할지 정의합니다.</li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
function Component() {
  const scrollRef = useRef(null)
  
  return (
    &lt;div ref={scrollRef}&gt;
      &lt;motion.div
        variants={emojiVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ root: scrollRef, once: true, amount: 0.3 }}
      /&gt;
    &lt;/div&gt;
  )
}</pre>
</div>
<p class="attr_p">참고 예제: <a href="https://codesandbox.io/p/sandbox/framer-motion-5-3-scroll-triggered-animations-2hbg5?from-embed=" target="_blank" data-target="external">https://codesandbox.io/p/sandbox/framer-motion-5-3-scroll-triggered-animations-2hbg5?from-embed=</a></p>
</div>
<div class="attr_div">
<h3 class="attr_title">7. Transition</h3>
<p class="attr_p">두 값 사이에 애니메이션을 적용할 때 사용합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
  animate={}
  transition={{ duration: 1 }}
/&gt;</pre>
</div>
<p class="attr_p">이렇게 정의한 트랜지션은 모든 속성에 적용되지만, 값에 각각 다른 트랜지션을 적용하는 것도 가능합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
  transition={{
		default: { duration: 1 },
    opacity: {
      delay: 0.3
    },
    y: {
      type: "spring",
      damping: 3,
      stiffness: 50,
      restDelta: 0.01,
      duration: 0.3
    }
  }}
/&gt;</pre>
</div>
<h4 class="attr_title">Orchestration</h4>
<p class="attr_p">다음과 같은 속성을 통해 트랜지션을 보다 심미적으로 만들 수 있습니다.</p>
<ul class="attr_list a__list dot">
<li><b>delay(number):</b> <code>n</code>초 간의 딜레이를 적용합니다.</li>
<li><b>delayChildren(number):</b> <code>variants</code>를 사용하는 경우, <code>n</code>초 후 자식 컴포넌트의 애니메이션이 시작됩니다.</li>
<li><b>staggerChildren(number):</b> <code>variants</code>를 사용할 때, 자식 컴포넌트 간 애니메이션 간격을 설정합니다.</li>
<li><b>staggerDirection(number):</b> 스태거를 적용할 방향입니다. <code>-1</code>을 주면 역순이 됩니다.</li>
<li><b>when(false | "beforeChildren" | "afterChildren" | string):</b> <code>varaints</code>를 사용할 때, 하위 트랜지션이 시작하기 전 또는 완료한 후에 이 트랜지션을 완료할지 정합니다.</li>
<li><b>repeat(number):</b> 트랜지션을 반복할 횟수입니다. <code>Infinity</code>로 설정하면 영원히 계속되며, 값을 설정하지 않으면 <code>repeatType</code> 애니메이션이 반복됩니다.</li>
<li><b>repeatType("loop" | "reverse" | "mirror"):</b> 트랜지션이 반복되는 경우 어떻게 처리할지 정의합니다.</li>
</ul>
<h4 class="attr_title">Spring</h4>
<p class="attr_p"><code>transition</code> 타입으로 <code>spring</code>을 설정하면 용수철이 튀어오르는 것처럼 사실적인 물리 표현을 할 수 있습니다.</p>
<ul class="attr_list a__list dot">
<li><b>bounce(number):</b> 말그대로 얼마나 바운스바운스할지 정합니다. 0이라면 탄력이 없고, 1은 매우 탄력적입니다. duration 기본값은 0.25로 설정됩니다.</li>
<li><b>damping(number):</b> 저항하는 반대 힘입니다. 0으로 설정하면 스프링이 무한으로 바운스합니다. (기본값: 10)</li>
<li><b>mass(number):</b> 질량입니다. 값이 높을수록 움직임이 둔해집니다. (기본값: 1)</li>
<li><b>stiffness(number):</b> 값이 높을수록 더 갑작스럽게 움직입니다. (기본값: 100)</li>
<li><b>velocity(number):</b> 스프링의 초기 속도입니다.</li>
<li><b>restSpeed(number):</b> 절대 속도가 이 값 아래로 떨어지고 델타가 restDelta 보다 작으면 애니메이션을 종료합니다. (기본값: 0.01)</li>
<li><b>restDelta(number):</b> 거리(distance)가 이 값보다 작고 속도가 restSpeed 보다 작으면 애니메이션을 종료합니다. (기본값: 0.01)</li>
</ul>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
&lt;motion.div
  animate={{ rotate: 180 }}
  transition={{ type: 'spring' }}
/&gt;</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">8. Motion values</h3>
<p class="attr_p">모든 motion 컴포넌트는 내부적으로 <code>MotionValue</code>를 사용해 애니메이션 값의 상태와 속도를 추적합니다. 이는 자동으로 생성되지만 사용자가 원한다면 수동으로 생성해 <code>motion</code> 컴포넌트에 넣을 수 있습니다.</p>
<p class="attr_p">수동으로 MotionValue를 설정하는 경우, 다음과 같은 설정을 할 수 있습니다.</p>
<ul class="attr_list a__list dot">
<li>상태를 <code>Set/Get</code> 할 수 있습니다.</li>
<li>여러 컴포넌트 간 모션을 동기화할 수 있습니다.</li>
<li><code>useTransform</code> 훅을 통해 <code>MotionValue</code>를 연결할 수 있습니다.</li>
<li>React의 렌더링 주기를 트리거하지 않고도 시각적 속성을 업데이트할 수 있습니다.</li>
<li>업데이트를 구독(Subscribe)할 수 있습니다.</li>
</ul>
<h4 class="attr_title">Overview</h4>
<p class="attr_p"><code>MotionValue</code>는 <code>useMotionValue</code> 훅으로 생성할 수 있습니다. 문자열 또는 숫자로 된 초기값을 지정할 수 있습니다.</p>
<p class="attr_p">사용자는 <code>set()</code> 메서드로 업데이트할 수 있고, <code>get()</code>으로 값을 읽어올 수 있습니다. 또한, <code>getVelocity()</code>로 초당 계산된 속도를 받아올 수도 있습니다.</p>
<p class="attr_p"><code>MotionValue</code>가 바뀌더라도 컴포넌트는 리렌더링되지 않습니다. <code>&lt;motion.div/&gt;</code>가 애니메이션되어도 이 컴포넌트는 다시 랜더링되지 않기 때문에 여기에 추가되어있는 api가 계속해서 호출되는 일은 일어나지 않습니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
import { motion, useMotionValue } from "framer-motion"
 
function App() {
  const x = useMotionValue(0)
 
	x.set(100);
	x.get();
	x.getVelocity();
}</pre>
</div>
<h4 class="attr_title">Injecting MotionValues</h4>
<p class="attr_p"><code>MotionValue</code>가 생성되면, 시각적 속성을 줬던 것처럼 <code>motion component</code>에 연결할 수 있습니다. HTML이라면 <code>style</code> 속성을 통해, SVG라면 <code>SVG</code> 속성을 통해 넣어주면 됩니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const x = useMotionValue(0);
const cx = useMotionValue(0);
 
&lt;motion.div style={{ x }} /&gt; // HTML
&lt;motion.circle cx={cx} /&gt;    // SVG</pre>
</div>
<p class="attr_p">하나의 <code>MotionValue</code>를 여러 개의 컴포넌트에 넣는 것도 가능합니다.</p>
<h4 class="attr_title">Responding to changes</h4>
<p class="attr_p"><code>onChange</code> 메서드로 <code>MotionValue</code>에 리스너를 추가할 수도 있습니다.</p>
<p class="attr_p">리액트 컴포넌트 안에서 <code>onChange</code>를 호출할 때는 <code>useEffect</code> 훅으로 감싸 주어야 합니다. <code>onChange</code>는 <code>unsubscribe</code> 함수를 반환하므로 <code>subscriber</code> 중복을 막기 위해 <code>useEfeect()</code> 안에서 쓰여야 합니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
useEffect(() =&gt; x.onChange(latest =&gt; {}), [])</pre>
</div>
<h4 class="attr_title">Composing MotionValues</h4>
<p class="attr_p"><code>useTransform</code> 등의 훅을 써서 <code>MotionValue</code>값을 구성할 수 있습니다.</p>
<ul class="attr_list a__list dot">
<li><b>useTransform:</b> 값 범위를 다른 값 범위로 매핑할 수 있습니다.</li>
</ul>
<p class="attr_p">다음은 박스를 왼쪽으로 드래그하면 <code>scale(3)</code>로, 오른쪽으로 드래그하면 <code>scale(0.1)</code>로 바뀌도록 하는 예제입니다.</p>
<div class="attr_pre_container">
<pre class="attr_pre" data-lang="javascript">
const x = useMotionValue(0);
const scale = useTransform(
  x,
  // Map x from these values:
  [-400, 400],
  // Into these values:
  [3, 0.1]
);
 
&lt;motion.div drag="x" style={{ x, scale }}/&gt;</pre>
</div>
</div>
<div class="attr_div">
<h3 class="attr_title">참고 자료</h3>
<ul class="attr_list a__list dot">
<li><b>useScroll:</b> <a href="https://www.framer.com/docs/use-scroll/" target="_blank" data-target="external">https://www.framer.com/docs/use-scroll/</a></li>
<li><b>AnimateSharedLayout:</b> <a href="https://www.framer.com/docs/animate-shared-layout/" target="_blank" data-target="external">https://www.framer.com/docs/animate-shared-layout/</a></li>
<li><b>Reorder:</b> <a href="https://www.framer.com/docs/reorder/" target="_blank" data-target="external">https://www.framer.com/docs/reorder/</a></li>
<li><b>3D Introduction:</b> <a href="https://www.framer.com/docs/three-introduction/" target="_blank" data-target="external">https://www.framer.com/docs/three-introduction/</a></li>
</ul>
</div>
</section>`;
