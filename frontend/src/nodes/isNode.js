import { useCallback, useState } from 'react';
import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const IsNode = ({ id, data }) => {
  const title = 'Is';
  const handles = [
    createHandle({ id: `${id}-subject`, type: 'target', position: Position.Left }),
    createHandle({ id: `${id}-result`, type: 'source', position: Position.Right }),
  ];
  const [values, setValues] = useState({
    compare: data?.comparison || data?.compare || 'equal',
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
    FieldConfig.select('compare', 'Condition', [
      { value: 'equal', label: 'Equal To' },
      { value: 'greater', label: 'Greater Than' },
      { value: 'less', label: 'Less Than' },
      { value: 'contains', label: 'Contains' },
    ], handleChange('compare')),
  ];
  
  return CreateNode({ title, handles, fields, values });
};
