import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      <ul style={listStyle}>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </footer>
  );
};

// Inline styles for simplicity
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
  position: 'relative',
  bottom: 0,
  width: '100%',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  marginTop: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
};

export default Footer;
