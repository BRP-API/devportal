import React, { useState } from "react";
import { graphql } from "gatsby";
import globalConfig from "../content/_config.yaml";
import personenConfig from "../content/personen/_config.yaml";
import centralLogoImage from "../img/logo.svg";

// import rijkshuisstijl componenten en css classes
import {
  Footer,
  ColumnLayout,
  LinkList,
  LinkListLink,
  Icon,
  Heading,
  Separator,
  IconButton,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavList,
  NumberBadge,
} from "@rijkshuisstijl-community/components-react";
import "./rhc-styles.css";

import "./styles.css";

// import redoc standalone component
import { RedocStandalone } from "redoc";

const Header = ({ header }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="header">
      <img src={centralLogoImage} alt="central-logo" className="central-logo" />
      <div className="header-top">
        <div className="header-title">
          <Heading appearanceLevel={5} level={1}>
            {header.title}
          </Heading>
        </div>
      </div>
      <Separator />
      <div className="navbar-mobile">
        <IconButton label="menu" onClick={toggleMenu}>
          <Icon icon="menu" />
        </IconButton>
      </div>
      <div className={isMenuVisible ? "mobile-menu open" : "mobile-menu"}>
        <IconButton label="kruis" onClick={toggleMenu}>
          <Icon icon="kruis" />
        </IconButton>
      </div>
    </header>
  );
};

const Sidebar = ({ sidebar }) => (
  <div className="desktop sidebar">
    <SideNav>
      {sidebar.items.map((item, index) => (
        <SideNavList key={index}>
          {/* display title label */}
          {item.title && <a className="item title">{item.title}</a>}
          {item.subnav.map((subitem, subindex) => (
            <SideNavList key={subindex}>
              {/* display link with href */}
              {subitem.href && (
                <a className="subitem" href={subitem.href}>
                  {subitem.label}
                </a>
              )}
              {/* display title only */}
              {!subitem.href && subitem.label && (
                <a className="subitem">{subitem.label}</a>
              )}
              {/* display subnav with multiple items */}
              {subitem.title && (
                <details className="details-flex">
                  <summary>{subitem.title}</summary>
                  {subitem.subnav.map((subsubitem, subsubindex) => (
                    <a
                      key={subsubindex}
                      className="subsubitem"
                      href={subsubitem.href}
                    >
                      {subsubitem.label}
                    </a>
                  ))}
                </details>
              )}
            </SideNavList>
          ))}
        </SideNavList>
      ))}
    </SideNav>
  </div>
);

const Content = ({ config, frontmatter, html }) => (
  <div className="content-container">
    <Sidebar sidebar={config.sidebar} />
    <div className="content">
      <div className="markdown">
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      {frontmatter.spec_url && (
        <div className="api-docs-container">
          <div className="redoc-heading">
            <Heading level={4}>API documentatie</Heading>
          </div>
          <div className="redoc-container">
            <RedocStandalone
              specUrl={frontmatter.spec_url}
              options={{
                nativeScrollbars: true,
                theme: {
                  colors: {
                    primary: {
                      main: "#154273",
                    },
                  },
                  rightPanel: {
                    backgroundColor: "#24335a",
                  },
                },
                disableSearch: true,
                expandResponses: "200",
              }}
            />
          </div>
        </div>
      )}
    </div>
  </div>
);

const PageFooter = ({ footer }) => (
  <Footer
    appearanceLevel={3}
    background="primary-outlined"
    heading={footer.heading}
    preFooter
    preFooterMessage=""
  >
    <ColumnLayout>
      <LinkList>
        {footer.items.map((item, index) => (
          <LinkListLink
            key={index}
            href={item.href}
            icon={<Icon icon="chevron-right" />}
          >
            {item.label}
          </LinkListLink>
        ))}
      </LinkList>
    </ColumnLayout>
  </Footer>
);

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const config =
    frontmatter.config === "bewoning"
      ? globalConfig
      : frontmatter.config === "personen"
      ? personenConfig
      : globalConfig;

  applyPrefixPath(config);

  return (
    <div className="rhc-theme">
      <Header header={config.header} menu={config.header.menu} />
      <div className="container">
        <Content config={config} frontmatter={frontmatter} html={html} />
      </div>
      <PageFooter footer={config.footer} />
    </div>
  );
}

function applyPrefixPath(config) {
  // const prefixPath = "";
  const prefixPath = 'https://brp-api.github.io/devportal';

  // apply prefix to sidebar items
  config.sidebar.items.map((groupItem) => {
    groupItem.subnav.map((item) => {
      if (item.href) {
        item.href = item.href.startsWith("http")
          ? item.href
          : prefixPath + item.href;
      }
      return item;
    });

    return groupItem;
  });

  // apply prefix to footer items
  config.footer.items.map((item) => {
    item.href = item.href.startsWith("http")
      ? item.href
      : prefixPath + item.href;
    return item;
  });

  return config;
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        spec_url
        config
      }
    }
  }
`;
