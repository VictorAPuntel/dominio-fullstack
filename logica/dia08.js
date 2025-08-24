//Laços aninhados
/**
 * Exercício #1 - Triângulo de asteriscos
 * Exiba no console o seguinte padrão com `for` aninhado:
 * *
 * **
 * ***
 * ****
 * *****
 */

function triangle() {
  // loop de fora → controla as linhas
  for (let i = 1; i <= 5; i++) {
    let linha = ''

    // loop de dentro → adiciona os asteriscos na linha
    for (let j = 1; j <= i; j++) {
      // aqui tu vai concatenar "*" na variável linha
      linha += '*'
    }

    // depois que o loop interno terminar, imprime a linha
    console.log(linha)
  }
}

/**
 * Exercício #2 - Dois dados
 * Exiba todas as combinações de dois dados (1 a 6) e diga quantas somam 7.
 */

function twoDatas() {
  let contador = 0

  for (let dado1 = 1; dado1 <= 6; dado1++) {
    for (let dado2 = 1; dado2 <= 6; dado2++) {
      console.log(`(${dado1}, ${dado2})`) // mostra a combinação

      if (dado1 + dado2 === 7) {
        contador++
      }
    }
  }

  console.log(`Total de combinações que somam 7: ${contador}`)
}

/**
 * Exercício #3 - Tabuada completa
 * Monte a tabuada de 1 até 10 usando laços aninhados.
 */
function multiplicateTable() {
  for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
    console.log(`Tabuada do ${multiplicando}:`)

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
      console.log(
        `${multiplicando} * ${multiplicador} = ${multiplicando * multiplicador}`
      )
    }

    console.log('---') // separador entre tabuadas
  }
}
