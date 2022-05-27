import { put, takeEvery, all } from "redux-saga/effects";
import * as type from "../../constants";
import * as action from './../action/preference'

function* postPreference(act) {
  try{
    yield put(action.postPreferenceSuccess(act.payload))
  }
  catch(err){
    console.log(err)
  }
}

function* watchPostPreference() {
  yield takeEvery(type.POST_PREFERENCE, postPreference);
}

export default function* rootSaga() {
  yield all([watchPostPreference()]);
}
