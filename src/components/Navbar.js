import React from 'react';

export default function Navbar() {
    return (
        <nav className="border fixed split-nav">
            <div className="nav-brand">
                <h3>Andrew Secco</h3>
            </div>
            <div className="collapsible">
            <label for="collapsible1">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </label>
            <div className="collapsible-body">
                <ul className="inline">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}