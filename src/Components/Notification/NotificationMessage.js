// // src/App.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import Notification from './Notification';
// import Messaging from './Messaging';

// const NotificationMessage = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [messages, setMessages] = useState([]);

//   const addNotification = (message, variant) => {
//     setNotifications([...notifications, { message, variant }]);
//   };

//   const addMessage = (message) => {
//     setMessages([...messages, message]);
//   };

//   return (
//     <Container>
//       <Row className="mt-5">
//         <Col md={6}>
//           <h2>Notifications</h2>
//           {notifications.map((notification, index) => (
//             <Notification
//               key={index}
//               message={notification.message}
//               variant={notification.variant}
//               onSendMessage={addNotification}
//             />
//           ))}
//         </Col>
//         <Col md={6}>
//           <Messaging onSendMessage={addMessage} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default NotificationMessage;
// src/App.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Alert, Form, Button } from 'react-bootstrap';

// const NotificationMessage = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   const addNotification = (message, variant) => {
//     setNotifications([...notifications, { message, variant }]);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       setMessages([...messages, message]);
//       setMessage('');
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row>
//         <Col md={6}>
//           <h2>System-Wide Notifications</h2>
//           {notifications.map((notification, index) => (
//             <Alert key={index} variant={notification.variant}>
//               {notification.message}
//             </Alert>
//           ))}
//         </Col>
//         <Col md={6}>
//           <h2>Messaging</h2>
//           <Form>
//             <Form.Group>
//               <Form.Control
//                 type="text"
//                 placeholder="Type your message..."
//                 value={message}
//                 onChange={handleMessageChange}
//               />
//             </Form.Group>
//             <Button variant="primary" onClick={handleSendMessage}>
//               Send
//             </Button>
//           </Form>
//           <div className="mt-3">
//             <h3>Messages</h3>
//             <ul>
//               {messages.map((msg, index) => (
//                 <li key={index}>{msg}</li>
//               ))}
//             </ul>
//           </div>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={6}>
//           <Button
//             onClick={() => addNotification('New announcement', 'info')}
//           >
//             Send Announcement
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default NotificationMessage;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Button,
  ListGroup,
  Card
} from 'react-bootstrap';

function NotificationMessage() {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [senderName, setSenderName] = useState('');
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  const addNotification = (message, variant) => {
    setNotifications([...notifications, { message, variant, read: false }]);
    setUnreadNotifications(unreadNotifications + 1);
  };

  const markNotificationAsRead = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications[index].read = true;
    setNotifications(updatedNotifications);
    setUnreadNotifications(unreadNotifications - 1);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSenderNameChange = (e) => {
    setSenderName(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() && senderName.trim()) {
      setMessages([
        ...messages,
        { text: message, sender: senderName, timestamp: new Date() },
      ]);
      setMessage('');
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
            <Card>
                <Card.Header>
                <h4>System-Wide Notifications</h4>
                </Card.Header>
                <Card.Body>
                <Alert variant="primary">
            You have {unreadNotifications} unread notification(s).
          </Alert>
          {notifications.map((notification, index) => (
            <Alert
              key={index}
              variant={notification.variant}
              onClose={() => markNotificationAsRead(index)}
              dismissible={!notification.read}
            >
              {notification.message}
            </Alert>
          ))}
           <Row>
        <Col md={6}>
          <Button
            onClick={() => addNotification('New announcement', 'info')}
          >
            Send Announcement
          </Button>
        </Col>
      </Row>
                </Card.Body>
            </Card>
          
         
        </Col>
        <Col md={6}>
            <Card>
                <Card.Header>
                <h4>Messaging</h4>
                </Card.Header>
          
       <Card.Body>
       <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your Name"
                value={senderName}
                onChange={handleSenderNameChange}
                className='mb-3'
              />
            </Form.Group>
           
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleMessageChange}
                className='mb-3'
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Form>
       </Card.Body>
       </Card>
       <Card>
        <Card.Header>
        <h4>Messages</h4>
        </Card.Header>
        <Card.Body>
        <div className="mt-3">
            
            <ListGroup>
              {messages.map((msg, index) => (
                <ListGroup.Item key={index}>
                  <strong>{msg.sender}:</strong> {msg.text}
                  <span className="float-right">
                    {msg.timestamp.toLocaleString()}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Card.Body>
       </Card>
          
        </Col>
      </Row>
     
    </Container>
  );
}

export default NotificationMessage;

