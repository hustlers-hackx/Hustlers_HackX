import {constants} from '../constants/index'

const initialState = {
    jwtToken: '',
    user : {
        email : "sugarbae051@gmail.com",
        friends : [
            {
                name : "Hello1",
                email : "testuser@gmail.com"
            },
            {
                name : "Hello1",
                email : "testuser@gmail.com"
            },
            {
                name : "Hello1",
                email : "testuser@gmail.com"
            },
        ]
    }
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