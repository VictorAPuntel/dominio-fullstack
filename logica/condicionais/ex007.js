// ex007 - Peça um número e informe se ele é positivo, negativo ou zero.
// Objetivo: Ler um número e verificar se ele é positivo, negativo ou zero
// Entrada: 1 número
// Processamento: Verificar se ele é maior, menor ou igual a 0
// Saída: Exibir uma mensagem conforme o resultado

const prompt = require('prompt-sync')({ sigint: true })

function positiveNegativeOrZero() {
  const number = Number(prompt('Digite um número: '))

  if (number > 0) {
    console.log('Positivo')
  } else if (number < 0) {
    console.log('Negativo')
  } else {
    console.log('Zero')
  }
}

positiveNegativeOrZero()
