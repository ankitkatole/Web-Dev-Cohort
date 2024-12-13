import React, { createContext, useContext, useState } from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const count = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;


// import { useState, createContext, useContext } from "react"
// import './App.css'

// const BulbContext = createContext();

// function BulbProvider({ children }) {
//   const [bulbOn, setBulbOn] = useState(true);
//   return (
//     <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
//       {children}
//     </BulbContext.Provider>
//   )
// }


// function App() {
//   return (
//     <>
//       <BulbProvider>
//         <LightBulb />
//       </BulbProvider>
//     </>
//   )
// }



// const LightBulb = () => {
//   return <div>
//     <BulbState />
//     <ToggleBulbState />
//   </div>
// }



// const BulbState = () => {
//   const { bulbOn } = useContext(BulbContext)
//   return <div>
//     {bulbOn ? "Bulb On" : "Bulb Off"}
//   </div>
// }



// const ToggleBulbState = () => {
//   const { bulbOn, setBulbOn } = useContext(BulbContext)
//   function toggle() {
//     setBulbOn(!bulbOn)
//   }
//   return <div>
//     <button onClick={toggle}>Toggle Bulb</button>
//   </div>
// }



// export default App;