import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>Hello, I'm <b>Bende</b>.</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          👍 {count}
        </button>
      </div>
    </div>
  )
}

export default App
