const input = document.querySelector('#itemText')
const addButton = document.querySelector('#addItem')
const listSection = document.querySelector('#list-item')
const alertBox = document.querySelector('#alert')

function showAlert(message) {
  alertBox.querySelector(
    '.alert-content'
  ).childNodes[2].textContent = `${message}`
  alertBox.style.display = 'block'

  setTimeout(() => {
    alertBox.style.display = 'none'
  }, 3000)
}

function createItem(text) {
  const li = document.createElement('li')
  li.classList.add('item-space')

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.classList.add('item-check')

  const span = document.createElement('span')
  span.textContent = text

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete')
  deleteBtn.innerHTML = '<img src="assets/img/icon delete.svg" alt="" />'
  deleteBtn.addEventListener('click', () => {
    li.remove()
    showAlert('The item has been removed from the list')
  })

  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(deleteBtn)

  let ul = listSection.querySelector('ul')
  if (!ul) {
    ul = document.createElement('ul')
    listSection.appendChild(ul)
  }

  ul.appendChild(li)
}

addButton.addEventListener('click', () => {
  const value = input.value.trim()

  if (value === '') {
    input.focus()
    return
  }

  createItem(value)
  input.value = ''
  input.focus()
})

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addButton.click()
  }
})
