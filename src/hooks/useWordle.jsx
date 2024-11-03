import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { generateWordSet } from "../Words";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [maxTurns, setMaxTurns] = useState(solution.length < 6 ? 6 : solution.length + 1);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(maxTurns)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});
  const [wordSet, setWordSet] = useState(new Set());

  useEffect(() => {
    const words = generateWordSet(solution.length);
    setWordSet(words);
  }, []);

  const formatGuess = () => {
    let solutionArray = [...solution];
    let guessArray = [...currentGuess].map((letter, i) => {
      return { key: letter.toLocaleUpperCase(), colour: "grey" };
    });

    guessArray.forEach((letter, i) => {
      if (solutionArray.includes(letter.key)) {
        if (solutionArray[i] === letter.key) {
          letter.colour = "green";
          solutionArray[i] = "";
        }
      }
    });

    guessArray.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.colour !== "green") {
        guessArray[i].colour = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = "";
      }
    });

    return guessArray;
  };

  const addNewGuess = (guessData) => {
    if (currentGuess.toUpperCase() === solution) {
      setIsCorrect(true);
    }
    console.log(isCorrect);
    setGuesses((prev) => {
      const newGuesses = [...prev];
      newGuesses[turn] = guessData;
      return newGuesses;
    });

    setHistory((prev) => [...prev, currentGuess.toUpperCase()]);
    setTurn((prev) => prev + 1);
    setUsedKeys((prev) => {
      const newKeys = { ...prev };
      guessData.forEach((letter) => {
        const currentColour = newKeys[letter.key]
        if (letter.colour === "green") {
          newKeys[letter.key] = "green";
          return;
        }
        if (letter.colour === "yellow" && currentColour !== "green") {
          newKeys[letter.key] = "yellow";
          return;
        }
        if (letter.colour === "grey" && currentColour !== "green" && currentColour !== "yellow") {
          newKeys[letter.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");

  };

  const handleKeyUp = ({ key }) => {
    console.log(key);
    if (key === "Enter") {
      if (turn > maxTurns) {
        return;
      }
      if (history.includes(currentGuess)) {
        toast.warning("You already guessed that word");
        return;
      }
      if (currentGuess.length !== solution.length) {
        toast.warning(`Your guess must be ${solution.length} characters long`);
        return;
      }

      if (!wordSet.has(currentGuess.toLowerCase())) {
        toast.warning("That is not a valid word");
        return;
      }
      const guess = formatGuess();
      addNewGuess(guess);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-Za-z0-9]$/.test(key)) {
      if (currentGuess.length < solution.length) {
        setCurrentGuess((prev) => prev + key.toUpperCase());
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, maxTurns, usedKeys, handleKeyUp };
};

export default useWordle;
