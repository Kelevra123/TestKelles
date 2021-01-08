import React from 'react';

export default function Foot() {
  return (
    <>
        <div className='container-fluid'>
            <div className='row foot-container'>
                <div className='col-lg-6 col-md-6 col-12 col_1 cg'>
                Copyright © 2021 
                <span className="cp">Kalles</span>
                <span> all rights reserved. Powered by </span>
                <a href="https://the4.co">The4</a>
                </div>
                <div className='col-lg-6 col-md-6 col-12 col_2'>
                <ul id="footer-menu" className="clearfix">
                    <li className="menu-item"><a href="#">Shop</a></li>
                    <li className="menu-item"><a href="#">About Us</a></li>
                    <li className="menu-item"><a href="#">Contact</a></li>
                    <li className="menu-item"><a href="#">Blog</a></li>
                </ul>
                </div>
            </div>
        </div>
    </>
  );
}
