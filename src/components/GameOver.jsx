import React, {useContext} from 'react'
import AppContext from '../AppContext'
import Results from './Results'
import bogNoMan from '../assets/bogNoMan.webp'

function GameOver() {
  const {targetWord, turn, isCorrect} = useContext(AppContext)


  const handleRedirect = () => {
    window.location.href = "https://wordpam.com/";
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-12 rounded-3xl shadow-lg text-center">
        <h3 className="text-xl md:text-3xl mb-4 md:mb-6">{isCorrect ? "You guessed the word correctly!" : "Better luck next time!"}</h3>
        <Results />
        {isCorrect && (
          <h2 className="text-xl md:text-3xl mb-6">You had {turn} attempt{turn > 1 && "s"} to guess the word!</h2>
        )}

        <h1 className="text-2xl md:text-5xl mb-4 md:mb-6">The word was {targetWord}</h1>
        {/* Custom message */}
        <div className='flex items-center justify-center'>
          <img src={bogNoMan} alt='BogNoMan' className='w-24 md:w-48 mb-4 md:mb-8 ' />
        </div>
          <p className='text-lg md:text-2xl mb-5 text-blue-500 underline'><a href='https://merch.travelers-chosen.com/products/travelers-chosen-t-shirt-bogonmydog' target='_blank'>Pick up your own No Man shirt here!</a></p>
        {/*  */}

        <p>Want more Wordle? Try my <a href='https://kevdle.netlify.app/' className='text-blue-400 text-underline' target='_blank'>unthemed version</a> or try Wordpam!</p>

        <button className="bg-gray-800 text-white px-4 py-2 mt-8 rounded" onClick={handleRedirect}>
          Play Wordpam
        </button>
      </div>
    </div>
  )
}
export default GameOver
