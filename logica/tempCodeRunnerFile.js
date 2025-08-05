function somarParesDe1aNWhile(n) {
  let soma = 0;
  let index = 1;
  while (index <= n) {
    if (index % 2 === 0) {
      soma += index;
    }
  }
  return soma;
}
console.log(somarParesDe1aNWhile(10)); // Esperado: 30