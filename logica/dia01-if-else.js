/**
 * Exercício #1 - Condicionais Simples
 *
 * Descrição:
 * Crie uma função que recebe dois números e retorna qual deles é o maior.
 * Se forem iguais, retorne uma mensagem avisando.
 */

function compararNumeros(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Os números são iguais";
  }
}

// Testes
console.log(compararNumeros(10, 5)); // Deve retornar: 10
console.log(compararNumeros(3, 8)); // Deve retornar: 8
console.log(compararNumeros(7, 7)); // Deve retornar: "Os números são iguais"
