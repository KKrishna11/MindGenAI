"use client";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { Layout } from "lucide-react";
import { useEffect } from "react";
import RootLayout from "./layout";

import Navbar from "@/components/ui/Navbar";
import { Provider } from "@/components/ui/Providers";
import { Toaster } from "@/components/ui/toaster";

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
        animate(counter3Element, 5);
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
        rotate: 45,
        y: 500,
        x: 2000,
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
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    // Your component JSX goes here
    <>
      <div className="fullscreencover">
        <div className="website-content">
          <div className="header">
            <div className="h1">
              <h1>Website Content</h1>
              {/* <Navbar/> */}
            </div>
            <div className="header-revealer"></div>
          </div>
        </div>

        <div className="loading-screen">
          <div className="loader">
            <div className="loader-1 bar">
              <h1>MindGenAI</h1>
              <img src="" alt="" />
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
