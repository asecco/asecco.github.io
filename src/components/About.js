import React from 'react';
import Myself from '../images/myself.jpg';

export default function About() {
    return (
        <div>
            <h2>Hello, I'm Andrew Secco</h2>
            <h2>I'm a developer and tech enthusiast</h2>
            <h3>About Me</h3>
            <img src={Myself} alt="Personal Photo" className="float-left"></img>
            <p>I'm currently a student at Michigan State University studying Information Science.</p>
            <p>I've always been passionate about technology my entire life and have used that passion in both the development and infrastructure sectors of tech to create and utilize technologies such as games, websites, apps, and more with the goal of being useful and improving people's lives.</p>
        </div>
    )
}