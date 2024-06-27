import React from 'react';

const MyComponent = () => {
    const inlineStyle = {
        backgroundColor: 'lightblue',
        color: 'white',
        padding: '10px',
        borderRadius: '5px'
    };

    return (
        <div style={inlineStyle}>
            This is a component with inline styling.
        </div>
    );
};

export default MyComponent;