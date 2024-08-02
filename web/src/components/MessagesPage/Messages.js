import React from 'react';
import './Messages.css';
import Navbar from "../Navbar/NavBar";

function MessagesPage({ user, onLogout }) {
  const chats = [
    {
      id: 1,
      name: 'Alice Johson',
      lastMessage: 'Hey! How are you?',
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      name: 'Carol Wilson',
      lastMessage: 'Do you want to grab a coffee?',
      timestamp: 'Yesterday',
    },
    {
      id: 3,
      name: 'Grace Taylor',
      lastMessage: 'Great! See you then.',
      timestamp: 'Monday',
    },
  ];

  const messages = [
    { id: 1, sender: 'You', content: 'Hey! How are you?', timestamp: '10:30 AM' },
    { id: 2, sender: 'Alice Johnson', content: 'I am good, thanks! You?', timestamp: '10:32 AM' },
    { id: 3, sender: 'You', content: 'Doing well, thank you!', timestamp: '10:33 AM' },
  ];

  return (
    <div className="messages-page-container">
      <Navbar user={user} onLogout={onLogout} />
      <div className="messages-page">
        <div className="chats-list">
          <h2>Your Matches</h2>
          <ul>
            {chats.map(chat => (
              <li key={chat.id} className="chat-item">
                <div className="chat-details">
                  <h3>{chat.name}</h3>
                  <p>{chat.lastMessage}</p>
                  <span className="timestamp">{chat.timestamp}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="chat-window">
          <h2>Chat with John Doe</h2>
          <div className="messages-list">
            {messages.map(message => (
              <div key={message.id} className={`message-item ${message.sender === 'You' ? 'sent' : 'received'}`}>
                <p><strong>{message.sender}:</strong> {message.content}</p>
                <span className="timestamp">{message.timestamp}</span>
              </div>
            ))}
          </div>
          <div className="message-input">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
