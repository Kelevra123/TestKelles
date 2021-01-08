import React from 'react';

export default function Footer() {
  return (
    <>
        <div className='container-fluid'>
            <div className='row footer-container'>
                <div className='col-lg-3 col-md-6 col-12 order-lg-1 order-1 prl-15'>
                    <aside>
                        <div className='textwidget widget_footer'>
                            <div className='footer-contact'>
                                <p>
                                    <a href='/' className='db'>
                                        <img src='//cdn.shopify.com/s/files/1/0332/6420/5963/files/kalles.svg?v=10756066450937027033' alt='...'></img>
                                    </a>
                                </p>
                                <p>
                                    <i className="fas fa-map-marker-alt footer-icon"></i>
                                    <span className='cg'>184 Main Rd E, St Albans <br/>
                                    <span className='footer-category-item'>VIC 3021, Australia</span>
                                    </span>
                                </p>
                                <p>
                                    <i className="far fa-envelope footer-icon"></i>
                                    <span className='cg'>
                                        <a className='tdn cg' href='#'>mailto:contact@company.com</a>
                                    </span>
                                </p>
                                <p>
                                    <i className="fas fa-phone footer-icon"></i>
                                    <span className='cg'>
                                        <a className='tdn cg' href='#'>+001 2233 456 </a>
                                    </span>
                                </p>
                                <div className='row footer-social'>
                                    <i className="fab fa-facebook-f cg"></i>
                                    <i className="fab fa-twitter cg"></i>
                                    <i className="fab fa-instagram cg"></i>
                                    <i className="fab fa-linkedin-in cg"></i>
                                    <i className="fab fa-pinterest-p cg"></i>
                                </div>
                            </div>
                            
                        </div>
                    </aside>
                </div>
                <div className='col-lg-2 col-md-6 col-12 order-lg-2 order-1 prl-15'>
                    <div className='footer-category'>
                        <h4 className='footer-title'>Categories</h4>
                        <p>
                            <span className='cg'>Men</span>
                        </p>
                        <p>
                            <span className='cg'>Women</span>
                        </p>
                        <p>
                            <span className='cg'>Acessories</span>
                        </p>
                        <p>
                            <span className='cg'>Shoes</span>
                        </p>
                        <p>
                            <span className='cg'>Denim</span>
                        </p>
                        <p>
                            <span className='cg'>Dress</span>
                        </p>
                    </div>
                </div>
                <div className='col-lg-2 col-md-6 col-12 order-lg-3 order-1'>
                    <div className='footer-info'>
                            <h4 className='footer-title'>Information</h4>
                        <p>
                            <span className='cg'>About Us</span>
                        </p>
                        <p>
                            <span className='cg'>Contact Us</span>
                        </p>
                        <p>
                            <span className='cg'>Terms & Conditions</span>
                        </p>
                        <p>
                            <span className='cg'>Returns & Exchanges</span>
                        </p>
                        <p>
                            <span className='cg'>Shipping & Delivery</span>
                        </p>
                        <p>
                            <span className='cg'>Privacy Policy</span>
                        </p>
                    </div>
                </div>
                <div className='col-lg-2 col-md-6 col-12 order-lg-4 order-1'>
                <div className='footer-links'>
                            <h4 className='footer-title'>Usefull links</h4>
                        <p>
                            <span className='cg'>Store Location</span>
                        </p>
                        <p>
                            <span className='cg'>Latest News</span>
                        </p>
                        <p>
                            <span className='cg'>My account</span>
                        </p>
                        <p>
                            <span className='cg'>Size Guide</span>
                        </p>
                        <p>
                            <span className='cg'>FAQs 2</span>
                        </p>
                        <p>
                            <span className='cg'>FAQs</span>
                        </p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12 order-lg-5 order-1'>
                <div className='footer-subscribe'>
                            <h4 className='footer-title'>Newsletter Signup</h4>
                        <p>
                            <span className='cg'>Subscribe to our newsletter and get 10% off your first purchase</span>
                        </p>
                        <div className="input-group mb-3 input-area-rounded rounded-pill">
                            <input 
                            type="text" className="form-control rounded-pill input-footer" 
                            placeholder="Your Email address" 
                            aria-label="Your Email address" 
                            aria-describedby="button-addon2"
                            >

                            </input>
                            <div className="input-group-append subscribe-button">
                                <button className="btn btn-outline-secondary rounded-pill subscribe-item" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </>
  );
}
