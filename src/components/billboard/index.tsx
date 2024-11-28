'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Billboard = ({ t }: { t: Record<string, string> }) => {
    useGSAP(() => {
        gsap.fromTo(
            ".knob-main",
            {
                rotation: 0,
            },
            {
                rotation: 135,
                scrollTrigger: {
                trigger: "#billboard",
                start: "top 0",
                end: "bottom 0",
                scrub: true,
              },
            }
          )
      });


      const elementRef = useRef<HTMLDivElement | null>(null); // Reference to the element
      const [height, setHeight] = useState<number>(0); // State for height
    
      useEffect(() => {
        const observer = new ResizeObserver(() => {
          if (elementRef.current) {
            setHeight(elementRef.current.offsetHeight);
          }
        });
    
        if (elementRef.current) {
          observer.observe(elementRef.current); // Start observing the element
        }
    
        return () => observer.disconnect(); // Cleanup observer on unmount
      }, []);

  return (
    <section id="billboard" className="md:h-screen mb-24 md:mb-36 relative py-[10px]">
    <div ref={elementRef} className="hidden px-[10px] md:grid grid-cols-2 gap-[10px] absolute -rotate-90 top-full origin-top-left	font-saansMono text-grey" style={{width: "100vh", left: `calc(100% - ${height}px)`}}>
      <div className="text-xs 2xl:text-sm pr-16 leading-tight">
        <span>{t['The']}</span>
        <span className="font-saans">{t[' OQO ']}</span>
        <span>{t['(o-cu-o) is a device with wireless sensors that allows for real-time modulation of sounds, lights, and visuals.']}</span>
      </div>
      <div className="text-xs 2xl:text-sm pr-16 leading-tight">{t['A project by Andrés Berastegui, musician and producer, blending advanced technology with music production.']}</div>
    </div>
    <div className="block md:flex justify-center items-end h-full mb-10 md:mb-0">
      <svg className="w-6/12 md:w-full mx-auto h-auto" width="474" height="474" viewBox="0 0 474 474" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="237" cy="237" r="237" fill="black"/>
      </svg>
      <svg className="knob-main w-6/12 md:w-full mx-auto h-auto" width="474" height="475" viewBox="0 0 474 475" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M237 474.333C367.891 474.333 474 368.225 474 237.333C474 106.442 367.891 0.333252 237 0.333252C106.109 0.333252 0 106.442 0 237.333C0 368.225 106.109 474.333 237 474.333ZM232.496 238.043L401.395 406.941L405.638 402.699L236.739 233.8L232.496 238.043Z" fill="black"/>
      </svg>
      <svg className="w-6/12 md:w-full mx-auto h-auto" width="474" height="474" viewBox="0 0 474 474" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="237" cy="237" r="237" fill="black"/>
      </svg>
    </div>
    <h1 className="block md:absolute text-2xl md:text-4xl 2xl:text-5xl md:w-8/12 top-0 font-abc leading-tight">
      <span>{t['The']}</span>
      <span className="font-saans">{t[' OQO ']}</span>
      <span>{t['(o-cu-o) is a device with wireless sensors that allows for real-time modulation of sounds, lights, and visuals.']}</span>
    </h1>
  </section>
  )
}

export default Billboard