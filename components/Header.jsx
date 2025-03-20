import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='header'>
      <Image src="/logo.svg" alt="central-logo" className="central-logo" width={60} height={100} />
      <div className="header-top">
        <div className="header-title">
          <h1>BRP API</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
