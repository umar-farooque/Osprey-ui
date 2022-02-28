import http from "./httpService";

const endpoint = "/student";
const token = "tokenkey";

async function login(val) {
  const response = await http.post(endpoint + "/login", { ...val });
  if (response.status === 200) {
    localStorage.setItem(token, response.data);
    http.setJwt(response.data);
  }
  // if(resposne.status)
  return http.post(endpoint + "/login", { ...val });
}

function signup(val) {
  //   console.log("signup>>>>>", { ...val });
  // return;
  return http.post(endpoint + "/signup", { ...val });
}

function forgotPassword(val) {
  //   console.log("signup>>>>>", { ...val });
  // return;
  return http.post(endpoint + "/forgot", { ...val });
}

function getToken() {
  if (typeof window === "object") {
    // console.log(">>>>inside if", typeof window);
    return window.localStorage.getItem(token);
  }
  // console.log(">>>>", typeof window);
}

function logout() {
  if (typeof window === "object") {
    // console.log(">>>>inside if", typeof window);
    return window.localStorage.removeItem(token);
  }
}

function resetPassword(token, val) {
  console.log(val);
  return http.post(endpoint + "/reset/" + token, { ...val });
}

export default {
  login,
  signup,
  forgotPassword,
  resetPassword,
  getToken,
  logout,
};
