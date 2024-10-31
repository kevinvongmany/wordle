import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";

import AppContext from "./AppContext";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createBoard, generateWordSet } from "./Words";

import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";
function App() {
  
  const targetWord = "BRAIN";
  const letterCol = targetWord.length;
  const wordRows = letterCol < 6 ? 6 : letterCol + 1;

  const [board, setBoard] = useState(createBoard(wordRows, letterCol));
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [usedLetters, setUsedLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  
  const [solutionArray, setSolutionArray] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);

  useEffect(() => {
    const words = generateWordSet(targetWord.length);
    setWordSet(words);
    
    setSolutionArray(Array.from(targetWord).map((letter) => letter.toUpperCase()));
  }, []);

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition === letterCol) return;
    board[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
    setBoard(board);
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    board[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
    setBoard(board);
  };

  const onEnter = () => {
    if (currentAttempt.letterPosition !== letterCol) {
      toast.warning(`Please enter ${letterCol} letters`);
      return;
    };

    let currWord = "";
    for (let i = 0; i < letterCol; i++) {
      currWord += board[currentAttempt.attempt][i];
    }
    if (currWord === targetWord) {
      setGameOver({gameOver: true, guessedWord: true});
    }
    if (wordSet.has(currWord.toLowerCase()) && !guessedWords.includes(currWord)) {
      setGuessedWords([...guessedWords, currWord]);
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      toast.warning(guessedWords.includes(currWord) ? "Word already guessed." : "Word not found in dictionary");
      return;
    }

    if (currentAttempt.attempt === wordRows - 1 && currWord !== targetWord) { // for some reason the last guess always counts as a failure, win or lose
      setGameOver({gameOver: true, guessedWord: false});
    }


  };
  return (
    <div className="flex flex-col bg-gray-900 text-white w-full">
      <nav className="fixed top-0 flex p-3 bg-gray-800 w-full text-center justify-center items-center border-b">
        <h1 className="text-center text-3xl font-bold">Wordlez</h1>
      </nav>
      <div className="min-h-screen px-3 py-12">
        <div className="mt-4 flex justify-center">
          {/* <img src={BogNoted} alt="Bog Noted" className="flex items-center mb-5 w-12 md:w-24" /> */}
        </div>
        <AppContext.Provider
          value={{ 
            board, 
            setBoard, 
            currentAttempt, 
            setCurrentAttempt,
            onSelectLetter,
            onDelete,
            onEnter,
            usedLetters,
            setUsedLetters,
            solutionArray,
            setSolutionArray,
            targetWord,
            gameOver
          }}
        >
          <div className="flex flex-col items-center mb-4 pb-">
            <Board />
            {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          </div>
        </AppContext.Provider>
      </div>
      <ToastContainer 
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </div>
  );
}

export default App;
