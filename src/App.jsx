import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import { useEffect, useState } from "react";
import { boardDefault, generateWordSet } from "./Words";
import AppContext from "./AppContext";

function App() {
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

  const targetWord = "CRANE";

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
      alert("Invalid word");
    }

    if (currentAttempt.attempt === 5) {
      setGameOver({gameOver: true, guessedWord: false});
    }


  };
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
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
    </div>
  );
}

export default App;
