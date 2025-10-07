// ex008 - Verificar se o número é par ou ímpar
// Objetivo: Pedir um número e informar se ele é par ou ímpar
// Entrada: 1 número
// Processamento: Verificar se o resto da divisão por 2 é 0
// Saída: Exibir uma mensagem conforme o resultado

const prompt = require('prompt-sync')({ sigint: true })

function evenOrOdd() {
  const number = Number(prompt('Digite um número: '))

  if (number % 2 === 0) {
    console.log('Par')
  } else {
    console.log('Ímpar')
  }
}

evenOrOdd()
