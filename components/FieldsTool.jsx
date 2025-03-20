import { useState, useEffect, useCallback } from "react";

export default function FieldsTool() {
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

    setFields([]);
    fetchFieldsList();
  }, [searchType]);

  // Toggle field selection
  const toggleField = useCallback(
    (fieldId, checked) => {
      setFields((prevFields) => {
        const fieldMap = {};
        prevFields.forEach((field) => {
          fieldMap[field] = true;
        });

        if (checked) {
          fieldMap[fieldId] = true;
        } else {
          delete fieldMap[fieldId];
        }

        if (!checked) {
          if (fieldId.includes('.')) {
            let parentId = fieldId.split(".")[0];
            const children = fieldsList.filter(f => f.startsWith(`${parentId}.`));

            //If all children of the parent are deselected, uncheck the parent
            if (children.every(child => !fieldMap[child])) {
              delete fieldMap[parentId];
            }
          }
        }

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

        updateChildren(fieldId);

        const parts = fieldId.split(".");
        if (parts.length > 1) {
          const parentPath = parts.slice(0, -1).join(".");

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

      parts.forEach((_, index) => {
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
          className={`fields-tree-level-${level} ${path && !expandedGroups[path] ? "hidden" : ""
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

  // Filter by group
  const filterByGroup = (fields) => {
    const filtered = new Set(fields);

    const areAllChildrenSelected = (parent) => {
      const children = fieldsList.filter(f => f.startsWith(parent + "."));
      return children.length > 0 && children.every(child => filtered.has(child));
    };

    const allButOneChildrenSelected = (parent) => {
      const children = fieldsList.filter(f => f.startsWith(parent + "."));
      return children.length > 1 && children.filter(child => !filtered.has(child)).length === 1;
    }

    fieldsList.forEach(field => {
      if (areAllChildrenSelected(field)) {
        fieldsList.filter(f => f.startsWith(field + ".")).forEach(child => filtered.delete(child));
        filtered.add(field);
      }
      else if (allButOneChildrenSelected(field)) {
        filtered.delete(field);
      }
    });

    return Array.from(filtered);
  };

  return (
    <div className="fields-tool">
      <h2>1. Selecteer het vraagtype</h2>
      <p>
        Met fields mag je alleen vragen om gegevens die bij het zoek- of
        raadpleegtype teruggegeven kunnen worden. Daarom selecteer je eerst het
        type vraag dat je wilt doen.
      </p>

      <select
        className="select-search-type"
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
        value={JSON.stringify(filterByGroup(fields))}
        readOnly
      />
    </div>
  );
};