import { Handle } from 'reactflow';

export const BaseNode = ({
  title,
  handles = [],
  baseStyle = {},
  children,
}) => {
  const defaultStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: 220,
    minHeight: 100,
    borderRadius: 18,
    border: '1px solid rgba(15,23,42,0.2)',
    backgroundColor: '#f8fafc',
    boxShadow: '0 10px 25px rgba(15,23,42,0.12)',
    padding: '10px',
    color: '#0f172a',
    ...baseStyle,
  };

  const headerStyle = {
    padding: '6px 10px',
    borderRadius: 12,
    background: 'linear-gradient(135deg, rgba(14,165,233,0.9), rgba(167,139,250,0.8))',
    color: '#fff',
    fontWeight: 600,
    letterSpacing: '0.08em',
    fontSize: 12,
    textTransform: 'uppercase',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  };

  return (
    <div style={defaultStyle}>
      {handles.map((handle, index) => (
        <Handle
          key={`${handle.id}-${index}`}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}

      <div style={headerStyle}>
        {title}
      </div>

      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};
