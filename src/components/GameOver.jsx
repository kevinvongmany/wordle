import React, { useContext } from "react";
import AppContext from "../AppContext";
import Results from "./Results";
import { IoIosCloseCircle } from "react-icons/io";

import bogChamp from "../assets/bogChamp.webp";
import bogSad from "../assets/bogSad.webp";



function GameOver() {
  const { targetWord, turn, isCorrect, setShowModal } = useContext(AppContext);
  console.log(isCorrect);

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
          <img
            src={isCorrect ? bogChamp : bogSad}
            alt="bogResults"
            className="w-24 md:w-36 inline-block"
          />
        </h3>
        {isCorrect && (
          <h2 className="text-xl md:text-3xl mb-6">
            You guessed the word in {turn} attempt{turn > 1 && "s"}!
          </h2>
        )}
        <Results />

        {/* Custom message */}
        {/* <div>
          <p className="text-3xl pb-2 text-purple-400 font-bold">
            Check out ashex999's streams at:
          </p>
          <p  className="text-3xl pb-2 text-blue-500 underline">
            <a
            href="https://www.twitch.tv/ashex999"
            target="_blank"
            rel="noreferrer"
            >https://www.twitch.tv/ashex999</a>
            </p>
        </div> */}
        {/*  */}
        <h1 className="text-4xl md:text-5xl my-4 md:my-6">
          The word was {targetWord}
        </h1>

        <div className="flex justify-center space-x-4">
          <a href="https://wordpam.com" target="_blank">
            <button className="bg-gray-800 text-white px-6 py-3 mt-8 rounded text-xl md:text-4xl hover:bg-gray-700 transition duration-300">
              Play Wordpam
            </button>
          </a>
          <a href="https://kevdle.netlify.app/" target="_blank">
            <button className="bg-gray-800 text-white px-6 py-3 mt-8 rounded text-xl md:text-4xl hover:bg-gray-700 transition duration-300">
              Play Kevdle
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default GameOver;
