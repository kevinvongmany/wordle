import wordBank from './wordle-words.json';
export const boardDefault = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
];

export const generateWordSet = async () => {
    const wordSet = new Set(wordBank);

    return {wordSet};
};