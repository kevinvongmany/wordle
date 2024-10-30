import { useContext, useEffect, memo } from "react";
import AppContext from "../AppContext";

const Letter = memo(({letterPosition, attemptValue }) => {
  const { board, targetWord, gameOver, currentAttempt, usedLetters, setUsedLetters, solutionArray, setSolutionArray } =
    useContext(AppContext);
  const letter = board[attemptValue][letterPosition];
  const correct = targetWord[letterPosition] === letter;
  
  useEffect(() => {
    if (correct) {
      solutionArray[letterPosition] = null;
      setSolutionArray([...solutionArray]);
    }
    if (letter) {
      setUsedLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt, gameOver]);
  const almost = solutionArray.includes(letter);

  const letterState =
  currentAttempt.attempt > attemptValue &&
  (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div
      className={`p-1 md:p-2 border border-grey-500 rounded-lg text-center m-1 w-12 md:w-28 h-12 md:h-16 text-lg md:text-3xl font-bold text-white font-sans ${letterState}`}
    >
      {letter}
    </div>
  );
});

export default Letter;
