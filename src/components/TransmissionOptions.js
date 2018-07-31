import React from 'react';
import { connect } from 'react-redux';
import {setTransmissionFilter} from '../actions/filters';
//Displays items with selected transmission.
const Transmission = (props) => (
    <div className='filter_container'>
    <select className='filter'
    value={props.filters.transmission}
    onChange={(e) => {
      props.dispatch(setTransmissionFilter(e.target.value));
      console.log(props.filters.transmissionList)
    }}
    >
    {props.cars.map((car) => {
        if (props.filters.transmissionList.indexOf(car.transmission) === -1 && car.brand.toUpperCase() === props.filters.brand.toUpperCase()) {
            props.filters.transmissionList.push(car.transmission);
            props.filters.transmissionList.sort();
        } else {
            if (props.filters.transmissionList.indexOf(car.transmission) === -1 && props.filters.brand === '') {
                props.filters.transmissionList.push(car.transmission);
                props.filters.transmissionList.sort();
            }
        }
    }) }
    {props.filters.transmissionList.map((transmission) => {
        return  <option key={transmission} value={transmission}>{transmission.toUpperCase()}</option>
    })}
    </select>
    </div>
);
const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        cars: state.cars
        };

    };

export default connect(mapStateToProps)(Transmission);