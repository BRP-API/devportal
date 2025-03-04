import React, { useState, useCallback, useEffect } from "react";
import { graphql } from "gatsby";
import config from "../content/_config.yaml";
import centralLogoImage from "../img/logo.svg";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

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
  SideNavList,
} from "@rijkshuisstijl-community/components-react";
import "./rhc-styles.css";

import "./styles.css";

// import redoc standalone component
import { RedocStandalone } from "redoc";

const Header = ({ header, sidebar }) => {
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
        <Sidebar sidebar={sidebar} />
      </div>
    </header>
  );
};

const Sidebar = ({ sidebar }) => (
  <div className="sidebar">
    <SideNav>
      {sidebar.items.map((item, index) => (
        <SideNavList key={index}>
          {/* display title label */}
          {item.title && <p className="item title">{item.title}</p>}
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
                <p className="subitem">{subitem.label}</p>
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

const Content = ({ config, frontmatter, markdown }) => (
  <div className="content-container">
    <div className="desktop">
      <Sidebar sidebar={config.sidebar} />
    </div>
    <div className="content">
      <div className="markdown">
        <h1>{frontmatter.title}</h1>
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
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

      {frontmatter.fields_tool && <FieldsTool />}
    </div>
  </div>
);

const FieldsTool = () => {
  const [searchType, setSearchType] = useState("Persoon");
  const [fields, setFields] = useState([]);
  const [fieldsList, setFieldsList] = useState([]);
  const [expandedGroups, setExpandedGroups] = useState({});

  // Load fields list when search type changes
  useEffect(() => {
    const fetchFieldsList = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/BRP-API/Haal-Centraal-BRP-bevragen/master/features/fields-filtered-${searchType}.csv`
        );

        if (!response.ok) {
          throw new Error(`Status error: ${response.status}`);
        }

        const text = await response.text();
        const lines = text.split(/\r?\n/);
        lines.shift(); // Skip header
        setFieldsList(lines.filter((line) => line.trim() !== ""));
      } catch (error) {
        console.error("Error loading fields list:", error);
      }
    };

    fetchFieldsList();
  }, [searchType]);

  // Toggle field selection
  const toggleField = useCallback(
    (fieldId, checked) => {
      setFields((prevFields) => {
        // Create a map of all fields and their current states
        const fieldMap = {};
        prevFields.forEach((field) => {
          fieldMap[field] = true;
        });

        // Update the clicked field
        if (checked) {
          fieldMap[fieldId] = true;
        } else {
          delete fieldMap[fieldId];
        }

        // Handle children (if the field is a group)
        const updateChildren = (parentId) => {
          fieldsList.forEach((field) => {
            if (field.startsWith(`${parentId}.`)) {
              if (checked) {
                fieldMap[field] = true;
              } else {
                delete fieldMap[field];
              }
            }
          });
        };

        if (checked) {
          updateChildren(fieldId);
        } else {
          updateChildren(fieldId);
        }

        // Handle parent logic
        const parts = fieldId.split(".");
        if (parts.length > 1) {
          const parentPath = parts.slice(0, -1).join(".");

          // Check if all siblings are checked to determine parent state
          const siblings = fieldsList.filter(
            (field) =>
              field.startsWith(`${parentPath}.`) &&
              field !== fieldId &&
              field.split(".").length === parts.length
          );

          const allSiblingsChecked = siblings.every(
            (sibling) => fieldMap[sibling]
          );

          if (allSiblingsChecked && checked) {
            fieldMap[parentPath] = true;

            // Remove individual children if parent is checked
            fieldsList.forEach((field) => {
              if (field.startsWith(`${parentPath}.`)) {
                delete fieldMap[field];
              }
            });
          } else if (!checked) {
            delete fieldMap[parentPath];
          }
        }

        return Object.keys(fieldMap);
      });
    },
    [fieldsList]
  );

  // Toggle group expansion
  const toggleGroup = useCallback((group) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  }, []);

  // Build tree structure from flat list
  const buildTree = useCallback(() => {
    const tree = {};
    fieldsList.forEach((field) => {
      const parts = field.split(".");
      let current = tree;

      parts.forEach((part, index) => {
        const path = parts.slice(0, index + 1).join(".");
        if (!current[path]) {
          current[path] = {};
        }
        current = current[path];
      });
    });

    return tree;
  }, [fieldsList]);

  // Recursive component to render tree
  const FieldsTree = useCallback(
    ({ node, path = "", level = 0 }) => {
      const nodeKeys = Object.keys(node);

      if (nodeKeys.length === 0) return null;

      return (
        <ul
          className={`fields-tree-level-${level} ${
            path && !expandedGroups[path] ? "hidden" : ""
          }`}
        >
          {nodeKeys.map((key) => {
            const fieldPath = key;
            const fieldName = key.split(".").pop();
            const hasChildren = Object.keys(node[key]).length > 0;
            const isChecked = fields.includes(fieldPath);

            // Check if this field has partial selection (some children selected, some not)
            const hasPartialSelection =
              !isChecked &&
              Object.keys(node[key]).some((childKey) =>
                fields.includes(`${fieldPath}.${childKey.split(".").pop()}`)
              );

            return (
              <li key={fieldPath}>
                <div className="field-item">
                  <input
                    type="checkbox"
                    id={fieldPath}
                    className="form-check-input"
                    checked={isChecked}
                    ref={(el) => el && (el.indeterminate = hasPartialSelection)}
                    onChange={(e) => toggleField(fieldPath, e.target.checked)}
                  />
                  <label htmlFor={fieldPath}>{fieldName}</label>
                  {hasChildren && (
                    <button
                      className="btn btn-light toggle-button"
                      onClick={() => toggleGroup(fieldPath)}
                    >
                      {expandedGroups[fieldPath] ? "-" : "+"}
                    </button>
                  )}
                </div>
                {hasChildren && (
                  <FieldsTree
                    node={node[key]}
                    path={fieldPath}
                    level={level + 1}
                  />
                )}
              </li>
            );
          })}
        </ul>
      );
    },
    [expandedGroups, fields, toggleField, toggleGroup]
  );

  const tree = buildTree();

  return (
    <div className="fields-tool">
      <h2>1. Selecteer het vraagtype</h2>
      <p>
        Met fields mag je alleen vragen om gegevens die bij het zoek- of
        raadpleegtype teruggegeven kunnen worden. Daarom selecteer je eerst het
        type vraag dat je wilt doen.
      </p>

      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="Persoon">RaadpleegMetBurgerservicenummer</option>
        <option value="PersoonBeperkt">ZoekMet...</option>
        <option value="GezagPersoonBeperkt">
          ZoekMetAdresseerbaarObjectIdentificatie
        </option>
      </select>

      <h2>2. Selecteer de velden die je wilt ontvangen</h2>

      <div className="selectors">
        <FieldsTree node={tree} />
      </div>

      <h2>
        3. Kopieer de waarde hieronder en gebruik dit in je request bij de
        fields parameter
      </h2>
      <textarea
        className="fields-output"
        value={JSON.stringify(fields)}
        readOnly
      />
    </div>
  );
};

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

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, rawMarkdownBody } = markdownRemark;

  let replacedMarkdown = rawMarkdownBody;

  // Replace the values in the rawmarkdownbody
  if (config) {
    Object.keys(config.site).map((key) => {
      replacedMarkdown = replacedMarkdown.replace(
        new RegExp(`{{ site.${key} }}`, "g"),
        config.site[key]
      );
      return replacedMarkdown;
    });
  }

  applyPrefixPath(config);

  return (
    <div className="rhc-theme">
      <Header
        header={config.header}
        menu={config.header.menu}
        sidebar={config.sidebar}
      />
      <div className="container">
        <Content
          config={config}
          frontmatter={frontmatter}
          markdown={replacedMarkdown}
        />
      </div>
      <PageFooter footer={config.footer} />
    </div>
  );
}

function applyPrefixPath(config) {
  const prefixPath = config.site.prefixPath || "";

  // apply prefix to sidebar items
  config.sidebar.items.map((groupItem) => {
    groupItem.subnav.map((item) => {
      if (item.href) {
        item.href = item.href.startsWith("http")
          ? item.href
          : prefixPath + item.href;
      }

      if (item.subnav) {
        item.subnav.map((subItem) => {
          if (subItem.href) {
            subItem.href = subItem.href.startsWith("http")
              ? subItem.href
              : prefixPath + subItem.href;
          }
          return subItem;
        });
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
      rawMarkdownBody
      frontmatter {
        slug
        title
        spec_url
        fields_tool
      }
    }
  }
`;
