import React from 'react';
import HeaderButtons from './headerButtons';
import Logo from './logo';
import Navbar from './navbar';

const Header = () => {
  return (
    <>
     <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2 col-md-4 col-sm-10 col-10 tc tl-lg offset-md-0 order-2 order-md-1 bg-light'>
            <Logo/>
          </div>
          <div className='col-lg-8 col-md-4 col-sm-1 col-1 order-1 order-md-2 pr-0 pl-0'>
           <Navbar/>
          </div>
          <div className='row col-1 col-sm-1 col-md-4 col_gr order-3 order-md-3 col-lg-2 col_group_btns bg-light'>
            <HeaderButtons/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
