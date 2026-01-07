export const TextField = ({ 
  label, 
  value, 
  onChange, 
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
      <label>
        {label}:
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
      </label>
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
      <label>
        {label}:
        <select 
          value={value} 
          onChange={handleChange}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
  );
};
