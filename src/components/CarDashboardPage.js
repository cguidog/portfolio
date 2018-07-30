import React from 'react';
import CarList from './CarList';
import CarListFilters from './CarListFilters';

const CarDashboardPage = () => (
    <div>
    <CarListFilters/>
    <CarList/>
    </div>
);
export default CarDashboardPage;