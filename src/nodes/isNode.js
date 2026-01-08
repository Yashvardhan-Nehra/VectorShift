import { Position } from 'reactflow';
import { CreateNode, FieldConfig, createHandle } from './CreateNode';

export const IsNode = ({ id, data }) => {
  const title = 'Is';
  const handles = [
    createHandle({ id: `${id}-subject`, type: 'target', position: Position.Left }),
    createHandle({ id: `${id}-result`, type: 'source', position: Position.Right }),
  ];
  const fields = [
    FieldConfig.select('compare', 'Condition', [
      { value: 'equal', label: 'Equal To' },
      { value: 'greater', label: 'Greater Than' },
      { value: 'less', label: 'Less Than' },
      { value: 'contains', label: 'Contains' },
    ]),
  ];
  const initialState = {
    comparison: data?.comparison || 'equal',
  };
  
  return CreateNode({ title, handles, fields, initialState });
};
