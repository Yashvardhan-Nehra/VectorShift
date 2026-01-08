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
    gap: 5,
    width: 200,
    minHeight: 80,
    border: '1px solid black',
    ...baseStyle,
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
      
      <div>
        <span>{title}</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {children}
      </div>
    </div>
  );
};
