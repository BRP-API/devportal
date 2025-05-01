import React from 'react';
import Link from 'next/link';

const Sidebar = ({ sidebar }) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/devportal' : '';

  const defaultSidebar = {
    items: [
      {
        title: "Web API",
        subnav: [
          { label: "Overview", href: "/" },
          { label: "Getting started", href: "/getting-started" },
          {
            title: "Concepts",
            subnav: [
              { label: "Aansluitpatronen", href: "/concepten/aansluitpatronen/gemeente" },
              { label: "Gemeente-is-verstrekker", href: "/concepten/gemeente-is-verstrekker" },
              { label: "Informatieproducten", href: "/concepten/informatieproducten" },
              { label: "REST-principes", href: "/concepten/rest-principes" },
            ],
          },
          {
            title: "How-tos",
            subnav: [
              { label: "Personen zoeken en raadplegen", href: "/how-tos/Personen-zoeken-en-raadplegen" },
              { label: "Personen response filteren", href: "/how-tos/Personen-response-filteren" },
              { label: "fields samenstellen", href: "/how-tos/fields-samenstellen" },
              { label: "lokaal testen", href: "/how-tos/lokaal-testen" },
              { label: "aansluiten", href: "/how-tos/aansluiten" },
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
                  { label: "Standaardwaardes null en false", href: "/personen/documentatie/geen-null-false-standaardwaarde" },
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
          },
          {
            title: "Reisdocumenten",
            subnav: [
              { label: "Releasenotes", href: "/reisdocumenten/releases" },
              { label: "Specificatie", href: "/reisdocumenten/specificatie" },
              { label: "Documentatie", href: "/reisdocumenten/documentatie" },
            ]
          }
        ],
      },
    ],
  };

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
                <div key={subindex}>
                  {subitem.href && (
                    <Link className="subitem" href={subitem.href}>
                      {subitem.label}
                    </Link>
                  )}
                  {/* display title only */}
                  {!subitem.href && subitem.label && (
                    <p className="subitem">{subitem.label}</p>
                  )}
                  {/* display subnav with multiple items */}
                  {subitem.title && (
                    <details className="details-flex">
                      <summary>{subitem.title}</summary>
                      {subitem.subnav.map((subsubitem, subsubindex) => (
                        subsubitem.href && (
                          <Link className="subsubitem" href={subsubitem.href} key={subsubindex}>
                            {subsubitem.label}
                          </Link>
                        )
                        || !subsubitem.href && (
                          <details className="details-flex">
                            <summary>{subsubitem.title}</summary>
                            {subsubitem.subnav.map((subsubsubitem, subsubsubindex) => (
                              <Link className="subsubitem" href={subsubsubitem.href} key={subsubsubindex}>
                                {subsubsubitem.label}
                              </Link>
                            ))}
                          </details>
                        )
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
              <div key={index}>
                {item.title && <p className="item title">{item.title}</p>}
                {item.subnav.map((subitem, subindex) => (
                  <div key={subindex}>
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
                            subsubitem.href && (
                              <Link className="subsubitem" href={subsubitem.href} key={subsubindex}>
                                {subsubitem.label}
                              </Link>
                            )
                            || !subsubitem.href && (
                              <details className="details-flex">
                                <summary>{subsubitem.title}</summary>
                                {subsubitem.subnav.map((subsubsubitem, subsubsubindex) => (
                                    <Link className="subsubitem" href={subsubsubitem.href} key={subsubsubindex}>
                                      {subsubsubitem.label}
                                    </Link>
                                ))}
                              </details>
                            )
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
