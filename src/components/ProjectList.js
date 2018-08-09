import React from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './projectListItem';
import selectProjects from '../selectors/projects';

const ProjectList = (props) => (
    <div>
        {props.projects.map((project) => {
            return <ProjectListItem key={project.id} {...project} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        projects: selectProjects(state.projects, state.filters)
    };
};
export default connect(mapStateToProps)(ProjectList);