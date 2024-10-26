import React from 'react'
import Letter from './Letter'
import { useContext } from "react";
import AppContext from "../AppContext";
function Board() {
  const { board } = useContext(AppContext);
  return (
    <div className='p-2 justify-center items-center flex flex-col'>
      {board.map((row, i) => (
        <div key={i} className='flex justify-center place-items-center flex-row w-full md:w-7/12'>
          {row.map((letter, j) => (
            <Letter key={j} letterPosition={j} attemptValue={i} />
          ))}
        </div>
      ))}      
    </div>
  );
}

export default Board
