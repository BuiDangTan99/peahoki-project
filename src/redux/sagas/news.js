import { put, takeEvery, all, call } from "redux-saga/effects";
import * as type from "../../constants";
import * as api from "./../api/apiNews";
import * as action from "./../action/news";
import { showLoadingComponent, hideLoadingComponent } from "../action/gereral";

function* getNews(act) {
  try {
    yield put(showLoadingComponent());
    yield put(action.resetState());
    const res = yield call(api.apiGetNews, act.payload);
    if (res.status === 200) {
      yield put(action.getNewsSuccess(res.data));
      yield put(hideLoadingComponent());
    } else {
      yield put(hideLoadingComponent());
    }
  } catch (err) {
    console.log(err);
  }
}

function* watchGetNews() {
  yield takeEvery(type.GET_NEWS, getNews);
}

export default function* rootSaga() {
  yield all([watchGetNews()]);
}
