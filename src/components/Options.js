import React from 'react';
import { connect } from 'react-redux';

const Options = (props) => (
    <div>
        <select>
            {
                props.cars.map((car)=> {
                    if (props.filters.brandList.indexOf(car.brand) === -1) {
                        props.filters.brandList.push(car.brand);
                        props.filters.brandList.sort();
                        console.log(props.filters.brandList);
                        // return <option key={car.id}>{car.brand}</option>
                    }})
                    }
                    {
                props.filters.brandList.map((brand) => {
                    return <option key={props.filters.brandList.indexOf(brand)}>{brand}</option>
                })
                    }
                })
            };
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

