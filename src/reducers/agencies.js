//Agency Reducer

const agencyReducerDefaultState = [];

const agencyReducer = (state = agencyReducerDefaultState, action) => {
    if (action.type === 'SET_AGENCY') {
        state = action.agenciesArray;
        return state;
    } else if (action.type === 'ADD_AGENCY') {
        return [...state, action.agencyObject];
    } else {
        return state;
    }
};

export default agencyReducer;