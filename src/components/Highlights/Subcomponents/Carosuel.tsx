// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import Card from './Card'; 


const NextArrow = ({ onClick }) => (
    <div 
        className="slick-arrow absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white rounded-full p-2 flex items-center justify-center"
        onClick={onClick}
        style={{ width: '40px', height: '40px', zIndex: 1 }} 
    >
        &gt;
    </div>
);


const PrevArrow = ({ onClick }) => (
    <div 
        className="slick-arrow absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white rounded-full p-2 flex items-center justify-center"
        onClick={onClick}
        style={{ width: '40px', height: '40px', zIndex: 1 }} 
    >
        &lt;
    </div>
);

const Carousel = ({ cardData }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
        rtl: false,
    };

    return (
        <div className="mt-12 flex justify-center">
            <div className="w-1/2 relative"> 
                <Slider {...settings}>
                    {cardData.map((card, index) => (
                        <div key={index} className="px-2">
                            <Card {...card} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
