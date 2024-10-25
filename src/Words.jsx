import wordBank from './wordle-bank.txt';
export const boardDefault = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
];

export const generateWordSet = async () => {
    let wordSet;
    await fetch(wordBank)
        .then(response => response.text())
        .then(text => {
            const wordList = text.split('\n');
            wordSet = new Set(wordList);
        });

    return {wordSet};
};