import { useState } from 'react'
import './App.css'

function App() {
 return (
    <>
      <Counter />
    </>
  )
}

const Counter = ()=>{
  const [count,setCount] = useState(0);
  return <>
    {count}<br />
    <Increase setCount = {setCount}/><br />
    <Decrease setCount = {setCount}/>
  </>
}

const Increase = ({setCount})=>{
  return <div>
    <button onClick={()=>{
      setCount((prev)=>prev+1)
    }}>Increase</button>
  </div>
}
const Decrease = ({setCount})=>{
  return <div>
    <button onClick={()=>{
      setCount((prev)=>prev-1)
    }}>Decrease</button>
  </div>
}

export default App
