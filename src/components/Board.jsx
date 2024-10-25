import React from 'react'
import Letter from './Letter'
import { useContext } from "react";
import AppContext from "../AppContext";
function Board() {
  const { board } = useContext(AppContext);
  return (
    <div className='board'>
      {board.map((row, i) => (
        <div key={i} className='row'>
          {row.map((letter, j) => (
            <Letter key={j} letterPosition={j} attemptValue={i} />
          ))}
        </div>
      ))}      
    </div>
  )
}

export default Board
