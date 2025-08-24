/**
 * Exercício #1 - Pular múltiplos de 5
 * Exiba os números de 1 a 20, mas pule os múltiplos de 5 usando `continue`.
 */
function jumpMultiplyFive() {
  for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
      continue
    }
    console.log(i)
  }
}

/**
 * Exercício #2 - Parar no negativo
 * Peça números ao usuário. Quando ele digitar um número negativo, o loop deve parar.
 */
function stopOnNegativeNumber(lista) {
  let i = 0

  while (i < lista.length && lista[i] >= 0) {
    console.log(lista[i])
    i++
  }
}

/**
 * Exercício #3 - Primeiro divisível por 7
 * Encontre o primeiro número divisível por 7 entre 1 e 100 e pare a execução quando encontrar.
 */
function stopWhenFindTheFirstMultiplyForSeven() {
  for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
      console.log(`Primeiro divisível por 7 encontrado: ${i}`)
      break
    }
  }
}
