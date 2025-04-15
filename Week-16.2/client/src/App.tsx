import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const inputRef = useRef();
  const wsRef = useRef();

  const [roomCode, setRoomCode] = useState('');
  const [username, setUsername] = useState('');
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!joined || !roomCode || !username) return;

    const ws = new WebSocket('ws://localhost:8080');
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: 'join',
        payload: {
          roomId: roomCode,
          username
        }
      }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };

    return () => ws.close();
  }, [joined, roomCode, username]);

  const sendMessage = () => {
    const message = inputRef.current.value;
    inputRef.current.value = '';
    if (message && wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'chat',
        payload: { message }
      }));
    }
  };

  const handleRoomJoin = (e) => {
    e.preventDefault();
    if (roomCode.trim() && username.trim()) {
      setJoined(true);
    }
  };

  if (!joined) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black">
        <form
          onSubmit={handleRoomJoin}
          className="flex flex-col w-full max-w-md gap-4 p-8 bg-gray-800 rounded-lg shadow-xl"
        >
          <h1 className="text-2xl font-bold text-center text-white">Join a Room</h1>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-12 px-4 text-white placeholder-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Room Code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            className="h-12 px-4 text-white placeholder-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="h-12 px-6 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
          >
            Join
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-end h-screen px-6 py-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="flex-1 p-4 mb-6 space-y-3 overflow-y-auto bg-gray-800 rounded-lg shadow-inner">
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.system ? (
              <div className="text-sm italic text-gray-400">{msg.message}</div>
            ) : (
              <div className="flex flex-col w-fit max-w-[90%]">
                <span className="mb-1 text-sm font-semibold text-blue-300">{msg.username}</span>
                <div className="px-4 py-2 text-white bg-gray-700 rounded-tl-none shadow-md rounded-xl">
                  {msg.message}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="flex-1 h-12 px-4 text-white placeholder-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="h-12 px-6 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
