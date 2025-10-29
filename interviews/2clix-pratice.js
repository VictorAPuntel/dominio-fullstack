const products = [
  { name: 'Vodka', price: 50 },
  { name: 'Tequila', price: 120 },
  { name: 'Whisky', price: 200 },
  { name: 'Gin', price: 90 },
]

// a) Retorne só os produtos com preço >= 100
// b) Retorne um array apenas com os nomes em maiúsculo
const upperNames = products
  .filter((product) => product.price >= 100)
  .map((product) => product.name.toUpperCase())

const grades = [7.5, 9, 8, 6.5, 10]

// a) Calcule a soma total
// b) Calcule a média
// c) Mostre "Aprovado" se média >= 7, senão "Reprovado"

const totalSum1 = grades.reduce((acc, num) => acc + num, 0)
const averageNum = totalSum / grades.length

if (averageNum >= 7) {
  console.log('Approved')
} else {
  console.log('Reproved')
}

const users = [
  { id: 1, name: 'Ana', role: 'Admin' },
  { id: 2, name: 'Bruno', role: 'User' },
  { id: 3, name: 'Carla', role: 'User' },
]

// a) Crie um objeto { nome: role }
const grouped = users.reduce((acc, user) => {
  acc[user.name] = user.role
  return acc
}, {})
// b) Agrupe por role → { Admin: ['Ana'], User: ['Bruno','Carla'] }
const groupedByRole = users.reduce((acc, user) => {
  const role = user.role

  if (!acc[role]) {
    acc[role] = []
  }

  acc[role].push(user.name)
  return acc
}, {})

const players = [
  { name: 'Cael', score: 250 },
  { name: 'Jinwoo', score: 500 },
  { name: 'Zariel', score: 400 },
]

// a) Ordene do maior pro menor
// b) Retorne apenas os nomes em ordem

const descendingNames = [...players]
  .sort((a, b) => b.score - a.score)
  .map((player) => player.name)

const sales = [
  { product: 'Vodka', amount: 10, price: 50 },
  { product: 'Whisky', amount: 5, price: 200 },
  { product: 'Vodka', amount: 8, price: 70 },
]

// a) Calcule o total vendido (amount * price)
// b) Crie um objeto { produto: totalVendido }
const totalSum2 = sales.reduce((acc, sale) => {
  const totalSales = sale.amount * sale.price

  if (!acc[sale.product]) {
    acc[sale.product] = 0
  }

  acc[sale.product] += totalSales
  return acc
}, {})

const tasks = [
  { id: 1, category: 'Frontend', title: 'Fix navbar' },
  { id: 2, category: 'Backend', title: 'Optimize query' },
  { id: 3, category: 'Frontend', title: 'Add dark mode' },
  { id: 4, category: 'DevOps', title: 'Update pipeline' },
  { id: 5, category: 'Backend', title: 'Refactor API routes' },
]

// a) Agrupe as tarefas por categoria,
// colocando os OBJETOS completos dentro do agrupamento

const groupedTasks = tasks.reduce((acc, task) => {
  const category = task.category

  if (!acc[category]) {
    acc[category] = []
  }

  acc[category].push(task)
  return acc
}, {})

const orders = [
  {
    id: 1,
    client: 'Alice',
    items: [
      { name: 'Vodka', price: 50 },
      { name: 'Whisky', price: 200 },
    ],
  },
  {
    id: 2,
    client: 'Bob',
    items: [
      { name: 'Tequila', price: 120 },
      { name: 'Gin', price: 80 },
    ],
  },
  { id: 3, client: 'Alice', items: [{ name: 'Whisky', price: 150 }] },
]

// a) Agrupe os pedidos por cliente, somando o total gasto em cada pedido
// b) Retorne um array no formato:
// [
//   { client: 'Alice', total: 400 },
//   { client: 'Bob', total: 200 }
// ]

const groupedOrders = orders.reduce((acc, order) => {
  const client = order.client
  const orderTotal = order.items.reduce((sum, item) => sum + item.price, 0)

  if (!acc[client]) {
    acc[client] = 0
  }

  acc[client] += orderTotal
}, {})

const result = Object.entries(groupedOrders).map(([client, total]) => ({
  client,
  total,
}))
