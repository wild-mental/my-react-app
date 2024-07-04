import React from 'react';
import DrillingChild from "./DrillingChild";

interface DrillingParentProps {
    name: string;
}

const DrillingParent: React.FC<DrillingParentProps> = ({ name }) => {
    return (
        <div>
            <h2>Parent Component</h2>
            <DrillingChild name={name} />
        </div>
    );
};

export default DrillingParent;