import React from "react";
import { PostComponent } from "./PostComponent";

const App = ()=>{
      
  return <>
  <ErrorBoundary>
    <Card1 />
  </ErrorBoundary>
  <ErrorBoundary>
    <Card2 />
  </ErrorBoundary>


  </>
}


function Card1(){
  throw new Error("Error While rendering")
  return <>
  <div style={{background:"red",borderRadius:20,padding:20, margin:20}}>Card 1</div>
</>
}
function Card2(){
  return <>
  <div style={{background:"red",borderRadius:20,padding:20,margin: 20}}>Card 2</div>
</>
}
export default App

class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  componentDidCatch(error, info) {
      console.error("Error caught:", error, info);
  }

  render() {
      if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
      }

      return this.props.children; 
  }
}

// const [posts, setPosts] = useState([]);

// const postComponents = posts.map(post => <PostComponent
//   name={post.name}
//   subtitle={post.subtitle}
//   time={post.title}
//   image={post.image}
//   description={post.description}
// />)

// function addPost() {
//   setPosts([...posts, {
//     name: "harkirat",
//     subtitle: "10000 followers",
//     time: "2m ago",
//     image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//     description: "What to know how to win big? Check out how these folks won $6000 in bounties."
//   }])
// }

// return (
//   <div style={{background: "#dfe6e9", height: "100vh", }}>
//     <button onClick={addPost}>Add post</button>
//     <div style={{display: "flex", justifyContent: "center" }}>
//       <div>
//         {postComponents}
//       </div>
//     </div>
//   </div>
// )


// const [count, setCount] = useState(1);
//   function incrementCount() {
//     setCount(currentValue => {
//       if (currentValue === 60) {
//         return 0;
//       }
//       return currentValue + 1;
//     });
//   }

//   useEffect(() => {
//     setInterval(incrementCount, 1000);
//   }, [])

//   useEffect(()=>{
//     console.log("The count is updated "+count)
//   },[count])

//   return <div>
//     {count}
//   </div>

// const [currentTab , setCurrentTab] = useState(1);
//   const [tabData,setTabData] = useState({});
//   const [loading, setLoading] = useState(true);


//   useEffect(()=>{
//     setLoading(true);
//     console.log("Sending backend Request to TODO #"+currentTab);
//     fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
//       .then(async res =>{
//         const json = await res.json();
//         setTabData(json)
//         setLoading(false);
//       })
//   },[currentTab]);

//   return <>
//     <div>
//       <button onClick={() => {
//         setCurrentTab(1)
//       }} style={{ backgroundColor: currentTab == 1 ? "red" : "white" }}>TODO #1</button>
//       <button onClick={() => {
//         setCurrentTab(2)
//       }} style={{ backgroundColor: currentTab == 2 ? "red" : "white" }}>TODO #2</button>
//       <button onClick={() => {
//         setCurrentTab(3)
//       }} style={{ backgroundColor: currentTab == 3 ? "red" : "white" }}>TODO #3</button>
//       <button onClick={() => {
//         setCurrentTab(4)
//       }} style={{ backgroundColor: currentTab == 4 ? "red" : "white" }}>TODO #4</button><br /><br />
//       {loading? "loading....": tabData.title}
      
//     </div>
//   </>


// const [showTimer,setShowTimer] = useState(true);
//   useEffect(()=>{
//     setInterval(()=>{
//       setShowTimer(currentValue => !currentValue)
//     },5000)
//   },[])
//   return <div>
//     {showTimer && <Timer />}
//   </div>
// }

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//       const interval = setInterval(() => {
//           setSeconds(prev => prev + 1);
//       }, 1000);

//       return () => clearInterval(interval);
//   }, []);

//   return <div>{seconds} seconds elapsed</div>;



// const Card = ({ children }) => {
//   return (
//       <div style={{
//           border: '1px solid #ccc',
//           borderRadius: '5px',
//           padding: '20px',
//           margin: '10px',
//           boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//       }}>
//           {children}
//       </div>
//   );
// };

// const App = () => {
//   return (
//       <div>
//           <Card>
//               <h2>Card Title</h2>
//               <p>This is some content inside the card.</p>
//           </Card>
//           <Card>
//               <h2>Another Card</h2>
//               <p>This card has different content!</p>
//           </Card>
//       </div>
//   );
// };
