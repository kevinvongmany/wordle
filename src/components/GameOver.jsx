import React, {useContext} from 'react'
import AppContext from '../AppContext'

function GameOver() {
  const {gameOver, currentAttempt, targetWord} = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You guessed the word correctly!" : "Better luck next time!"}</h3>
        <h1>The word was: {targetWord}</h1>
        {gameOver.guessedWord && (
            <h2>It took you {currentAttempt.attempt} attempt{currentAttempt.attempt > 1 && "s"} to guess the word</h2>
        )}
        <h2><a href="https://www.twitch.tv/bogonmydog/clip/DeliciousBoxyCockroachCharlietheUnicorn-4R9RPx5apgHUl7Du" target='_blank'>WORDL</a></h2>
    </div>
  )
}
export default GameOver
