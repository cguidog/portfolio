import React from 'react';

const CarListItem = ({brand, style, year, price, transmission, image}) => (
    <div>
    <div className='container'>
    <img src={image}/>
    <p>{brand}</p>
    <p>{style}</p>
    <p>{year}</p>
    <p>{price}</p>
    <p>{transmission}</p>
    </div>
    <div className='sexy_line'></div>
    </div>
);

export default CarListItem