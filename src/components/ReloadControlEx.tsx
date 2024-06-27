import React, { useState } from 'react';
import ChildComponent from "./ChildComponent";
import RegularChildComponent from './RegularChildComponent';

const ReloacControlEx = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <h1>React.memo Demo</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>

            <h2>Child Component with React.memo</h2>
            <ChildComponent count={count} />

            <h2>Child Component without React.memo</h2>
            <RegularChildComponent count={count} />
        </div>
    );
};

export default ReloacControlEx;