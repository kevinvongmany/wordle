import React, { useContext } from "react";
import AppContext from "../AppContext";
import Results from "./Results";
import { IoIosCloseCircle } from "react-icons/io";

function GameOver() {
  const { targetWord, turn, isCorrect, setShowModal } = useContext(AppContext);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-12 rounded-3xl shadow-lg text-center relative">
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={handleCloseModal}
        >
          <p className="text-5xl text-red-500 hover:text-red-400">
            <IoIosCloseCircle />
          </p>
        </button>
        <h3 className="text-xl md:text-3xl mb-4 md:mb-6">
          {isCorrect ? "Nice work!" : "Better luck next time!"}
        </h3>
        {isCorrect && (
          <h2 className="text-xl md:text-3xl mb-6">
            You guessed the word in {turn} attempt{turn > 1 && "s"}!
          </h2>
        )}
        <Results />

        <h1 className="text-2xl md:text-5xl mb-4 md:mb-6">
          The word was {targetWord}
        </h1>

        <button
          className="bg-gray-800 text-white px-4 py-2 mt-8 rounded"
          onClick={handleCloseModal}
        >
          Admire Puzzle
        </button>
      </div>
    </div>
  );
}
export default GameOver;
