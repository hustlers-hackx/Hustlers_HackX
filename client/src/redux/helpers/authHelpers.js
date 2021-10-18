import store from '../store/index'
import actions from '../actions/authActions'
import { request } from "../../utils/axiosUtilities"
import { saveState, loadState } from '../../utils/storageUtilities'

const saveAuthDetails = () => {
    saveState('authState',store.getState().authReducer)
}

export const login = async (email,password) => {
    try{
        let {data} = await request(
            '/auth/login',
            'post',
            {
                email,
                password
            },
            false
        )
        setUser(data.data)
        setJWT(data.token)
        return {
            err : false
        }
    }catch(error){
        return {
            err: true,
            message : error.response.data.message
        }
    }
}

export const register = async (name,email,password) => {
    try{
        await request(
            '/auth/register',
            'post',
            {
                name,
                email,
                password
            },
            false
        )
        return {
            err : false
        }
    }catch(error){
        return {
            err: true,
            message : error.response.data.message
        }
    }
}

export const getUser = () => {
    return store.getState().authReducer.user
}

export const isAuthenticated = () => {
    if(Object.keys(getUser()).length === 0){
        return false
    }
    return true
}

export const getUserHackathons = () => {
    return store.getState().authReducer.user.hackathons
}

export const getUserFriends = () => {
    return store.getState().authReducer.user.friends
}

export const getJWT = () => {
    return store.getState().authReducer.jwtToken
}

export const setJWT = (token) => {
    store.dispatch(actions.setJWT(token))
    saveAuthDetails()
}

export const setUser = (user) => {
    store.dispatch(actions.setUser(user))
    saveAuthDetails()
}

export const logOut = () => {
    store.dispatch(actions.logOut())
    saveState('authState',undefined)
}
