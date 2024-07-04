import React from 'react';

interface DrillingChildProps {
    name?: string;
}

const DrillingChild: React.FC<DrillingChildProps> = ({ name }) => {
    return (
        <div>
            <h3>Child Component</h3>
            <p>Hello, {name}!</p>
        </div>
    );
};

export default DrillingChild;