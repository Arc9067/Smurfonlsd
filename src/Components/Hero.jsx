import React from "react";
import logo from "../assets/logo.webp";

function Hero() {
  return (
    <section className="pt-32 w-full">
      <div className="container grid lg:grid-cols-2 justify-center items-center gap-16">
        <img src={logo} alt="" className="" />
        <h1 className="font-JackCon leading-[22px]">
          <span className="text-sky-500 text-7xl font-normal font-['Jack's Candlestick'] ">
            Mурф ЛСД, {" "}
          </span>{" "}
          <span className="text-white text-7xl font-normal font-['Jack's Candlestick']">
            Smurf on LSD
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
