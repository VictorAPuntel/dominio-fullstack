// ex009 - Verificar qual número é maior ou se são iguais
// Objetivo: Pedir 2 números e verificar qual é maior ou se são iguais
// Entrada: 2 números
// Processamento: Verificar qual é maior ou se são iguais
// Saída: Exibir uma mensagem conforme o resultado

const prompt = require('prompt-sync')({ sigint: true })

function whatIsTheBiggestOrEqual() {
  const n1 = Number(prompt('Digite o 1o. número: '))
  const n2 = Number(prompt('Digite o 2o. número: '))

  if (n1 > n2) {
    console.log(`${n1} = n1 é maior`)
  } else if (n1 < n2) {
    console.log(`${n2} = n2 é maior`)
  } else {
    console.log('São iguais')
  }
}

whatIsTheBiggestOrEqual()

function whatIsTheBiggestOrEqualVariation() {
  const n1 = Number(prompt('Digite o 1o. número: '))
  const n2 = Number(prompt('Digite o 2o. número: '))

  if (isNaN(n1) || isNaN(n2)) {
    console.log('Por favor, digite números válidos')
  }

  if (n1 === n2) {
    console.log('São iguais')
  } else if (n1 > n2) {
    console.log(`${n1} = n1 é maior`)
  } else {
    console.log(`${n2} = n2 é maior`)
  }
}

whatIsTheBiggestOrEqualVariation()
