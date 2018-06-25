import React from 'react';
import {connect} from 'react-redux';
import {setBrandFilter, setStyleFilter, setTransmissionFilter, sortByPrice, sortByYear} from '../actions/filters';

class CarListFilters extends React.Component {
    render() {
        return (
            <div>
            <input 
            type="text"
            value={this.props.filters.brand}
            onChange={(e) => {
                this.props.dispatch(setBrandFilter(e.target.value));
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
            <option value='price'>Price</option>
            <option value='year'>Year</option>
            </select>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(CarListFilters);