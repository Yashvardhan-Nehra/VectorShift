// inputNode.js

import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const InputNode = ({id,data})=>{
  const title = 'Input';
  const handles = [
    createHandle({id: `${id}-value`, type: 'source', position: Position.Right}),
  ];
  const fields = [
    FieldConfig.text('name', 'Name'),
    FieldConfig.select('type', 'Type', [
      { value: 'Text', label: 'Text', },
      { value: 'File', label: 'File', },
    ]),
  ];
  const initialState = {
      name: data?.inputName || id.replace('customInput-', 'input_'),
      type: data?.inputType || 'Text',
    }
  const node = CreateNode({
    title,
    handles,
    fields,
    initialState,
  });
  return node;
} 
