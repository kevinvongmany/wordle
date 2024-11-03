import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";

import AppContext from "./AppContext";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { createBoard, generateWordSet } from "./Words";

import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";

import useWordle from "./hooks/useWordle";

function App() {
  
  let targetWord = "CLOUD";
  targetWord = targetWord.toUpperCase();

  const {turn, currentGuess, guesses, isCorrect, maxTurns, usedKeys, handleKeyUp} = useWordle(targetWord);
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isCorrect) {
      setTimeout(() => setShowModal(true), 500);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn >= maxTurns) {
      setTimeout(() => setShowModal(true), 500);
      window.removeEventListener("keyup", handleKeyUp
      )};

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp, isCorrect]);

  return (
    <div className="flex flex-col bg-gray-900 text-white w-full">
      <nav className="fixed top-0 flex p-3 bg-gray-800 w-full text-center justify-center items-center border-b">
        <h1 className="text-center text-3xl font-bold">Kevdle</h1>
      </nav>
      <div className="min-h-screen px-3 py-12">
        <div className="flex justify-center text-xl my-8">
          <a href="https://www.nytimes.com/2022/02/10/crosswords/best-wordle-tips.html" className="text-underline text-blue-400 font-bold">How to play</a>
        </div>
        <AppContext.Provider
          value={{ 
            currentGuess,
            guesses,
            turn,
            isCorrect,
            maxTurns,
            targetWord,
            usedKeys,
            handleKeyUp,
            setShowModal,
          }}
        >
          <div className="flex flex-col items-center mb-4 pb-">
            <Board />
            <Keyboard />
            {showModal && <GameOver />}

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
