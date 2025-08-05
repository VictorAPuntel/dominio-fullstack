/**
 * Exercício #2 - Loops Básicos
 *
 * Descrição:
 * Crie uma função chamada `somarParesDe1aN` que recebe um número `n`
 * e retorna a soma de todos os números pares de 1 até `n` (inclusive).
 *
 * Exemplo:
 * somarParesDe1aN(10); // Deve retornar 30 (2 + 4 + 6 + 8 + 10)
 *
 * Requisitos:
 * - Usar um laço `for` ou `while`
 * - Verificar se o número atual é par (numero % 2 === 0)
 * - Retornar a soma total
 */

function somarParesDe1aN(n) {
  let soma = 0;
  for (let i = 1; i <= n; i += 1) {
    if (i % 2 === 0) {
      soma += i;
    }
  }
  return soma;
}

// Testes
console.log(somarParesDe1aN(10)); // Esperado: 30
console.log(somarParesDe1aN(6)); // Esperado: 12 (2 + 4 + 6)
console.log(somarParesDe1aN(1)); // Esperado: 0

/**
 * Desafio Extra:
 * Crie uma segunda versão usando `while`:
 *
 */
function somarParesDe1aNWhile(n) {
  let soma = 0;
  let index = 1;
  while (index <= n) {
    if (index % 2 === 0) {
      soma += index;
    }
    index++;
  }
  return soma;
}
console.log(somarParesDe1aNWhile(10)); // Esperado: 30

/**
 * Mini-desafio Extra - While
 *
 * Descrição:
 * Crie uma função chamada `contarDeTras` que recebe um número `n`
 * e imprime no console todos os números de `n` até 1 (inclusive),
 * em ordem decrescente, usando um laço `while`.
 *
 * Exemplo:
 * contarDeTras(5);
 * // Deve imprimir:
 * // 5
 * // 4
 * // 3
 * // 2
 * // 1
 *
 * Requisitos:
 * - Usar `while`
 * - Controlar corretamente a variável de contagem
 * - Parar quando chegar em 1
 */

function contarDeTras(n) {
  let contador = n;
  while (contador >= 1) {
    console.log(contador);
    contador--;
  }
  return contador;
}

// Testes
contarDeTras(5); // Esperado: 5, 4, 3, 2, 1
contarDeTras(3); // Esperado: 3, 2, 1
contarDeTras(1); // Esperado: 1

/**
 * Mini-desafio Extra #2 - While + Condicional
 *
 * Descrição:
 * Crie uma função chamada `somarMultiplosDe3` que recebe um número `n`
 * e retorna a soma de todos os múltiplos de 3 entre 1 e `n` (inclusive),
 * usando um laço `while`.
 *
 * Exemplo:
 * somarMultiplosDe3(10); // Deve retornar 18 (3 + 6 + 9)
 *
 * Requisitos:
 * - Usar `while`
 * - Verificar se o número atual é múltiplo de 3 (`numero % 3 === 0`)
 * - Acumular e retornar a soma
 */

function somarMultiplosDe3(n) {
  let soma = 0;
  let i = 1;
  while (i <= n) {
    if (i % 3 === 0) {
      soma += i;
    }
    i++;
  }
  return soma;
}

// Testes
console.log(somarMultiplosDe3(10)); // Esperado: 18
console.log(somarMultiplosDe3(15)); // Esperado: 45 (3 + 6 + 9 + 12 + 15)
console.log(somarMultiplosDe3(2)); // Esperado: 0
