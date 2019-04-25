//Tour Reducer

const tourReducerDefaultState = [];

const tourReducer = (state = tourReducerDefaultState, action) => {
    if (action.type === 'SET_TOUR') {
        state = action.toursArray;
        return state;
    } else {
        return state;
    }
};

export default tourReducer;