//Category Reducer

const categoryReducerDefaultState = [];

const categoryReducer = (state = categoryReducerDefaultState, action) => {
    if (action.type === 'SET_CATEGORY') {
        state = action.categoriesArray;
        return state;
    } else {
        return state;
    }
};

export default categoryReducer;