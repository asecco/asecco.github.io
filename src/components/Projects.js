import React from 'react';
import Project1 from '../images/msu-majors.png';
import Project2 from '../images/portfolio.png';
import Project3 from '../images/box-office-bombs.png';
import Project4 from '../images/ip-location-lookup.png';
import Project5 from '../images/react-calculator.png';
import Project6 from '../images/libgen-leecher.png';

export default function Projects() {
    return (
        <div id="Projects">
            <h3>Projects</h3>
            <div className="card">
                <img src={Project1} alt="MSU Majors"></img>
                <div>
                <h4 className="card-title">MSU Majors</h4>
                <span className="badge success">JavaScript/HTML/CSS, jQuery</span>
                <p className="card-text">Website for Michigan State University that pulls together information for all the majors and puts it in one location.</p>
                <a href="https://github.com/asecco/MSU-Majors" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div className="card">
                <img src={Project2} alt="Portfolio"></img>
                <div>
                <h4 className="card-title">Personal Portfolio</h4>
                <span className="badge success">React, PaperCSS</span>
                <p className="card-text">My personal portfolio website showcasing who I am and the projects I've completed.</p>
                <a href="https://github.com/asecco/asecco.github.io" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div className="card">
                <img src={Project3} alt="Box Office Bombs"></img>
                <div>
                <h4 className="card-title">Box Office Bombs</h4>
                <span className="badge success">JavaScript/HTML/CSS</span>
                <p className="card-text">Addicting web game where you compare two films and guess which one made more money.</p>
                <a href="https://github.com/asecco/Box-Office-Bombs" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div className="card">
                <img src={Project4} alt="IP Location Lookup"></img>
                <div>
                <h4 className="card-title">IP Location Lookup</h4>
                <span className="badge success">Python, PyQt5</span>
                <p className="card-text">Program that allows you to search an IP address and retrieve geolocation information via an API request.</p>
                <a href="https://github.com/asecco/IP-Location-Lookup" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div className="card">
                <img src={Project6} alt="LibGen Leecher"></img>
                <div>
                <h4 className="card-title">LibGen Leecher</h4>
                <span className="badge success">Python</span>
                <p className="card-text">A script for easily downloading books from Library Genesis. Supports both pdf and epub extensions.</p>
                <a href="https://github.com/asecco/LibGen-Leecher" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
            <div className="card">
                <img src={Project5} alt="React Calculator"></img>
                <div>
                <h4 className="card-title">React Calculator</h4>
                <span className="badge success">React, JavaScript/HTML/CSS</span>
                <p className="card-text">Simple calculator web app developed and styled in a few hours while learning React.</p>
                <a href="https://github.com/asecco/React-Calculator" target="_blank"><button>Source Code</button></a>
                </div>
            </div>
        </div>
    )
}