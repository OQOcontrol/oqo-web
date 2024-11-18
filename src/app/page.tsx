import Image from "next/image";
import t from "../locales/en.json";

import localFont from 'next/font/local'
import Video from "../components/video";
import Project from "@/components/project";

const saansRegular = localFont({ src: '/fonts/SaansRegular.otf', variable: '--font-saans', });
const saansMono = localFont({ src: 'fonts/SaansMonoRegular.otf', variable: '--font-saans-mono' });
const ABC = localFont({ src: 'fonts/ABCMarist-Book.otf', variable: '--font-abc' });

export default function Home() {
  return (
    <div className={`text-black p-2 ${saansRegular.variable} ${saansMono.variable} ${ABC.variable} font-saans`}>
      <main className="">
        <section id="billboard" className="md:h-screen mb-24 md:mb-36 relative">
          <div className="hidden md:grid grid-cols-2 absolute -rotate-90 top-full origin-top-left	font-saansMono text-grey" style={{width: "100vh", left: "95%"}}>
            <div className="text-xs leading-tight">
              <span>{t['The']}</span>
              <span className="font-saans">{t[' OQO ']}</span>
              <span>{t['(o-cu-o) is a device with wireless sensors that allows for real-time modulation of sounds, lights, and visuals.']}</span>
            </div>
            <div className="text-xs">{t['A project by Andrés Berastegui, musician and producer, blending advanced technology with music production.']}</div>
          </div>
          <div className="block md:flex justify-center items-center h-full mb-10 md:mb-0">
            <svg className="w-7/12 md:w-full mx-auto h-auto" width="474" height="474" viewBox="0 0 474 474" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="237" cy="237" r="237" fill="black"/>
            </svg>
            <svg className="w-7/12 md:w-full mx-auto h-auto" width="474" height="475" viewBox="0 0 474 475" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M237 474.333C367.891 474.333 474 368.225 474 237.333C474 106.442 367.891 0.333252 237 0.333252C106.109 0.333252 0 106.442 0 237.333C0 368.225 106.109 474.333 237 474.333ZM232.496 238.043L401.395 406.941L405.638 402.699L236.739 233.8L232.496 238.043Z" fill="black"/>
            </svg>
            <svg className="w-7/12 md:w-full mx-auto h-auto" width="474" height="474" viewBox="0 0 474 474" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="237" cy="237" r="237" fill="black"/>
            </svg>
          </div>
          <h1 className="block md:absolute text-2xl md:text-4xl md:w-8/12 top-0 font-abc leading-tight">
            <span>{t['The']}</span>
            <span className="font-saans">{t[' OQO ']}</span>
            <span>{t['(o-cu-o) is a device with wireless sensors that allows for real-time modulation of sounds, lights, and visuals.']}</span>
          </h1>
        </section>
        <Video />
        <section id="about" className="mb-24 md:mb-36">
          <div className="md:grid grid-cols-2">
            <div>
              <h2 className="mb-4 text-xs font-saansMono">{t['About']}</h2>
            </div>
            <div>
              <p className="mb-4 text-l md:text-xl leading-tight">{t['OQO is not just a product but an ever-evolving artistic project. Its purpose is to break the traditional boundaries of audiovisual control, exploring new forms of interaction between sound, light, and movement. Through the use of wireless sensors and technological innovation, OQO offers an experimental and creative approach that opens the door to immersive sensory experiences.']}</p>
              <p className="mb-4 text-l md:text-xl leading-tight">{t['It’s not just about technology, but about how it can redefine the connection between artists and audiences, creating an audiovisual experience that challenges conventional approaches to live performances.']}</p>
            </div>
          </div>
        </section>
        <section id="photos" className="mb-24 md:mb-36">
          <div className="md:grid grid-cols-2 gap-2">
              <Image className="w-full" src="/photo1.jpg" alt="O" width={474} height={474} />
              <Image className="w-full" src="/photo2.jpg" alt="Q" width={474} height={475} />
          </div>
        </section>
        <Project t={t} />
        <section id="andres">
        <div className="md:grid grid-cols-2 mb-24 md:mb-36">
            <div>
              <h2 className="mb-4 text-xs font-saansMono">{t['About Andrés']}</h2>
            </div>
            <div>
              <p className="mb-4 text-l md:text-xl leading-tight">{t['Born in Argentina and living in Barcelona since 2018. Throughout his career, he has explored the fusion of sounds and technology, using sensors and experimental tools to develop innovative concepts. His focus is always on discovering new ways of sound execution and modulation.']}</p>
            </div>
          </div>
        </section>
        <footer>
          <div className="grid grid-cols-3 w-full">
            <div className="text-4xl mb-10 w-full">(o-cu-o)</div>
            <div className="flex flex-col justify-between h-full mb-10 md:mb-0">
              <div className="font-saansMono mb-2 text-xs">A project by Andrés Berastegui</div>
              <div>
                <div className="font-saansMono text-xs"><a href="mailto:andres@oqo.com">andres@oqo.com</a></div>
                <div className="font-saansMono text-xs"><a href="tel:+34 666000000">+34 666 00 00 00</a></div>
                <div className="font-saansMono text-xs"><a href="https://www.instagram.com/oqocontrol/">@oqocontrol</a></div>
              </div>
            </div>
            <div className="mb-0">
              <div className="font-saansMono mb-2 text-xs">This project is a collective effort made possible by the creativity and dedication of our team</div>
              <div className="font-saansMono mb-2 text-xs">
                <div>Phantasia Services</div>
                <div className="text-grey">Creative Direction & Design</div>
              </div>
              <div className="font-saansMono mb-2 text-xs">
                <div>Dani Martinez</div>
                <div className="text-grey">Film Direction & DOP</div>
              </div>
              <div className="font-saansMono mb-2 text-xs">
                <div>Jana Travé</div>
                <div className="text-grey">Dancer</div>
              </div>
              <div className="font-saansMono mb-2 text-xs">
                <div>Sara Lee</div>
                <div className="text-grey">Skater</div>
              </div>
              <div className="font-saansMono mb-2 text-xs">
                <div>Andrés Berastegui</div>
                <div className="text-grey">Concept & Sound Design</div>
              </div>
              <div className="font-saansMono mb-2 text-xs">
                <div>Levin Mendez</div>
                <div className="text-grey">VFX</div>
              </div>
              <div className="font-saansMono mb-2 text-xs">
                <div>Anna Gudayol</div>
                <div className="text-grey">Photography</div>
              </div>
              <div className="font-saansMono mb-2 text-xs">
                <div>cmnd.services</div>
                <div className="text-grey">Photo Assistant</div>
              </div>
              <div className="font-saansMono mb-2 text-xs">
                <div>Pol Carrizo</div>
                <div className="text-grey">Knob 3D Print</div>
              </div>
              <div className="font-saansMono mb-2 text-xs">
                <div>VZTec</div>
                <div className="text-grey">Programming Assistance</div>
              </div>
              <div className="font-saansMono text-xs">
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