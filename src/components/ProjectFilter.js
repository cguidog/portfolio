import React from 'react';
import { connect } from 'react-redux';
import {setToolFilter, setToolFilterRemove, setShowFilter, setStyleFilter, setStyleFilterRemove, setToolFilterClean,setStyleFilterClean} from '../actions/filters';

const ProjectFilter = (props) => ( 
    <div>
        <h2 id='projects' className='titles'>Projects</h2>
        <h2 className='filter_title'>Would you like to filter?</h2>
        <div className='block'>
            <div className={props.filters.show ? 'active' : 'not_Active'} //Filter reset.
                onClick={() => {
                if (!props.filters.show) {
                    props.dispatch(setShowFilter(true));
                    props.dispatch(setToolFilterClean());
                    props.dispatch(setStyleFilterClean());
                }    
            }}>
                <h2>All</h2>
                <div className={props.filters.show ? 'switch' : 'switch_Active'}></div>
            </div>

            {props.projects.map((project)=> { //Sort projects by tool type.
                if (props.filters.toolList.indexOf(project.tool) === -1) {
                    props.filters.toolList.push(project.tool);
                    props.filters.toolList.sort();
            }})}

            {props.filters.toolList.map((tool) => { //Return tool filter.
                return <div className={props.filters.selected.includes(props.filters.toolList.indexOf(tool)) ? 'active' : 'not_Active'}
                        key={tool}
                        onClick={() => {
                            if (props.filters.tool.indexOf(tool) === -1) {
                                props.dispatch(setToolFilter(tool));
                                props.dispatch(setShowFilter(false));
                                props.dispatch(setStyleFilter(props.filters.toolList.indexOf(tool)));
                            } else {
                                props.dispatch(setToolFilterRemove(tool));
                                props.dispatch(setStyleFilterRemove(props.filters.toolList.indexOf(tool)));
                            };
                        }}>
                            <h2 key={props.filters.toolList.indexOf(tool)}>{tool}</h2>
                            <div className={props.filters.selected.includes(props.filters.toolList.indexOf(tool)) ? 'switch' : 'switch_Active'}>
                            </div>
                        </div>
                })}
        </div>        
    </div>   
        )

    const mapStateToProps = (state) => {
        return {
            filters: state.filters,
            projects: state.projects
           };
        };

export default connect(mapStateToProps)(ProjectFilter);