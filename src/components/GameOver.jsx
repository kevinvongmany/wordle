import React, { useContext } from "react";
import AppContext from "../AppContext";
import Results from "./Results";
import { IoIosCloseCircle } from "react-icons/io";
import onpamHappy from "../assets/onpamHappy.webp";
import onpamSad from "../assets/onpamSad.webp";

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
          <img
            src={isCorrect ? onpamHappy : onpamSad}
            alt="Onpam"
            className="w-24 md:w-36 inline-block"
          />
          {/* {isCorrect ? "Nice work!" : "You just got Onscam'd!"} */}
        </h3>
        {isCorrect && (
          <h2 className="text-xl md:text-3xl mb-6">
            You guessed the word in {turn} attempt{turn > 1 && "s"}!
          </h2>
        )}
        <Results />

        {/* Custom message */}
        <div className="flex-row justify-center space-x-4">
        <p className="text-3xl pb-6 text-white">
          Follow Ham on 
          <span className="text-purple-600"><a href="https://twitch.tv/haminator100" target="_blank"> Twitch</a></span> and
          <br/>subscribe on
          <span className="text-red-600"><a href="https://www.youtube.com/@haminator1" target="_blank"> YouTube</a></span>!
        </p>
        <p className="text-6xl pb-6 text-white">
          🕯
        </p>
        <p className="text-3xl pb-6 text-white">
        🕯🕯🕯🕯 <span className="text-blue-600 text-4xl">Happy Hanukkah!</span> 🕯🕯🕯🕯
        </p>
          </div>
        {/*  */}
        <div className="flex justify-center space-x-4">
          <a href="https://bogdle.com" target="_blank">
            <button className="bg-gray-800 text-white px-6 py-3 mt-8 rounded text-2xl md:text-4xl hover:bg-gray-700 transition duration-300">
              Play Bogdle
            </button>
          </a>
          <a href="https://kevdle.netlify.app/" target="_blank">
            <button className="bg-gray-800 text-white px-6 py-3 mt-8 rounded text-2xl md:text-4xl hover:bg-gray-700 transition duration-300">
              Play Kevdle
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default GameOver;
