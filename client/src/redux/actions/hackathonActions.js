import {constants} from '../constants/index'

const actions = {
    setHackathons : (payload) => {
        return {type : constants.SET_HACKATHONS, payload}
    }
}

export default actions