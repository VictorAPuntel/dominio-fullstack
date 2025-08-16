// Desafios com Regras Mais Complexas
// Foco: mais de uma regra por cenário e cálculos mais elaborados.
/**
 * Crie uma função que receba valor e tipo de cliente:
 * - "comum" → sem desconto
 * - "fidelidade" → 5% de desconto
 * - "vip" → 10% de desconto
 *
 * Retorne o valor final.
 * Use switch(valor).
 */

function discountClient(valor, client) {
  switch (client.toLowerCase()) {
    case 'comum':
      return valor
    case 'fidelidade':
      return valor * 0.95 // 5% de desconto
    case 'vip':
      return valor * 0.9 // 10% de desconto
    default:
      return 'Tipo de cliente não reconhecido'
  }
}
/**
 * Crie uma função que receba consumo em kWh e retorne:
 * - "Baixo consumo" → até 100 kWh → R$ 0,5/kWh
 * - "Consumo moderado" → 101 a 300 kWh → R$ 0,7/kWh
 * - "Alto consumo" → acima de 300 kWh → R$ 1.0/kWh
 *
 * Retorne um objeto com { categoria, valorTotal }
 * Use switch(true).
 */
//Correção
// Você usou kwl em vez de kwh → isso quebra a função.

// Não precisa criar/atribuir a uma variável totalConsumo dentro do return. Você pode retornar o objeto direto.

// Sempre bom garantir um default caso chegue valor inválido (ex: negativo).

function consumoKwh(kwh) {
  switch (true) {
    case kwh < 0:
      return { categoria: 'Valor inválido', valorTotal: 0 }

    case kwh <= 100:
      return {
        categoria: 'Baixo consumo',
        valorTotal: kwh * 0.5,
      }

    case kwh <= 300:
      return {
        categoria: 'Consumo moderado',
        valorTotal: kwh * 0.7,
      }

    default: // acima de 300
      return {
        categoria: 'Alto consumo',
        valorTotal: kwh * 1.0,
      }
  }
}

/**
 * Crie uma função que receba a classificação indicativa (idade mínima)
 * e retorne:
 * - "Livre" → 0
 * - "10 anos" → 10
 * - "12 anos" → 12
 * - "14 anos" → 14
 * - "16 anos" → 16
 * - "18 anos" → 18
 * - Caso inválido → "Classificação inválida"
 *
 * Use switch(valor).
 */
// Correção
// No switch(valor), os cases não devem ser expressões booleanas (idade === 10), mas sim valores literais (10, 12, etc). O switch compara direto o valor da variável com o case.

// 👉 Seu código está sempre avaliando idade === 10 → isso vira true ou false, e nunca bate com idade.
function minimumAge(idade) {
  switch (idade) {
    case 0:
      return 'Livre'
    case 10:
      return '10 anos'
    case 12:
      return '12 anos'
    case 14:
      return '14 anos'
    case 16:
      return '16 anos'
    case 18:
      return '18 anos'
    default:
      return 'Classificação inválida'
  }
}

/**
 * Crie uma função que receba peso (kg) e distância (km) e calcule o frete:
 * - Se peso <= 0 ou distância <= 0 → "Dados inválidos"
 * - Até 5kg → R$ 5 por km
 * - 5,1kg a 20kg → R$ 10 por km
 * - Acima de 20kg → R$ 15 por km
 *
 * Retorne o valor total.
 * Use switch(true).
 */

function calculaFrete(peso, distancia) {
  switch (true) {
    case peso <= 0 || distancia <= 0:
      return 'Dados inválidos'
    case peso <= 5:
      return 5 * distancia
    case peso <= 20:
      return 10 * distancia
    default:
      return 15 * distancia
  }
}

/**
 * Crie uma função que receba a pontuação de um aluno (0 a 100)
 * e retorne:
 * - "Aprovado com louvor" → 90 a 100
 * - "Aprovado" → 70 a 89
 * - "Recuperação" → 50 a 69
 * - "Reprovado" → abaixo de 50
 * - Fora do intervalo → "Nota inválida"
 *
 * Use switch(true).
 */

function studentNote(nota) {
  switch (true) {
    case nota < 0 || nota > 100:
      return 'Nota inválida'
    case nota >= 90:
      return 'Aprovado com louvor'
    case nota >= 70:
      return 'Aprovado'
    case nota >= 50:
      return 'Recuperação'
    default:
      return 'Reprovado'
  }
}
