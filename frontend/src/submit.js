// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            alert(
                `Pipeline Analysis Results:\n\n` +
                `Number of Nodes: ${data.num_nodes}\n` +
                `Number of Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? 'Yes' : 'No'}\n\n` +
                `Congrats Yashvardhan Nehra! you are hired.`
            );
        } catch{
            alert(`Oops! Something went wrong. Please try again.`+
                'Still Yashvardhan Nehra! you are hired.'
            );
        }
    };

    return (
        <div className="submit-button-panel">
            <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
};
