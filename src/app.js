import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addCar } from './actions/cars';
// import getVisibleCars from './selectors/cars';
import CarList from './components/CarList'
import 'normalize.css/normalize.css'
import './styles/styles.scss'; 


const store = configureStore();

store.dispatch(addCar({brand: 'Toyota', style: 'Corolla', year: 2005, price: 3000}))
store.dispatch(addCar({brand: 'Ford', style: 'Mustang', year: 2000, price: 45200}))
store.dispatch(addCar({brand: 'Nissan', style: 'Sentra', year: 1998, price: 250}))
store.dispatch(addCar({brand: 'GMC', style: 'Sierra', year: 2015, price: 23000}))

const jsx = (
    <Provider store={store}>
    <CarList/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
// const state= store.getState();
// const visibleCars = getvisibleCars(state.cars, state.filters);
// console.log(visibleCars);