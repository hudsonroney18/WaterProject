import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectList from './ProjectList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProjectList />
    </>
  )
}

export default App
