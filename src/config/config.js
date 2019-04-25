const baseUrl = 'http://148.251.173.46:1010/api/v1';
export const token = JSON.parse(localStorage.getItem('user')).data.token;
export const role = localStorage.getItem('role');
export const loggedInUser = role === 'support' ?
    JSON.parse(localStorage.getItem('user')).data.information :
    JSON.parse(localStorage.getItem('user')).data;
export const loggedInAgency = role === 'support' ? '' : JSON.parse(localStorage.getItem('user')).data.Agency.Information;
export const agencyPhoneNumbers = role === 'support' ? '' : JSON.parse(localStorage.getItem('user')).data.Agency.PhoneNumber[0];
export default baseUrl;