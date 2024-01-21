import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
      <header className="app-header">
        <h1>Hello Dojo!</h1>
      </header>
      <main className="app-main">
        <p>Things I need to do:</p>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt.Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </main>
    </div>
    </>
  )
}

export default App
