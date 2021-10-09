import {constants} from '../constants/index'

const initialState = {
    hackathons: []
}

const hackathonReducer = (state = initialState,action) => {
    switch(action.type){
        case constants.SET_HACKATHONS:
            return Object.assign({},state,{hackathons : action.payload})
        default:
            return state
    }
}

export default hackathonReducer