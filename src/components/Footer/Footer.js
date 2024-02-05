// src/components/Footer/Footer.js
import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '50px', backgroundColor: '#f0f0f0', padding: '20px 0' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Your App Name. All rights reserved.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Powered by <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer">Material-UI</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
