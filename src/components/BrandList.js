import React from 'react';
import { connect } from 'react-redux';



const BrandList = (props) => (
    <div>
        <select>
            {
                props.filters.brandList.map((brand)=>{
                    return <option key={props.filters.brandList.indexOf(brand)}>{brand}</option>
                })
            }
        </select> 
    </div>
    );

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        cars: state.cars
        };

    };

export default connect(mapStateToProps)(BrandList);