import React from 'react';

const Banner = () => {
  return (
    <div className='container-fluid banner'>
        <div className='row banner-container'>
            <div className='col-lg-6 col-md-6 col-12 banner-item'>
              <div className='d-flex h-holder'>
                <h3 className='banner-title'>LOOKBOOK 2020</h3>
                <h4 className='banner-text'>MAKE LOVE THIS LOOK</h4>
              </div>
              <img className='banner-image' src='https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ban11_2x_98a9833d-00a0-4093-bd47-449aeb385ae5_720x.jpg?v=1581761839' alt='...'></img> 
              
            </div>
            <div className='col-lg-6 col-md-6 col-12 banner-item'>
            <div className='d-flex h-holder'>
                <h3 className='banner-title'>SUMMER SALE</h3>
                <h1 className='banner-text-second'>UP TO 70%</h1>
              </div>
                <img className='banner-image' src='https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ban12_2x_bc6d3370-26aa-4413-ad72-71ab2161187f_720x.jpg?v=1581761856' alt='...'></img>
            </div>
        </div>
    </div>
  );
}

export default Banner;
