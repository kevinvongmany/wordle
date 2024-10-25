import React, {useContext} from 'react'
import AppContext from '../AppContext'

function GameOver() {
  const {gameOver, currentAttempt, targetWord} = useContext(AppContext)
  return (
    <div className='gameOver mt-12'>
        <h3 className="text-3xl mb-6">{gameOver.guessedWord ? "You guessed the word correctly!" : "Better luck next time!"}</h3>
        <h1 className="text-5xl mb-6">The word was: {targetWord}</h1>
        {gameOver.guessedWord && (
            <h2 className="text-3xl">It took you {currentAttempt.attempt} attempt{currentAttempt.attempt > 1 && "s"} to guess the word</h2>
        )}
        <h2 className="text-3xl mt-10"><a href="https://www.twitch.tv/bogonmydog/clip/DeliciousBoxyCockroachCharlietheUnicorn-4R9RPx5apgHUl7Du" target='_blank' className='text-blue-500'>WORDL</a></h2>
    </div>
  )
}
export default GameOver
