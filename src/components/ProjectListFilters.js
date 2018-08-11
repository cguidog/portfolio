import React from 'react';
import {connect} from 'react-redux';
import {setToolFilter, setToolFilterRemove, setShowFilter, setToolFilterClean} from '../actions/filters';

class ProjectListFilters extends React.Component {
    state = {};
    
    render() {
        return (
            
            <div>
            <button disabled={!this.props.filters.show} onClick={() => {
                if (this.props.filters.show) {
                    this.props.dispatch(setShowFilter(false));
                    this.props.dispatch(setToolFilterClean());
                    
                } else {
                    this.props.dispatch(setShowFilter(true));
                    this.props.dispatch(setToolFilterClean());
                }    
            }} >All</button>

            <h1 onClick={() => {
                if (this.props.filters.tool.indexOf('html') === -1) {
                    this.props.dispatch(setToolFilter('html'));
                    this.props.dispatch(setShowFilter(true));
            } else {this.props.dispatch(setToolFilterRemove('html'))};
            }} >html</h1>
            <h1 onClick={() => {
                if (this.props.filters.tool.indexOf('css') === -1) {
                    this.props.dispatch(setToolFilter('css'));
                    this.props.dispatch(setShowFilter(true));
                } else {this.props.dispatch(setToolFilterRemove('css'))};
            }} >css</h1>
            <h1 onClick={() => {
                if (this.props.filters.tool.indexOf('react') === -1) {
                    this.props.dispatch(setToolFilter('react'));
                    this.props.dispatch(setShowFilter(true));

                } else {this.props.dispatch(setToolFilterRemove('react'))};
            }} >React</h1>
            <h1 onClick={() => {
                if (this.props.filters.tool.indexOf('jquery') === -1) {
                    this.props.dispatch(setToolFilter('jquery'));
                    this.props.dispatch(setShowFilter(true));
                } else {this.props.dispatch(setToolFilterRemove('jquery'))};
            }} >jquery</h1>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        projects: state.projects
    };
};

export default connect(mapStateToProps)(ProjectListFilters);