// src/components/Messaging.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Messaging = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Messaging</h2>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleMessageChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Messaging;
