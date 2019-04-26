//City Reducer

const cityReducerDefaultState = [];

const cityReducer = (state = cityReducerDefaultState, action) => {
    if (action.type === 'SET_CITY') {
        state = action.citiesArray;
        return state;
    } else if (action.type === 'ADD_CITY') {
        return [...state, action.cityObject];
    } else {
        return state;
    }
};

export default cityReducer;