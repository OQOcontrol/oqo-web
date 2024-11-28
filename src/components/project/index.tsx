'use client'

import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

interface ProjectProps {
    t: Record<string, string>;
}

const Project = ({t}: ProjectProps) => {
    useGSAP(() => {
    gsap.to(".knob2", {
        rotation: 0,
      scrollTrigger: {
        trigger: "#project",
        start: "top 10%",
        end: "bottom 10%",
        scrub: true,
      },
    });
    gsap.fromTo(".knob3", {
        rotation: -90,
    },
    {
      rotation: 90,
      scrollTrigger: {
      trigger: "#promo",
      start: "top 10%",
      end: "bottom 10%",
      scrub: true,
    },
  });
  });

  return (
    <section id="project" className="mb-24 md:mb-36">
    <h2 className="mb-24 md:mb-36 text-2xl md:text-4xl 2xl:text-5xl leading-tight md:md:w-10/12 font-abc">{t['Leveraging the advances in new technologies and the development of more efficient sensors, OQO introduces a new approach to audiovisual control.']}</h2>
      <div className="md:grid grid-cols-2 gap-4 relative">
        <h2 className="mb-4 text-xs xl:text-sm 2xl:text-md font-saansMono">{t['The Project']}</h2>
        <div className="mb-24 md:mb-36">
          <p className="mb-4 text-md  md:text-xl 2xl:text-2xl leading-tight">{t['Developed throughout 2023, this innovative design incorporates sensors held by magnets in a vertical and transparent structure.']}</p>
          <p className="mb-4 text-md  md:text-xl 2xl:text-2xl leading-tight">{t['Each sensor can be programmed to control sound effects, lights, or visuals, and is integrated into a knob with a visual and illuminated position indicator for easier handling. Assigned parameters can be adjusted by turning the knob on its axis or moving it in the air, allowing for direct interaction with the performer’s body.']}</p>
          <p className="mb-4 text-md  md:text-xl 2xl:text-2xl leading-tight">{t['A distinctive feature of OQO is the ability to connect the knobs to each other using magnets, opening up new possibilities for live control. This allows multiple parameters to be adjusted simultaneously with each hand, offering a novel and creative form of interaction.']}</p>
          <p className="mb-8 text-md  md:text-xl 2xl:text-2xl leading-tight">{t['The vertical design of the module promotes a more ergonomic posture, and being completely transparent, it creates no visual barrier between the performer and the audience, allowing for a fluid and direct connection during the performance. All information generated by the knobs is transmitted wirelessly to a computer, synthesizer, or other MIDI-compatible devices.']}</p>
          <p className="text-xs xl:text-sm 2xl:text-md font-saansMono">{t['** All these innovations have been registered with the Spanish Patent and Trademark Office (OEPM) as of January 2024.']}</p>
          <div className="pt-12 flex w-full">
            <svg className="knob2 md:absolute bottom-48 left-0 rotate-180 w-[142px] h-[142px] md:w-[211px] md:h-[211px]" width="211" height="211" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="105.5" cy="105.5" r="102.5" transform="rotate(-90 105.5 105.5)" stroke="black" strokeWidth="6"/>
              <path d="M107 111L182 35" stroke="black" strokeWidth="6"/>
            </svg>
          </div>
        </div>
      </div>
      <div id="promo" className="flex justify-center items-center mb-24 md:mb-36 relative">
        <Image className="w-full md:w-6/12" src="/oqo.jpg" alt="Q" width={474} height={475} />
        <svg className="knob3 hidden md:block absolute bottom-0 right-0 -rotate-90" width="211" height="211" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="105.5" cy="105.5" r="102.5" transform="rotate(-90 105.5 105.5)" stroke="black" strokeWidth="6"/>
          <path d="M107 111L182 35" stroke="black" strokeWidth="6"/>
        </svg>
      </div>
      <h2 className="mb-24 md:mb-36 text-2xl md:text-4xl 2xl:text-5xl leading-tight md:w-10/12 font-abc">{t['It’s not just about technology, but about how it can redefine the connection between artists and audiences, creating an audiovisual experience that challenges conventional approaches to live performances.']}</h2>  
    </section>
  )
}

export default Project