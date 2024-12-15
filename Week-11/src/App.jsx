import { useState } from 'react'
import './App.css'

function useCounter(){
  const [count, setCount] = useState(0)
  function increaseCount(){ setCount(count + 1) }
  return{
    count,increaseCount
  }
}

function App() {
  const {count,increaseCount} = useCounter();

  return (
    <>
      <Counter /><br />
      <Counter /><br />
      <Counter /><br />
      <Counter /><br />
    </>
  )
}

function Counter(){
  const {count,increaseCount} = useCounter();

  return(
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

export default App
