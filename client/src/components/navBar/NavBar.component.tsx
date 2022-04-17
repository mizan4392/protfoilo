import React from "react";

export default function NavBar() {
  return (
    <div className="h-10 flex justify-between">
      <div className="flex-1 items-center flex gap-8">
        <div className="font-bold text-2xl">Mizan</div>
        <span>toggle</span>
      </div>
      <div className="flex flex-1 items-center justify-center font-normal">
        <div>
          <ul className="flex gap-8 mr-16 hover:cursor-pointer">
            <li className="hover:text-orange-400">Home</li>
            <li className="hover:text-orange-400">Services</li>
            <li className="hover:text-orange-400">Experiences</li>
            <li className="hover:text-orange-400">Portfolio</li>
            <li className="hover:text-orange-400">Portfolio</li>
          </ul>
        </div>
        <button className="flex-2 rounded-full border-0 text-white text-sm p-2 bg-orange-400 shadow-md hover:bg-white hover:cursor-pointer hover:text-orange-400 hover:ring-2 hover:ring-orange-400">
          contact us
        </button>
      </div>
    </div>
  );
}
