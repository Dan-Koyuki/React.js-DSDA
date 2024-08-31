import React from "react";
import { IoPerson } from "react-icons/io5";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 h-16 left-64 w-full bg-white shadow-lg px-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <img src="/logo.png" alt="logo" className="h-16" />
        </div>
        <div className="flex flex-row gap-2 items-center mr-8">
          <p>Profile</p>
          <IoPerson size={25}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
