import React from 'react';
import {connect} from 'react-redux';
import {setShowFilter, setToolFilterClean, setStyleFilterClean} from '../actions/filters';

const ProjectAll = (props) => ( 


<button disabled={!props.filters.show} onClick={() => {
    if (props.filters.show) {
        props.dispatch(setShowFilter(false));
        props.dispatch(setToolFilterClean());
        props.dispatch(setStyleFilterClean());
        
    } else {
        props.dispatch(setShowFilter(true));
        props.dispatch(setToolFilterClean());
        props.dispatch(setStyleFilterClean());
    }    
}} >All</button>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        projects: state.projects
        };

    };
export default connect(mapStateToProps)(ProjectAll);