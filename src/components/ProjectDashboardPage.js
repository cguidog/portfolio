import React from 'react';
import ProjectList from './ProjectList';
import ProjectFilter from './ProjectFilter';

const ProjectDashboardPage = () => (
    <div>
        <div>
            <ProjectFilter/><br/>
            <ProjectList/>
        </div>
    </div>
);
export default ProjectDashboardPage;