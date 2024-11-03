import React from 'react'
import Row from './Row'
import { useContext } from "react";
import AppContext from "../AppContext";


function Board() {
  const { currentGuess, guesses, turn } = useContext(AppContext);
  return (
    <div className='p-2 justify-center items-center flex flex-col'>
      {guesses.map((guess, i) => {
        if (i === turn) {
          return <Row key={i} row={i} currentGuess={currentGuess}/>
        } else {
          return <Row key={i} row={i} guess={guess}/>
        }
  })}
    </div>
  );
}

export default Board
