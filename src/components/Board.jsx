import React from 'react'
import Letter from './Letter'
import { useContext } from "react";
import AppContext from "../AppContext";
function Board() {
  const { board } = useContext(AppContext);
  return (
    <div className='justify-center items-center p-2 flex flex-col'>
      {board.map((row, i) => (
        <div key={i} className='flex justify-center place-items-center flex-row flex-1 w-1/2 md:w-7/12'>
          {row.map((letter, j) => (
            <Letter key={j} letterPosition={j} attemptValue={i} />
          ))}
        </div>
      ))}      
    </div>
  );
}

export default Board
