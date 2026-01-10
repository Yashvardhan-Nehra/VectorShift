// outputNode.js

import { useCallback, useState } from 'react';
import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const OutputNode = ({id, data}) => {
  const title = 'Output';
  const handles = [
    createHandle({id: `${id}-value`, type: 'target', position: Position.Left}),
  ];
  const [values, setValues] = useState({
    name: data?.outputName || id.replace('customOutput-', 'output_'),
    type: data?.outputType || 'Text',
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
      { value: 'Text', label: 'Text' },
      { value: 'Image', label: 'Image' },
    ], handleChange('type')),
  ];
  return CreateNode({title, handles, fields, values});
}
