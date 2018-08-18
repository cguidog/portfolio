import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ProjectListItem = ({name, thumbnail, description, link, git}) => (
    <div className='item'>
    <img className='thumbnail' src={thumbnail}/>
    <div className='item_detail'>
    <h4><a href={link} target='_blank'>{name}</a> <a href={git} target='_blank'><span><FontAwesomeIcon icon={faGithub}/></span></a></h4>
    <p>{description}</p>
    </div>
    </div>
);

export default ProjectListItem;