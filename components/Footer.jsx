import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <p>© {new Date().getFullYear()} BRP API. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
};

export default Footer;