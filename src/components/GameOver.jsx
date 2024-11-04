import React, {useContext} from 'react'
import AppContext from '../AppContext'
import Results from './Results'

function GameOver() {
  const {targetWord, turn, isCorrect} = useContext(AppContext)


  const handleRestart = () => {
    window.location.reload();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black bg-opacity-90 p-12 rounded-3xl shadow-lg text-center">
        <h3 className="text-xl md:text-3xl mb-4 md:mb-6">{isCorrect ? "You guessed the word correctly!" : "Better luck next time!"}</h3>
        <Results />
        {isCorrect && (
          <h2 className="text-xl md:text-3xl mb-6">You had {turn} attempt{turn > 1 && "s"} to guess the word!</h2>
        )}

        <h1 className="text-2xl md:text-5xl mb-4 md:mb-6">The word was {targetWord}</h1>
        {/* Custom message */}
        <h2 className="text-sm md:text-xl my-3 text-pink-500">Say hi cammie to hi_cammie if you enjoyed this Bogdle!</h2>
        {/*  */}

        <p>Want more Wordle? Try my <a href='https://kevdle.netlify.app/' className='text-blue-400 text-underline' target='_blank'>unthemed version</a>!</p>

        <button className="bg-gray-800 text-white px-4 py-2 mt-8 rounded" onClick={handleRestart}>
          Play Again
        </button>
      </div>
    </div>
  )
}
export default GameOver
