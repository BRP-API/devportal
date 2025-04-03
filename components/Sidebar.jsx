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
              { label: "Informatieproducten", href: "/concepten/informatieproducten" }
              { label: "Aansluitpatronen", href: "/concepten/aansluitpatronen/gemeente" },
              { label: "Informatieproducten", href: "/concepten/informatieproducten" },
              { label: "REST-principes", href: "/concepten/rest-principes" },
              { label: "Autorisatie & filteren", href: "/concepten/autorisatie-en-filteren" }
            ],
          },
          {
            title: "Hoe-kan-ik",
            subnav: [
              { label: "fields samenstellen", href: "/how-tos/fields-samenstellen" },
              { label: "lokaal uitproberen/testen", href: "/how-tos/uitproberen" },
              { label: "Onboarden", href: "/how-tos/onboarden" },
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
              { label: "Documentatie", href: "/personen/documentatie" }
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
                      {subitem.subnav.map((subsubitem, index) => (
                        <Link className="subsubitem" href={subsubitem.href} key={index}>
                          {subsubitem.label}
                        </Link>
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
                        {subitem.subnav.map((subsubitem, index) => (
                          <Link className="subsubitem" href={subsubitem.href} key={index} onClick={() => document.querySelector('.mobile-menu').classList.remove('open')}>
                            {subsubitem.label}
                          </Link>
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
