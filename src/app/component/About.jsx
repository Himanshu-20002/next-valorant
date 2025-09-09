'use client'
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top 0%",
        end: "+=800 ",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="relative w-screen">
      {/* Title Section */}
      <div className="relative mb-8 mt-24 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
        <h2 className="font-general text-xs uppercase sm:text-sm md:text-base lg:text-lg tracking-wide">
          Welcome to Arena
        </h2>

        <AnimatedTitle
          title="Disc<b>o</b>Ver the world's <br/> 
        l<b>a</b>rgest shared adventure"
          containerClass="mt-5 special-font text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase !text-black tracking-wide"
        />

        <div className="about-subtext mt-6 text-center text-xs sm:text-sm md:text-base lg:text-lg">
          <p>The Game of Games begins - your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative h-[100vh] sm:h-[60vh] md:h-[70vh] lg:h-[100dvh] w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.png"
            alt="Background"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;