//Airport Reducer

const airportReducerDefaultState = [];

const airportReducer = (state = airportReducerDefaultState, action) => {
    if (action.type === 'SET_AIRPORT') {
        state = action.airportsArray;
        return state;
    } else {
        return state;
    }
};

export default airportReducer;