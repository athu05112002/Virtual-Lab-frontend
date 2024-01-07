import React from 'react';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6">
                        <h3>About Us</h3>
                        <p>We are MANIT Bhopal students passionate about cybersecurity. We're building a cutting-edge virtual ethical hacking lab to equip learners with essential cybersecurity skills while upholding the highest ethical standards. Join us in shaping a more secure digital future.</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled">
                            <li><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                            <li><Link className="nav-link active" aria-current="page" to="/about">About</Link></li>
                            <li><Link className="nav-link active" aria-current="page" to="/contact">Contact</Link></li>

                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                        <p>Address: Link Road Number 3, Near Kali Mata Mandir, Bhopal,<br /><p> Madhya Pradesh, India 462003<br /></p>Telephone : +91 755 4051000, 4052000<br />FAX : +91-755 2670562</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
