'use client'

import React, { useRef, useState } from "react";
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
    <CustomVideoPlayer url="/oqo-video.mp4" poster="/poster.jpg" />
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


export const CustomVideoPlayer = ({url, poster}: {url: string, poster: string}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        // @ts-expect-error: Unreachable code error
        videoRef.current.pause();
      } else {
        // @ts-expect-error: Unreachable code error
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative md:aspect-[4/3] md:w-8/12">
      {/* Video Element */}
      <video
        className="w-full" controls={isPlaying} preload="none" poster={poster}
        ref={videoRef}
        onClick={togglePlay}
      >
        <source
          src={url}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center rounded-lg"
        >
          <span className="font-saansMono text-cream w-[88px] h-[88px] rounded-full bg-black text-sm flex justify-center items-center leading-none">PLAY</span>
        </button>
      )}
    </div>
  );
};