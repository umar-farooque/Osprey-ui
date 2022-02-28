import http from "./httpService";

function getPost() {
  return http.get("https://jsonplaceholder.typicode.com/posts/1");
}

export default {
  getPost,
};
