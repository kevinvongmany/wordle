import React, {useContext} from 'react'
import AppContext from '../AppContext'

function GameOver() {
  const {gameOver, currentAttempt, targetWord} = useContext(AppContext)
  return (
    <div className='gameOver mt-9 md:mt-12 text-center md:mb-6'>
        <h3 className="text-xl md:text-3xl mb-4 md:mb-6">{gameOver.guessedWord ? "You guessed the word correctly!" : "Better luck next time!"}</h3>
        <h1 className="text-2xl md:text-5xl mb-4 md:mb-6">The word was: {targetWord}</h1>
        {gameOver.guessedWord && (
            <h2 className="text-xl md:text-3xl">It took you {currentAttempt.attempt} attempt{currentAttempt.attempt > 1 && "s"} to guess the word </h2> 
        )}
        {/* CUSTOM MESSAGE  */}
        <p className="text-xl md:text-3xl mt-3 font-bold">Type CheapBepis &gt; RonaldRaygun70888 in the chat :)</p>
        <p className="text-xl md:text-3xl mt-3 font-bold">Give CheapBepis a follow on their <a className="text-blue-600 underline" href="https://twitch.tv/cheapbepis">twitch</a>!</p>
        <p className="text-md md:text-xl mt-3">Want more Wordle? Check out the <a className="text-blue-600 underline" href='https://kevdle.netlify.app'>unthemed version</a>!</p>
        {/*  */}
    </div>
  )
}
export default GameOver
