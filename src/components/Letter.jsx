import { useContext, useEffect } from "react";
import AppContext from "../AppContext";

function Letter({ letterPosition, attemptValue }) {
  const { board, targetWord, currentAttempt, setUsedLetters } =
    useContext(AppContext);
  const letter = board[attemptValue][letterPosition];
  const correct = targetWord[letterPosition] === letter;
  const almost = !correct && letter !== "" && targetWord.includes(letter);
  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter && !correct && !almost) {
      setUsedLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div
      className="p-1 md:p-2 border border-grey-500 rounded-lg text-center m-1 w-12 md:w-28 h-12 md:h-16 text-lg md:text-3xl font-bold text-white font-sans"
      id={letterState}
    >
      {letter}
    </div>
  );
}

export default Letter;
