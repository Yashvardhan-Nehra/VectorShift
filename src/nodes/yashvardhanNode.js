import { useCallback, useState } from 'react';
import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const YashvardhanNode = ({ id, data }) => {
  const title = 'Yashvardhan';
  const handles = [
    createHandle({ id: `${id}-config`, type: 'target', position: Position.Left }),
    createHandle({ id: `${id}-data`, type: 'source', position: Position.Right }),
  ];
  const [values, setValues] = useState({
    username: data?.username || 'yashvardhan',
    role: data?.role || 'developer',
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
    FieldConfig.text('username', 'Username', handleChange('username')),
    FieldConfig.select('role', 'Role', [
      { value: 'developer', label: 'Developer' },
      { value: 'designer', label: 'Designer' },
      { value: 'manager', label: 'Manager' },
    ], handleChange('role')),
  ];
  
  return CreateNode({ title, handles, fields, values });
};
