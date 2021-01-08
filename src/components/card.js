import React from 'react';
import { useState } from 'react';

const Card = ({item}) => {
    const [img, setImg] = useState(item.image)
    const [loading, setLoading] = useState(false)
    const [activeClass, setActiveClass] = useState('product-image');

    const imgChange = (value) => {
        setLoading(true)

        if (img === value) {
            setLoading(false)
            return
        }
        setImg(value)
        setLoading(false)
        setActiveClass('product-image-bg')

    }

    const colors = item.color.map(clr => { 
        return (
            <div className='color-switch shadow-lg' key={clr.colorImage} style={{backgroundColor: clr.colorName}} onMouseEnter={() => imgChange(clr.colorImage)} onMouseLeave={() => setActiveClass('product-image')}></div>
        )
    })


    const Spinner = (
        <div class="spinner-grow" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )


  return (
    <>
                 <div key={item.image} className='col-lg-3 col-md-3 col-6 product'>
                    <div className='product-inner'>
                        {loading ? Spinner : <div className='product-image'>
                            <img className={activeClass} src={img} alt='...'></img>
                        </div>}
                        <div className='product-info'>
                            <h3 className='product-title mb-0'>
                                <a className='title-a' href='#'>{item.title}</a>
                            </h3>
                            <span className='price'>{item.price}</span>
                            <div className='color-selector d-flex'>
                                {colors}
                            </div>
                        </div>
                    </div>
                </div>
    </>
  );
}

export default Card