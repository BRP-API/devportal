'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({ sidebar }) => {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '/devportal' : '';

  const defaultSidebar = {
    items: [
      {
        title: "BRP API",
        subnav: [
          { label: "Overview", href: "/" },
          { label: "Getting started", href: "/getting-started" },
          {
            title: "How-tos",
            subnav: [
              { label: "Personen zoeken en raadplegen", href: "/how-tos/personen-zoeken-en-raadplegen" },
              { label: "Personen response filteren", href: "/how-tos/personen-response-filteren" },
              { label: "Fields samenstellen", href: "/how-tos/fields-samenstellen" },
              { label: "Lokaal testen", href: "/how-tos/lokaal-testen" },
              { label: "Aansluiten", href: "/how-tos/aansluiten" },
            ],
          },
          {
            title: "Concepts",
            subnav: [
              { label: "Informatieproducten", href: "/concepten/informatieproducten" },
              { label: "REST-principes", href: "/concepten/rest-principes" },
            ],
          },
        ],
      },
      {
        title: "Reference",
        subnav: [
          {
            title: "Personen",
            subnav: [
              { label: "Releasenotes", href: "/personen/releases" },
              { label: "Specificatie", href: "/personen/specificatie" },
              {
                title: "Documentatie",
                subnav: [
                  { label: "Standaardwaarden null en false", href: "/personen/documentatie/geen-null-false-standaardwaarde" },
                  { label: "Standaard geleverde gegevens", href: "/personen/documentatie/meegeleverde-gegevens" },
                ],
              },
              {
                title: "Informatieproducten",
                subnav: [
                  { label: "Adressering", href: "/personen/informatieproducten/adressering" },
                  { label: "Gezag", href: "/personen/informatieproducten/gezag" },
                  { label: "Leeftijd", href: "/personen/informatieproducten/leeftijd" },
                  { label: "Volledige naam", href: "/personen/informatieproducten/volledige-naam" },
                  { label: "Voorletters", href: "/personen/informatieproducten/voorletters" },
                ],
              },
            ],
          },
          {
            title: "Bewoning",
            subnav: [
              { label: "Releasenotes", href: "/bewoning/releases" },
              { label: "Specificatie", href: "/bewoning/specificatie" },
              { label: "Documentatie", href: "/bewoning/documentatie" },
            ]
          },
          {
            title: "Verblijfplaatshistorie",
            subnav: [
              { label: "Releasenotes", href: "/historie/releases" },
              { label: "Specificatie", href: "/historie/specificatie" },
              { label: "Documentatie", href: "/historie/documentatie" },
           ]
          }
        ],
      },
    ],
  };

  const isActive = (href) => pathname === href;

  const sidebarData = sidebar || defaultSidebar;

  return (
    <>
      <div className="sidebar desktop">
        <div>
          {sidebarData.items.map((item, index) => (
            <div key={index}>
              {/* display title label */}
              {item.title && <p className="item title">{item.title}</p>}
              {item.subnav.map((subitem, subindex) => (
                <div key={`${index}-${subindex}`} >
                  {subitem.href && (
                    <Link className={`subitem ${isActive(subitem.href) ? 'active' : ''}`} href={subitem.href}>
                      {subitem.label}
                    </Link>
                  )}
                  {/* display title only */}
                  {!subitem.href && subitem.label && (
                    <p className="subitem">{subitem.label}</p>
                  )}
                  {/* display subnav with multiple items */}
                  {subitem.title && (
                    <details className="details-flex" key={`details-${subindex}`}>
                      <summary>{subitem.title}</summary>
                      {subitem.subnav.map((subsubitem, subsubindex) => (
                        <div key={`${index}-${subindex}-${subsubindex}`}>
                          {subsubitem.href && (
                            <Link className={`subsubitem ${isActive(subsubitem.href) ? 'active' : ''}`} href={subsubitem.href}>
                              {subsubitem.label}
                            </Link>
                          )
                            || !subsubitem.href && (
                              <details className="details-flex">
                                <summary>{subsubitem.title}</summary>
                                {subsubitem.subnav.map((subsubsubitem, subsubsubindex) => (
                                  <div key={`${index}-${subindex}-${subsubindex}-${subsubsubindex}`}>
                                    {subsubsubitem.href && (
                                      <Link className={`subsubitem ${isActive(subsubsubitem.href) ? 'active' : ''}`} href={subsubsubitem.href}>
                                        {subsubsubitem.label}
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
            {sidebarData.items.map((item, index) => (
              <div key={`m-${index}`}>
                {item.title && <p className="item title">{item.title}</p>}
                {item.subnav.map((subitem, subindex) => (
                  <div key={`m-${index}-${subindex}`}>
                    {subitem.href && (
                      <Link className="subitem" href={subitem.href} onClick={() => document.querySelector('.mobile-menu').classList.remove('open')}>
                        {subitem.label}
                      </Link>
                    )}
                    {!subitem.href && subitem.label && (
                      <p className="subitem">{subitem.label}</p>
                    )}
                    {subitem.title && (
                      <details className="details-flex">
                        <summary>{subitem.title}</summary>
                        {subitem.subnav.map((subsubitem, subsubindex) => (
                          <div key={`m-${index}-${subindex}-${subsubindex}`}>
                            {subsubitem.href && (
                              <Link className="subsubitem" href={subsubitem.href}>
                                {subsubitem.label}
                              </Link>
                            )
                              || !subsubitem.href && (
                                <details className="details-flex">
                                  <summary>{subsubitem.title}</summary>
                                  {subsubitem.subnav.map((subsubsubitem, subsubsubindex) => (
                                    <div key={`m-${index}-${subindex}-${subsubindex}-${subsubsubindex}`}>
                                      {subsubsubitem.href && (
                                        <Link className="subsubitem" href={subsubsubitem.href}>
                                          {subsubsubitem.label}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
