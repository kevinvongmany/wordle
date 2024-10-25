import { useContext, useEffect } from "react";
import AppContext from "../AppContext";

function Letter({ letterPosition, attemptValue }) {
  const { board, targetWord, currentAttempt, setUsedLetters } = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];
  const correct = targetWord[letterPosition] === letter;
  const almost = !correct && letter !== '' && targetWord.includes(letter);
  const letterState = currentAttempt.attempt > attemptValue && (correct ? "correct" : almost ? "almost" : "incorrect");
  
  useEffect(() => {
    if (letter && !correct && !almost) {
      setUsedLetters((prev) => [...prev, letter]);
    }

  }, [currentAttempt.attempt]);

  return <div className="letter" id={letterState}>{letter}</div>;
}

export default Letter;
