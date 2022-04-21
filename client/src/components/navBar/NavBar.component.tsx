import React from "react";

export default function NavBar() {
  return (
    <div className="h-[30px] flex justify-between ">
      <div className="flex-1 items-center flex gap-8">
        <div className="font-bold text-2xl">Mizan</div>
        <span>toggle</span>
      </div>
      <div className="flex flex-1 items-center justify-between font-normal">
        <ul className="flex gap-8 mr-16 hover:cursor-pointer">
          <li className="hover:text-orange-400">Home</li>
          <li className="hover:text-orange-400">Services</li>
          <li className="hover:text-orange-400">Experiences</li>
          <li className="hover:text-orange-400">Portfolio</li>
          <li className="hover:text-orange-400">Portfolio</li>
        </ul>
        <button className="btn text-center ">contact us</button>
      </div>
    </div>
  );
}
