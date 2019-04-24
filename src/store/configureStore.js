import {createStore, combineReducers} from 'redux';
import categoryReducer from "../reducers/categories";
import countryReducer from "../reducers/countries";
import provinceReducer from "../reducers/provinces";
import cityReducer from "../reducers/cities";
import airportReducer from "../reducers/airports";
import terminalReducer from "../reducers/terminals";


export default () => {
    const store = createStore(
        combineReducers({
            categories: categoryReducer,
            countries: countryReducer,
            provinces: provinceReducer,
            cities: cityReducer,
            airports: airportReducer,
            terminals: terminalReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};