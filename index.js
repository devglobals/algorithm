
// 1: Printing out the lenght of characters
const Sentence = "Hello my name is stanley, and am a programmer .";
// using a split function
const lenghtOfSentence = Sentence.split('').length;
console.log(lenghtOfSentence);

// 2: The number of words in the sentence (assuming that the words are separated by a single space).
// here i will also use a splict function buh with space on it to seperate the words

const numberOfWords = Sentence.split(' ').length;
console.log(numberOfWords);


// The number of vowels in the sentence.

const vowels = ['a', 'e', 'i', 'o', 'u'];

let lower = Sentence.toLowerCase();

let lenghtOfSentence2 = lower.split('');

function countVowel(lenghtOfSentence2) {
   let count = 0;

   for( let i of lenghtOfSentence2) {
    if (vowels.includes(i)) {
        count++;
    }
   }

   return count;
}

console.log(countVowel(lenghtOfSentence2));



