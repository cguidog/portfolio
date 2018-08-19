import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faLinkedinIn, faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
    <div>
        <h2 id='contact' className='titles'>Contact</h2>
        <div className='links'>
        <a href='' target='_blank'><FontAwesomeIcon icon={faLinkedinIn}/></a>
        <a href='https://github.com/cguidog' target='_blank'><FontAwesomeIcon icon={faGithub}/></a>
        </div>
    </div>
);
export default Contact;