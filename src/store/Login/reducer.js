import { useSelector } from "react-redux";
import * as CONST from "./actionTypes";
import { startTransition } from "react";

const intialState = {
  isLogin: false,
  loading: false,
  meQueryLoading: false,
  // admin:  localStorage.getItem("admin") ? JSON.parse(localStorage.getItem("admin") ||{}/

  token: (localStorage && localStorage.getItem("token")) || null,
  _id: (localStorage && localStorage.getItem("_id")) || null,
  profileImage: (localStorage && localStorage.getItem("profileImage")) || null,
  currentLang: (localStorage && localStorage.getItem("lang")) || null,
  loginUserRole:
    (localStorage && localStorage.getItem("loginUserRole")) || "Admin",
};

const LoginReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.LOGIN_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case CONST.LOGIN_ADMIN_SUCCESS:
      localStorage.setItem("loginUserRole", payload.role || "Admin");
      return {
        ...state,
        isLogin: true,
        loading: false,
        loginUserRole: payload.role || "Admin",
        token: payload.token,
        admin: payload,
        _id: payload?._id,
        profileImage: payload?.profileImage,
      };

    case CONST.LOGIN_ADMIN_FAIL:
      return {
        ...state,
        loading: false,
        isLogin: false,
        token: null,
        _id: null,
      };

    case CONST.LOGOUT_ADMIN:
      return {
        ...state,
        loading: false,
        isLogin: false,
        token: null,
        _id: null,
      };

    case CONST.CHANGE_PROFILE_IMAGE:
      localStorage.setItem("profileImage", payload);
      return {
        ...state,
        profileImage: payload,
      };

    case CONST.CHANGE_LANG:
      localStorage.setItem("lang", payload);
      return {
        ...state,
        currentLang: payload,
      };

    default:
      return state;

      break;
  }
};

export default LoginReducer;
