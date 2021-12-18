import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

export default function Intro() {
    return (
        <div className="intro">
            <h2>Hello, I'm <span id="h2name">Andrew Secco</span></h2>
            <h2>I'm a developer and tech enthusiast</h2>
            <ScrollIntoView selector="#About"><button class="btn-large" id="learnmore">Learn More</button></ScrollIntoView>
        </div>
    )
}