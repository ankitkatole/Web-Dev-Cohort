import React, { useEffect, useRef, useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState(["Hello!", "How are you?"]);
  const chatBoxRef = useRef(null);

  // Function to simulate adding new messages
  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, "New message!"]);
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

export default Chat;
