import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Home = () => (
    <div>
        <div id='welcome'>
            <h1 className='head'>{'<CarlosGuidoGuido/>'}</h1>
            <h3 id='sub'>Front-end developer</h3>
            <div className='text_box'>
            <p id='about'>Passionate professional who loves to create: from building furniture to designing clothes, to tiling kitchens to writing code.</p>
            <p id='tech'>I build responsive web applications using HTML, CSS and Javascript. I have experience working with Javascript libraries like ReactJS and Jquery
                and enjoy giving style to my creations with Sass and Bootstrap.</p>
            <span className='animat'><FontAwesomeIcon icon={faCode} /></span>
            </div>
        </div>
    </div>
);
export default Home;