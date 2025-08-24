/**
 * Exercício #1 - Contagem regressiva
 * Exiba os números de 10 até 1 em ordem decrescente usando `while`.
 */

function regressive() {
  let contador = 10
  while (contador >= 1) {
    console.log(contador--)
  }
}

/**
 * Exercício #2 - Fatorial
 * Calcule o fatorial de um número usando `while`.
 */

function fatorial(num) {
  if (num === 0) return 1

  let result = num

  while (num > 1) {
    num--
    result *= num
  }

  return result
}

//Material didádico
function fatorial(num) {
  let contador = num // começa no número dado
  let resultado = 1 // acumulador começa em 1 (neutro da multiplicação)

  while (contador > 1) {
    resultado = resultado * contador // multiplica o acumulado pelo contador
    contador-- // decrementa o contador até chegar em 1
  }

  return resultado
}

/**
 * Exercício #3 - Soma até zero
 * Peça números ao usuário até que ele digite 0.
 * No final, exiba a soma de todos os números digitados.
 */

function sumAllUntilZero(lista) {
  let soma = 0
  let i = 0

  while (i < lista.length && lista[i] !== 0) {
    soma += lista[i]
    i++
  }

  return soma
}
