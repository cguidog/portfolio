import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons'

const Home = () => (
    <div>
        <div id='welcome'>
            <h1 className='head'>{'<Carlos Guido Guido/>'}</h1>
            <h3 id='sub'>Front-end developer</h3>
            <div className='menu'>
                <a href='#projects' alt='loco'><FontAwesomeIcon icon={faBriefcase}/></a>
                <a href='#contact'><FontAwesomeIcon icon={faAddressCard}/></a>
            </div>
            <div className='text_box'>
            <p id='about'>Passionate professional who loves to create: from building furniture, to designing clothes; from tiling kitchens to writing code. </p>
            <p id='tech'>I build responsive web applications using HTML, CSS and Javascript. I have experience working with Javascript libraries like ReactJS and Jquery
                and enjoy giving style to my creations with Sass and Bootstrap.</p>
            </div>
        </div>
    </div>
);
export default Home;