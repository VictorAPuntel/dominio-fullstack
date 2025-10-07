// ex006 - Peça um número e diga se ele é maior que 10.
// Objetivo: Ler um número e verificar se ele é maior ou não que 10
// Entrada: 1 número
// Processamento: Comparar o número com 10
// Saída: Exibir uma mensagem conforme o resultado

const prompt = require('prompt-sync')({ sigint: true })

function biggerThan10() {
  const number = Number(prompt('Digite um número: '))

  if (number > 10) {
    console.log('Maior que 10')
  } else {
    console.log('Menor ou igual a 10')
  }
}

biggerThan10()
