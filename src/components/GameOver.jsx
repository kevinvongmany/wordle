import React, {useContext} from 'react'
import AppContext from '../AppContext'
import Results from './Results'
import { IoIosCloseCircle } from "react-icons/io";


function GameOver() {
  const {targetWord, turn, isCorrect, setShowModal} = useContext(AppContext)
  console.log(isCorrect);

  const handleCloseModal = () => {
    setShowModal(false);
  }


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-black p-12 rounded-3xl shadow-lg text-center relative transform transition-transform duration-300 ease-in-out translate-y-[-50px] opacity-100 animate-fade-in">
        <button 
          className="absolute top-4 right-4 text-white text-2xl" 
          onClick={handleCloseModal}
        >
          <p className='text-5xl text-red-500 hover:text-red-400'><IoIosCloseCircle /></p>
        </button>
        <h3 className="text-xl md:text-3xl mb-4 md:mb-6">{isCorrect ? "You guessed the word correctly!" : "Better luck next time!"}</h3>
        {isCorrect && (
          <h2 className="text-xl md:text-3xl mb-6">You had {turn} attempt{turn > 1 && "s"} to guess the word!</h2>
        )}
        <Results />

        {/* Custom message */}
        {/*  */}
        <h1 className="text-2xl md:text-5xl my-4 md:my-6">The word was {targetWord}</h1>

        <div className='flex justify-center space-x-4'>
          <a href='https://wordpam.com' target='_blank'>
            <button className="bg-gray-800 text-white px-6 py-3 mt-8 rounded text-4xl hover:bg-gray-700 transition duration-300">
              Play Wordpam
            </button>
          </a>
          <a href='https://kevdle.netlify.app/' target='_blank'>
            <button className="bg-gray-800 text-white px-6 py-3 mt-8 rounded text-4xl hover:bg-gray-700 transition duration-300">
              Play Kevdle
            </button>

          </a>
        </div>
      </div>
    </div>
  )
}
export default GameOver
