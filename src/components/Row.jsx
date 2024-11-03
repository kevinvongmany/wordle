import { useContext } from "react";
import AppContext from "../AppContext";
import Letter from "./Letter";


const Row = ({ guess, currentGuess }) => {
  const { targetWord } = useContext(AppContext);
  if (guess) {
    return (
      <div className='flex text-center justify-center place-items-center flex-row w-full md:w-7/12'>
        {guess.map((letter, i) => (
          <Letter key={i} letter={letter.key} colour={letter.colour} />
        ))}
      </div>

    )
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className='flex text-center justify-center place-items-center flex-row w-full md:w-7/12'>
        {letters.map((letter, i) => (
          <Letter key={i} letter={letter} />
        ))}
        {[...Array(targetWord.length - letters.length)].map((_, i) => (
          <Letter key={i + letters.length} letter='' />
        ))}
      </div>
    );
  }

  return (
    <div className='flex text-center justify-center place-items-center flex-row w-full md:w-7/12'>
      {targetWord.split("").map((letter, i) => (
        <Letter key={i} letter={letter.key} />
      ))}
    </div>
  );
};

export default Row;