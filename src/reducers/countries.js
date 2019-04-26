//Country Reducer

const countryReducerDefaultState = [];

const countryReducer = (state = countryReducerDefaultState, action) => {
    if (action.type === 'SET_COUNTRY') {
        state = action.countriesArray;
        return state;
    } else if(action.type === 'ADD_COUNTRY'){
        return [...state,action.countryObject];
    }  else {
        return state;
    }
};

export default countryReducer;