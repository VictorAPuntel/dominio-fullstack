// ex010 - Peça a idade de uma pessoa e diga se ela é maior de idade (≥18) ou menor de idade (<18).
// Objetivo: Pedir a idade e verificar se ela é maior ou igual a 18, ou menor
// Entrada: 1 número (idade)
// Processamento: Verificar a idade conforme as condições
// Saída: Exibir uma mensagem conforme o resultado

const prompt = require('prompt-sync')({ sigint: true })

function greaterOrLessThan18() {
  const age = Number(prompt('Digite sua idade: '))
  const yearsTo18 = 18 - age

  if (isNaN(age) || age < 0) {
    console.log('Idade inválida! Digite um número positivo')
    return
  }

  if (age >= 18) {
    console.log('Maior de idade')
  } else {
    console.log(`Menor de idade — faltam ${yearsTo18} anos para completar 18.`)
  }
}

greaterOrLessThan18()
