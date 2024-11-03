import React, {useContext} from 'react'
import AppContext from '../AppContext'
import BogJam from '../assets/bogJam.gif'

function GameOver() {
  const {targetWord, turn, isCorrect} = useContext(AppContext)

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
      <div className="bg-black p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl md:text-3xl mb-4 md:mb-6">{isCorrect ? "You guessed the word correctly!" : "Better luck next time!"}</h3>
        <h1 className="text-2xl md:text-5xl mb-4 md:mb-6">The word was: {targetWord}</h1>
        {isCorrect && (
          <h2 className="text-xl md:text-3xl">It took you {turn} attempt{turn > 1 && "s"} to guess the word </h2>
        )}
      </div>
    </div>
  )
}
export default GameOver
