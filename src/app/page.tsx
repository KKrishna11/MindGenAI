"use client";
import Landingpage from "@/components/ui/LandingPage";
import { gsap } from "gsap";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    // Check if running in the browser
    if (typeof window !== "undefined") {
      let counter3 = document.querySelector(".counter-3");
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement("div");
          div.className = "num";
          div.textContent = j.toString();
          counter3?.appendChild(div);
        }
      }

      const finaldiv = document.createElement("div");
      finaldiv.className = "num";
      finaldiv.textContent = "0";
      counter3!.appendChild(finaldiv);

      const animate = (
        counter: HTMLElement | null,
        duration: number,
        delay: number = 0
      ): void => {
        if (counter) {
          const numElement = counter.querySelector(".num");

          if (numElement) {
            const numHeight = numElement.clientHeight;

            const totalDistance =
              (counter.querySelectorAll(".num").length - 1) * numHeight;

            gsap.to(counter, {
              y: -totalDistance,
              duration: duration,
              delay: delay,
              ease: "power2.inOut",
              // Additional properties if needed
            });
          }
        }
      };
      const counter3Elements = document.querySelectorAll(".counter-3");
      if (counter3Elements.length > 0) {
        const counter3Element = counter3Elements[0] as HTMLElement;
        animate(counter3Element, 6);
      } else {
        console.error("Element with class 'counter-3-digit' not found");
      }
      animate(document.querySelector(".counter-2") as HTMLElement, 6);
      animate(document.querySelector(".counter-1") as HTMLElement, 2, 4);

      gsap.to(".digit", {
        top: "-150px",
        stagger: {
          amount: 0.25,
        },
        delay: 6,
        duration: 1,
        ease: "power4.inOut",
      });

      gsap.from(".loader-1", {
        // width: 0,
        duration: 6,
        ease: "power2.inOut",
      });

      gsap.from(".loader-2", {
        width: 0,
        delay: 1.9,
        duration: 2,
        ease: "power2.inOut",
      });

      gsap.to(".loader", {
        background: "none",
        delay: 6,
        duration: 0.1,
      });

      gsap.to(".loader-1", {
        rotate: 90,
        y: -50,
        duration: 0.5,
        delay: 6,
      });

      gsap.to(".loader-2", {
        x: -75,
        y: 75,
        duration: 0.5,
      });
      gsap.to(".loader", {
        scale: 40,
        duration: 1,
        delay: 7,
        ease: "power2.inOut",
      });
      gsap.to(".loader", {
        rotate: 0,
        // y: 500,
        // x: 2000,
        duration: 1,
        delay: 7,
        ease: "power2.inOut",
      });

      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.5,
        delay: 7.5,
        ease: "power1.inOut",
      });
      gsap.from("h2", 1.5, {
        delay: 7,
        y: -80,
        ease: "power4.inOut",
      });

      // gsap.config({ trialWarn: false } );
    }
    const select = (s: string) => document.querySelector(s),
      toArray = (s: string) => gsap.utils.toArray(s),
      mainSVG = select("#mainSVG") as SVGSVGElement,
      allEll = toArray(".ell"),
      colorArr = ["#359EEE", "#FFC43D", "#EF476F", "#03CEA4"];

    const colorInterp = gsap.utils.interpolate(colorArr);

    gsap.set(mainSVG, {
      visibility: "visible",
    });
    function animatelogo(el: SVGElement, count: number): void {
      const tl = gsap.timeline({
        defaults: {
          ease: "sine.inOut",
        },
        repeat: -1,
      });

      gsap.set(el, {
        opacity: 1 - count / allEll.length,
        stroke: colorInterp(count / allEll.length),
      });

      tl.to(
        el,
        {
          attr: {
            ry: `-=${count * 2.3}`,
            rx: `+=${count * 1.4}`,
          },
          ease: "sine.in",
        },
        0
      )
        .to(
          el,
          {
            attr: {
              ry: `+=${count * 2.3}`,
              rx: `-=${count * 1.4}`,
            },
            ease: "sine",
          },
          0
        )
        .to(
          el,
          {
            duration: 1,
            rotation: -180,
            transformOrigin: "50% 50%",
          },
          0
        )
        .timeScale(0.5);
    }
    const logoElement = document.querySelector("#mainSVG") as SVGElement;
    animatelogo(logoElement, 3);
    // animatelogo();

    allEll.forEach((c, i) => {
      gsap.delayedCall(i / (allEll.length - 1), animatelogo, [c, i + 1]);
    });

    gsap.to("#aiGrad", {
      duration: 4,
      delay: 0.75,
      attr: {
        x1: "-=300",
        x2: "-=300",
      },
      scale: 1.2,
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: "none",
    });

    gsap.to("#ai", {
      duration: 1,
      scale: 1.1,
      transformOrigin: "50% 50%",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    setTimeout(()=>{
      const disappertext=document.getElementById("disapper")
      disappertext!.style.display='none';
    },4500)
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    // Your component JSX goes here
    <>
      <div className="fullscreencover">
        <div className="website-content">
          <div className="header">
              <Landingpage></Landingpage>
            <div className="header-revealer"></div>
          </div>
        </div>

        <div className="loading-screen">
          <div className="loader">
            <div className="loader-1 ">
              <h1 className="text-center animtext" id="disapper">MindGenAI</h1>
              <svg
                id="mainSVG"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 600"
                width="1200"
                height="800"
              >
                <defs>
                  <linearGradient
                    id="aiGrad"
                    x1="513.98"
                    y1="290"
                    x2="479.72"
                    y2="320"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#000" stopOpacity="0" />
                    <stop offset=".15" stopColor="#EF476F" />
                    <stop offset=".4" stopColor="#359eee" />
                    <stop offset=".6" stopColor="#03cea4" />
                    <stop offset=".78" stopColor="#FFC43D" />
                    <stop offset="1" stopColor="#000" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
                <path
                  id="ai"
                  opacity={0.85}
                  d="m417.17,323.85h-34.34c-3.69,0-6.67-2.99-6.67-6.67v-34.34c0-3.69,2.99-6.67,6.67-6.67h34.34c3.69,0,6.67,2.99,6.67,6.67v34.34c0,3.69-2.99,6.67-6.67,6.67Zm-5.25-12.92v-21.85c0-.55-.45-1-1-1h-21.85c-.55,0-1,.45-1,1v21.85c0,.55.45,1,1,1h21.85c.55,0,1-.45,1-1Zm23.08-16.29h-11.15m-47.69,0h-11.15m70,10.73h-11.15m-47.69,0h-11.15m40.37,29.63v-11.15m0-47.69v-11.15m-10.73,70v-11.15m0-47.69v-11.15"
                  stroke="url(#aiGrad)"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="loader-2 bar">
              <h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            </div>
          </div>

          <div className="counter">
            <div className="counter-1 digit">
              <div className="num">0</div>
              <div className="num num1offset1">1</div>
            </div>
            <div className="counter-2 digit">
              <div className="num">0</div>
              <div className="num num1offset2">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
              <div className="num">0</div>
            </div>
            <div className="counter-3 digit">
              <div className="num">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
              <div className="num">0</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
