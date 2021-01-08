import React from 'react';
import { BLOG_ITEMS } from '../data/dummy-data'
import SectionTitle from './sectionTitle'

export default function Blog() {

    const slides = BLOG_ITEMS.map(item => {
        let activeclassName = 'carousel-item'
        if (item.active) {
            activeclassName = 'carousel-item active'
        }



        return (
            <>
            <div key={item.photo} className={activeclassName}>
                    <img className='d-block w-100 blog-image' src={item.photo} alt='...'></img>
                <div className="post-info mb__10">
                    <h4 className="blog-card-title">
                        <a className="text-dark chp open" href="#">{item.title}</a>
                    </h4>
                    <span className="post-author mr__5"> By 
                        <span className="cd text-dark"> {item.author}</span>
                    </span>
                    <span className="post-time">on 
                        <span className="cd text-dark">
                            <time dateTime="2020-04-06T02:22:00Z"> {item.date}</time>
                        </span>
                    </span>
                    <div className="post-content">{item.post}</div>
                    </div>
                    </div>
            </>

        )
    })

    const slidesForBlog = BLOG_ITEMS.map(item => {
        return (
            <div key={item.photo} className='col-md-4 col-lg-4'>
                <img className='blog-image' src={item.photo} alt='...'></img>
                <div className="post-info mb__10">
                    <h4 className="blog-card-title">
                        <a className="text-dark chp open" href="#">{item.title}</a>
                    </h4>
                    <span className="post-author mr__5"> By 
                        <span className="cd text-dark"> {item.author}</span>
                    </span>
                    <span className="post-time">on 
                        <span className="cd text-dark">
                            <time dateTime="2020-04-06T02:22:00Z"> {item.date}</time>
                        </span>
                    </span>
                </div>
                <div className="post-content">{item.post}</div>
            </div>
        )
    })

  return (
    <>
        <SectionTitle title='LATES FROM BLOG' text='The freshest and most exciting news'/>
        <div id="carouselExampleControls" className="carousel slide blog-container">
            <div className="carousel-inner">
                {slides}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        <div className='container-fluid blog-container-second'>
            <div className='row'>
                {slidesForBlog}
            </div>
        </div>
    </>
  );
}
