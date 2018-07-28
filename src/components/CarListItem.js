import React from 'react';

const CarListItem = ({brand, style, year, price, transmission, image}) => (
    <div>
    <img src={image} />
    <p>{brand}</p>
    <p>{style}</p>
    <p>{year}</p>
    <p>{price}</p>
    <p>{transmission}</p>
    </div>
);

export default CarListItem