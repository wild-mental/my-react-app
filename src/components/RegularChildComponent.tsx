import React from 'react';

interface RegularChildComponentProps {
    count: number;
}

const RegularChildComponent: React.FC<RegularChildComponentProps> = ({ count }) => {
    console.log('RegularChildComponent without React.memo rendered');
    return <div>Count: {count}</div>;
};

export default RegularChildComponent;