import React, { useState, ChangeEvent } from 'react';

interface CallBackChildProps {
    // 화살표 함수 형태로 type 만 선언
    // 동작은 부모 객체로부터 받아서 부모의 동작을 촉발시키는 용도
    sendDataToParent: (data: string) => void;
}

const CallBackChild: React.FC<CallBackChildProps> = ({ sendDataToParent }) => {
    const [childData, setChildData] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChildData(e.target.value);
    };

    const handleClick = () => {
        sendDataToParent(childData);
    };

    return (
        <div>
            <h2>Child Component</h2>
            <input type="text" value={childData} onChange={handleChange} />
            <button onClick={handleClick}>Send Data to Parent</button>
        </div>
    );
};

export default CallBackChild;