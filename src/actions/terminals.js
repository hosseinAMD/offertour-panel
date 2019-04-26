//Terminals

export const setTerminals = (terminalsArray) => ({
    type: 'SET_TERMINAL',
    terminalsArray
});

export const addTerminal = (terminalObject) => ({
    type: 'ADD_TERMINAL',
    terminalObject
});