import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addCar } from './actions/cars';
import 'normalize.css/normalize.css'
import './styles/styles.scss'; 


const store = configureStore();

store.dispatch(addCar({brand: 'Toyota', style: 'Corolla', year: 2005, price: 3000}))
store.dispatch(addCar({brand: 'Ford', style: 'Mustang', year: 2000, price: 45200}))
store.dispatch(addCar({brand: 'Chevrolet', style: 'Aveo', year: 2006, price: 950}))
store.dispatch(addCar({brand: 'Chevrolet', style: 'Corvette', year: 1976, price: 46355}))
store.dispatch(addCar({brand: 'Ford', style: 'F250', year: 2017, price: 37689}))
store.dispatch(addCar({brand: 'Nissan', style: 'Sentra', year: 1998, price: 250}))
store.dispatch(addCar({brand: 'GMC', style: 'Sierra', year: 2015, price: 23000}))

const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));