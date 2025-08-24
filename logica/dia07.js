/**
 * Exercício #1 - Adivinhação
 * Peça ao usuário para adivinhar um número secreto entre 1 e 10.
 * Continue pedindo até que ele acerte.
 */

function guess(lista, secreto) {
  let i = 0
  let chute

  do {
    chute = lista[i]
    console.log('Tentou:', chute)
    i++
  } while (chute !== secreto && i < lista.length)

  return chute === secreto ? 'Acertou!' : 'Não acertou!'
}

/**
 * Exercício #2 - Nomes
 * Pergunte nomes até que o usuário diga "não".
 * Exiba todos os nomes digitados.
 */

function untilNo(lista, response) {
  let i = 0
  let isResponse

  do {
    isResponse = lista[i]
    console.log(isResponse)
    i++
  } while (isResponse !== response && i < lista.length)
}

//respota:
function untilNo(lista) {
  let i = 0
  let nomes = []
  let atual

  do {
    atual = lista[i]
    if (atual !== 'não') {
      nomes.push(atual) // guarda o nome válido
    }
    i++
  } while (atual !== 'não' && i < lista.length)

  return nomes
}

// Teste
console.log(untilNo(['Ana', 'Lucas', 'Maria', 'não', 'João']))
// → ["Ana", "Lucas", "Maria"]

/**
 * Exercício #3 - Múltiplos de 3
 * Exiba os múltiplos de 3 entre 1 e 30 usando `do...while`.
 */

function multiply3() {
  let i = 1
  let numero = 3
  let result
  do {
    result = numero * i
    console.log(result)
    i++
  } while (i <= 30)
}

//resposta
function multiply3() {
  let i = 1

  do {
    if (i % 3 === 0) {
      console.log(i)
    }
    i++
  } while (i <= 30)
}

// Teste
multiply3()
// → 3, 6, 9, ... 30
