/**
 * Crie uma função que receba um objeto com as propriedades:
 * - nome (string)
 * - idade (number)
 * - email (string)
 *
 * Regras:
 * - Se o nome for vazio → "Nome inválido"
 * - Se a idade for menor que 18 → "Cadastro permitido apenas para maiores de idade"
 * - Se o email não conter "@" → "Email inválido"
 * - Caso passe por todas as validações → "Cadastro realizado com sucesso"
 *
 * Use guard clauses para implementar.
 */
function validarCadastro(usuario) {
  if (!usuario.nome || usuario.nome.trim() === '') return 'Nome inválido'

  if (usuario.idade < 18)
    return 'Cadastro permitido apenas para maiores de idade'

  if (!usuario.email.includes('@')) return 'Email inválido'

  return 'Cadastro realizado com sucesso'
}

/**
 * Crie uma função que receba dois números e um operador (+, -, *, /, %)
 * e retorne o resultado da operação.
 * - Se o operador for inválido → "Operação inválida"
 * - Se houver tentativa de divisão por zero → "Erro: divisão por zero"
 *
 * Use switch(valor) para implementar.
 */
function calculadora(a, b, operador) {
  switch (operador) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      if (b === 0) return 'Erro: divisão por zero'
      return a / b
    case '%':
      if (b === 0) return 'Erro: divisão por zero'
      return a % b
    default:
      return 'Operação inválida'
  }
}

/**
 * Crie uma função que receba uma temperatura em °C e retorne:
 * - "Muito frio" → abaixo de 10
 * - "Frio" → 10 a 19
 * - "Agradável" → 20 a 29
 * - "Quente" → 30 a 39
 * - "Muito quente" → 40 ou mais
 *
 * Use switch(true) para implementar.
 */
function classificarTemperatura(temp) {
  switch (true) {
    case temp < 10:
      return 'Muito frio'
    case temp >= 10 && temp <= 19:
      return 'Frio'
    case temp >= 20 && temp <= 29:
      return 'Agradável'
    case temp >= 30 && temp <= 39:
      return 'Quente'
    case temp >= 40:
      return 'Muito Quente'
    default:
      return 'Temperatura inválida'
  }
}
/**
 * Crie uma função que receba uma nota de 0 a 100 e retorne:
 * - "Excelente" → 90 a 100
 * - "Bom" → 70 a 89
 * - "Regular" → 50 a 69
 * - "Insuficiente" → abaixo de 50
 * - Fora do intervalo → "Nota inválida"
 *
 * Use switch(true) e trate nota inválida primeiro.
 */
function categoriaNota(nota) {
  switch (true) {
    case nota < 0 || nota > 100:
      return 'Nota inválida'
    case nota >= 90:
      return 'Excelente'
    case nota >= 70:
      return 'Bom'
    case nota >= 50:
      return 'Regular'
    default:
      return 'Insuficiente'
  }
}
/**
 * Crie uma função que receba login e senha e retorne:
 * - "Acesso permitido" → login === "admin" e senha === "1234"
 * - "Senha incorreta" → login existe mas senha errada
 * - "Usuário não encontrado" → login não existe
 *
 * Use if/else compostos.
 */
function verificarLogin(login, senha) {
  if (login === 'admin' && senha === '1234') {
    return 'Acesso permitido'
  } else if (login === 'admin' && senha !== '1234') {
    return 'Senha Incorreta'
  } else {
    return 'Usuário não encontrado'
  }
}
