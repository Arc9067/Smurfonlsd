import React from "react";
import logo from "../assets/logo.webp";

function About() {
  return (
    <section className="py-20 w-full">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-[#EF1] relative top-28 text-8xl font-normal font-JackCon tracking-widest">
          ABOUT
        </h1>

        <img src={logo} alt="" className="relative top-32" />
        <div className="w-full  px-4 pt-11 pb-10 bg-sky-400 rounded-3xl border-4 relative z-10 border-white justify-center items-center inline-flex">
          <div className=" text-neutral-800 text-xl font-medium  leading-loose tracking-wide">
            The project is fully decentralized and community based. We just do
            our best to keep everyone together as an army. If you want to do
            something then do it, if someone asks for a hand out you can tell
            them that Pepe never paid for a thing. The project is fully
            decentralized and community based. <br />
            <br />
            If you want to do something then do it, if someone asks for a hand
            out you can tell them that Pepe never paid for a thing. The project
            is fully decentralized and community based.{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
