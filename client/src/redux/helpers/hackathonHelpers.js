import store from '../store/index'
import actions from '../actions/hackathonActions'

export const getHackathons = () => {
    return store.getState().hackathonReducer.hackathons
}

export const setHackathons = (hackathons) => {
    store.dispatch(actions.setHackathons(hackathons))
}