import { useCallback, useState } from 'react';
import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const ThisNode = ({ id, data }) => {
  const title = 'This';
  const handles = [
    createHandle({ id: `${id}-input`, type: 'target', position: Position.Left }),
    createHandle({ id: `${id}-output`, type: 'source', position: Position.Right }),
  ];
  const [values, setValues] = useState({
    name: data?.name || 'something',
  });

  const handleChange = useCallback(
    (key) => (newValue) =>
      setValues((prev) => ({
        ...prev,
        [key]: newValue,
      })),
    []
  );

  const fields = [
    FieldConfig.text('name', 'Points to', handleChange('name')),
  ];
  
  return CreateNode({ title, handles, fields, values });
};
