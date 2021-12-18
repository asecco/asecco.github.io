import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

export default function Navbar() {
    return (
        <nav className="split-nav">
            <div className="nav-brand">
                <h3>Andrew Secco</h3>
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
                    <li className="navList"><ScrollIntoView selector="#About">About</ScrollIntoView></li>
                    <li className="navList"><ScrollIntoView selector="#Projects">Projects</ScrollIntoView></li>
                    <li className="navList"><ScrollIntoView selector="#Skills">Skills</ScrollIntoView></li>
                    <li className="navList"><ScrollIntoView selector="#Contact">Contact</ScrollIntoView></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}