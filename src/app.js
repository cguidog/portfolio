import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addProject } from './actions/projects';
import 'normalize.css/normalize.css'
import './styles/styles.scss'; 


const store = configureStore();

store.dispatch(addProject({name: '', thumbnail: '', git: '', description: 'Enter text here', link: '', tool:'html'}))
store.dispatch(addProject({name: '', thumbnail: '', git: '', description: 'Enter text here', link: '', tool:'css'}))
store.dispatch(addProject({name: 'React Car Search', thumbnail: '/resources/react_car_search.png', git: 'https://github.com/cguidog/carDisplay', description: 'Enter text here', link: 'https://react-car-search.herokuapp.com', tool:'react'}))
store.dispatch(addProject({name: '', thumbnail: '', git: '', description: 'Enter text here', link: '', tool:'jquery'}))
store.dispatch(addProject({name: '', thumbnail: '', git: '', description: 'Enter text here', link: '', tool:'jquery'}))
store.dispatch(addProject({name: '', thumbnail: '', git: '', description: 'Enter text here', link: '', tool:'jquery'}))


const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));