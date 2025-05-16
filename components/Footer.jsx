import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="wrapper">
        <div className="column"></div>
        <div className="column">
          <h3>Service</h3>
          <ul>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;