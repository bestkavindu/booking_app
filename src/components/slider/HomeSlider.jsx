import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./HomeSlider.css"

const HomeSlider = () => {
  return (
    <Carousel>
    <div className='image'>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg" />
    </div>
    <div className='image'>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
    </div>
    <div className='image'>
        <img src="https://archive.org/download/02-04-2016_Images_Images_1-20_HQ/01_Winter-Tiger-Wild-Cat-Images.jpg" />
    </div>
</Carousel>
  )
}

export default HomeSlider