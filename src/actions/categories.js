//Categories

export const setCategories = (categoriesArray) => ({
    type: 'SET_CATEGORY',
    categoriesArray
});

export const addCategory = (categoryObject) => ({
    type: 'ADD_CATEGORY',
    categoryObject
});