import React from "react";
import redwan from "@/assets/images/redwan.jpg";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className="py-32">
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
        <h1>Building Exceptional User Experience</h1>
        <p>
          I specialize in transforming designs into functional, high-performing
          web applications. Lets discuss you next Project.
        </p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowDown />
          </button>
          <button>
            <span>👋</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
