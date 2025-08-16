switch(true) → cases são condições.
switch(valor) → cases são valores literais (números, strings, etc).

Exercicio do dia 4:
Boa tentativa 🚀 mas aqui você caiu em uma armadilha clássica do switch(true):
No seu código, o primeiro case (nota <= 100) já captura praticamente todas as notas válidas (0 até 100).
Ou seja, sempre vai bater ali e nunca vai chegar nos outros casos.
Repara na lógica:
Sempre tratamos erros/fora do intervalo primeiro.
Depois vamos descendo da maior faixa até a menor, porque isso evita sobreposição.
Quer que eu te monte um mapa visual das condições (tipo fluxograma simplificado) pra te ajudar a não se perder nessas faixas de valores
