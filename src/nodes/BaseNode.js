import { Handle } from 'reactflow';

export const BaseNode = ({ 
  title, 
  handles = [], 
  style = {},
  children,
}) => {
  const defaultStyle = {
    width: 200,
    minHeight: 80,
    border: '1px solid black',
    ...style,
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
      
      <div>
        {children}
      </div>
    </div>
  );
};
