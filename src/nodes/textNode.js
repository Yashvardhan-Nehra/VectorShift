// textNode.js

import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const TextNode = ({id, data}) => {
  const title = 'Text';
  const handles = [
    createHandle({id: `${id}-output`, type: 'source', position: Position.Right}),
  ];
  const fields = [
    FieldConfig.text('text', 'Text'),
  ];
  const initialState = {
    text: data?.text || '{{input}}',
  };
  return CreateNode({title, handles, fields, initialState});
}
