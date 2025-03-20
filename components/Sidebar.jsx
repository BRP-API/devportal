import React from 'react';
import Link from 'next/link';

const Sidebar = ({ sidebar }) => {
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
              { label: "Aansluitpatronen", href: "/concepten/aansluitpatronen" },
              { label: "Informatieproducten", href: "/concepten/informatieproducten" },
              { label: "REST-principes", href: "/concepten/rest-principes" },
              { label: "Autorisatie & filteren", href: "/concepten/autorisatie-en-filteren" }
            ],
          },
          {
            title: "How-Tos",
            subnav: [
              { label: "Fields samenstellen", href: "/how-tos/fields-samenstellen" },
              { label: "Uitproberen", href: "/how-tos/uitproberen" },
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
              { label: "Releasenotes", href: "#" },
              { label: "Specificatie", href: "/personen/specificatie" },
              { label: "Documentatie", href: "/personen/documentatie" }
            ],
          },
          {
            title: "Bewoning",
            subnav: [
              { label: "Releasenotes", href: "#" },
              { label: "Specificatie", href: "/bewoning/specificatie" },
              { label: "Documentatie", href: "/bewoning/specificatie" },
            ]
          },
          {
            title: "Verblijfplaatshistorie",
            subnav: [
              { label: "Releasenotes", href: "#" },
              { label: "Specificatie", href: "/historie/specificatie" },
              { label: "Documentatie", href: "/historie/specificatie" },
            ]
          },
          {
            title: "Reisdocumenten",
            subnav: [
              { label: "Releasenotes", href: "#" },
              { label: "Specificatie", href: "/reisdocumenten/specificatie" },
              { label: "Documentatie", href: "/reisdocumenten/specificatie" },
            ]
          }
        ],
      },
    ],
  };

  const sidebarData = sidebar || defaultSidebar;

  return (
    <div className="sidebar">
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
  );
};

export default Sidebar;
