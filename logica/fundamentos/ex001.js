// ex001 - [Ler dois números e mostrar a soma]
// Objetivo: [Somar dois números e mostrar o resultado]
// Entrada: [2 números]
// Processamento: [Pedir para o usuário digitar os números e depois mostrar o resultado]
// Saída: [O resultado da soma dos dois números]

const prompt = require('prompt-sync')({ sigint: true })

function sumTwoNumbers() {
  const number1 = Number(prompt('Digite o 1o. número: '))
  const number2 = Number(prompt('Digite o 2o. número: '))
  const sum = number1 + number2
  console.log(`O resultado da soma dos números é: ${sum}`)
}

sumTwoNumbers()
