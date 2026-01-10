import { useRef, useEffect, useState } from 'react';
import { renderHighlightedText } from './textNode';

const fieldRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '6px 10px',
  borderRadius: 12,
  backgroundColor: '#ffffff',
  border: '1px solid rgba(15, 23, 42, 0.12)',
  boxShadow: '0 2px 6px rgba(15, 23, 42, 0.08)',
};

const textareaFieldRowStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  padding: '6px 10px',
  borderRadius: 12,
  backgroundColor: '#ffffff',
  border: '1px solid rgba(15, 23, 42, 0.12)',
  boxShadow: '0 2px 6px rgba(15, 23, 42, 0.08)',
};

const labelStyle = {
  width: 88,
  fontSize: 11,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#475569',
};

const inputStyle = {
  flex: 1,
  minWidth: 0,
  padding: '6px 8px',
  borderRadius: 8,
  border: '1px solid rgba(15, 23, 42, 0.2)',
  backgroundColor: '#f8fafc',
  fontSize: 13,
  color: '#0f172a',
};

const selectStyle = {
  ...inputStyle,
  appearance: 'none',
  backgroundImage: 'linear-gradient(45deg, transparent 50%, rgba(15,23,42,0.6) 50%), linear-gradient(135deg, rgba(15,23,42,0.6) 50%, transparent 50%)',
  backgroundPosition: 'calc(100% - 18px) calc(50% - 1px), calc(100% - 13px) calc(50% - 1px)',
  backgroundSize: '5px 5px,5px 5px',
  backgroundRepeat: 'no-repeat',
};

const textareaStyle = {
  width: '100%',
  minHeight: 40,
  padding: '8px 10px',
  borderRadius: 8,
  border: '1px solid rgba(15, 23, 42, 0.2)',
  backgroundColor: '#f8fafc',
  fontSize: 13,
  color: '#0f172a',
  resize: 'none',
  overflow: 'hidden',
  fontFamily: 'inherit',
  lineHeight: 1.5,
  boxSizing: 'border-box',
};

export const TextField = ({
  label,
  value,
  onChange,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div style={fieldRowStyle}>
      <label style={labelStyle}>
        {label}:
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={inputStyle}
      />
    </div>
  );
};

export const SelectField = ({
  label,
  value,
  onChange,
  options = [],
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div style={fieldRowStyle}>
      <label style={labelStyle}>
        {label}:
      </label>
      <select
        value={value}
        onChange={handleChange}
        style={selectStyle}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const TextAreaField = ({
  label,
  value,
  onChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const textareaRef = useRef(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [localValue]);

  const handleChange = (e) => {
    setLocalValue(e.target.value);
    adjustHeight();
  };

  const handleBlur = () => {
    setIsEditing(false);
    onChange(localValue);
  };

  return (
    <div style={textareaFieldRowStyle}>
      <label style={labelStyle}>
        {label}:
      </label>
      {!isEditing && (
        <div
          style={{
            ...textareaStyle,
            cursor: "text",
          }}
          onClick={() => setIsEditing(true)}
        >
          {renderHighlightedText(value)}
        </div>
      )}
      {isEditing && (
        <textarea
          ref={textareaRef}
          value={localValue}
          onChange={handleChange}
          autoFocus
          onFocus={() => setIsEditing(true)}
          onBlur={handleBlur}
          style={textareaStyle}
          rows={1}
        />
      )}
    </div>
  );
};
