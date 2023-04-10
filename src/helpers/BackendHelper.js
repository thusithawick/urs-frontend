import { post, postWithImage } from "./APIHelper";

// Register new User
export const register = (payload) => postWithImage("/register", payload);

// Login exisiting user and get logged user information
export const login = (payload) => post("/login", payload);

// Get User profile information
export const profile = (payload) =>
  post("/view-profile", { access_token: payload });

// User update profile
export const updateProfile = (payload) =>
postWithImage(`/update-profile/${payload.id}`, payload);
