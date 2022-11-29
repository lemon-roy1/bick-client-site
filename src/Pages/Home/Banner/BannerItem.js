import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2  right-20 top-1/2">
                    <div className=""></div>
                    <div className="">
                        <h1 className='text-5xl font-bold text-color'> Doctor anyone <br />
                            services In 24 Hour
                        </h1>
                        <p className='color'>We are one of the best method for finding the best <br /> doctor for you in the most trouble free way</p>
                    </div>
                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${prev}`}  className="btn btn-circle">❮</a> 
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;