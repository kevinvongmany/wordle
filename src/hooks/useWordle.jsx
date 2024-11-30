import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { generateWordSet } from "../Words";

const useWordle = (solution, newGame, setNewGame) => {
  if (newGame) {
    console.log("New word detected, clearing board state");
  }
  const clearLocalStorage = () => {
    localStorage.removeItem("turn");
    localStorage.removeItem("guesses");
    localStorage.removeItem("history");
    localStorage.removeItem("usedKeys");
    localStorage.removeItem("gameComplete");
  };

  if (newGame) {
    clearLocalStorage();
  } 

  const [turn, setTurn] = useState(() => {
    const savedTurn = localStorage.getItem("turn");
    return savedTurn && !newGame ? JSON.parse(savedTurn) : 0;
  });
  const [maxTurns, setMaxTurns] = useState(solution.length < 6 ? 6 : solution.length + 1);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState(() => {
    const savedGuesses = localStorage.getItem("guesses");
    return savedGuesses ? JSON.parse(savedGuesses) : [...Array(maxTurns)];
  });
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("history");
    return savedHistory && !newGame ? JSON.parse(savedHistory) : [];
  });
  const [isCorrect, setIsCorrect] = useState(() => {
    const savedIsCorrect = localStorage.getItem("isCorrect");
    return savedIsCorrect && !newGame ? JSON.parse(savedIsCorrect) : false;
  });
  const [usedKeys, setUsedKeys] = useState(() => {
    const savedUsedKeys = localStorage.getItem("usedKeys");
    return savedUsedKeys && !newGame ? JSON.parse(savedUsedKeys) : {};
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [hardMode, setHardMode] = useState(() => {
    const savedHardMode = localStorage.getItem("hardMode");
    return savedHardMode && !newGame ? JSON.parse(savedHardMode) : false
  });

  useEffect(() => {
    const words = generateWordSet(solution.length);
    setWordSet(words);
  }, [solution.length]);

  useEffect(() => {
  }, [solution]);

  useEffect(() => {
    localStorage.setItem("isCorrect", JSON.stringify(isCorrect));
  }, [isCorrect]);

  useEffect(() => {
    localStorage.setItem("turn", JSON.stringify(turn));
  }, [turn]);

  useEffect(() => {
    localStorage.setItem("guesses", JSON.stringify(guesses));
  }, [guesses]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem("usedKeys", JSON.stringify(usedKeys));
  }, [usedKeys]);

  const formatGuess = (hardMode) => {
    let solutionArray = [...solution];
    let guessArray = [...currentGuess].map((letter, i) => {
      return { key: letter.toLocaleUpperCase(), colour: "grey", hardMode };
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
    console.log(hardMode);
    if (currentGuess.toUpperCase() === solution) {
      setIsCorrect(true);
    }
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

  const validateHardMode = (guess) => {
    const requiredLetters = Object.keys(usedKeys).filter((key) => usedKeys[key] !== "grey");
    console.log("Required letters are: ", requiredLetters);
    const guessArray = [...guess];
    const isGuessValid = requiredLetters.every((letter) => {
      return guessArray.includes(letter);
    });
    return !isGuessValid;
  }
  
  const handleKeyUp = ({ key }) => {
    const hardMode = localStorage.getItem("hardMode") == "true" ? true : false;
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
      console.log(hardMode);
      console.log(typeof hardMode);
      if (hardMode && validateHardMode(currentGuess)) {
        toast.warning("Invalid Cammie Mode guess");
        return;
      }
      localStorage.setItem("solution", solution);
      setNewGame(false);
      const guess = formatGuess(hardMode);
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

  return { turn, currentGuess, guesses, isCorrect, maxTurns, usedKeys, handleKeyUp, history, setHardMode, hardMode };
};

export default useWordle;
