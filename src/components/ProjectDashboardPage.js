import React from 'react';
import ProjectList from './ProjectList';
import ProjectFilter from './ProjectFilter';
import Home from './home'

const ProjectDashboardPage = () => (
    <div>
        <div>
            <Home/>
            <ProjectFilter/><br/>
            <ProjectList/>
        </div>
    </div>
);
export default ProjectDashboardPage;