import React from "react";
import { useContext, useState } from "react";
import AppContext from "../AppContext";
import { IoInformationCircleSharp } from "react-icons/io5";
import HardModeInfo from "./HardModeInfo";

const Header = ({ title }) => {
  const { hardMode, setHardMode } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleHardMode = () => {
    document.activeElement.blur();
    setHardMode(!hardMode);
    localStorage.setItem("hardMode", !hardMode);
  };

  const handleHover = (state) => {
    setIsHovered(state);
  };

  return (
    <nav className="fixed top-0 p-3 bg-blue-800 w-full text-center items-center border-b justify-between">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <h1 className="text-center text-3xl font-bold">{title} 🕎</h1>
        <div 
            className="flex flex-row items-center"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            >
        {isHovered && <HardModeInfo />}
          <button
            onClick={handleToggleHardMode}
            className={
                hardMode
                ? "bg-red-900 text-white p-1 md:p-2 rounded"
                : "bg-gray-600 text-white p-1 md:p-2 rounded opacity-40"
            }
            >
            Cammie Mode
          </button>
          <IoInformationCircleSharp
            className="text-white text-2xl md:text-3xl ml-2"
            onClick={() => handleHover(!isHovered)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
