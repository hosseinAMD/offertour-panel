//Airports

export const setAirports = (airportsArray) => ({
    type: 'SET_AIRPORT',
    airportsArray
});

export const addAirport = (airportObject) => ({
    type: 'ADD_AIRPORT',
    airportObject
});