import React, { useState } from "react";

function MyStateComponent() {
    const initialState = false;
    const [myState, setMyState] = useState(initialState);

    // 사용 예
    const newValue = true;
    // 무한루프 동작하게끔 하는 호출 방식
    // 렌더링이 시작되면 -> status 변경
    // status 가 변경되면 -> 리렌더링
    // 리렌더링 시작되면 ... (infinite..)
    setMyState(newValue);
    console.log(myState);

    // newValue = false;
    // setMyState(newValue);
    // console.log(myState);
    return <h1>my state component</h1>;
}

export default MyStateComponent;