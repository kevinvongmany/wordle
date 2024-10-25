import "./App.css";
import "./index.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { boardDefault, generateWordSet } from "./Words";
import AppContext from "./AppContext";
import BogNoted from "./assets/bogNoted.gif";
import { useAlert } from "react-alert";

function App() {
  
  const alert = useAlert();

  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [usedLetters, setUsedLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  const targetWord = "WORDL";

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
    }
  );
  }, []);

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition === 5) return;
    board[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
    setBoard(board);
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    board[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
    setBoard(board);
  };

  const onEnter = () => {
    if (currentAttempt.letterPosition !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currentAttempt.attempt][i];
    }
    if (currWord === targetWord) {
      setGameOver({gameOver: true, guessedWord: true});
    }
    console.log(currWord);
    console.log(wordSet);
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      alert.show("Invalid word");
    }

    if (currentAttempt.attempt === 5) {
      setGameOver({gameOver: true, guessedWord: false});
    }


  };
  return (
    <div className="App">
      <nav>
        <h1>Bogdle</h1>
      </nav>
      <div className="mt-4 flex justify-center">
        <img src={BogNoted} alt="Bog Noted" className="flex items-center" />
      </div>
      <AppContext.Provider
        value={{ 
          board, 
          setBoard, 
          currentAttempt, 
          setCurrentAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          usedLetters,
          setUsedLetters,
          targetWord,
          gameOver
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
