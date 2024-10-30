import wordsFour from './wordlist-4.json';
import wordsFive from './wordlist-5.json';
import wordsSix from './wordlist-6.json';
import wordsSeven from './wordlist-7.json';

export const createBoard = (rows, cols) => {
    const board = Array.from({ length: rows }, () => Array(cols).fill(''));
    return board;
};

export const generateWordSet = (wordLength) => {
    switch (wordLength) {
        case 4:
            return new Set(wordsFour);
        case 5:
            return new Set(wordsFive);
        case 6:
            return new Set(wordsSix);
        case 7:
            return new Set(wordsSeven);
        default:
            return new Set();
    }
};