/**
 * Exercício #1 – Verificar maioridade
 *
 * Crie uma função que receba a idade de uma pessoa e retorne:
 * - "menor de idade" se for menor que 18
 * - "maior de idade" se for igual ou maior que 18
 */
function classificarMaioridade(idade) {
  const verificaIdade = idade >= 18 ? 'Maior de idade' : 'Menor de idade'
  return verificaIdade
}
/**
 * Exercício #2 – Converter nota para conceito
 *
 * Crie uma função que receba uma nota de 0 a 100 e retorne:
 * - "A" para 90 a 100
 * - "B" para 80 a 89
 * - "C" para 70 a 79
 * - "D" para 60 a 69
 * - "F" para abaixo de 60
 */
function conceitoNota(nota) {
  // Validação antecipada (casos inválidos)
  if (nota > 100 || nota < 0) {
    return 'Nota Inválida'
  }

  // Casos normais
  if (nota >= 90) return 'A'
  if (nota >= 80) return 'B'
  if (nota >= 70) return 'C'
  if (nota >= 60) return 'D'
  return 'F'
}

/**
 * Exercício #3 – FizzBuzz
 *
 * Crie uma função que receba um número e retorne:
 * - "Fizz" se for múltiplo de 3
 * - "Buzz" se for múltiplo de 5
 * - "FizzBuzz" se for múltiplo de 3 e 5 ao mesmo tempo
 * - O próprio número caso contrário
 */
function fizzBuzz(n) {
  // Sempre verifique primeiro as condições mais restritivas/específicas

  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return 'Buzz'
  return n
}
/**
 * Exercício #4 – Calculadora usando switch
 *
 * Crie uma função que receba dois números e uma operação (+, -, *, /, %).
 * Retorne o resultado da operação.
 * Trate os casos:
 * - Divisão por zero → retorne "erro: divisão por zero"
 * - Operação inválida → retorne "erro: operação inválida"
 */
function calcular(a, b, op) {
  switch (op) {
    case '+':
      return a + b

    case '-':
      return a - b

    case '*':
      return a * b

    case '/':
      if (b === 0) return 'Erro: Divisão por zero'
      return a / b

    case '%':
      if (b === 0) return 'Erro: Divisão por zero'
      return a % b

    default:
      return 'Erro: Operação inválida'
  }
}
/**
 * Exercício #5 – Classificação de idade
 *
 * Crie uma função que receba a idade de uma pessoa (em anos) e retorne:
 * - "Criança" → idade entre 0 e 12 anos
 * - "Adolescente" → idade entre 13 e 17 anos
 * - "Adulto" → idade entre 18 e 59 anos
 * - "Idoso" → idade igual ou acima de 60 anos
 * - Se a idade for negativa ou maior que 120 → "Idade inválida"
 *
 * Use switch(true) para implementar a lógica de classificação.
 * Trate casos inválidos antes de classificar.
 */
function classificarIdade(idade) {
  switch (true) {
    case idade < 0 || idade > 120:
      return 'Idade Inválida'
    case idade <= 12:
      return 'Criança'
    case idade <= 17:
      return 'Adolescente'
    case idade <= 59:
      return 'Adulto'
    default:
      return 'Idoso'
  }
}

/**
 * Exercício #6 – Validação de dados (Guard Clauses)
 *
 * Crie uma função que receba nome e idade de um usuário.
 * - Se o nome for vazio → retorne "nome inválido"
 * - Se a idade for negativa → retorne "idade inválida"
 * - Caso contrário → retorne "Bem-vindo, <nome> (<idade>)"
 *
 * Use retornos antecipados (guard clauses) para evitar aninhamento de ifs.
 */
function saudarUsuario(nome, idade) {
  //Esse é o modelo de gaurd clauses
  if (!nome) return 'nome inválido'
  if (idade < 0) return 'idade inválida'

  return `Bem-vindo, ${nome}(${idade})`
}
/**
 * Exercício #7 – Faixa salarial
 *
 * Crie uma função que receba um salário e retorne:
 * - "júnior" para menos de 2000
 * - "pleno" para entre 2000 e 4999
 * - "sênior" para 5000 ou mais
 *
 * Implemente usando switch(true).
 */
function faixaSalarial(salario) {
  switch (true) {
    case salario < 2000:
      return 'Júnior'
    case salario >= 2000 && salario < 4999:
      return 'Pleno'
    default:
      return 'Sênior'
  }
}
/**
 * Exercício #8 – Acesso por tipo de usuário
 *
 * Crie duas funções (usando if/else e switch) que recebam um papel (role):
 * - "admin" → "acesso total"
 * - "editor" → "acesso leitura+escrita"
 * - "viewer" → "acesso leitura"
 * - Qualquer outro → "acesso negado"
 */
function acessoIf(role) {
  if (role === 'admin') {
    return 'acesso total'
  } else if (role === 'editor') {
    return 'acesso leitura+escrita'
  } else if (role === 'viewer') {
    return 'acesso leitura'
  } else {
    return 'acesso negado'
  }
}

