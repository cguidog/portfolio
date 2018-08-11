import React from 'react';
import ProjectList from './ProjectList';
import ProjectFilter from './ProjectFilter';
import ProjectAll from './ProjectAll';

const ProjectDashboardPage = () => (
    <div>
        <div>
            <ProjectAll/>
            <ProjectFilter/>
            <ProjectList/>
        </div>
    </div>
);
export default ProjectDashboardPage;