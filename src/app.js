import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addCar } from './actions/cars';
import 'normalize.css/normalize.css'
import './styles/styles.scss'; 


const store = configureStore();

store.dispatch(addCar({brand: 'toyota', style: 'corolla', year: 2005, price: 3000, transmission: 'auto', image: '/resources/toyota_corolla_2005.jpg'}))
store.dispatch(addCar({brand: 'toyota', style: 'corolla', year: 2010, price: 6784, transmission: 'auto', image: '/resources/toyota_corolla_2010.jpg'}))
store.dispatch(addCar({brand: 'toyota', style: 'corolla', year: 2016, price: 12000, transmission: 'manual', image: '/resources/toyota_corolla_2016.jpg'}))
store.dispatch(addCar({brand: 'ford', style: 'mustang', year: 2000, price: 45200, transmission: 'manual', image: '/resources/ford_mustang_2000.jpg'}))
store.dispatch(addCar({brand: 'ford', style: 'mustang', year: 2017, price: 18000, transmission: 'auto', image: '/resources/ford_mustang_2017.png'}))
store.dispatch(addCar({brand: 'chevrolet', style: 'aveo', year: 2006, price: 950, transmission: 'auto', image: '/resources/chevrolet_aveo_2006.jpg'}))
store.dispatch(addCar({brand: 'chevrolet', style: 'cruze', year: 2018, price: 17450, transmission: 'auto', image: '/resources/chevrolet_cruze_2018.jp2'}))
store.dispatch(addCar({brand: 'chevrolet', style: 'cruze', year: 2016, price: 10250, transmission: 'auto', image: '/resources/chevrolet_cruze_2016.jpg'}))
store.dispatch(addCar({brand: 'chevrolet', style: 'corvette', year: 1976, price: 46355, transmission: 'manual', image: '/resources/chevrolet_corvette_1976.jpg'}))
store.dispatch(addCar({brand: 'ford', style: 'f250', year: 2017, price: 37689, transmission: 'auto', image: '/resources/ford_f250_2017.jpg'}))
store.dispatch(addCar({brand: 'nissan', style: 'sentra', year: 1998, price: 250, transmission: 'auto', image: '/resources/nissan_sentra_1998.jpg'}))
store.dispatch(addCar({brand: 'nissan', style: 'xterra', year: 2007, price: 7250, transmission: 'auto', image: '/resources/nissan_xterra_2007.jpg'}))
store.dispatch(addCar({brand: 'gmc', style: 'sierra', year: 2015, price: 23000, transmission: 'auto', image: '/resources/gmc_sierra_2015.jpg'}))
store.dispatch(addCar({brand: 'volkswagen', style: 'jetta', year: 2016, price: 15000 , transmission: 'manual', image: '/resources/volkswagen_jetta_2016.jpg'}))
store.dispatch(addCar({brand: 'volkswagen', style: 'golf', year: 2005, price: 2500, transmission: 'auto', image: '/resources/volkswagen_golf_2005.jpg'}))

const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));