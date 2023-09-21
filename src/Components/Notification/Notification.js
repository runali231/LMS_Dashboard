// src/components/Notification.js
import React from 'react';
import { Alert } from 'react-bootstrap';

const Notification = ({ message, variant }) => {
  return (
    <Alert variant={variant}>
      {message}
    </Alert>
  );
};

export default Notification;
