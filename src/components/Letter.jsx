import { useContext, useEffect } from "react";
import AppContext from "../AppContext";

const Letter = ({letter, colour=""}) => {

  return (
    <div
      className={`p-1 md:p-2 border border-grey-500 rounded-lg text-center m-1 w-12 md:w-28 h-12 md:h-16 text-lg md:text-3xl font-bold text-white font-sans ${colour}`}
    >
      {letter}
    </div>
  );
};

export default Letter;
