import React from 'react';
import './App.css';
import 'components/HeaderContent'
import HeaderContent from "components/HeaderContent";
import MyComponent from "components/MyComponent";
import ButtonStyled from "./components/ButtonStyled";

function App() {
  return (
    <div className="App">
      {/*<HeaderContent />*/}
      <MyComponent />
      <ButtonStyled>일반 버튼</ButtonStyled>
      <ButtonStyled primary>Primary 버튼</ButtonStyled>
    </div>
  );
}

export default App;
