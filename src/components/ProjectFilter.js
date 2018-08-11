import React from 'react';
import { connect } from 'react-redux';
import {setToolFilter, setToolFilterRemove, setShowFilter} from '../actions/filters';

const ProjectFilter = (props) => ( 
            
    <div>
              {  props.projects.map((project)=> {
                    if (props.filters.toolList.indexOf(project.tool) === -1) {
                        props.filters.toolList.push(project.tool);
                        props.filters.toolList.sort();
                        console.log(props.filters.toolList)
                    }})}
                    {
                        props.filters.toolList.map((tool) => {
                            return <h2 key={props.filters.toolList.indexOf(tool)} onClick={() => {
                                if (props.filters.tool.indexOf(tool) === -1) {
                                    props.dispatch(setToolFilter(tool));
                                    props.dispatch(setShowFilter(true));
                            } else {props.dispatch(setToolFilterRemove(tool))};
                            }} >{tool.toUpperCase()}</h2>
                        })
                    }
    </div>   
        )

        const mapStateToProps = (state) => {
            return {
                filters: state.filters,
                projects: state.projects
                };
        
            };
export default connect(mapStateToProps)(ProjectFilter);