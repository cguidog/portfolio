import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Home = () => (
    <div>
        <div id='welcome'>
            <h1 className='head'>{'<CarlosGuidoGuido/>'}</h1>
            <h3 id='sub'>Front-end developer</h3>
            <div className='text_box'>
            <p id='about'>A passionate professional and self-taught front-end developer who loves to create: from building furniture to designing clothes, from tiling kitchens to writing code.
            I simply love the satisfying feeling of turning ideas in to reality.</p>
            <p id='tech'>I build responsive web applications using HTML, CSS and JavaScript. I have experience working with JavaScript libraries such as ReactJS and Jquery
                and enjoy giving style to my creations with Sass and Bootstrap. Since I started this journey, I've discovered that there is always something new to learn; I've accepted the
                challenge and I am enjoying every part of it.</p>
            <span className='animat'><FontAwesomeIcon icon={faCode} /></span>
            </div>
        </div>
    </div>
);
export default Home;