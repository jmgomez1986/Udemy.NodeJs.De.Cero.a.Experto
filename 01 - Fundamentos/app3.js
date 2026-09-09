const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf-8');

const words = data.split(' ')

const wordsCount = words.length;

// const wordsCountReact = words.filter(word => word.toLowerCase().includes('react')).length;
const wordsCountReact = (data.match(/react/gi) || []).length;

console.log('Palabras: ', wordsCount);
console.log('Palabras "React": ', wordsCountReact);