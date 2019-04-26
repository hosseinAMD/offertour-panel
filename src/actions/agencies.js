//Agencies

export const setAgencies = (agenciesArray) => ({
    type: 'SET_AGENCY',
    agenciesArray
});

export const addAgency = (agencyObject) => ({
    type: 'ADD_AGENCY',
    agencyObject
});