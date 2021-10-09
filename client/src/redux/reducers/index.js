import { combineReducers } from 'redux'
import authReducer from './authReducer'
import hackathonReducer from './hackathonReducer'

export default combineReducers({
  authReducer,
  hackathonReducer
})