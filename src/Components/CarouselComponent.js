import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../carouselStyles.css';
import image1 from '../carouselImages/unnamed-1.jpg';
import image2 from '../carouselImages/unnamed-2.jpg';
import image3 from '../carouselImages/unnamed-3.jpg';
import image4 from '../carouselImages/unnamed-4.jpg';
import image5 from '../carouselImages/unnamed-5.jpg';
import image6 from '../carouselImages/unnamed.jpg';

const CarouselComponent = () => {
  const images = [
    { src: image1, alt: 'Carousel slide 1' },
    { src: image2, alt: 'Carousel slide 2' },
    { src: image3, alt: 'Carousel slide 3' },
    { src: image4, alt: 'Carousel slide 4' },
    { src: image5, alt: 'Carousel slide 5' },
    { src: image6, alt: 'Carousel slide 6' },
  ];

  const imageComponents = images.map((image, index) => (
    <div key={index} className="h-full w-full">
      <img
        src={image.src}
        alt={image.alt}
        className="object-cover w-full h-full"
      />
    </div>
  ));

  return (
    <div className="relative w-full h-150 lg:h-600 flex items-center justify-center">
      <div className="w-1/2 h-full">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          transitionTime={1000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          className="h-full"
        >
          {imageComponents}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;





