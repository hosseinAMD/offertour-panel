import {createStore, combineReducers} from 'redux';
import categoryReducer from "../reducers/categories";


export default () => {
    const store = createStore(
        combineReducers({
            categories: categoryReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};