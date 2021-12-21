import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

export default function Footer() {
    return (
        <footer>
            <div className="rounded-social-buttons">
                <a className="social-button github" href="https://github.com/asecco" target="_blank"><i className="fa fa-github fa-1x social"></i></a>
                <a className="social-button linkedin" href="https://linkedin.com/in/andrewsecco" target="_blank"><i className="fa fa-linkedin fa-1x social"></i></a>
                <div className="footerinfo">
                    <p id="footertext">Created with React.js and PaperCSS</p>
                    <p id="footertext">© 2021 - Andrew Secco</p>
                </div>
            </div>
            <ScrollIntoView selector="#Start"><button id="scrollUp"><i className="fa fa-arrow-up"></i></button></ScrollIntoView>
        </footer>
    )
}