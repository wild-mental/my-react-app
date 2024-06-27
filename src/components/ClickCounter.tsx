import React, { useState } from 'react';

function ClickCounter() {
    const [count, setCount] = useState(0); // 클릭 카운터의 초기값을 0으로 설정합니다.

    const handleClick = () => {  // 클릭 이벤트 핸들러 함수를 정의합니다.
        setCount(count + 1); // 클릭할 때마다 카운터를 1씩 증가시킵니다.
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p>You clicked {count} times</p>
            <p>This is always same part</p>
        </div>
    );
}

export default ClickCounter;