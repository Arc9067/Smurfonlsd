import React from "react";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";

function Mics() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h1 className="text-sky-500 text-6xl font-normal font-JackCon max-w-[500px]">
          Online Cryptocurrency Fighting Platform
        </h1>

        <div className="w-full grid grid-cols-1 mt-16 lg:grid-cols-3 justify-cente gap-x-6">
          <div className="px-8 py-10 bg-neutral-800 rounded-3xl border-4 border-sky-500 flex-col justify-center items-center gap-2.5 inline-flex">
            <p className="self-stretch text-zinc-300 font-medium font-['Jost'] leading-loose tracking-wide">
              If you want to do something then do it, if someone asks for a hand
              out you can tell them that Pepe never paid for a thing. The
              project is fully decentralized and community based. them that Pepe
              never paid for a thing. The project is fully decentralized and
              community based.{" "}
            </p>
          </div>
          <img src={person1} alt="" />
          <div className="px-8 py-10 bg-neutral-800 rounded-3xl border-4 border-sky-500 flex-col justify-center items-center gap-2.5 inline-flex">
            <p className="self-stretch text-zinc-300 font-medium font-['Jost'] leading-loose tracking-wide">
              If you want to do something then do it, if someone asks for a hand
              out you can tell them that Pepe never paid for a thing. The
              project is fully decentralized and community based. them that Pepe
              never paid for a thing. The project is fully decentralized and
              community based.{" "}
            </p>
          </div>
          <img src={person2} alt="" />
          <div className="px-8 lg:relative -top-20 py-10 bg-neutral-800 rounded-3xl border-4 border-sky-500 flex-col justify-center items-center gap-2.5 inline-flex">
            <p className="self-stretch text-zinc-300 font-medium font-['Jost'] leading-loose tracking-wide">
              If you want to do something then do it, if someone asks for a hand
              out you can tell them that Pepe never paid for a thing. The
              project is fully decentralized and community based. them that Pepe
              never paid for a thing. The project is fully decentralized and
              community based.{" "}
            </p>
          </div>
          <img src={person3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Mics;
