import { put, call } from "redux-saga/effects";

import { Alert } from "react-native";
import * as loginActions from "app/store/actions/loginActions";

import * as commonAction from "../actions/commonAction";
import axios from "axios";

export default function* loginAsync({
  username,
  password,
  latitude,
  longitude,
}) {
  const apiCall = () =>
    axios.get(
      `http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=10&appid=f3ec2539db5198f29c911d237509c797`
    );

  try {
    let { data } = yield call(apiCall);

    yield put(commonAction.onLocationResponse(data));
    const response = { success: true, data: { id: 1 }, message: "Success" };
    if (data?.list?.length !== 0) {
      if (response.success) {
        yield put(loginActions.onLoginResponse(response.data));

        yield put(loginActions.disableLoader());
      } else {
        yield put(loginActions.loginFailed());
        yield put(loginActions.disableLoader());
        setTimeout(() => {
          Alert.alert("alert", response.message);
        }, 200);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
