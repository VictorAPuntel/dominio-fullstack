import { useMemo, useState } from 'react'
import './style.css'

const PRODUCTS = ['Vodka', 'Whisky', 'Gin', 'Tequila', 'Rum', 'Sake']

export default function ProductSearch() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return PRODUCTS
    return PRODUCTS.filter((p) => p.toLowerCase().includes(q))
  }, [query])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 16 }}>
      <h2>Product Search</h2>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {filtered.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
