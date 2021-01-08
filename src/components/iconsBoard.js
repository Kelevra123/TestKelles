import React from 'react';

export default function IconsBoard() {
  return (
    <>
        <div className='container-fluid icon-container '>
            <div className='row justify-content-between'>
                <div className='col-12 col-md-6 col-lg-3 icon-item row'>
                    <i className="fas fa-car icon-bottom col-lg-3 col-md-3 col-3"></i>
                    <div className='col-lg-8 col-md-8 col-8'> 
                    <h3 className="icon-title ">FREE SHIPPING</h3>
                    <p className="icon-post">Free shipping on all US order or order above $100</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 icon-item row'>
                    <i className="fas fa-clock icon-bottom col-lg-3 col-md-3 col-3"></i>
                    <div className='col-lg-8 col-md-8 col-8'> 
                    <h3 className="icon-title ">SUPPORT 24/7</h3>
                    <p className="icon-post">Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 icon-item row'>
                    <i className="fas fa-redo-alt icon-bottom col-lg-3 col-md-3 col-3"></i>
                    <div className='col-lg-8 col-md-8 col-8'> 
                    <h3 className="icon-title ">30 DAYS RETURN</h3>
                    <p className="icon-post">Simply return it within 30 days for an exchange.</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 icon-item row'>
                    <i className="fas fa-key icon-bottom col-lg-3 col-md-3 col-3"></i>
                    <div className='col-lg-8 col-md-8 col-8'> 
                    <h3 className="icon-title ">100% PAYMENT SECURE</h3>
                    <p className="icon-post">We ensure secure payment with PEV</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
