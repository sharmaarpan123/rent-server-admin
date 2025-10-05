import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import requestNotificationPermission from "../../firebase";
import { LOGIN_ADMIN } from "../../services/ApiCalls";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";

function* loginUserSaga({ payload, callBack }) {
  try {
    const fcmToken = yield call(requestNotificationPermission);
    const response = yield call(LOGIN_ADMIN, { ...payload, fcmToken });
    if (response?.data?.success) {
      toast.dismiss();
      toast.success(response?.data?.message);
      localStorage.setItem("token", response?.data?.data?.token || "");
      localStorage.setItem("_id", response?.data?.data?._id);
      localStorage.setItem("admin", JSON.stringify(response?.data?.data));
      localStorage.setItem(
        "loginUserRole",
        response?.data?.data?.role || "Admin"
      );
      callBack && callBack(response?.data?.data);
      yield put(
        ACTION.loginAdmin_Success({
          ...response?.data?.data,
        })
      );
    } else {
      toast.dismiss();
      toast.error(response?.response?.data?.message);
      yield put(ACTION.loginAdmin_Fail(response?.response?.data?.message));
    }
  } catch (error) {
    console.log(error, "Error");
    toast.dismiss();
    toast.error(error?.data?.message);
    yield put(ACTION.loginAdmin_Fail(error));
  }
}

function* LoginSaga() {
  yield takeEvery(CONST.LOGIN_ADMIN, loginUserSaga);
}

export default LoginSaga;
