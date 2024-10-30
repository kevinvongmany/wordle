import wordsFour from './wordlist-4.json';
import wordsFive from './wordlist-5.json';
import wordsSix from './wordlist-6.json';
import wordsSeven from './wordlist-7.json';
export const boardDefault = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
];

export const generateWordSet = async () => {
    const wordSet = new Set(wordsFive);

    return {wordSet};
};