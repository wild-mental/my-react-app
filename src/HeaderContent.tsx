import React from 'react';
import logo from './logo.svg';
import './App.css';

function HeaderContent() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                헤더 콘텐츠 분리
            </a>
        </header>
    );
}

export default HeaderContent;
