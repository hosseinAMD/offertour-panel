const baseUrl = 'http://148.251.173.46:1010/api/v1';
export const loggedIn = localStorage.getItem('log');
export const token = loggedIn === 'true' ? JSON.parse(localStorage.getItem('user')).data.token : '';
export const role = localStorage.getItem('role');
export const loggedInUser = loggedIn === 'true' ? role === 'support' ?
    JSON.parse(localStorage.getItem('user')).data.information :
    JSON.parse(localStorage.getItem('user')).data : '';
export const loggedInAgency = loggedIn === 'true' ? role === 'support' ? '' : JSON.parse(localStorage.getItem('user')).data.Agency.Information : '';
export const agencyPhoneNumbers = loggedIn === 'true' ? role === 'support' ? '' : JSON.parse(localStorage.getItem('user')).data.Agency.PhoneNumber[0] : '';
export default baseUrl;