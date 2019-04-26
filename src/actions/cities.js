//Cities

export const setCities = (citiesArray) => ({
    type: 'SET_CITY',
    citiesArray
});

export const addCity = (cityObject) => ({
    type: 'ADD_CITY',
    cityObject
});