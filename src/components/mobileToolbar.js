import React from 'react';

const MobileToolbar = () => {
  return (
    <>
    <div className='container-fluid d-lg-none mobile'>
        <div className='row justify-content-between mobile-box'>
            <a className='btn btn-light d-flex flex-column justify-content-around mobile-btn'>
                <i className="fas fa-store text-dark"></i>
                <span className='text-dark mobile-title'>Store</span>
            </a>
            <a className='btn btn-light d-flex flex-column justify-content-around mobile-btn'>
                <i className="fas fa-heart text-dark"></i>
                <span className='text-dark mobile-title'>Wishlist</span>
            </a>
            <a className='btn btn-light d-flex flex-column justify-content-around mobile-btn'>
                <i className="fas fa-shopping-cart text-dark"></i>
                <span className='text-dark mobile-title'>Cart</span>
            </a>
            <a className='btn btn-light d-flex flex-column justify-content-around mobile-btn'>
                <i className="fas fa-user text-dark"></i>
                <span className='text-dark mobile-title'>User</span>
            </a>
            <a className='btn btn-light d-flex flex-column justify-content-around mobile-btn'>
                <i className="fas fa-search text-dark"></i>
                <span className='text-dark mobile-title'>Search</span>
            </a>
        </div>
    </div>    
    </>
  );
}

export default MobileToolbar;
