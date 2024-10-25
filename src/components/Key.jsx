import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";

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
    className="key" 
    id={isLarge ? "large" : used && "disabled"} 
    onClick={selectletter}>
      {keyValue}
    </div>
  );
}

export default Key;
