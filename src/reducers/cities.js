//City Reducer

const cityReducerDefaultState = [];

const cityReducer = (state = cityReducerDefaultState, action) => {
    if (action.type === 'SET_CITY') {
        state = action.citiesArray;
        return state;
    } else {
        return state;
    }
};

export default cityReducer;