import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [maxTurns, setMaxTurns] = useState(6);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    
    useEffect(() => {
        setMaxTurns(solution.length < 6 ? 6 : solution.length + 1);
    }, [solution]);

    const formatGuess = () => {
        setTurn((prev) => prev + 1);
        setGuesses((prev) => [...prev, currentGuess]);
        setHistory((prev) => [...prev, currentGuess]);
        setCurrentGuess('');
        
    }

    const addNewGuess = () => {

    }

    const handleKeyUp = ({key}) => {
        if (key === 'Enter') {
            if (turn > maxTurns) {
                // handle gameover
                return;
            }
            if (history.includes(currentGuess)) {
                toast.error('You already guessed that word');
                return;
            }
            if (currentGuess.length !== solution.length) {
                toast.error(`Your guess must be ${solution.length} characters long`);
                return;
            }
            formatGuess();
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => prev.slice(0, -1));
            return;
        }

        if (/^[A-Za-z0-9]$/.test(key)) {
            if (currentGuess.length < solution.length) {
                setCurrentGuess((prev) => prev + key);
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp};
}

export default useWordle;