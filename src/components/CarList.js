import React from 'react';
import { connect } from 'react-redux';
import CarListItem from './CarListItem';
import selectCars from '../selectors/cars';

const CarList = (props) => (
    <div>
        <h1>Car List</h1>
        {props.cars.map((car) => {
            return <CarListItem key={car.id} {...car} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        cars: selectCars(state.cars, state.filters)
    };
};
export default connect(mapStateToProps)(CarList);