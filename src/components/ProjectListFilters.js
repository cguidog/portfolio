import React from 'react';
import {connect} from 'react-redux';
import {setToolFilter, setToolFilterRemove} from '../actions/filters';

class ProjectListFilters extends React.Component {
    state = {};
    
    render() {
        return (
            <div>
            <h1 onClick={() => {
                if (this.props.filters.tool.includes('none')) {
                this.props.dispatch(setToolFilterRemove(''))} else {this.props.filters.tool = ['none']};
                console.log(this.props.filters);
            }} >ALL</h1>
            <h1 onClick={() => {
                if (this.props.filters.tool.indexOf('html') === -1) {
                this.props.dispatch(setToolFilter('html'))} else {this.props.dispatch(setToolFilterRemove('html'))};
                console.log(this.props.filters)
            }} >html</h1>
            <h1 onClick={() => {
                if (this.props.filters.tool.indexOf('css') === -1) {
                    this.props.dispatch(setToolFilter('css'))} else {this.props.dispatch(setToolFilterRemove('css'))};
                    console.log(this.props.filters)
            }} >css</h1>
            <h1 onClick={() => {
                if (this.props.filters.tool.indexOf('react') === -1) {
                    this.props.dispatch(setToolFilter('react'))} else {this.props.dispatch(setToolFilterRemove('react'))};
                    console.log(this.props.filters)
            }} >React</h1>
            <h1 onClick={() => {
                if (this.props.filters.tool.indexOf('jquery') === -1) {
                    this.props.dispatch(setToolFilter('jquery'))} else {this.props.dispatch(setToolFilterRemove('jquery'))};
                    console.log(this.props.filters)
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