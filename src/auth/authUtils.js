export const userIsLoggedin = () => {
  const user = localStorage.getItem('user');
  return !!user;
};