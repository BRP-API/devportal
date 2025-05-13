import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="wrapper">
        <div className="column"></div>
        <div className="column">
          <h2>Service</h2>
          <ul>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <a href="https://github.com/brp-api" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;