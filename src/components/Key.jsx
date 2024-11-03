import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";
import { FaBackspace } from "react-icons/fa";

function Key({ keyValue, colour, isLarge, used }) {
  const { handleKeyUp } = useContext(AppContext);
  console.log(keyValue);
  // console.log(handleKeyUp);

  return (
    <div 
      className={`w-9 h-12 md:w-24 md:h-24 m-0.5 md:m-1.5 rounded grid place-items-center text-sm md:text-2xl bg-gray-600 text-white font-sans cursor-pointer ${colour}`}
      id={isLarge ? "large" : used && "disabled"} 
      onClick={() => handleKeyUp(keyValue)}>
      {keyValue === "DEL" ? <FaBackspace /> : keyValue}
    </div>
  );
}

export default Key;
