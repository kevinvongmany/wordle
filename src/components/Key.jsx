import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";
import { FaBackspace } from "react-icons/fa";
function Key({ keyValue, isLarge, used }) {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);
  const selectletter = () => {
    if (keyValue === "DEL") {
      onDelete();
    } else if (keyValue === "ENTER") {
      onEnter();
    } else {
      onSelectLetter(keyValue);
    }
  };
  return (
    <div 
      className={`w-9 h-12 m:w-12 m:h-16 m-0.5 md:m-1.5 rounded grid place-items-center text-sm md:text-lg bg-gray-500 text-white font-sans cursor-pointer ${isLarge ? "w-14" : used && "bg-gray-700"}`}
      onClick={selectletter}>
     { keyValue === "DEL" ? (
        <FaBackspace />
      ) : (
        keyValue
      )}
    </div>
  );
}

export default Key;
