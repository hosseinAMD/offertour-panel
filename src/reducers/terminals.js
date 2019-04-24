//Terminal Reducer

const terminalReducerDefaultState = [];

const terminalReducer = (state = terminalReducerDefaultState, action) => {
    if (action.type === 'SET_TERMINAL') {
        state = action.terminalsArray;
        return state;
    } else {
        return state;
    }
};

export default terminalReducer;