import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    primary?: boolean;
}

// TypeScript 사용 시 styled-component의 정보를 저장한 변수명을 반드시 대문자로 시작
const ButtonStyled = styled.button<ButtonProps>`
  background: ${(props: ButtonProps) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props: ButtonProps) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  &:hover {
    background-color: ${props => (props.primary ? '#D02090' : 'lightgrey')};
  }
`;

export default ButtonStyled;