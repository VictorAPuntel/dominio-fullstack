// ex062 - Character Frequency Counter
// Goal: Ask the user for a sentence and count how many times each character appears (ignore spaces).
// Input: 1 string (a full sentence)
// Process: Remove spaces, split into characters, and use .reduce() to build an object with frequencies
// Output: Display each character and how many times it appears

const prompt = require('prompt-sync')({ sigint: true })

function characterFrequencyCounter() {
  let sentence = prompt('Write your sentence')
  let letters = sentence.replaceAll(' ', '').split('')
  let frequencies = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1
    return acc
  }, {})

  console.log('Letter frequencies:')
  for (let letter in frequencies) {
    console.log(`${letter}: ${frequencies[letter]}`)
  }
}

characterFrequencyCounter()
