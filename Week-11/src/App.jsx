import { useState, createContext, useContext } from "react"
import './App.css'

const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
      {children}
    </BulbContext.Provider>
  )
}


function App() {
  return (
    <>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
    </>
  )
}



const LightBulb = () => {
  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}



const BulbState = () => {
  const { bulbOn } = useContext(BulbContext)
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off"}
  </div>
}



const ToggleBulbState = () => {
  const { bulbOn, setBulbOn } = useContext(BulbContext)
  function toggle() {
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>Toggle Bulb</button>
  </div>
}



export default App;