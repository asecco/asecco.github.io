import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

function darkMode() {
    const element = document.body; element.classList.toggle("dark-mode");
}

export default function Intro() {
    return (
        <div className="intro">
            <h2>Hello, I'm <span id="h2name">Andrew Secco</span></h2>
            <h2>I'm a developer and tech enthusiast</h2>
            <ScrollIntoView selector="#About"><button className="btn-large" id="learnmore">Learn More</button></ScrollIntoView>
            <button id="dark-modeBtn" onClick={darkMode}><i className="fa fa-moon-o"></i></button>
        </div>
    )
}