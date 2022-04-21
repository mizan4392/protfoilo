import React from "react";
import Github from "../../img/github.png";
import InstaGram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import VactorOne from "../../img/Vector1.png";
import Vactor2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoj1 from "../../img/glassesimoji.png";

export default function Intro() {
  return (
    <div className="flex flex-1 flex-row">
      <div className="flex flex-1  flex-col relative">
        <div className="flex flex-col">
          <span className="text-black bold font-bold text-4xl">Hi! I'm</span>
          <span className="text-orange-400 font-bold text-4xl">Mizan</span>
          <span className="text-gray-600 font-extralight	">
            A fullstack web developer
          </span>
        </div>
        <button className="btn w-[6rem] text-center">HireMe</button>
        <div className="mt-10 flex gap-4">
          <img
            className="w-[55px] h-[55px] hover:cursor-pointer "
            src={Github}
            alt="github"
          />
          <img
            className="w-[55px] h-[55px] hover:cursor-pointer"
            src={InstaGram}
            alt="InstaGram"
          />
          <img
            className="w-[55px] h-[55px] hover:cursor-pointer"
            src={LinkedIn}
            alt="LinkedIn"
          />
        </div>
      </div>
      <div className="flex-1 relative">
        <img
          className="absolute z-1 scale-[.69] left-[-15%] top-[-9%]"
          src={VactorOne}
          alt=""
        />
        <img className="absolute z-1 left-[2rem] " src={Vactor2} alt="" />
        <img className="absolute z-1 left-[28%] scale-[1.2]" src={Boy} alt="" />
      </div>
    </div>
  );
}
