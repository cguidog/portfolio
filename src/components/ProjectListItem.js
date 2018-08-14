import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


const ProjectListItem = ({name, thumbnail, description, link, git}) => (
    <div className='item'>
    <a href={link} target='_blank'><img className='thumbnail' src={thumbnail}/></a>
    <h4><a href={link} target='_blank'>{name}</a> <a href={git} target='_blank'><span><FontAwesomeIcon icon={faGithubSquare}/></span></a></h4>
    <p>{description}</p>
    </div>
);

export default ProjectListItem;