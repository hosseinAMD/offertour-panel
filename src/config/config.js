const baseUrl = 'http://148.251.173.46:1010/api/v1';
export const token = JSON.parse(localStorage.getItem('user')).data.token;
export default baseUrl;