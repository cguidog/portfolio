import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import {setStyleValidatorFilter, setStyleValidatorFilterRemove} from '../actions/filters';
//Display the styles according to the selected brand.
const StyleOptions = (props) => (
    <div className='checkbox'>
        {
            props.cars.map((car)=> {
            if (props.filters.styleList.indexOf(car.style) === -1 && car.brand.toUpperCase() === props.filters.brand.toUpperCase()) {
                props.filters.styleList.push(car.style);
                props.filters.styleList.sort();
            }})
        }
        {
            props.filters.styleList.map((style) => {
                    return <div key={style}>
                                <input id={style} type='checkbox' value={style} onClick={(e) => { if (!props.filters.validator.includes(e.target.value)) {
                                    props.dispatch(setStyleValidatorFilter(e.target.value));
                                    } else {props.dispatch(setStyleValidatorFilterRemove(e.target.value));
                                    };
                                }} key={props.filters.styleList.indexOf(style)}/>
                                <label className='label' htmlFor={style} key={uuid()}>{style.toUpperCase()}</label>
                            </div>
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

export default connect(mapStateToProps)(StyleOptions);
