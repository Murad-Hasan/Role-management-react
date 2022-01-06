import getUserData from "../users/UserData";

export default function checkLogin(state) {
  const userData = getUserData();
  let isMatched = false;
  userData.forEach((user) => {
    if (user.userName === state.userName && user.password === state.password) {
      isMatched = true;
    }
  });
  return isMatched;
}
