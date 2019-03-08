import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';
const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    };

    return (
        <div
            className={'carousel_wrapper'}
            style={{
                height:`${window.innerHeight}px`,
                overflow: "hidden"
        }}
        >
        <Slider {...settings}>                  {/*... in ES6 means we are putting all props of 'settings' into slider*/}
        <div>
            <div className={"carousel_image"}
            style={{
                background: `url(${slide_one})`,
                height: `${window.innerHeight}px`
            }}
            >

            </div>
        </div>
        <div>
            <div className={"carousel_image"}
                 style={{
                     background: `url(${slide_two})`,
                     height: `${window.innerHeight}px`
                 }}
            >

            </div>
        </div>
        <div>
            <div className={"carousel_image"}
                 style={{
                     background: `url(${slide_three})`,
                     height: `${window.innerHeight}px`
                 }}
            >

            </div>
        </div>

        </Slider>

        </div>
    );
};

export default Carousel;
