import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import {setBrandFilter, setStyleFilter, setTransmissionFilter, sortByPrice, sortByYear, setStyleValidatorFilter, setStyleValidatorFilterRemove} from '../actions/filters';
const Options = (props) => (
    <div>
    <div>
    <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"/>subscribe
    <label htmlFor="subscribeNews">Subscribe to newsletter?</label>
    </div>
        <select onClick={()=> {props.filters.styleList = [];props.filters.validator = []}} onChange={(e) => {
            if (e.target.value === 'ALL') {
                props.dispatch(setBrandFilter(''));

            } else {props.dispatch(setBrandFilter(e.target.value));
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

            {
                props.cars.map((car)=> {
                if (props.filters.styleList.indexOf(car.style) === -1 && car.brand.toUpperCase() === props.filters.brand.toUpperCase()) {
                    props.filters.styleList.push(car.style);
                    props.filters.styleList.sort();
                }})
            }


        {
            props.filters.styleList.map((style) => {
            return <div key={style}><input id={style} type='checkbox' value={style} onClick={(e) => { if (!props.filters.validator.includes(e.target.value)) {
                props.dispatch(setStyleValidatorFilter(e.target.value));
            } else {props.dispatch(setStyleValidatorFilterRemove(e.target.value));
        };
        }
    } key={props.filters.styleList.indexOf(style)}/><label htmlFor={style} key={uuid()}>{style.toUpperCase()}</label></div>
        })
        }
    </div>
);
const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        cars: state.cars
        };

    };

export default connect(mapStateToProps)(Options);

