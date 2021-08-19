const sentence = 'I am just a Java-Script beginner.';
console.log(sentence);
const words = sentence.split(' ');
// console.log(words);

const slice = sentence.slice(12, 23);
// console.log(slice);

const substring = sentence.substr(5, 4);
console.log(substring);

const subString = sentence.substring(12, 23); //Same as slice()
// console.log(subString);

const first = 'Java-';
const second = 'Script';
const third = ' Beginner';
// const fullText = first + second;
// console.log(fullText);

const fullText = first.concat(second).concat(third);
// console.log(fullText);

const joinWords = ['www', 'java-script', 'com'];

const allwords = joinWords.join('.');
console.log(allwords);
