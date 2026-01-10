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
  text: (name, label, handleOnChange = null, style = {}) => ({
    name,
    label,
    type: FieldTypes.TEXT,
    handleOnChange,
    style,
  }),

  select: (name, label, options, handleOnChange = null, style = {}) => ({
    name,
    label,
    type: FieldTypes.SELECT,
    options,
    handleOnChange,
    style,
  }),

  textarea: (name, label,handleOnChange = null, style = {}) => ({
    name,
    label,
    type: FieldTypes.TEXTAREA,
    handleOnChange,
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
  values = {},
  baseStyle = {},
  renderContent,
}) => {

  const renderField = (field) => {
    const value = values[field.name];

    switch (field.type) {
      case FieldTypes.TEXT:
        return (
          <TextField
            key={field.name}
            label={field.label}
            value={value}
            onChange={field.handleOnChange}
            style={field.style}
          />
        );
      case FieldTypes.SELECT:
        return (
          <SelectField
            key={field.name}
            label={field.label}
            value={value}
            onChange={field.handleOnChange}
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
            onChange={field.handleOnChange}
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
