import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

export default function Navbar() {
    return (
        <nav className="split-nav" id="Start">
            <div className="nav-brand">
                <h3 id="navName">Andrew Secco</h3>
            </div>
            <div className="collapsible">
            <label for="collapsible1">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <div className="bar4"></div>
            </label>
            <div className="collapsible-body">
                <ul className="inline">
                    <li><ScrollIntoView className="navList" selector="#About">About</ScrollIntoView></li>
                    <li><ScrollIntoView className="navList" selector="#Projects">Projects</ScrollIntoView></li>
                    <li><ScrollIntoView className="navList" selector="#Skills">Skills</ScrollIntoView></li>
                    <li><ScrollIntoView className="navList" selector="#Contact">Contact</ScrollIntoView></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}