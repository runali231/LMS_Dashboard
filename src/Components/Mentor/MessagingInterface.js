import React, { useState, useEffect } from 'react';
import '../Css/MessagingInterface.css';

function MessagingInterface({ sendMessage, sendAttachment }) {
  // Mocked data for conversations and messages
  const [conversations, setConversations] = useState([
    { id: 1, name: 'Mentor/Instructor 1', type: 'mentor' },
    { id: 2, name: 'Classmate Group 1', type: 'group' },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [messageText, setMessageText] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [showComposeModal, setShowComposeModal] = useState(false);

  // Mocked data for messages
  const mockedMessages = {
    1: [
      { id: 1, text: 'Hello!', sender: 'mentor' },
      { id: 2, text: 'Hi there!', sender: 'student' },
    ],
    2: [
      { id: 1, text: 'Group message 1', sender: 'group' },
      { id: 2, text: 'Group message 2', sender: 'group' },
    ],
  };

  useEffect(() => {
    // Load initial messages for the selected conversation
    if (selectedConversation) {
      setMessages(mockedMessages[selectedConversation.id]);
    }
  }, [selectedConversation]);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = { id: messages.length + 1, text: messageInput, sender: 'student' };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  const handleMessageChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleComposeNewMessage = () => {
    setShowComposeModal(true);
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  const handleSendAttachment = () => {
    if (attachment) {
      sendAttachment(attachment);
      setAttachment(null);
    }
  };

  // Function to determine the message alignment based on the sender
  const getMessageAlignment = (sender) => {
    return sender === 'mentor' ? 'text-right' : 'text-left';
  };

  return (
    <div className="container messaging-container">
      <div className="row">
        {/* Sidebar/Navigation */}
        <div className="col-md-3">
          <div className="conversations">
            <h4>Conversations</h4>
            <ul>
              {conversations.map((conversation) => (
                <li key={conversation.id}>
                  <button
                    className={`btn ${
                      selectedConversation?.id === conversation.id ? 'btn-primary' : 'btn-light'
                    } conversation-button`}
                    onClick={() => handleConversationClick(conversation)}
                  >
                    {conversation.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="compose-button">
            <button className="btn btn-primary" onClick={handleComposeNewMessage}>
              Compose New Message
            </button>
          </div>
        </div>

        {/* Message Display Area */}
        <div className="col-md-9">
          {selectedConversation && (
            <>
              <div className="selected-conversation-header">
                <div className="participant-info">
                  <h5>{selectedConversation.name}</h5>
                  <img src="Images/team-1.jpg" alt="Profile" style={{width:"40px"}}/>
                </div>
                <button className="btn btn-light">Back to Conversations</button>
              </div>
              <div className="message-thread">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message ${getMessageAlignment(message.sender)}`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="message-input-box">
                <textarea
                  className="form-control"
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                ></textarea>
                <div className="message-actions">
                  <button className="btn btn-secondary" onClick={handleSendAttachment}>
                    Attach Files
                  </button>
                  <button className="btn btn-secondary">Emoji</button>
                  <button className="btn btn-primary" onClick={handleSendMessage}>
                    Send
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessagingInterface;
