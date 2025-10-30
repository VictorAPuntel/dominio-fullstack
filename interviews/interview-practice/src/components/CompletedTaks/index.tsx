import { useState } from 'react'

export default function CompletedTasks() {
  const [tasks] = useState([
    { id: 1, title: 'Study React', completed: true },
    { id: 2, title: 'Go to gym', completed: false },
    { id: 3, title: 'Read a book', completed: true },
    { id: 4, title: 'Play guitar', completed: false },
  ])
  const [search, setSearch] = useState('')

  const filtered = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )

  const done = filtered.filter((task) => task.completed)
  const pending = filtered.filter((task) => !task.completed)

  return (
    <div>
      <h2>✅ Completed</h2>
      <ul>
        {done.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <h2>⏳ Pending</h2>
      <ul>
        {pending.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
