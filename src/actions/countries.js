//Countries

export const setCountries = (countriesArray) => ({
    type: 'SET_COUNTRY',
    countriesArray
});

export const addCountry = (countryObject) => ({
    type: 'ADD_COUNTRY',
    countryObject
});