import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addProject } from './actions/projects';
import 'normalize.css/normalize.css'
import './styles/styles.scss'; 


const store = configureStore();

store.dispatch(addProject({name: 'Circles', thumbnail: '/resources/circles.png', git: 'https://github.com/cguidog/circles', description: 'Random circles generator built with Paper.js (Needs a physical keyboard to work)', link: 'https://cguidog.github.io/circles/index.html', tool:'JavaScript'}))
store.dispatch(addProject({name: 'Portfolio Site', thumbnail: '/resources/portfolio.png', git: 'https://github.com/cguidog/portfolio', description: 'Yep, this is the same site you are in right now, but you can take a look at my Github repository.', link: 'https://portfolio.herokuapp.com', tool:'React'}))
store.dispatch(addProject({name: 'React Car Search', thumbnail: '/resources/react_car_search.png', git: 'https://github.com/cguidog/carDisplay', description: 'Simple search tool created with React.', link: 'https://react-car-search.herokuapp.com', tool:'React'}))
store.dispatch(addProject({name: 'RGB Color Guessing Game', thumbnail: '/resources/rgb_game.png', git: 'https://github.com/cguidog/rgb-color-game', description: 'Test your RGB knowledge picking the right color.', link: 'https://cguidog.github.io/rgb-color-game/', tool:'JavaScript'}))
store.dispatch(addProject({name: 'ToDo List', thumbnail: '/resources/to_do_list.png', git: 'https://github.com/cguidog/to-do-list', description: 'A simple to-do app created with Jquery.', link: 'https://cguidog.github.io/to-do-list/index.html', tool:'Jquery'}))
store.dispatch(addProject({name: 'Weather App', thumbnail: '/resources/weather_app.png', git: 'https://github.com/cguidog/weather-app', description: 'App created with Javascript to show local weather.', link: 'https://codepen.io/cguidog/full/VQvKbW/', tool:'JavaScript'}))
store.dispatch(addProject({name: 'Wikipedia Viewer', thumbnail: '/resources/wiki_viewer.png', git: 'https://github.com/cguidog/wikipediaViewer', description: 'Display 5 main results from a Wikipedia Search.', link: 'https://cguidog.github.io/wikipediaViewer/', tool:'Jquery'}))


const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));