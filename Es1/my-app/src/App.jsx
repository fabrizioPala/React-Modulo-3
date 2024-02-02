import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from './Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container title={"my new Title"} className="app">
        <h1>Here is the title</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Container>
      
    </>
  )
}

export default App
