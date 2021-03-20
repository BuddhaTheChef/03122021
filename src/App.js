import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input)
  console.log(messages)

  const sendMessage = (event) => {
    // all logic to send message goes here
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <header className="App-header">
     <h1>Adding content</h1>
     <input value={input} onChange={event => setInput(event.target.value)}/>
     <button onClick={sendMessage}>Send Message</button>

     {messages.map(message => (
       <p>{message}</p>
     ))}
      </header>
    </div>
  );
}

export default App;
