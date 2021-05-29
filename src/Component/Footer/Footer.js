import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import fb from '../Images/facebook_icon_130940.png'
import instagram from '../Images/ins.png'
import linkedin from '../Images/linkedin.png'
import youtube from '../Images/youtube.png'
const Footer = () => {
    return (
        <div id="contact" className="footer-container p-5" >
            <Row >
                <Col md={4} className="footer-column mt-3">
                    <p style={{ color: "white" }}>
                        H#340 (4th Floor), Road #24, <br />
                  New DOHS, Mohakhali, Dhaka, Bangladesh <br />
                  Phone: 018XXXXXXXX <br />
                  E-mail: info@company.com
               </p>
                </Col>
                <Col className="footer-column">
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Sitemap</p>
                    <p>Support Center</p>
                    <p>Terms Conditions</p>
                    <p>Submit Listing</p>
                </Col>
                <Col className="footer-column">
                    <h3>Quick Links</h3>
                    <p>Quick Links</p>
                    <p>Rentals</p>
                    <p>Sales</p>
                    <p>Contact</p>
                    <p>Terms Conditions</p>
                    <p>Our Blog</p>
                </Col>
                <Col md={4} className="footer-column">
                    <h3>About Us</h3>
                    <p>
                        We are the top real estate <br />
                  agency in Sydney, with agents <br />
                  available to answer any <br />
                  question 24/7.
               </p>
                    <div className="social-image-container">
                        <div>
                            <img style={{ width: "30px", borderRadius: "10px" }} src={fb} alt="" />
                        </div>
                        <div>
                            <img style={{ width: "30px", borderRadius: "3px" }} src={instagram} alt="" />
                        </div>
                        <div>
                            <img style={{ width: "30px", borderRadius: "3px" }} src={linkedin} alt="" />
                        </div>
                        <div>
                            <img style={{ width: "30px", borderRadius: "3px" }} src={youtube} alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;