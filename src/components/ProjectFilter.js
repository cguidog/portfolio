import React from 'react';
import { connect } from 'react-redux';
import {setToolFilter, setToolFilterRemove, setShowFilter, setStyleFilter, setStyleFilterRemove, setToolFilterClean,setStyleFilterClean} from '../actions/filters';

const ProjectFilter = (props) => ( 
    <div>
    <div className={props.filters.show ? 'active' : 'not_Active'} >
    <h2 onClick={() => {
        if (!props.filters.show) {
            props.dispatch(setShowFilter(true));
            props.dispatch(setToolFilterClean());
            props.dispatch(setStyleFilterClean());
        }    
    }} >ALL</h2>
    <div className={props.filters.show ? 'switch' : 'switch_Active'}></div></div>
              {  props.projects.map((project)=> {
                    if (props.filters.toolList.indexOf(project.tool) === -1) {
                        props.filters.toolList.push(project.tool);
                        props.filters.toolList.sort();
                        console.log(props.filters.toolList)
                    }})}
                    {
                       
                        props.filters.toolList.map((tool) => {

                            return <div className={props.filters.selected.includes(props.filters.toolList.indexOf(tool)) ? 'active' : 'not_Active'} key={tool}><h2 key={props.filters.toolList.indexOf(tool)} onClick={() => {
                                if (props.filters.tool.indexOf(tool) === -1) {
                                    props.dispatch(setToolFilter(tool));
                                    props.dispatch(setShowFilter(false));
                                    props.dispatch(setStyleFilter(props.filters.toolList.indexOf(tool)));
                                    console.log(props.filters.selected);
                            } else {props.dispatch(setToolFilterRemove(tool));
                                  props.dispatch(setStyleFilterRemove(props.filters.toolList.indexOf(tool)));
                                  console.log(props.filters.selected);
                                };
                            }} >{tool.toUpperCase()}</h2><div className={props.filters.selected.includes(props.filters.toolList.indexOf(tool)) ? 'switch' : 'switch_Active'}></div></div>
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