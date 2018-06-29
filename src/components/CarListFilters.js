import React from 'react';
import {connect} from 'react-redux';
import {setBrandFilter, setStyleFilter, setTransmissionFilter, sortByPrice, sortByYear} from '../actions/filters';
class CarListFilters extends React.Component {
    state = {};
    render() {
        return (
            <div>
            <input 
            type="text"
            placeholder='brand'
            value={this.props.filters.brand}
            onChange={(e) => {
                this.props.dispatch(setBrandFilter(e.target.value));
            }}
            />
            <input 
            type="text"
            placeholder='style'
            value={this.props.filters.style}
            onChange={(e) => {
                this.props.dispatch(setStyleFilter(e.target.value));
            }}
            />
            <select
            value={this.props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'price') {
                    this.props.dispatch(sortByPrice());
                } else if (e.target.value === 'year') {
                    this.props.dispatch(sortByYear());
                }
            }}
            >
            <option value='price'>{this.props.cars[0].brand}</option>
            <option value='year'>Year</option>
            </select>
            </div>
        );
    };
};
const mapStateToProps = (state) => {
    console.log(state.cars.length);
    return {
        filters: state.filters,
        cars: state.cars
    };
};

export default connect(mapStateToProps)(CarListFilters);