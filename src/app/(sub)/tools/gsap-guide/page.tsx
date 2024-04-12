"use client";

import React, { useState } from "react";
import TextToHtml from "@/components/TextToHtml";
import TwTag from "@/components/tw-tag/TwTag";
import { contentHtml } from "@/features/tools/gsap/content-html";
import { GsapBasic, GsapTextEffect } from "@/features/tools/gsap/GsapExample";
import gsap from "gsap";

const GsapGuide = () => {
  const [gsapAni, setGaspAni] = useState<any>(null);
  return (
    <TwTag className="lg:mb-[223px]">
      <section>
        <TextToHtml html={contentHtml} />
        <div>
          <h3>2. 기본 애니메이션 메서드</h3>

          <h4>1. gsap.to()</h4>
          <p>
            이 메서드는 움직임의 종착점을 지정하는 애니메이션을 생성합니다. <code>gsap.to()</code>는 애니메이션의 가장
            기본이 되는 속성으로, 지정된 속성까지 객체를 애니메이션합니다.
          </p>
          <div>
            <pre data-lang="javascript">{`// 예제: x축으로 300 이동하는데 2초가 걸리며, 시작 전 5초의 딜레이를 가짐
gsap.to('.box-1', {x: 300, duration: 2, delay: 5});`}</pre>
          </div>
          <GsapBasic
            className="gsap-to"
            gsapTest={() => {
              gsap.to(".gsap-to", { x: 200, duration: 2 });
            }}
            gsapInit={() => {
              gsap.set(".gsap-to", { x: 0 });
            }}
          />

          <h4>2. gsap.from()</h4>
          <p>
            시작점을 지정하는 애니메이션으로, <code>gsap.from()</code>은 초기 값을 설정하고 원래 상태로 되돌아오는
            애니메이션을 실행합니다.
          </p>
          <div>
            <pre data-lang="javascript">{`// 예제: x축에서 300의 위치에서 시작해 원래 위치로 2초에 걸쳐 이동, 시작 전 3초 딜레이
gsap.from('.box-1', {x: 300, duration: 2, delay: 3});`}</pre>
          </div>
          <GsapBasic
            className="gsap-from"
            gsapTest={() => {
              gsap.from(".gsap-from", { x: 200, duration: 2, delay: 1 });
            }}
          />

          <h4>3. gsap.fromTo()</h4>
          <p>
            시작점과 끝점을 모두 지정하는 애니메이션으로, <code>from</code> 속성이 시작 값, <code>to</code> 속성이 종료
            값으로 설정되어 애니메이션 효과가 적용됩니다.
          </p>
          <div>
            <pre data-lang="javascript">{`// gsap.fromTo("타겟", {시작 속성: 시작 속성값}, {끝나는 속성: 끝나는 속성값});
gsap.fromTo(".box-1", {y: 50}, {duration: 2, x: 500, y: 0});`}</pre>
          </div>
          <GsapBasic
            className="gsap-from-to"
            gsapTest={() => {
              gsap.fromTo(".gsap-from-to", { y: 80 }, { duration: 2, x: 200, y: 0 });
            }}
            containerClasses="h-[20rem]"
          />

          <h4>4. gsap.set()</h4>
          <p>
            애니메이션 효과 없이 즉시 요소의 속성 값을 변경합니다. 이 메서드는 초기 상태를 설정하거나 애니메이션 전에
            특정 속성을 적용할 때 유용합니다. 여러개 속성에 동시에 설정이 가능하지만, 페이지 로딩 후 바로 보여야 하는
            애니메이션의 경우에는 GSAP보다는 CSS에서 직접 설정하는 것이 좋습니다.
          </p>
          <div>
            <pre data-lang="javascript">{`// 예제: .sc_intro 요소를 scale 0.8로 설정
gsap.set('.sc_intro', {scale: 0.8});
gsap.to(".sc_intro", {
    opacity: 0.5,
    scale: 1.5,
  },
});`}</pre>
          </div>
          <GsapBasic
            className="gsap-set"
            gsapTest={() => {
              gsap.set(".gsap-set", { x: 200 });
              gsap.to(".gsap-set", { x: 0, duration: 2, delay: 1 });
            }}
          />

          <h4>5. gsap 컨트롤</h4>
          <p>
            <code>.play()</code>, <code>.pause()</code>, <code>.resume()</code>, <code>.reverse()</code>,
            <code>.restart()</code>는 특정 애니메이션의 재생, 일시 정지, 재개, 반전 및 재시작을 제어합니다. 이
            메서드들은 애니메이션의 흐름을 세밀하게 조정할 수 있게 해줍니다.
          </p>
          <div>
            <pre data-lang="javascript">{`const animation = gsap.to(".box", {x: 500, duration: 5, paused: true});

// Play 버튼
document.getElementById("play").addEventListener("click", function() {
  animation.play();
});

// Pause 버튼
document.getElementById("pause").addEventListener("click", function() {
  animation.pause();
});

// Resume 버튼
document.getElementById("resume").addEventListener("click", function() {
  animation.resume();
});

// Reverse 버튼
document.getElementById("reverse").addEventListener("click", function() {
  animation.reverse();
});

// Restart 버튼
document.getElementById("restart").addEventListener("click", function() {
  animation.restart();
});`}</pre>
          </div>
          <GsapBasic
            className="gsap-control"
            gsapTest={() => {
              setGaspAni(gsap.to(".gsap-control", { x: 300, duration: 2 }));
            }}
          />
          <div className="flex mt-2">
            <button className="mr-2 border px-2" onClick={() => gsapAni.play()}>
              play
            </button>
            <button className="mr-2 border px-2" onClick={() => gsapAni.pause()}>
              pause
            </button>
            <button className="mr-2 border px-2" onClick={() => gsapAni.resume()}>
              resume
            </button>
            <button className="mr-2 border px-2" onClick={() => gsapAni.reverse()}>
              reverse
            </button>
            <button className="mr-2 border px-2" onClick={() => gsapAni.restart()}>
              restart
            </button>
          </div>

          <h4>6. gsap.timeline()</h4>
          <p>
            여러 애니메이션을 연속적으로 설정할 수 있습니다. <code>timeline</code>을 사용하면 복잡한 애니메이션 시퀀스를
            쉽게 관리하고, 순차적 또는 동시 실행을 구현할 수 있습니다.
          </p>
          <div>
            <pre data-lang="javascript">{`const timeline = gsap.timeline();
timeline.fromTo(".box-1", {y: 50}, {duration: 2, x: 500, y: 0})
  .to(".box-1", {duration: 2, x: 0, y: 0, delay: 1})
  .to(".box-1", {duration: 2, opacity: 0.5});`}</pre>
          </div>
          <GsapBasic
            className="gsap-timeline"
            gsapTest={() => {
              const timeline = gsap.timeline();
              timeline
                .fromTo(".gsap-timeline", { y: 50 }, { duration: 2, x: 500, y: 0 })
                .to(".gsap-timeline", { duration: 2, x: 0, y: 0, delay: 1 })
                .to(".gsap-timeline", { duration: 2, opacity: 0.5 });
            }}
          />

          <h4>7. gsap text effect sample</h4>
          <p>다음은 GSAP를 이용한 간단한 텍스트 효과 예제입니다.</p>
          <div>
            <pre data-lang="html">{`<div id="text_ani">
  <div class="txt_wrap">
    <p class="txt">Simple</p>
    <p class="txt">Text</p>
    <p class="stroke">Animation</p>
    <p class="txt">Example</p>
  </div>
</div>`}</pre>
          </div>

          <div>
            <pre data-lang="css">{`#text_ani .txt_wrap{display:flex;flex-direction:column;justify-content:center; align-items:flex-start;height:200vh;padding-left:30px;font-size:70px;font-weight:900;line-height:1.15;color:rgba(0,0,0,.2)}

#text_ani .txt_wrap p{position:relative;width:max-content;background:linear-gradient(to right, #000, #000) no-repeat;-webkit-background-clip:text;background-clip:text;background-size:0%;transition:background-size cubic-bezier(.1,.5,.5,1) 0.5s}
#text_ani .txt_wrap p.stroke{color:transparent;  -webkit-text-stroke:2px #000}

@media(max-width:1024px){
  #text_ani .txt_wrap{font-size:60px}
}

@media(max-width:768px){
  #text_ani .txt_wrap{font-size:44px}
}

@media(max-width:480px){
  #text_ani .txt_wrap{font-size:34px}
}`}</pre>
          </div>

          <div>
            <pre data-lang="javascript">{`const textElements = gsap.utils.toArray('#text_ani .txt');
textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 50%',
      scrub: true,
    },
  });
});`}</pre>
          </div>
          <GsapTextEffect />
        </div>
        {/* End :: Section */}

        <div>
          <h3>ScrollTrigger</h3>

          <p>
            웹 애니메이션은 사용자의 경험을 풍부하게 하고 웹사이트의 동적인 요소를 강화하는데, 이를 위해서는
            애니메이션이 사용자에게 정확한 시점에 표시되는 것이 중요합니다. GSAP는 이를 위한 강력한 도구를 제공하고
            있는데, 여기에서는 GSAP의 ScrollTrigger를 활용하여 스크롤에 따라 애니메이션을 정확히 제어하는 방법에 대해
            설명합니다.
          </p>

          <h4>스크롤 위치에 따른 애니메이션 효과 적용</h4>
          <p>
            스크롤 위치에 따라 애니메이션을 적용하는 것은 웹사이트에 동적인 요소를 추가하는 훌륭한 방법입니다.
            <span>
              ScrollTrigger는 GSAP과 함께 사용되어, 사용자가 페이지를 스크롤할 때 정확한 위치에서 애니메이션이
              시작되도록 합니다.
            </span>
          </p>
          <p>
            스크롤 이벤트를 사용하기 위해선&nbsp;상단에&nbsp;<code>gsap.registerPlugin(ScrollTrigger);</code>로 스크롤
            트리거 플러그인을 불러오고 gsap 애니메이션 내부에 <code>scrollTrigger</code> 속성을 추가하여 애니메이션
            효과를 줄 요소를 등록해주어야 합니다.
          </p>

          <h4>1. 기본 사용법: 단발성 애니메이션</h4>
          <p>단발성 애니메이션은 사용자가 특정 요소에 도달했을 때 한 번만 실행되는 애니메이션입니다.</p>
          <div>
            <pre data-lang="javascript">{`gsap.registerPlugin(ScrollTrigger);

gsap.to(".box1", {
  scrollTrigger: ".box1", // 애니메이션 대상 요소
  x: 400,
  duration: 2
});`}</pre>
          </div>
          <h4>2. 토글 액션: 반복 애니메이션</h4>
          <p>토글 액션은 스크롤 위치에 따라 애니메이션이 반복되게 하는 기능입니다.</p>
          <div>
            <pre data-lang="javascript">{`gsap.to(".box1", {
  scrollTrigger: {
    trigger: ".box1",
    toggleActions: "restart none reverse none"
  },
  x: 400, 
  duration: 2
});`}</pre>
          </div>

          <p>
            <span>toggleActions은 애니메이션의 시작, 끝, 다시 시작 등의 동작을 정의합니다.</span>각 상황에서 어떤 행동을
            취할지 결정할 수 있습니다. <code>toggleActions</code>은 <code>onEnter</code>,<code>onLeave</code>,{" "}
            <code>onEnterBack</code>, <code>onLeaveBack</code> 네 가지로 구성됩니다.
          </p>

          <ul>
            <li>
              <b> onEnter:</b> 이벤트 발생 위치에 도달
            </li>
            <li>
              <b> onLeave</b>: 이벤트 발생 위치를 떠남
            </li>
            <li>
              <b> onEnterBack</b>: 스크롤을 다시 올려 이벤트 발생 위치에 도달
            </li>
            <li>
              <b> onLeaveBack</b>: 스크롤을 다시 올려 이벤트 발생 위치를 떠남
            </li>
          </ul>

          <p>
            참고 예제:{" "}
            <a href="https://codepen.io/lpla/pen/YzpaQmY" target="_blank">
              https://codepen.io/lpla/pen/YzpaQmY
            </a>
          </p>

          <h4>3. 시작/종료 지점 선택</h4>

          <p>
            애니메이션의 시작과 종료 지점을 명확히 설정할 수 있습니다. 이는 애니메이션이 시작되거나 종료되는 시점을 더욱
            세밀하게 조정할 수 있게 해줍니다.
          </p>

          <div>
            <pre data-lang="javascript">{`gsap.to(".box2", {
  scrollTrigger: {
    trigger: ".box2",
    start: "top center",
    markers: true,
    toggleActions: "resume pause reset pause"
  },
  x: 400, duration: 4,
});`}</pre>
          </div>

          <p>
            요소의 하단에서 <code>start</code> 하고 싶다면 <code>{`start: "bottom center"`}</code>로 바꾸면 되고, 종료
            지점 역시 마찬가지로 <code>start</code> 대신&nbsp;<code>end</code>를 사용하면 됩니다.
          </p>

          <h4>4. Scrub: 애니메이션 되감기</h4>
          <p>
            Scrub 기능은 사용자가 스크롤을 올릴 때 애니메이션을 되돌릴 수 있게 합니다. 이는 애니메이션을 더욱
            인터랙티브하게 만들어 줍니다.
          </p>

          <div>
            <pre data-lang="javascript">{`gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    scrub: true
  },
  x: 400
});`}</pre>
          </div>

          <p>
            참고 예제:{" "}
            <a href="https://codepen.io/lpla/pen/LYbdjvJ" target="_blank">
              https://codepen.io/lpla/pen/LYbdjvJ
            </a>
          </p>

          <h4>5. Pinning: 요소 고정</h4>
          <p>
            Pinning은 스크롤 동안 특정 요소를 화면에 고정시키는 기능입니다. 이를 통해 사용자의 주의를 끌거나 중요한
            정보를 강조할 수 있습니다. 사용법은 <code>pin: true</code> 또는 <code>{`pin: "Class/ID"`}</code>입니다.
          </p>

          <div>
            <pre data-lang="javascript">{`ScrollTrigger.create({
  trigger: ".box",
  start: "top top",
  pin: true,
  pinSpacing: false
});`}</pre>
          </div>

          <p>
            참고 예제:{" "}
            <a href="https://codepen.io/lpla/pen/XWNEoRN" target="_blank">
              https://codepen.io/lpla/pen/XWNEoRN
            </a>
            <br />
            참고 예제:{" "}
            <a href="https://codepen.io/lpla/pen/qBqoLpV" target="_blank">
              https://codepen.io/lpla/pen/qBqoLpV
            </a>
            <br />
            참고 예제:{" "}
            <a href="https://codepen.io/lpla/pen/abBYXzY" target="_blank">
              https://codepen.io/lpla/pen/abBYXzY
            </a>
          </p>

          <h4>6. Spinning: 수평 이동</h4>
          <p>
            Spinning은 스크롤 시 화면이 수직이 아닌 수평으로 이동하는 기능을 말하며, pin, scrub, snap 모두 쓰이고,{" "}
            <code>{`ease:
            "none"`}</code>
            도 추가해주어야 사용할 수 있습니다.
          </p>

          <div>
            <pre data-lang="javascript">{`gsap.registerPlugin(ScrollTrigger);

gsap.to(".horizontal-section", {
  x: () => -(document.querySelector(".horizontal-section").scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-wrapper",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".horizontal-section").scrollWidth
  }
});`}</pre>
          </div>

          <p>
            참고 예제:{" "}
            <a href="https://codepen.io/lpla/pen/qBqoLpV" target="_blank">
              https://codepen.io/lpla/pen/qBqoLpV
            </a>
          </p>
        </div>
        <div>
          <h3>참고 자료</h3>
          <ul>
            <li>
              <a href="https://gsap.com/resources/React/" target="_blank">
                {" "}
                https://gsap.com/resources/React/
              </a>
            </li>
            <li>
              <a href="https://gsap.com/docs/v3/GSAP/" target="_blank">
                {" "}
                https://gsap.com/docs/v3/GSAP/
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* End :: Section */}
    </TwTag>
  );
};

export default GsapGuide;
