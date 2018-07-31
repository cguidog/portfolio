import React from 'react';

const CarListItem = ({brand, style, year, price, transmission, image, exteriorColor, interiorColor}) => (

    <div className='container'>
    <h2 className='title'>{brand.toUpperCase()} {style.toUpperCase()} {year}</h2>
    <div className='image_container'>
    <img className='image' src={image}/>
    <div className='details'>
    <p>PRICE: ${price}.00</p>
    <p>TRANSMISSION: {transmission.toUpperCase()}</p>
    <p>EXTERIOR COLOR: {exteriorColor.toUpperCase()}</p>
    <p>INTERIOR COLOR: {interiorColor.toUpperCase()}</p>
    </div>
    </div>
    </div>
);

export default CarListItem