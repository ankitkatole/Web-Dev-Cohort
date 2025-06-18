import { useState } from 'react'
import './App.css'
import { usePostTitle, useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev'


function App() {
  const postTitle = usePostTitle();
  const [currentPost, setCurrentPost] = useState(1);
  const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`);
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count);
  return (
    <>
      <button onClick={() => setCurrentPost(1)}>1</button><br /><br />
      <button onClick={() => setCurrentPost(2)}>2</button><br /><br />
      <button onClick={() => setCurrentPost(3)}>3</button><br /><br />
      <button onClick={() => setCurrentPost(4)}>4</button><br /><br />
      {postTitle}<br /><br />
      {loading ? "Loading..." : JSON.stringify(data)}
      <br /><br />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter with usePrev Hook</h1>
        <p>Current Count: {count}</p>
        <p>Previous Count: {prevCount}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
      </div>
    </>
  )
}


export default App
