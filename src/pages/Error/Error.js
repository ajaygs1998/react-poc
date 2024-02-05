// src/pages/Error/Error.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <Container maxWidth="sm" className="error-container">
      <Typography variant="h1" color="error" className="animated-text">
        404
      </Typography>
      <Typography variant="h4" color="textSecondary" className="animated-text">
        Page Not Found
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/" className="animated-button">
        Go Home
      </Button>
    </Container>
  );
};

export default Error;
    