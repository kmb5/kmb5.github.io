import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h2>Hi there,</h2>
        <h1>I'm Bende.</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          👍 {count}
        </button>
      </div>
    </div>
  )
}

export default App
