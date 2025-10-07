// ex003 - Pedir um número e mostrar o dobro e a metade
// Objetivo: Ler 1 número e mostrar sua metade e seu dobro
// Entrada: 1 número
// Processamento: Calcular a metade e o dobro
// Saída: Mostrar os dois resultados formatados

const prompt = require('prompt-sync')({ sigint: true })

function halfAndDoubleNumber() {
  const number = Number(prompt('Digite um número: '))

  const half = number / 2
  const double = number * 2

  console.log(`Metade = ${half.toFixed(2)}`)
  console.log(`Dobro = ${double.toFixed(2)}`)
}

halfAndDoubleNumber()
