import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-gherkin";

export default function GherkinFeature({ url }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [highlighted, setHighlighted] = useState("");

  useEffect(() => {
    if (!url) return;
    setContent("");
    setError(null);
    setHighlighted("");
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.text();
      })
      .then(setContent)
      .catch((err) => setError(err.message));
  }, [url]);

  useEffect(() => {
    if (content) {
      setHighlighted(Prism.highlight(content, Prism.languages.gherkin, "gherkin"));
    }
  }, [content]);

  if (error) return <div>Error: {error}</div>;
  if (!content) return <div>Loading...</div>;

  return (
    <pre className="language-gherkin">
      <code
        className="language-gherkin"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </pre>
  );
}