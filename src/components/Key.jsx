import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";
import { FaBackspace } from "react-icons/fa";

function Key({ keyValue, colour, isLarge, used }) {
  const { handleKeyUp, gameComplete } = useContext(AppContext);
  
  const handleClick = (e) => {
    if (gameComplete) return;
    const key = e.currentTarget.dataset.key;
    if (key === "DEL") {
      handleKeyUp({ key: "Backspace" });
    } else if (key === "ENTER") {
      handleKeyUp({ key: "Enter" });
    } else {
      handleKeyUp({ key });
    }
  };

  return (
    <div 
      className={`w-9 h-12 md:w-24 md:h-24 m-0.5 md:m-1.5 rounded grid place-items-center text-sm md:text-2xl bg-red-400 text-white font-sans cursor-pointer ${colour}`}
      id={isLarge ? "large" : used && "disabled"} 
      data-key={keyValue}
      onClick={handleClick}>
      {keyValue === "DEL" ? <FaBackspace /> : keyValue}
    </div>
  );
}

export default Key;
