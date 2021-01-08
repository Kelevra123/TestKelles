import React from 'react';

const Navbar = () => {
  return (
    <>
     <nav className='navbar navbar-expand-md navbar-light bg-light'>
              <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarMenu'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <div id='navbarMenu' className='collapse navbar-collapse '>
                <ul id='nt_menu_id' className='navbar-nav justify-content-between'>
                  <li className="nav-item active">
                    <a className="nav-link dropdown" href="#">Shop<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown" href="#">Product<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-danger dropdown" href="#">Sale<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown" href="#">About<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown" href="#">Contacts<span className="sr-only">(current)</span></a>
                  </li>

                </ul>
              </div>
              
            </nav>
    </>
  );
}

export default Navbar;
