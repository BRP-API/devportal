'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import sidebarConfig from '@/pages/sidebar.json'

const Sidebar = () => {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '' : '';

  const isActive = (href) => pathname === href;

  const isSectionActive = (subnav) => {
    return subnav.some((item) => {
      if (item.href && isActive(item.href)) {
        return true;
      }
      if (item.subnav) {
        return isSectionActive(item.subnav);
      }
      return false;
    });
  };

  const sidebarData = sidebarConfig;

  return (
    <>
      <div className="sidebar desktop">
        <div>
          {sidebarData.items?.map((item, index) => (
            <div key={index}>
              {item.title && <p className="item title">{item.title}</p>}
              {item.subnav.map((subitem, subindex) => (
                <div key={`${index}-${subindex}`} >
                  {subitem.href && (
                    <Link className={`subitem ${isActive(subitem.href) ? 'active' : ''}`} href={subitem.href}>
                      {subitem.label}
                    </Link>
                  )}
                  {!subitem.href && subitem.label && (
                    <p className="subitem">{subitem.label}</p>
                  )}
                  {subitem.title && (
                    <details className="details-flex" key={`details-${subindex}`} open={isSectionActive(subitem.subnav)}>
                      <summary>{subitem.title}</summary>
                      {subitem.subnav.map((subsubitem, subsubindex) => (
                        <div key={`${index}-${subindex}-${subsubindex}`}>
                          {subsubitem.href && (
                            <Link className={`subsubitem ${isActive(subsubitem.href) ? 'active' : ''}`} href={subsubitem.href}>
                              {subsubitem.label}
                            </Link>
                          )
                            || !subsubitem.href && (
                              <details className="details-flex subsubitem" open={isSectionActive(subsubitem.subnav)}>
                                <summary>{subsubitem.title}</summary>
                                {subsubitem.subnav.map((subsubsubitem, subsubsubindex) => (
                                  <div key={`${index}-${subindex}-${subsubindex}-${subsubsubindex}`}>
                                    {subsubsubitem.href && (
                                      <Link className={`subsubitem ${isActive(subsubsubitem.href) ? 'active' : ''}`} href={subsubsubitem.href}>
                                        {subsubsubitem.label}
                                      </Link>
                                    )
                                      || !subsubsubitem.href && (
                                        <details className="details-flex subsubitem" open={isSectionActive(subsubitem.subnav)}>
                                          <summary>{subsubsubitem.title}</summary>
                                          {subsubsubitem.subnav.map((item, subsubsubindex) => (
                                            <div key={`${index}-${subindex}-${subsubindex}-${subsubsubindex}`}>
                                              {item.href && (
                                                <Link className={`subsubitem ${isActive(item.href) ? 'active' : ''}`} href={item.href}>
                                                  {item.label}
                                                </Link>
                                              )}
                                            </div>
                                          ))}
                                        </details>
                                      )}
                                  </div>
                                ))}
                              </details>
                            )}
                        </div>
                      ))}
                    </details>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-mobile">
        <span className='menu-toggle' onClick={() => document.querySelector('.mobile-menu').classList.add('open')}>
          <img src={`${basePath}/menu.svg`} alt="menu" />
          Menu
        </span>

        <div className="mobile-menu">
          <div className='menu-toggle' onClick={() => document.querySelector('.mobile-menu').classList.remove('open')}>
            <img src={`${basePath}/close.svg`} alt="menu-close" />
          </div>
          <div className='sidebar'>
            {sidebarData.items?.map((item, index) => (
              <div key={`m-${index}`}>
                {item.title && <p className="item title">{item.title}</p>}
                {item.subnav.map((subitem, subindex) => (
                  <div key={`m-${index}-${subindex}`}>
                    {subitem.href && (
                      <Link className={`subitem ${isActive(subitem.href) ? 'active' : ''}`} href={subitem.href} onClick={() => document.querySelector('.mobile-menu').classList.remove('open')}>
                        {subitem.label}
                      </Link>
                    )}
                    {!subitem.href && subitem.label && (
                      <p className="subitem">{subitem.label}</p>
                    )}
                    {subitem.title && (
                      <details className="details-flex" open={isSectionActive(subitem.subnav)}>
                        <summary>{subitem.title}</summary>
                        {subitem.subnav.map((subsubitem, subsubindex) => (
                          <div key={`m-${index}-${subindex}-${subsubindex}`}>
                            {subsubitem.href && (
                              <Link className={`subsubitem ${isActive(subsubitem.href) ? 'active' : ''}`} href={subsubitem.href}>
                                {subsubitem.label}
                              </Link>
                            )
                              || !subsubitem.href && (
                                <details className="subsubitem details-flex" open={isSectionActive(subsubitem.subnav)}>
                                  <summary>{subsubitem.title}</summary>
                                  {subsubitem.subnav.map((subsubsubitem, subsubsubindex) => (
                                    <div key={`m-${index}-${subindex}-${subsubindex}-${subsubsubindex}`}>
                                      {subsubsubitem.href && (
                                        <Link className={`subsubitem ${isActive(subsubsubitem.href) ? 'active' : ''}`} href={subsubsubitem.href}>
                                          {subsubsubitem.label}
                                        </Link>
                                      ) || !subsubsubitem.href && (
                                        <details className="subsubitem details-flex" open={isSectionActive(subsubitem.subnav)}>
                                          <summary>{subsubsubitem.title}</summary>
                                          {subsubsubitem.subnav.map((item, subsubsubindex) => (
                                            <div key={`m-${index}-${subindex}-${subsubindex}-${subsubsubindex}`}>
                                              {item.href && (
                                                <Link className={`subsubitem ${isActive(item.href) ? 'active' : ''}`} href={item.href}>
                                                  {item.label}
                                                </Link>
                                              )}
                                            </div>
                                          ))}
                                        </details>
                                      )}
                                    </div>
                                  ))}
                                </details>
                              )}
                          </div>
                        ))}
                      </details>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
