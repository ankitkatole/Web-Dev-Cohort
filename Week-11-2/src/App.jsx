import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/counter'

function App() {
  return (
    <>
      <RecoilRoot>
        <Counter />
      <br />
      <Buttons />
      <Count />
      <IsEven />
      </RecoilRoot>
    </>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 1);
  }
  function decrease() {
    setCount(c => c - 1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Count() {
  const count2 = useRecoilValue(counterAtom);
  return <div>
    {count2}<br />
  </div>
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return <div>
    {even ? "Even" : "Odd"}
  </div>
}

function Counter() {

  return <div>
    <h1>Counter</h1>
    <CurrentCount /><br />
    <Increase /><br />
    <Decrease />
  </div>
}

const CurrentCount = () => {
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}<br />
  </div>
}

const Increase = () => {
  const setCount = useSetRecoilState(counterAtom);
  return <div>
    <button onClick={() => {
      setCount((prev) => prev + 1)
    }}>Increase</button>
  </div>
}

const Decrease = () => {
  const setCount = useSetRecoilState(counterAtom);
  return <div>
    <button onClick={() => {
      setCount((prev) => prev - 1)
    }}>Decrease</button>
  </div>
}

export default App


//Using UseState Hook

// const Counter = ()=>{
//   const [count,setCount] = useState(0);
//   return <>
//     {count}<br />
//     <Increase setCount = {setCount}/><br />
//     <Decrease setCount = {setCount}/>
//   </>
// }

// const Increase = ({setCount})=>{
//   return <div>
//     <button onClick={()=>{
//       setCount((prev)=>prev+1)
//     }}>Increase</button>
//   </div>
// }
// const Decrease = ({setCount})=>{
//   return <div>
//     <button onClick={()=>{
//       setCount((prev)=>prev-1)
//     }}>Decrease</button>
//   </div>
// }