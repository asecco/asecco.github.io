import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

let theme = window.localStorage.getItem('color-theme')

if (theme === null) {
    theme = 'light-mode'
} else {
    document.body.setAttribute('class', theme)
}

function darkMode() {
    const darkMode = document.body; darkMode.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark-mode'
        window.localStorage.setItem('color-theme', theme)
    } else {
        theme = 'light-mode'
        window.localStorage.setItem('color-theme', theme)
    }
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