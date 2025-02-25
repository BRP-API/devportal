import * as React from "react"
import { graphql } from "gatsby"
import './styles.css';
import bewoningConfig from "../content/bewoning/_config.yaml"
import personenConfig from "../content/personen/_config.yaml"
import centralLogoImage from '../img/logo.svg';

// import rijkshuisstijl componenten en css classes
import { Footer, ColumnLayout, LinkList, LinkListLink, Icon, NavBar, Heading, LinkListCard, Separator } from '@rijkshuisstijl-community/components-react'
import './rhc-styles.css';

// import redoc standalone component
import { RedocStandalone } from "redoc";

const Header = ({ header }) => (
  <header className="header">
    <div className="header-top">
      <img src={centralLogoImage} alt="central-logo" className="central-logo" />
      <span className="header-logo-container">
        <Heading appearanceLevel={3} level={1}>
          {header.title}
        </Heading>
      </span>
    </div>
    <Separator />
    <div>
      <NavBar className="header-navbar"
        headingItem={{
          href: 'https://brp-api.github.io/devportal/',
          id: 'home',
          label: 'Home'
        }}
        items={header.navbar.items}
      />
    </div>
  </header>
);

const Sidebar = ({ nav }) => (
  <nav className="sidebar">
    {nav.map((item, index) => (
      <div key={index}>
        <LinkListCard headingLevel={3} heading={item.title}>
          <LinkList>
            {item.subnav.map((subitem, subindex) => (
              <LinkListLink key={subindex} href={subitem.href} icon={<Icon icon="chevron-right" />}>
                {subitem.label}
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
    {!frontmatter.spec_url &&
      <Sidebar nav={config.sidebar} />
    }
    <div className="content">
      <h1>{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
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