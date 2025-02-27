import React, { useState } from 'react';
import { graphql } from "gatsby"
import './styles.css';
import bewoningConfig from "../content/bewoning/_config.yaml"
import personenConfig from "../content/personen/_config.yaml"
import centralLogoImage from '../img/logo.svg';

// import rijkshuisstijl componenten en css classes
import { Footer, ColumnLayout, LinkList, LinkListLink, Icon, NavBar, Heading, LinkListCard, Separator, IconButton } from '@rijkshuisstijl-community/components-react'
import './rhc-styles.css';

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
      <div className="navbar desktop">
        <NavBar className="header-navbar"
        headingItem={header.navbar.headingItem}
          items={header.navbar.items}
        />
      </div>
      <div className="navbar-mobile">
        <IconButton label="menu" onClick={toggleMenu}>
          <Icon icon="menu" />
        </IconButton>
      </div>
      {isMenuVisible && (
        <div className="mobile-menu">
          <IconButton label="kruis" onClick={toggleMenu}>
            <Icon icon="kruis" />
          </IconButton>
          <LinkListCard>
            <LinkList>
              {header.navbar.items.map((item) => (
                <LinkListLink key={item.id} href={item.href}
                  target={item.blank ? '_blank' : ''}
                  rel={item.blank ? 'noopener noreferrer' : ''}
                  icon={<Icon icon={item.blank ? "externe-link" : "chevron-right"} />}>
                  {item.label}
                </LinkListLink>
              ))}
            </LinkList>
          </LinkListCard>
        </div>
      )}
    </header>
  );
};

const Sidebar = ({ nav }) => (
  <nav className="sidebar desktop">
    {nav.items.map((groupItem, index) => (
      <div key={index}>
        <LinkListCard headingLevel={3} heading={groupItem.title}>
          <LinkList>
            {groupItem.subnav.map((item, subindex) => (
              <LinkListLink key={subindex} href={item.href}
                target={item.blank ? '_blank' : ''}
                rel={item.blank ? 'noopener noreferrer' : ''}
                icon={<Icon icon={item.blank ? "externe-link" : "chevron-right"} />}>
                {item.label}
              </LinkListLink>
            ))}
          </LinkList>
        </LinkListCard>
      </div>
    ))}
  </nav>
);

const Content = ({ config, frontmatter, html }) => (
  <>
    <div className="content">
      {!frontmatter.spec_url &&
        <Sidebar nav={config.sidebar} />
      }
      <div>
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      {frontmatter.spec_url &&
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
                      main: '#154273'
                    }
                  },
                  rightPanel: {
                    backgroundColor: "#24335a"
                  }
                },
                disableSearch: true,
                expandResponses: "200"
              }} />
          </div>
        </div>
      }
    </div>
  </>
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
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const config =
    frontmatter.config === 'bewoning' ? bewoningConfig :
      frontmatter.config === 'personen' ? personenConfig :
        undefined;

  applyPrefixPath(config);

  return (
    <div className="rhc-theme">
      <Header header={config.header} menu={config.header.menu} />
      <div className="container">
        <Content config={config} frontmatter={frontmatter} html={html} />
      </div>
      <PageFooter footer={config.footer} />
    </div>
  )
}

function applyPrefixPath(config) {
  // const prefixPath = '';
  const prefixPath = 'https://brp-api.github.io/devportal';

  // apply prefix to header heading item
  config.header.navbar.headingItem.href = 
    config.header.navbar.headingItem.href.startsWith('http') 
      ? config.header.navbar.headingItem.href 
      : prefixPath + config.header.navbar.headingItem.href;

  // apply prefix path to header items
  config.header.navbar.items.map((item) => {
    item.href = item.href.startsWith('http') ? item.href : prefixPath + item.href;
    return item;
  });

  // apply prefix to sidebar items
  config.sidebar.items.map((groupItem) => {
    groupItem.subnav.map((item) => {
      item.href = item.href.startsWith('http') ? item.href : prefixPath + item.href;
      return item;
    });

    return groupItem;
  });

  // apply prefix to footer items
  config.footer.items.map((item) => {
    item.href = item.href.startsWith('http') ? item.href : prefixPath + item.href;
    return item;
  });

  return config;
}

export const pageQuery = graphql`
  query($id: String!) {
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
`