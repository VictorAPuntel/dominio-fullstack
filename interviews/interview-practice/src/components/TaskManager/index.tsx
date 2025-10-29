import { useState } from 'react'
import './style.css'

interface Task {
  id: number
  title: string
  done: boolean
}

export default function TaskManager() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState('')
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  )

  function handleAdd() {
    const title = task.trim()
    if (!title) return
    const newTask = { id: Date.now(), title, done: false }
    setTasks((prev) => [...prev, newTask])
    setTask('')
  }

  function handleRemove(index: Number) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  function handleToggle(id: Number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>

      <div className="row">
        <input
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <input
        placeholder="Filter tasks..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {filteredTasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {' '}
          {filteredTasks.map((t, i) => (
            <li key={t.id} className={t.done ? 'done' : ''}>
              {t.title}
              <button onClick={() => handleToggle(t.id)}>
                {t.done ? 'Undo' : 'Done'}
              </button>
              <button onClick={() => handleRemove(i)}>✖</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
