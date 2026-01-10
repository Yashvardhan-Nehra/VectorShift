import { useState } from "react";

import { BaseNode } from "./BaseNode";
import {
  TextField,
  SelectField,
  TextAreaField,
} from "./NodeFields";

export const FieldTypes = {
  TEXT: "text",
  SELECT: "select",
  TEXTAREA: "textarea",
};

export const FieldConfig = {
  text: (name, label, style = {}) => ({
    name,
    label,
    type: FieldTypes.TEXT,
    style,
  }),

  select: (name, label, options, style = {}) => ({
    name,
    label,
    type: FieldTypes.SELECT,
    options,
    style,
  }),

  textarea: (name, label, style = {}) => ({
    name,
    label,
    type: FieldTypes.TEXTAREA,
    style,
  }),
};

export const createHandle = ({ id, type, position, style = {} }) => {
  return {
    id,
    type,
    position,
    style,
  };
};

export const CreateNode = ({
  title,
  handles = [],
  fields = [],
  initialState = {},
  baseStyle = {},
  renderContent,
}) => {
  const [values, setValues] = useState(initialState);

  const renderField = (field) => {
    const value = values[field.name];
    const handleChange = (newValue) =>
      setValues({ ...values, [field.name]: newValue });

    switch (field.type) {
      case FieldTypes.TEXT:
        return (
          <TextField
            key={field.name}
            label={field.label}
            value={value}
            onChange={handleChange}
            style={field.style}
          />
        );
      case FieldTypes.SELECT:
        return (
          <SelectField
            key={field.name}
            label={field.label}
            value={value}
            onChange={handleChange}
            options={field.options}
            style={field.style}
          />
        );
      case FieldTypes.TEXTAREA:
        return (
          <TextAreaField
            key={field.name}
            label={field.label}
            value={value}
            onChange={handleChange}
            style={field.style}
          />
        );
      default:
        return null;
    }
  };

  return (
    <BaseNode title={title} handles={handles} baseStyle={baseStyle}>
      {fields.map(renderField)}
      <div>{renderContent}</div>
    </BaseNode>
  );
};



export default CreateNode;
