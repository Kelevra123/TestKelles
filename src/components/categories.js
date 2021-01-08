import React from 'react';

const Categories = () => {
  return (
    <>
        <div className='container-fluid mt-3 pr-0 pl-0 cat-section'>
            <div className='container pr-0 pl-0 categories-holder'>
                <div className='row categories d-flex flex-wrap'>
                    <div className='col-md-6 col-lg-6 col-12 p__15 mb__30 my-pic'>
                        <img className='bg-img-cat-big' src='https://cdn.shopify.com/s/files/1/0332/6420/5963/files/young-beautiful-woman-looking-trendy-girl-casual-summer-clothes-positive-funny-model-winking_720x.jpg?v=1606209527' alt='...'></img>
                        <div className="shadow-lg bg-white categories-btn">Woman</div>
                    </div>
                    <div className='col-md-3 col-lg-3 col-6 d-flex flex-column pl-0 pr-0 cat-column'>
                        <div className='mh__50 mb__30 p__15'>
                            <img className='bg-img-cat' src='https://cdn.shopify.com/s/files/1/0332/6420/5963/files/bag2_360x.jpg?v=1581730050' alt='...'></img>
                            <div className="shadow-lg bg-white categories-btn-small">Acessories</div>
                        </div>
                        <div className='mh__50_1 mb__30 p__15'>
                            <img className='bg-img-cat-min' src='https://cdn.shopify.com/s/files/1/0332/6420/5963/files/lemai3020112688_m4_2-0_360x.jpg?v=1606229788' alt='...'></img>
                            <div className="shadow-lg bg-white categories-btn-small">Footwear</div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-3 col-6 p__0 mh__100 mb__30 p__15 centred-item'>
                        {/* <img className='bg-img-cat' src='https://cdn.shopify.com/s/files/1/0332/6420/5963/files/p24-21_360x.jpg?v=1581731327' alt='...'></img> */}
                        <div className="shadow-lg bg-white categories-btn-right">Watches</div>
                    </div>                
                </div>
            </div>
        </div>
    </>
  );
}

export default Categories;
