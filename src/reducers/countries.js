//Country Reducer

const countryReducerDefaultState = [];

const countryReducer = (state = countryReducerDefaultState, action) => {
    if (action.type === 'SET_COUNTRY') {
        state = action.countriesArray;
        return state;
    } else {
        return state;
    }
};

export default countryReducer;