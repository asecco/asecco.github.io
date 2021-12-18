import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div class="rounded-social-buttons">
                <a class="social-button github" href="https://github.com/asecco" target="_blank"><i class="fa fa-github fa-1x social"></i></a>
                <a class="social-button linkedin" href="https://linkedin.com/in/andrewsecco" target="_blank"><i class="fa fa-linkedin fa-1x social"></i></a>
                <p id="footertext">Created with React.js and PaperCSS</p>
                <p id="footertext">© 2021 - Andrew Secco</p>
            </div>
        </footer>
    )
}