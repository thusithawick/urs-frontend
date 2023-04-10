import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
} from "../actionTypes";

// initalstate
const initialState = {
  user: {},
  registering: false,
  loging: false,
  profiling: true,
  alertSuccess: {
    message: "",
  },
  alertDanger: {
    message: "",
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      state = {
        ...state,
        registering: true,
        alertSuccess: {
          message: "",
        },
        alertDanger: {
          message: "",
        },
      };
      break;
    case REGISTER_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        registering: false,
        alertSuccess: {
          message: action.payload.message,
        },
        alertDanger: {
          message: "",
        },
      };
      break;
    case REGISTER_FAILED:
      state = {
        ...state,
        registering: false,
        alertSuccess: {
          message: "",
        },
        alertDanger: {
          message: action.payload.data.message,
        },
      };
      break;
    case LOGIN:
      state = {
        ...state,
        loging: true,
        user: action.payload.user,
        alertSuccess: {
          message: "",
        },
        alertDanger: {
          message: "",
        },
      };
      break;
    case LOGIN_SUCCESS:
      localStorage.setItem("access_token", action.payload.access_token);
      state = {
        ...state,
        user: action.payload.user,
        loging: false,
        alertSuccess: {
          message: action.payload.message,
        },
        alertDanger: {
          message: "",
        },
      };
      break;
    case LOGIN_FAILED:
      state = {
        ...state,
        user: {},
        loging: false,
        alertSuccess: {
          message: "",
        },
        alertDanger: {
          message: action.payload.data.message,
        },
      };
      break;
    case LOGOUT:
      localStorage.removeItem("access_token");
      state = {
        ...state,
        user: {},
        alertSuccess: {
          message: "",
        },
        alertDanger: {
          message: "",
        },
      };
      break;
    case PROFILE:
      state = {
        ...state,
        profiling: true,
      };
      break;
      case PROFILE_SUCCESS:
        state = {
          ...state,
          user: action.payload.user,
          profiling: false,
          alertSuccess: {
            message: action.payload.message,
          },
          alertDanger: {
            message: "",
          },
        };
        break;
      case PROFILE_FAILED:
        state = {
          ...state,
          user: {},
          profiling: false,
          alertSuccess: {
            message: "",
          },
          alertDanger: {
            message: action.payload.data.message,
          },
        };
        break;
        case UPDATE_PROFILE:
          state = {
            ...state,
            updatingProfile: true,
            alertSuccess: {
              message: "",
            },
            alertDanger: {
              message: "",
            },
          };
          break;
        case UPDATE_PROFILE_SUCCESS:
          state = {
            ...state,
            user: action.payload.user,
            updatingProfile: false,
            alertSuccess: {
              message: action.payload.message,
            },
            alertDanger: {
              message: "",
            },
          };
          break;
        case UPDATE_PROFILE_FAILED:
          state = {
            ...state,
            updatingProfile: false,
            alertSuccess: {
              message: "",
            },
            alertDanger: {
              message: action.payload.data.message,
            },
          };
          break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
