export const TextField = ({ 
  label, 
  value, 
  onChange, 
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <label style={{ width: 'fit-content' }}>
        {label}:
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{ flex: 1, minWidth: 0 }}
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
    <div style={{ display: 'flex', gap: 5, width: '100%' }}>
      <label style={{ width: 'fit-content' }}>
        {label}:
      </label>
      <select 
        value={value} 
        onChange={handleChange}
        style={{ flex: 1, minWidth: 0 }}
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
