import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


const ProjectListItem = ({name, thumbnail, description, link, git}) => (
    <div>
    <h4><a href={link} target='_blank'>{name}</a> <a href={git} target='_blank'><span><FontAwesomeIcon icon={faGithubSquare}/></span></a></h4>
    <a href={link} target='_blank'><img width='300px' src={thumbnail}/></a>
    <p>{description}</p>
    </div>
);

export default ProjectListItem;