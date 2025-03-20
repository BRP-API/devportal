import React from 'react';
import Image from 'next/image';
import getConfig from 'next/config';

const Header = () => {
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig.basePath || '';

  return (
    <header className='header'>
      <Image src={`${basePath}/logo.svg`} alt="central-logo" className="central-logo" width={60} height={100} />
      <div className="header-top">
        <div className="header-title">
          <h1>BRP API</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
