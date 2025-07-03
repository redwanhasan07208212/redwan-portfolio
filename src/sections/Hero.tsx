import React from "react";
import redwan from "@/assets/images/redwan.jpg";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import grainImg from "@/assets/images/grain.jpg";
import { IoStarSharp } from "react-icons/io5";
import HeroOrbit from "@/components/hero-orbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 flex flex-col items-center justify-center overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImg.src})` }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} rotation={-120}>
        <IoStarSharp className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={-40}>
        <IoStarSharp className="size-12 text-emerald-300" />
      </HeroOrbit>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={redwan}
            alt="redwan hasan"
            className="size-[100px] rounded-lg"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new Projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experience
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Lets discuss you next Project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2  border border-white/15 rounded-xl px-6 h-12">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
