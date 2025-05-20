import React from 'react';
import Image from 'next/image';

const Header = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '' : '';

  return (
    <>
      <header className='header'>
        <a href={`${basePath}/`} title="Naar de homepage van BRP API devportal">
          <div className="logo">
            <div className="wrapper">
              <img src={`${basePath}/logo-ri.svg`} alt="central-logo-desktop" className="desktop" />
              <Image src={`${basePath}/logo.svg`} alt="central-logo-mobile" className="mobile banner" height={100} width={80} />
            </div>
          </div>
        </a>
      </header>
      <div id="navbar">
        <nav>
          <div className="title-container">
            <span>
              <p className="title">BRP</p>
              <p>voor Developers</p>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
