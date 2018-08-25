import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
    <div>
        <h2 className='titles'>Contact</h2>
        <div id='contact' className='links'>
        <a href='https://www.linkedin.com/in/carlos-guido-142998156/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn}/></a>
        <a href='https://github.com/cguidog' target='_blank'><FontAwesomeIcon icon={faGithub}/></a>
        </div>
    </div>
);
export default Contact;