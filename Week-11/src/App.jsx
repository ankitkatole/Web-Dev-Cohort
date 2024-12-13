import {useState,createContext} from "react"
import './App.css'



function App() {

  return (
    <>
      <LightBulb />
    </>
  )
}

const LightBulb = ()=>{
  const [bulbOn, setBulbOn] = useState(true);
  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn}  setBulbOn={setBulbOn} />
  </div>
}

const BulbState = ({bulbOn})=>{
  return <div>
    {bulbOn? "Bulb On":"Bulb Off"}
  </div>
}
const ToggleBulbState = ({bulbOn,setBulbOn})=>{
  function toggle(){
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>Toggle Bulb</button>
  </div>
}

export default App;