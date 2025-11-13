// Basic state
let tasks = [] // each task: { id, title, completed }

// DOM elements
const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-title')
const taskList = document.querySelector('#task-list')

const filterButtons = document.querySelectorAll('.filter-btn')
const countTotal = document.querySelector('#count-total')
const countActive = document.querySelector('#count-active')
const countCompleted = document.querySelector('#count-completed')

const clearCompletedButton = document.querySelector('#clear-completed')

// Current filter: "all" | "active" | "completed"
let currentFilter = 'all'

// Load initial data from localStorage (if any)
function loadFromStorage() {
  const savedTasks = localStorage.getItem('tasks')

  if (savedTasks) {
    try {
      tasks = JSON.parse(savedTasks)
    } catch (error) {
      console.error('Erro ao fazer parse das tasks:', error)
      tasks = []
    }
  } else {
    tasks = []
  }

  renderTasks()
  updateCounters()
}

// Save current tasks to localStorage
function saveToStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Handle form submit: add a new task
function handleAddTask(event) {
  event.preventDefault()

  const text = taskInput.value.trim()
  if (!text) return

  const newTask = {
    id: Date.now(), // id simples baseado no timestamp
    title: text,
    completed: false,
  }

  tasks.push(newTask)

  taskInput.value = ''
  taskInput.focus()

  saveToStorage()
  renderTasks()
  updateCounters()
}

// Toggle task completed by id
function toggleTaskCompleted(id) {
  const task = tasks.find((task) => task.id === id)
  if (!task) return

  task.completed = !task.completed

  saveToStorage()
  renderTasks()
  updateCounters()
}

// Remove task by id
function removeTask(id) {
  tasks = tasks.filter((task) => task.id !== id)

  saveToStorage()
  renderTasks()
  updateCounters()
}

// Clear all completed tasks
function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed)

  saveToStorage()
  renderTasks()
  updateCounters()
}

// Change filter: "all" | "active" | "completed"
function changeFilter(filter) {
  currentFilter = filter

  // atualiza o botão ativo
  filterButtons.forEach((btn) => {
    const value = btn.dataset.filter
    if (value === currentFilter) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  })

  renderTasks()
}

// Decide quais tasks mostrar baseado no filtro
function getVisibleTasks() {
  if (currentFilter === 'active') {
    return tasks.filter((task) => !task.completed)
  }

  if (currentFilter === 'completed') {
    return tasks.filter((task) => task.completed)
  }

  return tasks
}

// Render tasks list based on currentFilter
function renderTasks() {
  taskList.innerHTML = ''

  const visibleTasks = getVisibleTasks()

  if (visibleTasks.length === 0) {
    const empty = document.createElement('li')
    empty.textContent = 'No tasks yet.'
    empty.style.fontSize = '13px'
    empty.style.color = '#9ca3af'
    taskList.appendChild(empty)
    return
  }

  visibleTasks.forEach((task) => {
    const li = document.createElement('li')
    li.classList.add('task-item')

    const left = document.createElement('div')
    left.classList.add('task-left')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = task.completed
    checkbox.addEventListener('change', () => toggleTaskCompleted(task.id))

    const titleSpan = document.createElement('span')
    titleSpan.classList.add('task-title')
    if (task.completed) {
      titleSpan.classList.add('done')
    }
    titleSpan.textContent = task.title

    left.appendChild(checkbox)
    left.appendChild(titleSpan)

    const actions = document.createElement('div')
    actions.classList.add('task-actions')

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn', 'btn-small', 'btn-danger')
    deleteBtn.textContent = 'Remove'
    deleteBtn.addEventListener('click', () => removeTask(task.id))

    actions.appendChild(deleteBtn)

    li.appendChild(left)
    li.appendChild(actions)

    taskList.appendChild(li)
  })
}

// Update counters (total, active, completed)
function updateCounters() {
  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length
  const active = total - completed

  countTotal.textContent = total
  countCompleted.textContent = completed
  countActive.textContent = active
}

// Attach event listeners
function setupEventListeners() {
  taskForm.addEventListener('submit', handleAddTask)

  clearCompletedButton.addEventListener('click', clearCompletedTasks)

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter
      changeFilter(filter)
    })
  })
}

// Init app
function init() {
  setupEventListeners()
  loadFromStorage()
}

init()
