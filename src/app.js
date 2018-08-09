import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addProject } from './actions/projects';
import 'normalize.css/normalize.css'
import './styles/styles.scss'; 


const store = configureStore();

store.dispatch(addProject({tool:'html'}))
store.dispatch(addProject({tool:'css'}))
store.dispatch(addProject({tool:'react'}))
store.dispatch(addProject({tool:'jquery'}))


const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));