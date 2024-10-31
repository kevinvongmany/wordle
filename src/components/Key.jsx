import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";
import { FaBackspace } from "react-icons/fa";

function Key({ keyValue, isLarge, used }) {
  const { onSelectLetter, onDelete, onEnter, targetWord, solutionArray } = useContext(AppContext);
  const almost = solutionArray.includes(keyValue) && used;
  const correct = targetWord.includes(keyValue) && !almost && used;
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
    className={`w-9 h-12 md:w-24 md:h-24 m-0.5 md:m-1.5 rounded grid place-items-center text-sm md:text-2xl bg-orange-600 text-white font-sans cursor-pointer ${almost ? 'almost' : correct ? 'correct' : ''}`}
    id={isLarge ? "large" : used && "disabled"} 
    onClick={selectletter}>
      {keyValue === "DEL" ? <FaBackspace /> : keyValue}
    </div>
  );
}

export default Key;
