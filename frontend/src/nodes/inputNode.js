// inputNode.js

import { useCallback, useState } from 'react';
import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const InputNode = ({id,data})=>{
  const title = 'Input';
  const handles = [
    createHandle({id: `${id}-value`, type: 'source', position: Position.Right}),
  ];
  const [values, setValues] = useState({
    name: data?.inputName || id.replace('customInput-', 'input_'),
    type: data?.inputType || 'Text',
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
    FieldConfig.text('name', 'Name', handleChange('name')),
    FieldConfig.select('type', 'Type', [
      { value: 'Text', label: 'Text', },
      { value: 'File', label: 'File', },
    ], handleChange('type')),
  ];
  return CreateNode({
    title,
    handles,
    fields,
    values,
  });
} 
