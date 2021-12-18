import React from 'react';
import Myself from '../images/myself.jpg';
import Resume from '../resume/Andrew-Secco-Resume.pdf';

export default function About() {
    return (
        <div id="About">
            <h3>About Me</h3>
            <img src={Myself} alt="Personal Photo" className="float-left" id="profile"></img>
            <br></br>
            <p className="aboutinfo">I am currently a senior at Michigan State University studying Information Science.</p>
            <p className="aboutinfo">I've always been passionate about technology my entire life and have used that passion in both the development and infrastructure sectors of tech to create and utilize technologies such as games, websites, apps, and more with the goal of being useful and improving people's lives.</p>
            <p className="aboutinfo">After graduation I hope to turn my passion into a career and continue to learn and grow as both a person and developer.</p>
            <a href={Resume} target="_blank"><button className="btn-large" id="resume">Resume</button></a>
        </div>
    )
}