import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";

import AppContext from "./AppContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import onpamNoted from "./assets/onpamNoted.webp";

import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";

import useWordle from "./hooks/useWordle";

function App() {
  
  const [targetWord, setTargetWord] = useState("CROTA");
  const solution = localStorage.getItem("solution");
  const [newGame, setNewGame] = useState(solution !== targetWord);
  const [gameComplete, setGameComplete] = useState(localStorage.getItem("gameComplete") || false);

  const {turn, currentGuess, guesses, isCorrect, maxTurns, usedKeys, handleKeyUp} = useWordle(targetWord, newGame, setNewGame);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    if (isCorrect) {
      setTimeout(() => setShowModal(true), 500);
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, [isCorrect]);

  useEffect(() => {
    if (turn >= maxTurns) {
      setTimeout(() => setShowModal(true), 500);
      window.removeEventListener("keyup", handleKeyUp)
    };
  }, [gameComplete, turn, maxTurns])

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
        <h1 className="text-center text-3xl font-bold">Wordpam</h1>
      </nav>
      <div className="min-h-screen px-3 py-12">
        <div className="mt-4 flex justify-center">
          <img src={onpamNoted} alt="Onpam Noted" className="flex items-center mb-5 w-12 md:w-24" />
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
          <div className="flex flex-col items-center mb-4 pb-">
            <Board />
            <p>Please refresh the page if the keyboard doesn't work!</p>
            {/* {gameComplete && 
              <button 
                className="bg-green-800 text-white px-4 py-2 mt-8 rounded"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Share results!
              </button>
            } */}
            <Keyboard />
            <p>Want more Wordle? Try my <a href='https://kevdle.netlify.app/' className='text-blue-400 text-underline' target='_blank'>unthemed version</a> or <a href='https://bogdle.com/' className='text-blue-400 text-underline' target='_blank'>Bogdle</a>!</p>
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
