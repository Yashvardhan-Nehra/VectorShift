// textNode.js
import { useCallback, useMemo, useState } from "react";
import { Position } from "reactflow";
import { CreateNode, FieldConfig, createHandle } from "./CreateNode";

const TOKEN_REGEX = /{{([^{}]+)}}/g;

const extractTokens = (value) => {
  const tokens = [];
  const seen = new Set();
  let match;
  
  while ((match = TOKEN_REGEX.exec(value)) !== null) {
    const token = match[1].trim();
    if (!seen.has(token)) {
      seen.add(token);
      tokens.push(token);
    }
  }
  
  TOKEN_REGEX.lastIndex = 0;
  return tokens;
};

export const renderHighlightedText = (value) => {
  const parts = [];
  let lastIndex = 0;

  let match;

  while ((match = TOKEN_REGEX.exec(value)) !== null) {
    const start = match.index;
    const fullMatch = match[0];
    const token = match[1];

    if (start > lastIndex) {
      parts.push(value.slice(lastIndex, start));
    }

    parts.push(
      <span key={start} className="token">
        {token}
      </span>
    );

    lastIndex = start + fullMatch.length;
  }

  parts.push(value.slice(lastIndex));
  return parts;
};

export const TextNode = ({ id, data }) => {
  const title = "Text";
  const [values, setValues] = useState({
    text: data?.text || "{{input}}",
  });

  const tokens = useMemo(() => extractTokens(values.text), [values.text]);
  
  const handles = useMemo(() => {
    const inputHandles = tokens.map((token, index) => {
      const totalTokens = tokens.length;
      const topPosition = (100 / (totalTokens + 1)) * (index + 1);
      
      return createHandle({
        id: `${id}-${token}`,
        type: "target",
        position: Position.Left,
        style: { top: `${topPosition}%` },
      });
    });

    const outputHandle = createHandle({
      id: `${id}-output`,
      type: "source",
      position: Position.Right,
    });

    return [...inputHandles, outputHandle];
  }, [id, tokens]);

  const handleChange = useCallback(
    (key) => (newValue) => {
      setValues((prev) => ({
        ...prev,
        [key]: newValue,
      }));
    },
    []
  );

  const fields = useMemo(
    () => [FieldConfig.textarea("text", "Text", handleChange("text"))],
    [handleChange]
  );

  return CreateNode({ title, handles, fields, values });
};
