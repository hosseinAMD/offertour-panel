//Agency Reducer

const agencyReducerDefaultState = [];

const agencyReducer = (state = agencyReducerDefaultState, action) => {
    if (action.type === 'SET_AGENCY') {
        state = action.agenciesArray;
        return state;
    } else {
        return state;
    }
};

export default agencyReducer;