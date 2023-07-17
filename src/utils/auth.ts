export const TOKEN ='776afa47-1197-4902-974e-c874d8b04d72';
export const USER_ID = '3686';

export function authenticate() {
  window.localStorage.setItem('cookie', 'pojest cu sve kolacice');
}

export function isAuthenticated() {
  return !!window.localStorage.getItem('cookie');
}

export function clearAuthentication() {
  window.localStorage.clear();
}
