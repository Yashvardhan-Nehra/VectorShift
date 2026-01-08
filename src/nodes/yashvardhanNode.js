import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const YashvardhanNode = ({ id, data }) => {
  const title = 'Yashvardhan';
  const handles = [
    createHandle({ id: `${id}-config`, type: 'target', position: Position.Left }),
    createHandle({ id: `${id}-data`, type: 'source', position: Position.Right }),
  ];
  const fields = [
    FieldConfig.text('username', 'Username'),
    FieldConfig.select('role', 'Role', [
      { value: 'developer', label: 'Developer' },
      { value: 'designer', label: 'Designer' },
      { value: 'manager', label: 'Manager' },
    ]),
  ];
  const initialState = {
    username: data?.username || 'yashvardhan',
    role: data?.role || 'developer',
  };
  
  return CreateNode({ title, handles, fields, initialState });
};
