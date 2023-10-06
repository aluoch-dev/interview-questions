/*
Coding challenge:

Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this.

Sample input:

“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)

Sample output:

“experience”

Explanation: 

Longest words are “everything” and “experience”, but the second has the most vowels
*/


function findLongestWord(sentence) {
    
    //Counting vowels in each word in the Sentence
    function countVowels(word) {
        let count = 0;
        const vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        for (let char of word) {
            if (vowels.includes(char)) {
            count++;
            }
        }

        return count;
    }
  
    //Split the sentencece into words to yield an array of words.
    const words = sentence.split(" "); 
    
    let longestWord = '';
    let longestWordLength = 0;
    let mostVowels = 0;
  
    // Iterate through the words and evaluate length after removing symbols
    for (const word of words) {
        //remove symbols and other characters from words
      const wordWithoutSymbols = word.replace(/[^a-zA-Z]/g, ''); // Remove non-letter characters
     
      if (wordWithoutSymbols.length > longestWordLength) {
        longestWordLength = wordWithoutSymbols.length;
        longestWord = wordWithoutSymbols;
      } else if (wordWithoutSymbols.length === longestWordLength) {
        const vowelCount = countVowels(wordWithoutSymbols);
        if (vowelCount > mostVowels) {
            mostVowels = vowelCount;
            longestWord = wordWithoutSymbols;
        }
      }
    }
  
    return longestWord;
}

  