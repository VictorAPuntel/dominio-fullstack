// ex005 - Converter metros → centímetros e milímetros
// Objetivo: Ler uma medida em metros e converter para centímetros e milímetros
// Entrada: valor em metros
// Processamento: multiplicar por 100 e 1000 para converter
// Saída: exibir o valor equivalente em cm e mm

const prompt = require('prompt-sync')({ sigint: true })

function metersConverter() {
  const meters = Number(prompt('Digite o tamanho em metros: '))

  const centimeters = meters * 100
  const millimeters = meters * 1000

  console.log(`${meters} m = ${centimeters} cm | ${millimeters} mm`)
}

metersConverter()
