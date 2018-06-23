import React from 'react';

const CarListItem = ({id, brand, style, year, price}) => (
    <div>
    <p>{id}</p>
    <p>{brand}</p>
    <p>{style}</p>
    <p>{year}</p>
    <p>{price}</p>
    </div>
);

export default CarListItem