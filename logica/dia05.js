/**
 * Exercício #1 - Números pares
 * Crie uma função que exiba todos os números pares de 1 a 50.
 */

function numerosPares() {
  for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

/**
 * Exercício #2 - Soma até 100
 * Escreva uma função que calcule a soma dos números de 1 até 100.
 */

function sumAll() {
  let soma = 0
  for (let i = 0; i <= 100; i++) {
    soma += i
  }
  console.log(soma)
}

/**
 * Exercício #3 - Tabuada do 7
 * Faça um programa que exiba a tabuada do número 7 de 1 a 10.
 */

function multiplicationTable() {
  let number = 7
  for (let i = 1; i <= 10; i++) {
    console.log(number * i)
  }
}
