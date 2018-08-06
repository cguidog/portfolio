import React from 'react';
import CarList from './CarList';
import CarListFilters from './CarListFilters';

const CarDashboardPage = () => (
    <div>
        <CarListFilters/>
        <div className='list_div'>
            <CarList/>
        </div>
    </div>
);
export default CarDashboardPage;