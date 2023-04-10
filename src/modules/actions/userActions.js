import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  PROFILE,
  PROFILE_FAILED,
  PROFILE_SUCCESS,
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_SUCCESS,
} from "../actionTypes";

/**
 * User registration
 * @param {object} error
 * @returns object
 */
export const registerAction = (requestPayload) => {
  return {
    type: REGISTER,
    payload: requestPayload,
  };
};

/**
 * User registration success
 * @param {object} error
 * @returns object
 */
export const registerSucessAction = (registerdUser) => {
  return {
    type: REGISTER_SUCCESS,
    payload: registerdUser,
  };
};

/**
 * User registration failed
 * @param {object} error
 * @returns object
 */
export const registerFailAction = (error) => {
  return {
    type: REGISTER_FAILED,
    payload: error,
  };
};

/**
 * User login
 * @param {object} error
 * @returns object
 */
export const loginAction = (requestPayload) => {
  return {
    type: LOGIN,
    payload: requestPayload,
  };
};

/**
 * User login sucess
 * @param {object} error
 * @returns object
 */
export const loginSucessAction = (loginUser) => {
  return {
    type: LOGIN_SUCCESS,
    payload: loginUser,
  };
};

/**
 * User login failed
 * @param {object} error
 * @returns object
 */
export const loginFailAction = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};

/**
 * User logout
 * @param {object} error
 * @returns object
 */
export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

/**
 * VIew Profile
 * @param {object} error
 * @returns object
 */
export const profileAction = (accessToken) => {
  return {
    type: PROFILE,
    payload: accessToken,
  };
};

/**
 * VIew profile sucess
 * @param {object} error
 * @returns object
 */
export const profileSucessAction = (user) => {
  return {
    type: PROFILE_SUCCESS,
    payload: user,
  };
};

/**
 * View profile failed
 * @param {object} error
 * @returns object
 */
export const profileFailAction = (error) => {
  return {
    type: PROFILE_FAILED,
    payload: error,
  };
};

/**
 * Update User Profile
 * @param {object} error
 * @returns object
 */
export const updateProfileAction = (requestPayload) => {
  return {
    type: UPDATE_PROFILE,
    payload: requestPayload,
  };
};


/**
 * Update User Profile success
 * @param {object} error
 * @returns object
 */
export const updateProfileSucessAction = (user) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: user,
  };
};

/**
 * Update User Profile failed
 * @param {object} error
 * @returns object
 */
export const updateProfileFailAction = (error) => {
  return {
    type: UPDATE_PROFILE_FAILED,
    payload: error,
  };
};
