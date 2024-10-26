import React, {useContext} from 'react'
import AppContext from '../AppContext'

function GameOver() {
  const {gameOver, currentAttempt, targetWord} = useContext(AppContext)
  return (
    <div className='gameOver mt-9 md:mt-12 text-center md:mb-6'>
        <h2 className="text-xl my-1 md:text-3xl md:my-3"><a href="https://www.twitch.tv/bogonmydog/clip/DeliciousBoxyCockroachCharlietheUnicorn-4R9RPx5apgHUl7Du" target='_blank' className='text-blue-500'>WORDL</a></h2>
        <h3 className="text-xl md:text-3xl mb-4 md:mb-6">{gameOver.guessedWord ? "You guessed the word correctly!" : "Better luck next time!"}</h3>
        <h1 className="text-2xl md:text-5xl mb-4 md:mb-6">The word was: {targetWord}</h1>
        {gameOver.guessedWord && (
            <h2 className="text-xl md:text-3xl">It took you {currentAttempt.attempt} attempt{currentAttempt.attempt > 1 && "s"} to guess the word</h2>
        )}
    </div>
  )
}
export default GameOver
