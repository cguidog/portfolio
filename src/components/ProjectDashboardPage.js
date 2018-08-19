import React from 'react';
import ProjectList from './ProjectList';
import ProjectFilter from './ProjectFilter';
import Home from './home';
import Contact from './contact';

const ProjectDashboardPage = () => (
    <div>
        <div>
            <Home/>
            <ProjectFilter/><br/>
            <ProjectList/>
            <Contact/>
        </div>
    </div>
);
export default ProjectDashboardPage;