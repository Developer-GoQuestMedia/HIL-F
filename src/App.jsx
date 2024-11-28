import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>Vite + React + Node.js</h1>
      <div>
        Message from backend: {message}
      </div>
    </>
  )
}

export default App
