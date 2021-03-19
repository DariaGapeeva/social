import axios from "axios";
import Login from "../components/Login/Login";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "956a5edc-81d0-437d-9d23-f7428bbd4862" },
});

export const usersApi = {
  getUsers(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}&friend=false`)
      .then((response) => response.data);
  },
  getFriends(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}&friend=true`)
      .then((response) => response.data);
  },
};
export const followApi = {
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
};

export const authApi = {
  me() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe = false) {
    return instance.post("auth/login", {
      email: email,
      password: password,
      rememberMe: rememberMe,
    });
  },
  logOut() {
    return instance.delete("auth/login");
  },
};

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`/profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put("/profile/status", { status: status })
      .then((response) => response.data);
  },
  uploadPhoto(image) {
    let formData = new FormData();
    formData.append("image", image);
    return instance
      .put("/profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response));
  },
};
