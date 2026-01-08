import { Position } from 'reactflow';
import { CreateNode, createHandle } from './CreateNode';

export const HiNode = ({ id, data }) => {
  const title = 'Hi';
  const handles = [
    createHandle({ id: `${id}-greeting`, type: 'source', position: Position.Right }),
  ];
  const fields = [];
  const initialState = {};
  const renderContent = '👋 Hello there!';

  const baseStyle = {
    borderRadius: '50%',
    backgroundColor: 'lightblue',
    width: '200px',
    height: '200px',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return CreateNode({ title, handles, fields, initialState, baseStyle, renderContent });
};
