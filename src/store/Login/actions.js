import * as CONST from "./actionTypes";

export const loginAdmin = (payload, callBack) => {
  return {
    type:
      payload?.userType === "agency" ? CONST.LOGIN_ADMIN : CONST.LOGIN_SELLER,
    payload,
    callBack,
  };
};

export const loginAdmin_Success = (payload) => ({
  type: CONST.LOGIN_ADMIN_SUCCESS,
  payload,
});

export const loginAdmin_Fail = (payload) => ({
  type: CONST.LOGIN_ADMIN_FAIL,
  payload,
});

export const logoutAdmin = (payload) => ({
  type: CONST.LOGOUT_ADMIN,
  payload,
});

export const profileImageChange = (payload) => ({
  type: CONST.CHANGE_PROFILE_IMAGE,
  payload,
});

export const updateLang = (payload) => ({
  type: CONST.CHANGE_LANG,
  payload,
});
