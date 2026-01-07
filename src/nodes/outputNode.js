// outputNode.js

import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const OutputNode = ({id, data}) => {
  const title = 'Output';
  const handles = [
    createHandle({id: `${id}-value`, type: 'target', position: Position.Left}),
  ];
  const fields = [
    FieldConfig.text('name', 'Name'),
    FieldConfig.select('type', 'Type', [
      { value: 'Text', label: 'Text' },
      { value: 'Image', label: 'Image' },
    ]),
  ];
  const initialState = {
    name: data?.outputName || id.replace('customOutput-', 'output_'),
    type: data?.outputType || 'Text',
  };
  return CreateNode({title, handles, fields, initialState});
}
