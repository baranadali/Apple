import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {Link} from "react-router-dom";



import SliderImage1 from '../assets/images/slider-1.jpeg'
import SliderImage2 from '../assets/images/slider-2.jpeg'
import SliderImage3 from '../assets/images/slider-3.jpeg'
import SliderImage4 from '../assets/images/slider-4.jpeg'
import SliderImage5 from '../assets/images/slider-5.jpeg'

export default function Slider () {
    const sliderSetting = {
        autoPlay : "boolean",
        centerMode : "boolean",
        infiniteLoop: "boolean",
        showArrows: false,
        showStatus : false,
        showThumbs : false,
        showIndicators: false,
        selectedItem: 1,
    }
    return (
        <div className="mt-2 mb-4">
            <Carousel {...sliderSetting}>
                <div className="!mx-1 mobile:h-[495px]">
                    <img src={SliderImage1} className="max-h-[500px] h-full object-cover"/>
                </div>
                <div className="!mx-1 mobile:h-[495px]">
                    <img src={SliderImage2} className="max-h-[500px] h-full object-cover"/>
                </div>
                <div className="!mx-1 mobile:h-[495px]">
                    <img src={SliderImage3} className="max-h-[500px] h-full object-cover"/>
                </div>
                <div className="!mx-1 mobile:h-[495px]">
                    <img src={SliderImage4} className="max-h-[500px] h-full object-cover"/>
                </div>
                <div className="!mx-1 mobile:h-[495px]">
                    <img src={SliderImage5} className="max-h-[500px] h-full object-cover"/>
                </div>
            </Carousel>
        </div>
    )
}
