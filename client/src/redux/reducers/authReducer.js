import {constants} from '../constants/index'

const initialState = {
    jwtToken: '',
    user : {}
}

const authReducer = (state = initialState,action) => {
    switch(action.type){
        case constants.SET_JWT:
            return Object.assign({},state,{jwtToken : action.payload})
        case constants.SET_USER:
            return Object.assign({},state,{user : action.payload})
        case constants.LOG_OUT:
            return Object.assign({},initialState)
        default:
            return state
    }
}

export default authReducer