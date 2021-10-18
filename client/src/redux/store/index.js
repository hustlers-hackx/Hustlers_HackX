import {createStore} from 'redux'
import rootReducer from '../reducers/index'
import { loadState } from '../../utils/storageUtilities'

const preloadedState = {
    authReducer : loadState('authState')
}

const store = createStore(rootReducer,preloadedState)

export default store