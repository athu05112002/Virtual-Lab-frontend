import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend quam eget sollicitudin.</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                        <p>123 Main Street<br />City, State ZIP<br />contact@example.com<br />(123) 456-7890</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
