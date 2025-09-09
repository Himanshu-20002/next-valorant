

'use client'
import React, { useState, useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DecryptionText from "./DecryptedText";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [hasClicked, setHasClicked] = useState(false);
  const videoRef = useRef(null);
  const centerVideoRef = useRef(null);

  const videoSrc = "videos/hero-1.mp4"; // Single video source

  const handleMiniVideoClick = () => {
    setHasClicked(true);
  };

  useGSAP(() => {
    if (hasClicked) {
      gsap.to("#center-video", {
        transformOrigin: "center center",
        duration: 1.1,
        ease: "power1.inOut",
        onStart: () => centerVideoRef.current.play(),
      });

      gsap.from("#mini-video", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  }, [hasClicked]);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(0% 0%, 0% 0%, 95% 80%, 1% 90%)",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%, 0% 0%)",
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-screen w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          {/* Mini Video */}
          <div className="absolute-center absolute z-50 w-64 h-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-90 opacity-100 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full object-cover object-center scale-150 origin-center size-64"
                autoPlay
                muted
                id="mini-video"
                loop
                playsInline
                preload="auto"
              />
            </div>
          </div>

          {/* Center Video */}
          <video
            ref={centerVideoRef}
            src={videoSrc}
            loop
            muted
            playsInline
            autoPlay
            preload="auto"
            id="center-video"
            className="absolute-center mt-15 scale-110 w-full h-full object-cover object-center z-20"
          />
        </div>

        {/* Hero Text */}
        <h1 className="special-font hero-heading text-white text-[12px] absolute bottom-5 z-40 right-5">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-4 bottom-20 z-40">
          <div className="mt-12 px-5 sm:px-4">
            <h1
              className="special-font hero-heading text-blue-100 tracking-wide"
              style={{ fontSize: "48px" }}
            >
              redefi<b>n</b><b>e</b>
            </h1>
            <div className="pt-7 pb-7">
              <DecryptionText />
            </div>

            <Button
              id="watch-trailer"
              title="watch trailer"
              lefttIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 hover:bg-blue-500 flex-center gap-1 p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;