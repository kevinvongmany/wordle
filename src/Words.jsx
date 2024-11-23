import engWords10 from './db/english-words-10.json';
import engWords20 from './db/english-words-20.json';
import engWords35 from './db/english-words-35.json';
import engWords40 from './db/english-words-40.json';
import engWords50 from './db/english-words-50.json';
import engWords55 from './db/english-words-55.json';
import engWords60 from './db/english-words-60.json';
import engWords70 from './db/english-words-70.json';
import customWords from './db/customWords.json';


export const createBoard = (rows, cols) => {
    const board = Array.from({ length: rows }, () => Array(cols).fill(''));
    return board;
};

export const generateWordSet = (wordLength) => {
    const wordset = [
        ...engWords10,
        ...engWords20,
        ...engWords35,
        ...engWords40,
        ...engWords50,
        ...engWords55,
        ...engWords60,
        ...engWords70,
        ...customWords
    ];
    return new Set(wordset.filter(word => word.length === wordLength));
};