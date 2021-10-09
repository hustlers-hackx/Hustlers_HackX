import {constants} from '../constants/index'

const actions = {
    setJWT : (payload) => {
        return {type : constants.SET_JWT, payload}
    },

    setUser : (payload) => {
        return {type : constants.SET_USER, payload}
    },
    
    logOut : (payload=null) => {
        return {type : constants.LOG_OUT, payload}
    }
}

export default actions
