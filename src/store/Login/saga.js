import { put, call, takeEvery } from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import { toast } from "react-toastify";
import { LOGIN_ADMIN, LOGIN_SELLER } from "../../services/ApiCalls";
import requestNotificationPermission from "../../firebase";

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
      callBack && callBack();
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
