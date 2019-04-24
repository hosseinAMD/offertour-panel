import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import axios from 'axios';
import baseUrl from './config/config';
import {setCategories} from "./actions/categories";
import {setCountries} from "./actions/countries";
import {setProvinces} from "./actions/provinces";
import {setCities} from "./actions/cities";
import {setAirports} from "./actions/airports";
import {setTerminals} from "./actions/terminals";

const store = configureStore();

axios.get(baseUrl + '/App/Information')
    .then(res => {
        store.dispatch(setCategories(res.data.Categories));
        store.dispatch(setCountries(res.data.Country));
        store.dispatch(setProvinces(res.data.Provinces));
        store.dispatch(setCities(res.data.Cities));
        store.dispatch(setAirports(res.data.AirPorts));
        store.dispatch(setTerminals(res.data.Terminal));
    }).catch(err => console.log(err));

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
