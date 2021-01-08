import React from 'react';

const HeaderButtons = () => {
  return (
    <>
       
            <a 
                className="icon_search mt-1" 
                data-id="#nt_search_canvas" 
                href="/search"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="26" 
                height="22" 
                fill="currentColor" 
                className="bi bi-search text-dark mb-2" 
                viewBox="0 0 16 16"
              >
                    <path 
                    fillRule="evenodd" 
                    d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                    <path 
                    fillRule="evenodd" 
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
            </a>
            <a 
                className="icon_bag ml-2" 
                data-id="#nt_search_canvas" 
                href="/search"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="26" height="26" 
                fill="currentColor" 
                className="bi bi-cart4 text-dark mb-1" 
                viewBox="0 0 16 16"
              >
                    <path 
                        fillRule="evenodd" 
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    />
              </svg>
              </a>
              <a 
                className="icon_hearth ml-2 d-none d-sm-none d-lg-inline mt-1" 
                data-id="#nt_search_canvas" 
                href="/search"
              >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="26" height="20" 
                    fill="currentColor" 
                    className="bi bi-heart text-dark" 
                    viewBox="0 0 16 16"
                >
                  <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
            </a>
            <a 
                className="icon_user ml-2 d-none d-sm-none d-lg-inline" 
                data-id="#nt_search_canvas" 
                href="/search"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="26" height="26" 
                fill="currentColor" 
                className="bi bi-person text-dark mb-1" 
                viewBox="0 0 16 16"
              >
                <path fillRule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
            </a>
    </>
  );
}

export default HeaderButtons;
