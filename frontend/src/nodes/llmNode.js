// llmNode.js

import { Position } from 'reactflow';
import { CreateNode, createHandle } from './CreateNode';

export const LLMNode = ({id, data}) => {  
  const title = 'LLM';
  const handles = [
    createHandle({id: `${id}-system`, type: 'target', position: Position.Left, style: {top: `${100/3}%`}}),
    createHandle({id: `${id}-prompt`, type: 'target', position: Position.Left, style: {top: `${200/3}%`}}),
    createHandle({id: `${id}-response`, type: 'source', position: Position.Right}),
  ];
  const fields = [];
  const renderContent = 'This is a LLM.';
  return CreateNode({title, handles, fields, values: {}, renderContent});
}
