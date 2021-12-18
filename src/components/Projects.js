import React from 'react';
import Project1 from '../images/msu-majors.png';

export default function Projects() {
    return (
        <div className="card" id="Projects">
            <img src={Project1} alt="MSU Majors"></img>
            <div>
            <h4 class="card-title">My awesome Paper card!</h4>
            <h5 class="card-subtitle">Nice looking subtitle.</h5>
            <p class="card-text">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
            <button>Let me go here!</button>
            </div>
        </div>
    )
}