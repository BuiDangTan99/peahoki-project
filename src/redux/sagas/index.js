import { all } from 'redux-saga/effects'
import News from './news'
import Preference from './preference'
export default function* rootSaga(){
    yield all([News(), Preference()])
}