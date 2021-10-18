import store from '../store/index'
import actions from '../actions/hackathonActions'
import { request } from '../../utils/axiosUtilities'
import { getUser, getUserHackathons, setUser } from './authHelpers'

export const getHackathons = async () => {
    let hackathons = store.getState().hackathonReducer.hackathons
    console.log(store.getState())
    if(hackathons.length === 0){  
        try{
            let {data} = await request(
                '/hackathons',
                'get'
            )
            setHackathons(data.data)
            return {
                err: false,
                data: data.data
            }
        }catch{
            return {
                err: true
            }
        }
    }else{
        return {
            err: false,
            data: hackathons
        }
    }
}

export const setHackathons = (hackathons) => {
    store.dispatch(actions.setHackathons(hackathons))
}

export const participate = async (hackathonId,needFriend) => {
    try{
        console.log(hackathonId,needFriend)
        let {data} = await request(
            `/users/${getUser()._id}/hackathons/${hackathonId}`,
            'post',
            {
                participating : needFriend
            }
        )
        setUser(data.data)
    }catch{
        console.log("An Error Occurred.")
    }
}

export const withdraw = async (hackathonId) => {
    try{
        let {data} = await request(
            `/users/${getUser()._id}/hackathons/${hackathonId}`,
            'delete'
        )
        setUser(data.data)
    }catch{
        console.log("An Error Occurred.")
    }
}

export const checkHackathonStatus = (id) => {
    let hackathons = getUserHackathons()
    for(let i of hackathons){
        if(i.hackathonId._id === id){
            return {
                status : true,
                needFriend : i.participating
            }
        }
    }
    return {
        status : false
    }
}

export const getHackathonUsers = async(hackathonId) => {
    try{
        let {data} = await request(
            `/hackathons/${hackathonId}`,
            'get'
        )
        let currUserId = getUser()._id
        return{
            err: false,
            data: data.data[0].participants.filter(e => e._id !== currUserId)
        }
    }catch{
        return{
            err: true
        }
    }
}