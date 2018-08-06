import React from 'react';
import {connect} from 'react-redux';
import {sortByPrice, sortByYear} from '../actions/filters';
import Options from '../components/Options';
import StyleOptions from '../components/StyleOptions';
import Transmission from '../components/TransmissionOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faSearch } from '@fortawesome/free-solid-svg-icons';
import Favicon from 'react-favicon';


class CarListFilters extends React.Component {
    state = {};
    render() {
        return (
            <div className='title_div'>
            <Favicon url="/public/resources/car-solid.svg"/>
            <h1 className='main_title'><span><FontAwesomeIcon icon={faCar} /></span> React Car Search <span><FontAwesomeIcon icon={faSearch} /></span></h1>
            <Options/>
            <StyleOptions/>
            <Transmission/>
            <div className='filter_container'>
            <select className='filter'
            value={this.props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'price') {
                    this.props.dispatch(sortByPrice());
                } else if (e.target.value === 'year') {
                    this.props.dispatch(sortByYear());
                }
            }}
            >
            <option value='price'>SORT BY PRICE</option>
            <option value='year'>SORT BY YEAR</option>
            </select>
            </div>
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