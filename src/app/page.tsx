import type { Metadata } from 'next'
import Image from "next/image";
import t from "../locales/en.json";

import localFont from 'next/font/local'
import Video from "../components/video";
import Project from "@/components/project";
import Billboard from "@/components/billboard";

const saansRegular = localFont({ src: '/fonts/SaansRegular.otf', variable: '--font-saans', });
const saansMono = localFont({ src: 'fonts/SaansMonoRegular.otf', variable: '--font-saans-mono' });
const ABC = localFont({ src: 'fonts/ABCMarist-Book.otf', variable: '--font-abc' });

 
export const metadata: Metadata = {
  title: "OQO",
  description: t['The OQO (o-cu-o) is a device with wireless sensors that allows for real-time modulation of sounds, lights, and visuals.'],
  openGraph: {
    images: '/og-image.png',
  },
}

export default function Home() {
  return (
    <div className={`text-black px-2 ${saansRegular.variable} ${saansMono.variable} ${ABC.variable} font-saans`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <main className="">
        <Billboard t={t} />
        <Video />
        <section id="about" className="mb-24 md:mb-36">
          <div className="md:grid grid-cols-2 gap-4">
            <div>
              <h2 className="mb-4 text-xs xl:text-sm 2xl:text-md font-saansMono">{t['About']}</h2>
            </div>
            <div>
              <p className="mb-4 text-md  md:text-xl 2xl:text-2xl leading-tight">{t['OQO is not a product but an ever-evolving artistic project. Its purpose is to break the traditional boundaries of audiovisual control, exploring new forms of interaction between sound, light, and movement. Through the use of wireless sensors and technological innovation, OQO offers an experimental and creative approach that opens the door to immersive sensory experiences.']}</p>
              <p className="mb-4 text-md  md:text-xl 2xl:text-2xl leading-tight">{t['It’s not just about technology, but about how it can redefine the connection between artists and audiences, creating an audiovisual experience that challenges conventional approaches to live performances.']}</p>
            </div>
          </div>
        </section>
        <section id="photos" className="mb-24 md:mb-36">
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              <Image className="w-full" src="/photo3.jpg" alt="O" width={474} height={474} />
              <Image className="w-full" src="/photo4.jpg" alt="Q" width={474} height={475} />
          </div>
        </section>
        <Project t={t} />
        <section id="andres">
        <div className="md:grid grid-cols-2 gap-4 mb-52 md:mb-64">
            <div>
              <h2 className="mb-4 text-xs xl:text-sm 2xl:text-md font-saansMono">{t['About Andrés']}</h2>
            </div>
            <div>
              <p className="mb-4 text-md  md:text-xl 2xl:text-2xl leading-tight">{t['Born in Argentina and living in Barcelona since 2018. Throughout his career, he has explored the fusion of sounds and technology, using sensors and experimental tools to develop innovative concepts. His focus is always on discovering new ways of sound execution and modulation.']}</p>
            </div>
          </div>
        </section>
        <footer className="mb-7">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4">
            <div className="text-4xl mb-24 w-full col-span-2 flex gap-4 md:gap-10 h-fit items-center">
              <svg className="w-7/12 md:w-auto" width="264" height="88" viewBox="0 0 264 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="88" height="88" rx="44" fill="black"/>
                <path d="M44.0165 56.2507C37.2014 56.2507 32.2812 51.0978 32.2812 43.9835C32.2812 36.9024 37.2014 31.7495 44.0165 31.7495C50.7652 31.7495 55.7186 36.8692 55.7186 43.9835C55.7186 51.131 50.7652 56.2507 44.0165 56.2507ZM43.9833 53.7906C49.1694 53.7906 52.8928 49.6683 52.8928 43.9835C52.8928 38.3319 49.1694 34.2096 43.9833 34.2096C38.8304 34.2096 35.107 38.3319 35.107 43.9835C35.107 49.6683 38.8304 53.7906 43.9833 53.7906Z" fill="white"/>
                <rect x="88" width="88" height="88" rx="44" fill="black"/>
                <path d="M132.017 55.6855C125.201 55.6855 120.281 50.5326 120.281 43.4183C120.281 36.3372 125.201 31.1843 132.017 31.1843C138.765 31.1843 143.719 36.304 143.719 43.4183C143.719 47.0419 142.455 50.1337 140.294 52.3278L142.954 55.2533L141.159 56.8158L138.466 53.857C136.638 55.0206 134.443 55.6855 132.017 55.6855ZM131.95 46.7095L133.778 45.1137L138.499 50.3331C139.995 48.6044 140.893 46.1776 140.893 43.4183C140.893 37.7667 137.169 33.6444 131.983 33.6444C126.83 33.6444 123.107 37.7667 123.107 43.4183C123.107 49.1031 126.83 53.2254 131.983 53.2254C133.745 53.2254 135.341 52.76 136.671 51.8956L131.95 46.7095Z" fill="white"/>
                <rect x="176" width="88" height="88" rx="44" fill="black"/>
                <path d="M220.017 56.2507C213.201 56.2507 208.281 51.0978 208.281 43.9835C208.281 36.9024 213.201 31.7495 220.017 31.7495C226.765 31.7495 231.719 36.8692 231.719 43.9835C231.719 51.131 226.765 56.2507 220.017 56.2507ZM219.983 53.7906C225.169 53.7906 228.893 49.6683 228.893 43.9835C228.893 38.3319 225.169 34.2096 219.983 34.2096C214.83 34.2096 211.107 38.3319 211.107 43.9835C211.107 49.6683 214.83 53.7906 219.983 53.7906Z" fill="white"/>
              </svg>
              <span>(o-cu-o)</span>
            </div>
            <div className="flex flex-col justify-between h-full mb-10 md:mb-0">
              <div>
                <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                  <div>A project by</div>
                  <div>Andrés Berastegui</div>
                </div>
                <div>
                  <div className="font-saansMono text-xs xl:text-sm 2xl:text-md"><a href="mailto:andres@oqo.com">andres@oqo.com</a></div>
                  <div className="font-saansMono text-xs xl:text-sm 2xl:text-md"><a href="tel:+34 666000000">+34 666 00 00 00</a></div>
                  <div className="font-saansMono text-xs xl:text-sm 2xl:text-md"><a href="https://www.instagram.com/oqocontrol/">@oqocontrol</a></div>
                </div>
              </div>
              <div>
                <div className="font-saansMono text-xs xl:text-sm 2xl:text-md">©2024 OQO.</div>
                <div className="font-saansMono text-xs xl:text-sm 2xl:text-md">All rights reserved</div>
              </div>
            </div>
            <div className="mb-0">
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">This project is a collective effort made possible by the creativity and dedication of our team</div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>Phantasia Services</div>
                <div className="text-grey">Creative Direction & Design</div>
              </div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>Dani Martinez</div>
                <div className="text-grey">Film Direction & DOP</div>
              </div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>Martí Bescós</div>
                <div className="text-grey">Gaffer</div>
              </div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>Jana Travé</div>
                <div className="text-grey">Dancer</div>
              </div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>Sara Lee</div>
                <div className="text-grey">Skater</div>
              </div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>Andrés Berastegui</div>
                <div className="text-grey">Concept & Sound Design</div>
              </div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>Levin Mendez</div>
                <div className="text-grey">VFX</div>
              </div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>Anna Gudayol</div>
                <div className="text-grey">Photography</div>
              </div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>cmnd.services</div>
                <div className="text-grey">Photo Assistant</div>
              </div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>Pol Carrizo</div>
                <div className="text-grey">Knob 3D Print</div>
              </div>
              <div className="font-saansMono mb-4 text-xs xl:text-sm 2xl:text-md">
                <div>VZTec</div>
                <div className="text-grey">Programming Assistance</div>
              </div>
              <div className="font-saansMono text-xs xl:text-sm 2xl:text-md">
                <div>Nicolás Mata</div>
                <div className="text-grey">Web Development</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}