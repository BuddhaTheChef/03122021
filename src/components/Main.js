import React, { useState, useEffect } from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import '../App.css';
import { Link } from 'react-router-dom';

import Message from './Message';

function MainPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // console.log(input)
  // console.log(messages)

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    // all logic to send message goes here
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    
    <div className="App">
        <Link to="/next">Show Next Page</Link>
      <header className="App-header">
     <h1>Live message board</h1>
     <h2>Welcome {username}</h2>
     <form>
       <FormControl>
         <InputLabel>Enter a message...</InputLabel>
         <Input value={input} onChange={event => setInput(event.target.value)}/>
         <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
       </FormControl>
     </form>
     {messages.map(message => (
       <Message username={message.username} text={message.text} />
     ))}
      </header>
    </div>
  );
}

export default MainPage;