// ex002 - Ler 3 números e mostrar a média deles
// Objetivo: Mostrar a média de 3 números
// Entrada: 3 números
// Processamento: Calcular a média dos números
// Saída: Mostrar a média com duas casas decimais

const prompt = require('prompt-sync')({ sigint: true })

function averageThreeNumbers() {
  const number1 = Number(prompt('Digite o 1º número: '))
  const number2 = Number(prompt('Digite o 2º número: '))
  const number3 = Number(prompt('Digite o 3º número: '))

  const average = (number1 + number2 + number3) / 3

  console.log(`A média dos números digitados é: ${average.toFixed(2)}`)
}

averageThreeNumbers()
