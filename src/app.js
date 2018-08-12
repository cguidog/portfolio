import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addProject } from './actions/projects';
import 'normalize.css/normalize.css'
import './styles/styles.scss'; 


const store = configureStore();

store.dispatch(addProject({name: 'ToDo List', thumbnail: '/resources/to_do_list.png', git: 'https://github.com/cguidog/to-do-list', description: 'A simple to-do app created with Jquery', link: 'https://cguidog.github.io/to-do-list/index.html', tool:'Jquery'}))
store.dispatch(addProject({name: 'Coming Soon', thumbnail: '/resources/coming_soon.png', git: '', description: 'Enter text here', link: '', tool:'css'}))
store.dispatch(addProject({name: 'React Car Search', thumbnail: '/resources/react_car_search.png', git: 'https://github.com/cguidog/carDisplay', description: 'Enter text here', link: 'https://react-car-search.herokuapp.com', tool:'React'}))
store.dispatch(addProject({name: 'RGB Color Guessing Game', thumbnail: '/resources/rgb_game.png', git: 'https://github.com/cguidog/rgb-color-game', description: 'Test your RGB knowledge picking the right color', link: 'https://cguidog.github.io/rgb-color-game/', tool:'Javascript'}))
store.dispatch(addProject({name: 'Circles', thumbnail: '/resources/circles.png', git: 'https://github.com/cguidog/circles', description: 'Random circles generator built with Paper.js', link: 'https://cguidog.github.io/circles/index.html', tool:'Javascript'}))
store.dispatch(addProject({name: 'Coming Soon', thumbnail: '/resources/coming_soon.png', git: '', description: 'Enter text here', link: '', tool:'Jquery'}))


const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));