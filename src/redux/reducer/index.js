import {combineReducers} from 'redux'
import newsReducer from './newsReducer';
import preferenceReducer from './preferenceReducer'
import generalReducer from './generalReducer'
const rootReducer = combineReducers({
    newsReducer,
    preferenceReducer,
    generalReducer
})
export default rootReducer