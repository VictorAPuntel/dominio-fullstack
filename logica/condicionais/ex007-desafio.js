// ex007-desafio - Classificador de Temperatura
// Objetivo: Ler uma temperatura e verificar se o clima está frio, agradável ou quente
// Entrada: 1 número (temperatura)
// Processamento: Comparar a temperatura com os limites definidos
// Saída: Exibir uma mensagem conforme o resultado

const prompt = require('prompt-sync')({ sigint: true })

function temperatureClassifier() {
  const temperature = Number(prompt('Digite a temperatura: '))

  if (temperature < 15) {
    console.log('Está frio!')
  } else if (temperature >= 15 && temperature <= 30) {
    console.log('O clima está agradável.')
  } else {
    console.log('Está quente!')
  }
}

temperatureClassifier()
