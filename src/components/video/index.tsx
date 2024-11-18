'use client'

import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


const Video = () => {
    useGSAP(() => {
    gsap.to(".knob1", {
        rotation: 90,
      scrollTrigger: {
        trigger: "#video",
        start: "top 20%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  });

  return (
    <section id="video" className="mb-24 md:mb-36 relative">
    <video className="w-full md:aspect-[4/3] md:w-8/12" controls preload="none" poster="/poster.jpg">
      <source src="/oqo-video.mp4" type="video/mp4"  />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
    <div className="pt-12 flex justify-end w-full">
    <svg className="knob1 md:absolute bottom-12 right-0 w-[142px] h-[142px] md:w-[211px] md:h-[211px]" width="211" height="211" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="105.5" cy="105.5" r="102.5" transform="rotate(-90 105.5 105.5)" stroke="black" strokeWidth="6"/>
      <path d="M107 111L182 35" stroke="black" strokeWidth="6"/>
    </svg>
    </div>
  </section>
  )
}

export default Video