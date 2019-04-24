//Province Reducer

const provinceReducerDefaultState = [];

const provinceReducer = (state = provinceReducerDefaultState, action) => {
    if (action.type === 'SET_PROVINCE') {
        state = action.provincesArray;
        return state;
    } else {
        return state;
    }
};

export default provinceReducer;