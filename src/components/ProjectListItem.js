import React from 'react';

const ProjectListItem = ({name, thumbnail, description, link, git}) => (
    <div>
    <img src={thumbnail}/>
    <h4>{name}</h4>
    <p>{description}</p>
    <a href={link}>Visit</a>
    <a href={git}>GitHub</a>
    </div>
);

export default ProjectListItem;