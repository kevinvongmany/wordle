import React, {useContext} from 'react'
import AppContext from '../AppContext'
import Results from './Results'

function GameOver() {
  const {targetWord, turn, isCorrect, setShowModal, guesses} = useContext(AppContext)


  const handleRestart = () => {
    window.location.reload();
  }

  console.log(guesses);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black bg-opacity-90 p-12 rounded-3xl shadow-lg text-center">
        <h3 className="text-xl md:text-3xl mb-4 md:mb-6">{isCorrect ? "You guessed the word correctly!" : "Better luck next time!"}</h3>
        <h1 className="text-2xl md:text-5xl mb-4 md:mb-6">The word was {targetWord}</h1>
        {isCorrect && (
          <h2 className="text-xl md:text-3xl mb-6">You had {turn} attempt{turn > 1 && "s"} to guess the word!</h2>
        )}
        <Results />

        {/* Custom message */}
        <h2 className="text-sm md:text-xl mt-3">Please support cbgray in his journey to get EVERY exotic in Destiny in ONE stream: </h2>
        <h2 className="text-sm md:text-3xl mt-3"><a href='https://twitch.tv/cbgray' className='text-blue-400 text-underline mt-3 mb-3' target='_blank'>twitch.tv/cbgray</a></h2>
        <h2 className="text-sm md:text-xl mt-3">Type <a href='https://i.ebayimg.com/images/g/q-UAAOSwXdphoXIn/s-l1200.jpg' className='text-blue-400 text-underline' target='_blank'>dr pepper baked beans</a> into his chat if you enjoyed this Bogdle!</h2>
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
