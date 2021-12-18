import React from 'react';

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
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}