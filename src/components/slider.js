import React from 'react';

const Slider = () => {
  return (
    <>
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators my-ind">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active bg-dark"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1" className="bg-dark"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2" className="bg-dark"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slider13_49090674-d1ef-4c34-95b9-19c1edac4d15_1950x.jpg?v=1585640180" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-md-block tl">
        <h5 className='text-dark carousel-title-main tl'>SUMMER 2020</h5>
        <p className='text-dark carousel-title-second tl mn'>New Arrival Collection</p>
        <button type='button' className='btn btn-dark carousel-btn-main'>Explore Now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slider12_4d489365-da55-49c6-9504-a1f5f82b4111_1728x.jpg?v=1585640309" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-md-block tr">
        <h5 className='text-dark carousel-title-main tr'>NEW SEASON</h5>
        <p className='text-dark carousel-title-second tr mn'>Lookbook Collection</p>
        <button type='button' className='btn btn-dark carousel-btn-main'>Explore Now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slider11_2bfeeb77-be99-4c7c-8354-a628a9d424d5_1512x.jpg?v=1585640322" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-md-block tl">
        <h5 className='text-dark carousel-title-main tl'>SUMMER SALE</h5>
        <p className='text-dark carousel-title-second tl mn'>Save up to 70%</p>
        <button type='button' className='btn btn-dark carousel-btn-main'>Explore Now</button>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

    </>
  );
}

export default Slider;
