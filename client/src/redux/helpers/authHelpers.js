import store from '../store/index'
import actions from '../actions/authActions'

export const getUser = () => {
    return store.getState().authReducer.user
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
}

export const setUser = (user) => {
    store.dispatch(actions.setUser(user))
}

export const logOut = () => {
    store.dispatch(actions.logOut())
}