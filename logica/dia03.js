// Mistura de Condicionais e Validações
// Foco: consolidar if/else, switch(valor) e switch(true) juntos, com mais de uma validação por função
/**
 * Crie uma função que receba a velocidade de um carro e retorne:
 * - "Velocidade inválida" → se for negativa ou acima de 300
 * - "Dentro do limite" → até 80 km/h
 * - "Acima do limite" → 81 a 120 km/h
 * - "Multa grave" → acima de 120 km/h
 *
 * Use switch(true).
 */
function limiteVelocidade(velocidade) {
  switch (true) {
    case velocidade < 0 || velocidade > 300:
      return 'Velocidade inválida'
    case velocidade <= 80:
      return 'Dentro do limite'
    case velocidade <= 120:
      return 'Acima do limite'
    default:
      return 'Multa grave'
  }
}

/**
 * Crie uma função que receba um valor em reais e uma moeda alvo ("USD", "EUR", "GBP")
 * e retorne o valor convertido.
 * - Use taxas fictícias:
 *   USD = 5.0, EUR = 6.0, GBP = 7.0
 * - Se a moeda for inválida → "Moeda não suportada"
 *
 * Use switch(valor).
 */
function conversorDeMoeda(valor, moeda) {
  const USD = 5.0
  const EUR = 6.0
  const GBP = 7.0
  switch (moeda) {
    case 'USD':
      return (valor * USD).toFixed(2)
    case 'EUR':
      return (valor * EUR).toFixed(2)
    case 'GBP':
      return (valor * GBP).toFixed(2)
    default:
      return 'Moeda não suportada'
  }
}

/**
 * Crie uma função que receba nome, preço e quantidade de um produto.
 * - Se nome for vazio → "Nome inválido"
 * - Se preço <= 0 → "Preço inválido"
 * - Se quantidade < 0 → "Quantidade inválida"
 * - Caso contrário → retorne um objeto { nome, preco, quantidade, total }
 *   onde total = preço * quantidade
 *
 * Use guard clauses.
 */
// No return, você acabou criando invetory = { ... } e usando String, Number em vez de valores reais. Isso não guarda os parâmetros, só tipos.
// O objeto precisa usar os valores passados na função (nome, preco, quantidade).
function inventario(nome, preco, quantidade) {
  if (!nome) return 'Nome inválido'
  if (preco <= 0) return 'Preço inválido'
  if (quantidade < 0) return 'Quantidade inválida'

  return (invetory = {
    nome,
    preco,
    quantidade,
    total: preco * quantidade,
  })
}

/**
 * Refaça o exercício de IMC do Dia 1, mas:
 * - Valide dados inválidos (peso <= 0 ou altura <= 0)
 * - Use switch(true)
 * - Inclua uma faixa extra "Obesidade grave" → IMC >= 40
 */

function classificarIMC(peso, altura) {
  if (peso <= 0) return 'Peso inválido'
  if (altura <= 0) return 'Altura inválida'

  const IMC = peso / (altura * altura)

  switch (true) {
    case IMC < 18.5:
      return 'Abaixo do peso'
    case IMC >= 18.5 && IMC <= 24.9:
      return 'Peso normal'
    case IMC >= 25 && IMC <= 29.9:
      return 'Sobrepeso'
    case IMC >= 30 && IMC <= 39.9:
      return 'Obesidade'
    case IMC >= 40:
      return 'Obesidade grave'
  }
}

/**
 * Crie uma função que receba um papel de usuário ("admin", "editor", "viewer")
 * e retorne:
 * - "Acesso total" → admin
 * - "Acesso leitura+escrita" → editor
 * - "Acesso leitura" → viewer
 * - Qualquer outro → "Acesso negado"
 *
 * Use switch(valor).
 */

function userRole(role) {
  switch (role.toLowerCase()) {
    case 'admin':
      return 'Acesso total'
    case 'editor':
      return 'Acesso leitura+escrita'
    case 'viewer':
      return 'Acesso leitura'
    default:
      return 'Acesso negado'
  }
}
