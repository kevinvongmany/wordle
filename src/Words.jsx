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
    // switch (wordLength) {
    //     case 4:
    //         return new Set(wordsFour);
    //     case 5:
    //         return new Set(wordsFive);
    //     case 6:
    //         return new Set(wordsSix);
    //     case 7:
    //         return new Set(wordsSeven);
    //     default:
    //         return new Set();
    // }
    const wordset = [
        ...engWords10,
        ...engWords20,
        ...engWords35,
        ...engWords40,
        ...engWords50,
        ...engWords55,
        ...engWords60,
        ...customWords
    ];
    return new Set(wordset.filter(word => word.length === wordLength));
};