function acessoSwitch(role) {
  switch (role) {
    case 'admin':
      return 'acesso total'
    case 'editor':
      return 'acesso leitura+escrita'
    case 'viewer':
      return 'acesso leitura'
    default:
      return 'acesso negado'
  }
}

//Exercicios extras para treinar o switch(valor)
//switch(valor)
// 📌 Aqui o valor passado no switch é comparado diretamente nos case.
/**
 * Crie uma função que receba um número de 1 a 7 e retorne o nome do dia da semana.
 * - 1 → "Domingo"
 * - 2 → "Segunda"
 * - ...
 * - 7 → "Sábado"
 * Se o número não estiver entre 1 e 7 → retorne "Dia inválido".
 *
 * Use switch(valor) e agrupe apenas se for necessário.
 */
function diaDaSemana(dia) {
  switch (dia) {
    case 1:
      return 'Domingo'
    case 2:
      return 'Segunda'
    case 3:
      return 'Terça'
    case 4:
      return 'Quarta'
    case 5:
      return 'Quinta'
    case 6:
      return 'Sexta'
    case 7:
      return 'Sábado'
    default:
      return 'Dia inválido'
  }
}
/**
 * Crie uma função que receba uma string representando um transporte:
 * - "carro" → "Automóvel motorizado"
 * - "moto" → "Motocicleta"
 * - "bicicleta" → "Veículo de propulsão humana"
 * - "patinete" → "Veículo de pequeno porte"
 * Qualquer outro → "Transporte desconhecido".
 *
 * Use switch(valor).
 */
function tipoTransporte(transporte) {
  switch (transporte) {
    case 'carro':
      return 'Automóvel motorizado'
    case 'moto':
      return 'Motocicleta'
    case 'bicicleta':
      return 'Veículo de propulsão humana'
    case 'patinete':
      return 'Veículo de pequeno porte'
    default:
      return 'Transporte desconhecido'
  }
}
/**
 * Crie uma função que receba um número de 1 a 12 representando o mês
 * e retorne a estação do ano no hemisfério sul:
 * - Verão → Dezembro, Janeiro, Fevereiro
 * - Outono → Março, Abril, Maio
 * - Inverno → Junho, Julho, Agosto
 * - Primavera → Setembro, Outubro, Novembro
 *
 * Use switch(valor) e agrupe meses no mesmo case.
 */
function estacaoDoAno(mes) {
  switch (mes) {
    case 12:
    case 1:
    case 2:
      return 'Verão'
    case 3:
    case 4:
    case 5:
      return 'Outono'
    case 6:
    case 7:
    case 8:
      return 'Inverno'
    case 9:
    case 10:
    case 11:
      return 'Primavera'
    default:
      return 'Mês inválido'
  }
}

//Exericios extras para treinar o switch(true)
// switch(true)
// 📌 Aqui o switch recebe true e os case são condições booleanas.
/**
 * Crie uma função que receba peso e altura e retorne:
 * - "Abaixo do peso" → IMC < 18.5
 * - "Peso normal" → IMC 18.5–24.9
 * - "Sobrepeso" → IMC 25–29.9
 * - "Obesidade" → IMC >= 30
 *
 * Use switch(true).
 */
function classificarIMC(peso, altura) {
  let IMC = peso / (altura * altura)
  switch (true) {
    case IMC < 18.5:
      return 'Abaixo do pedo'
    case IMC >= 18.5 && IMC <= 24.9:
      return 'Peso Normal'
    case (IMC) => 25 && IMC <= 29.9:
      return 'Sobrepeso'
    case IMC >= 30:
      return 'Obesidade'
    default:
      return 'Não foi possível calucular o IMC'
  }
}
/**
 * Crie uma função que receba uma nota de 0 a 100 e retorne:
 * - "Excelente" → 90 a 100
 * - "Bom" → 70 a 89
 * - "Regular" → 50 a 69
 * - "Insuficiente" → abaixo de 50
 * - Se fora de 0–100 → "Nota inválida"
 *
 * Use switch(true).
 */
function categoriaNota(nota) {
  switch (true) {
    case nota < 0 || nota > 100:
      return 'Nota inválida'
    case nota >= 90 && nota <= 100:
      return 'Excelente'
    case nota >= 70 && nota <= 89:
      return 'Bom'
    case nota >= 50 && nota <= 69:
      return 'Regular'
    default:
      return 'Insuficiente'
  }
}
/**
 * Crie uma função que receba a idade e retorne o valor da tarifa:
 * - Menor de 6 anos → "Grátis"
 * - 6 a 17 anos → "R$ 2,50"
 * - 18 a 59 anos → "R$ 5,00"
 * - 60 ou mais → "R$ 3,00"
 *
 * Use switch(true).
 */
function tarifaTransporte(idade) {
  switch (true) {
    case idade < 6:
      return 'Grátis'
    case idade >= 6 && idade <= 17:
      return 'R$ 2,50'
    case idade >= 18 && idade <= 59:
      return 'R$ 5,00'
    case idade >= 60:
      return 'R$ 3,00'
    default:
      return 'Idade inválida'
  }
}
