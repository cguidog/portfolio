import React from 'react';
import {connect} from 'react-redux';
import {sortByPrice, sortByYear} from '../actions/filters';
import Options from '../components/Options';
import StyleOptions from '../components/StyleOptions';
import Transmission from '../components/TransmissionOptions';
class CarListFilters extends React.Component {
    state = {};
    render() {
        return (
            <div>
            <h1>React Car Search</h1>
            <Options/>
            <StyleOptions/>
            <Transmission/>
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