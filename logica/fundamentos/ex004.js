// ex004 - Nome e idade: imprimir “Olá, [nome]! Você tem [idade] anos.”
// Objetivo: Ler o nome e a idade do usuário e mostrar uma mensagem com esses dados
// Entrada: Nome e idade
// Processamento: Ler as informações do usuário
// Saída: Mostrar uma mensagem com o nome e a idade do usuário

const prompt = require('prompt-sync')({ sigint: true })

function nameAndAge() {
  const name = prompt('Digite seu nome: ')
  const age = Number(prompt('Digite sua idade: '))

  console.log(`Olá, ${name}! Você tem ${age} anos.`)
}

nameAndAge()
