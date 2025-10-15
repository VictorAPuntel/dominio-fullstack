// ex061 - Word Frequency Counter
// Goal: Ask the user for a sentence and count how many times each word appears.
// Input: 1 string (a full sentence)
// Process: Split the sentence into words, then use an object to store each word’s frequency
// Output: Display each word followed by how many times it appears

const prompt = require('prompt-sync')({ sigint: true })

function wordFrequencyCounter() {
  let sentence = prompt('Write your sentence: ')
  let words = sentence.trim().toLowerCase().split(/\s+/) // make everything lowercase to treat "The" and "the" as the same word

  let frequencies = {} // empty object to store the frequency of each word

  for (let word of words) {
    // if the word already exists, increase its count
    // otherwise, create it with a count of 1
    if (frequencies[word]) {
      frequencies[word]++
    } else {
      frequencies[word] = 1
    }
  }

  console.log('Word frequencies:')
  for (let word in frequencies) {
    console.log(`${word}: ${frequencies[word]}`)
  }
}

wordFrequencyCounter()
