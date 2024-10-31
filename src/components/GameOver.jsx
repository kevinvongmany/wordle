import React, {useContext} from 'react'
import AppContext from '../AppContext'
import BogJam from '../assets/bogJam.gif'

function GameOver() {
  const {gameOver, currentAttempt, targetWord} = useContext(AppContext)
  return (
    <div className='gameOver mt-9 md:mt-12 text-center md:mb-6'>
        <h3 className="text-xl md:text-3xl mb-4 md:mb-6">{gameOver.guessedWord ? "You guessed the word correctly!" : "Better luck next time!"}</h3>
        <h1 className="text-2xl md:text-5xl mb-4 md:mb-6">The word was: {targetWord}</h1>
        {gameOver.guessedWord && (
            <h2 className="text-xl md:text-3xl">It took you {currentAttempt.attempt} attempt{currentAttempt.attempt > 1 && "s"} to guess the word</h2>
        )}
        {/* CUSTOM MESSAGE  */}
        <div className="mt-6 md:mt-12 flex items-center justify-center">
          <img src={BogJam} alt="Bog Jam" className="w-14 md:w-32 items-center flex" />
        </div>
          <p className="text-xl md:text-3xl mt-3">Want more Wordle? Check out my <a className="text-blue-600 underline" href='https://kevdle.netlify.app'>unthemed version</a>!</p>
        {/*  */}
    </div>
  )
}
export default GameOver
