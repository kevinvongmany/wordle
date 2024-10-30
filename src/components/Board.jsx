import React from 'react'
import Row from './Row'
import { useContext } from "react";
import AppContext from "../AppContext";
function Board() {
  const { board } = useContext(AppContext);
  return (
    <div className='p-2 justify-center items-center flex flex-col'>
      {board.map((row, i) => (
        <Row key={i} row={row} rowIndex={i}/>
      ))}      
    </div>
  );
}

export default Board
