// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar-panel">
            <div className="toolbar-grid">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='hi' label='Hi' />
                <DraggableNode type='this' label='This' />
                <DraggableNode type='is' label='Is' />
                <DraggableNode type='yashvardhan' label='Yashvardhan' />
                <DraggableNode type='nehra' label='Nehra' />
            </div>
        </div>
    );
};
