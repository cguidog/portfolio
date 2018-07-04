import React from 'react';
import {connect} from 'react-redux';
import {setBrandFilter, setStyleFilter, setTransmissionFilter, sortByPrice, sortByYear, setBrandList} from '../actions/filters';
import Options from '../components/Options';
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
            <Options/>
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
            <option value='price'>Price</option>
            <option value='year'>Year</option>
            </select>
            </div>
        );
    };
};
const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        cars: state.cars
    };
};

export default connect(mapStateToProps)(CarListFilters);