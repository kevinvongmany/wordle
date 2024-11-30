import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";

import AppContext from "./AppContext";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { createBoard, generateWordSet } from "./Words";

import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";
import { FaRedo } from "react-icons/fa";

import useWordle from "./hooks/useWordle";

function App() {
  const [targetWord, setTargetWord] = useState("CITY");
  const solution = localStorage.getItem("solution");
  const [newGame, setNewGame] = useState(solution !== targetWord);
  const [gameComplete, setGameComplete] = useState(
    localStorage.getItem("gameComplete") || false
  );

  const {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    maxTurns,
    usedKeys,
    handleKeyUp,
  } = useWordle(targetWord, newGame, setNewGame);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isCorrect) {
      setTimeout(() => setShowModal(true), 500);
      window.removeEventListener("keyup", handleKeyUp);
      localStorage.setItem("gameComplete", true);
      setGameComplete(true);
    }
  }, [isCorrect]);

  useEffect(() => {
    if (turn >= maxTurns) {
      setTimeout(() => setShowModal(true), 500);
      window.removeEventListener("keyup", handleKeyUp);
      localStorage.setItem("gameComplete", true);
      setGameComplete(true);
    }
  }, [gameComplete, turn, maxTurns]);

  useEffect(() => {
    if (!gameComplete) {
      window.addEventListener("keyup", handleKeyUp);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  return (
    <div className="flex flex-col bg-gray-900 text-white w-full">
      <nav className="fixed top-0 flex p-3 bg-gray-800 w-full text-center justify-center items-center border-b">
        <h1 className="text-center text-3xl font-bold">Kevdle</h1>
      </nav>
      <div className="min-h-screen px-3 py-12">
        <div className="flex justify-center text-xl my-8">
          <a
            href="https://www.nytimes.com/2022/02/10/crosswords/best-wordle-tips.html"
            className="text-underline text-blue-400 font-bold"
          >
            How to play
          </a>
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
            gameComplete,
            handleKeyUp,
            setShowModal,
          }}
        >
          <div className="flex flex-col items-center mb-4">
            <Board />
            <button
              className="bg-red-800 text-white p-4 mt-2 rounded"
              onClick={() => {
                window.location.reload();
              }}
            >
              <FaRedo />
            </button>
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
