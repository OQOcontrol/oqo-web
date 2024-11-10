// import Image from "next/image";
import Image from "next/image";
import t from "../locales/en.json";

export default function Home() {
  return (
    <div className="text-black p-2">
      <main className="">
        <section id="billboard" className="md:h-screen mb-24 md:mb-36 relative">
          <div className="hidden md:grid grid-cols-2 absolute -rotate-90 top-full origin-top-left	" style={{width: "100vh", left: "95%"}}>
            <div>{t['The OQO (o-cu-o) is a device with wireless sensors that allows for real-time modulation of sounds, lights, and visuals.']}</div>
            <div>{t['A project by Andrés Berastegui, musician and producer, blending advanced technology with music production.']}</div>
          </div>
          <div className="block md:flex justify-center items-center h-full">
            <svg className="w-full h-auto" width="474" height="474" viewBox="0 0 474 474" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="237" cy="237" r="237" fill="black"/>
            </svg>
            <svg className="w-full h-auto" width="474" height="475" viewBox="0 0 474 475" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M237 474.333C367.891 474.333 474 368.225 474 237.333C474 106.442 367.891 0.333252 237 0.333252C106.109 0.333252 0 106.442 0 237.333C0 368.225 106.109 474.333 237 474.333ZM232.496 238.043L401.395 406.941L405.638 402.699L236.739 233.8L232.496 238.043Z" fill="black"/>
            </svg>
            <svg className="w-full h-auto" width="474" height="474" viewBox="0 0 474 474" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="237" cy="237" r="237" fill="black"/>
            </svg>
          </div>
          <h1 className="block md:absolute text-2xl md:text-4xl md:w-8/12 top-0">{t['The OQO (o-cu-o) is a device with wireless sensors that allows for real-time modulation of sounds, lights, and visuals.']}</h1>
        </section>
        {/* <section id="video" className="mb-24 md:mb-36">
          <video className="w-full md:w-10/12" controls preload="none">
            <source src="/oqo-video.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </section> */}
        <section id="about" className="mb-24 md:mb-36">
          <div className="md:grid grid-cols-2">
            <div>
              <h2 className="mb-2 text-sm">{t['About']}</h2>
            </div>
            <div>
              <p>{t['OQO is not just a product but an ever-evolving artistic project. Its purpose is to break the traditional boundaries of audiovisual control, exploring new forms of interaction between sound, light, and movement. Through the use of wireless sensors and technological innovation, OQO offers an experimental and creative approach that opens the door to immersive sensory experiences.']}</p>
              <p>{t['It’s not just about technology, but about how it can redefine the connection between artists and audiences, creating an audiovisual experience that challenges conventional approaches to live performances.']}</p>
            </div>
          </div>
        </section>
        <section id="photos" className="mb-24 md:mb-36">
          <div className="md:grid grid-cols-2 gap-2">
              <Image className="w-full" src="/photo1.jpg" alt="O" width={474} height={474} />
              <Image className="w-full" src="/photo2.jpg" alt="Q" width={474} height={475} />
          </div>
        </section>
        <section id="project" className="mb-24 md:mb-36">
        <h2 className="mb-24 md:mb-36 text-2xl md:text-4xl">{t['Leveraging the advances in new technologies and the development of more efficient sensors, OQO introduces a new approach to audiovisual control.']}</h2>
          <div className="md:grid grid-cols-2">
            <h2 className="mb-2 text-sm">{t['The Project']}</h2>
            <div className="mb-24 md:mb-36">
              <p>{t['Developed throughout 2023, this innovative design incorporates sensors held by magnets in a vertical and transparent structure.']}</p>
              <p>{t['Each sensor can be programmed to control sound effects, lights, or visuals, and is integrated into a knob with a visual and illuminated position indicator for easier handling. Assigned parameters can be adjusted by turning the knob on its axis or moving it in the air, allowing for direct interaction with the performer’s body.']}</p>
              <p>{t['A distinctive feature of OQO is the ability to connect the knobs to each other using magnets, opening up new possibilities for live control. This allows multiple parameters to be adjusted simultaneously with each hand, offering a novel and creative form of interaction.']}</p>
              <p>{t['The vertical design of the module promotes a more ergonomic posture, and being completely transparent, it creates no visual barrier between the performer and the audience, allowing for a fluid and direct connection during the performance. All information generated by the knobs is transmitted wirelessly to a computer, synthesizer, or other MIDI-compatible devices.']}</p>
              <p className="text-sm">{t['** All these innovations have been registered with the Spanish Patent and Trademark Office (OEPM) as of January 2024.']}</p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-24 md:mb-36">
            <Image className="w-8/12" src="/oqo.jpg" alt="Q" width={474} height={475} />
          </div>
          <h2 className="mb-24 md:mb-36 text-2xl md:text-4xl">{t['It’s not just about technology, but about how it can redefine the connection between artists and audiences, creating an audiovisual experience that challenges conventional approaches to live performances.']}</h2>  
        </section>
        <section id="andres">
        <div className="md:grid grid-cols-2">
            <div>
              <h2>{t['About Andrés']}</h2>
            </div>
            <div>
              <p>{t['Born in Argentina and living in Barcelona since 2018. Throughout his career, he has explored the fusion of sounds and technology, using sensors and experimental tools to develop innovative concepts. His focus is always on discovering new ways of sound execution and modulation.']}</p>
            </div>
          </div>
        </section>
        <footer>
        </footer>
      </main>
    </div>
  );
}
