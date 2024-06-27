import React from 'react';

interface ChildComponentProps {
    count: number;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ count }) => {
    console.log('ChildComponent with React.memo rendered');
    return <div>Count: {count}</div>;
};

export default React.memo(ChildComponent);