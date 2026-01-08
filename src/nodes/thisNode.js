import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const ThisNode = ({ id, data }) => {
  const title = 'This';
  const handles = [
    createHandle({ id: `${id}-input`, type: 'target', position: Position.Left }),
    createHandle({ id: `${id}-output`, type: 'source', position: Position.Right }),
  ];
  const fields = [
    FieldConfig.text('name', 'Points to'),
  ];
  const initialState = {
    name: data?.name || 'something',
  };
  
  return CreateNode({ title, handles, fields, initialState });
};
