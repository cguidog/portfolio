import React from 'react';
import { connect } from 'react-redux';
import {setBrandFilter} from '../actions/filters';
//Display the brand selector
const Options = (props) => (
    <div>
        <select onClick={()=> {props.filters.styleList = [];
                    props.filters.validator = [];
                }
            }
                onChange={(e) => {
                    if (e.target.value === 'ALL') {
                        props.dispatch(setBrandFilter(''));
                        console.log(props.filters.transmissionList);
                    } else {props.dispatch(setBrandFilter(e.target.value));
                        console.log(props.filters.transmissionList);
                };
            }}
        >
            {
                props.cars.map((car)=> {
                    if (props.filters.brandList.indexOf(car.brand) === -1) {
                        props.filters.brandList.push(car.brand);
                        props.filters.brandList.sort();
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

