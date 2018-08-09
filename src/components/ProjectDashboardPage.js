import React from 'react';
import ProjectList from './ProjectList';
import ProjectListFilters from './ProjectListFilters';

const ProjectDashboardPage = () => (
    <div>
        <div>
            <ProjectListFilters/>
            <ProjectList/>
        </div>
    </div>
);
export default ProjectDashboardPage;