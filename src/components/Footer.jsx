import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <h3>Let’s Create Something Amazing</h3>
                <p>Available for freelance projects, collaborations, and editing gigs.</p>

                <div className="footer-socials">
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href="mailto:youremail@example.com">Email</a>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                <p className="footer-copy">&copy; {new Date().getFullYear()} EDITOR NAME | Video Editor Portfolio</p>
            </div>
        </footer>
    );
};

export default Footer;
