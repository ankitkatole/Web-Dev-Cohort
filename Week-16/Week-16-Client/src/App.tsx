import { useEffect, useRef, useState } from "react"
import "./App.css"
const App = () => {

  const [socket, setSocket] = useState();
  //@ts-ignore
  const inputRef = useRef();

  function sendMessage() {
    if (!socket) return;

    //@ts-ignore
    const message = inputRef.current.value;
    //@ts-ignore
    inputRef.current.value = "";
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    //@ts-ignore
    setSocket(ws);

    ws.onerror = () => {
      console.log("Error Occured");
    }

    ws.onmessage = (event) => {
      alert(event.data);
      console.log(event.data);
    }

  }, []);
  return (
    <div>
      {/* @ts-ignore */}
      <input ref={inputRef} type="text" placeholder="Enter Your Message" style={{ height: "50px", fontSize: "25px", display: "block", borderRadius: "50px", border: "none", padding: "10px", textAlign: "center" }} />
      <button onClick={sendMessage} style={{ margin: "10px", boxShadow: "0.1px 1px 20px green" }}>Send</button>
    </div>
  )
}

export default App
