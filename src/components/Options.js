import React from 'react';
import { connect } from 'react-redux';

const Options = (props) => (
    <div>
    <select>
                {props.cars.map((car)=> {
                    return <option key={car.id}>{car.brand}</option>
                
                })
            };
    </select>
    </div>
        );

            const mapStateToProps = (state) => {
                return {
                    cars: state.cars
                };
            };
            export default connect(mapStateToProps)(Options);
