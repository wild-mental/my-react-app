import React from "react";

// 함수형 컴포넌트 외부 핸들러
const handleClickExt = () => {
    console.log('Button was clicked!(Ext handler)');
};
function MyButton(props: any) {
    // 함수형 컴포넌트 내부 핸들러
    const handleClickInternal = () => {
        console.log('Button was clicked!' + props.handlerType);
    };

    return (
        // <button onClick={handleClickExt}>
        // <button onClick={() => console.log('Button was clicked!(inline handler)')}>
        <button onClick={handleClickInternal}>
            Click me!
        </button>
    );
}

export default MyButton;