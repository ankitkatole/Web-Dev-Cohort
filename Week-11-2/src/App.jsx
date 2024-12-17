// import { networkAtom,jobsAtom,messagingAtom,notificationAtom,totalSelector } from './atoms';
// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { notifications, totalNotificationSelector } from './atoms'
// import { useEffect } from 'react'
// import axios from 'axios'
// import './App.css'


//Atom Family
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';



function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}



//Dynamic Queries
// function App() {
//   return <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
// }

// function MainApp() {
//   const [networkCount, setNetworkCount] = useRecoilState(notifications)
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // useEffect(() => {
    // fetch but this is noob way
  //   axios.get("https://67604f996be7889dc35d8df0.mockapi.io/nav/nav")
  //     .then(res => {
  //       setNetworkCount(res.data[0])
  //     })
  // }, [])

//   return (
//     <div>
//       <button>Home</button>
      
//       <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
//       <button>Jobs ({networkCount.jobs})</button>
//       <button>Messaging ({networkCount.messaging})</button>
//       <button>Notifications ({networkCount.notifications})</button>

//       <button>Me ({totalNotificationCount})</button>
//     </div>
//   )
// }

// const App = () => {
//   return <div>
//     <RecoilRoot>
//       <NavBar />
//     </RecoilRoot>
//   </div>
// }

// const NavBar = () => {
//   const networkCount = useRecoilValue(networkAtom);
//   const jobCount = useRecoilValue(jobsAtom);
//   const messCount = useRecoilValue(messagingAtom);
//   const notiCount = useRecoilValue(notificationAtom);
//   const totalCount = useRecoilValue(totalSelector);
//   const incnet = useSetRecoilState(networkAtom);
//   return <>
//     <button>Home</button><br /><br />
//     <button>My Network ({networkCount})</button><br /><br />
//     <button>Jobs ({jobCount}) </button><br /><br />
//     <button>Messages ({messCount})</button><br /><br />
//     <button>Notifications ({notiCount})</button><br /><br />
//     <button>Me ({totalCount})</button><br /><br />
//     <button onclick={()=>incnet((prev)=>prev+1)}>Increase Network</button>
//   </>
// }

export default App;

// import { useState } from 'react'
// import './App.css'
// import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
// import { counterAtom, evenSelector } from './store/atoms/counter'

// function App() {
//   return (
//     <>
//       <RecoilRoot>
//         <Counter />
//       <br />
//       <Buttons />
//       <Count />
//       <IsEven />
//       </RecoilRoot>
//     </>
//   )
// }

// function Buttons() {
//   const setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount(c => c + 1);
//   }
//   function decrease() {
//     setCount(c => c - 1);
//   }

//   return <div>
//     <button onClick={increase}>Increase</button>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }

// function Count() {
//   const count2 = useRecoilValue(counterAtom);
//   return <div>
//     {count2}<br />
//   </div>
// }

// function IsEven() {
//   const even = useRecoilValue(evenSelector);

//   return <div>
//     {even ? "Even" : "Odd"}
//   </div>
// }

// function Counter() {

//   return <div>
//     <h1>Counter</h1>
//     <CurrentCount /><br />
//     <Increase /><br />
//     <Decrease />
//   </div>
// }

// const CurrentCount = () => {
//   const count = useRecoilValue(counterAtom);
//   return <div>
//     {count}<br />
//   </div>
// }

// const Increase = () => {
//   const setCount = useSetRecoilState(counterAtom);
//   return <div>
//     <button onClick={() => {
//       setCount((prev) => prev + 1)
//     }}>Increase</button>
//   </div>
// }

// const Decrease = () => {
//   const setCount = useSetRecoilState(counterAtom);
//   return <div>
//     <button onClick={() => {
//       setCount((prev) => prev - 1)
//     }}>Decrease</button>
//   </div>
// }

// export default App


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