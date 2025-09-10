'use client'
import React, { useEffect } from 'react';
import { gsap } from "gsap";

const Loading = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const counter3 = document.querySelector('.counter-3');
    const counter2 = document.querySelector('.counter-2');
    const counter1 = document.querySelector('.counter-1');

    // Initialize counter-3
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement('div');
        div.className = 'num';
        div.textContent = j;
        counter3.appendChild(div);
      }
    }
    const finalDiv = document.createElement('div');
    finalDiv.className = 'num';
    finalDiv.textContent = '0';
    counter3.appendChild(finalDiv);

    // Animation function
    function animate(counter, duration, delay = 0) {
      const numHeight = counter.querySelector('.num').clientHeight;
      const totalDistance = (counter.querySelectorAll('.num').length - 1) * numHeight;
      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut"
      });
    }

    // Run animations
    animate(counter3, 5);
    animate(counter2, 6);
    animate(counter1, 2, 4);

    // Loader animations
    gsap.to('.loader-1', {
      width: 200,
      duration: 5,
      ease: "power2.inOut"
    });

    gsap.to('.loader', {
      background: 'none',
      delay: 5,
      duration: 0.1
    });


    gsap.to('.loader-1', {
      scale: 40,
      duration: 1,
      delay: 6,
      ease: "power2.inOut",
    });

 
    gsap.to('.loading-screen', {
      opacity: 0,
      duration: 0.5,
      delay: 7,
      ease: 'power1.inOut',
      onComplete: () => {
        // Re-enable scrolling after loading finishes
        document.body.style.overflow = "auto";
      },
    });
  }, []);

  return (
    <div className="loading-screen">
      <div className="loader">
        <div className="loader-1 bar"></div>
        <div className="loader-1 bar"></div>
      </div>

      <div className="counter">
        <div className="counter-1 digit">
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>

        <div className="counter-2 digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num ">2</div>
          <div className="num ">3</div>
          <div className="num ">4</div>
          <div className="num ">5</div>
          <div className="num ">6</div>
          <div className="num ">7</div>
          <div className="num ">8</div>
          <div className="num ">9</div>
          <div className="num ">0</div>
        </div>
        <div className='counter-3 digit'>
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;