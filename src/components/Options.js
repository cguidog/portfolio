import React from 'react';
import { connect } from 'react-redux';
import {setBrandFilter, setStyleFilter, setTransmissionFilter, sortByPrice, sortByYear, setBrandList} from '../actions/filters';

const Options = (props) => (
    <div>
        <select onChange={(e) => {
            props.dispatch(setBrandFilter(e.target.value));}}
          >
            {
                props.cars.map((car)=> {
                    if (props.filters.brandList.indexOf(car.brand) === -1) {
                        props.filters.brandList.push(car.brand);
                        props.filters.brandList.sort();
                        console.log(props.filters.brandList);
                    }})
            }
            {
                props.filters.brandList.map((brand) => {
                    return <option value={brand} key={props.filters.brandList.indexOf(brand)}>{brand.toUpperCase()}</option>
                })
            }
        })
        </select>
    </div>
);
         
const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        cars: state.cars
        };

    };

export default connect(mapStateToProps)(Options);

