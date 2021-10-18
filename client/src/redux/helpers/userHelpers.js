import { getUser, getUserFriends, setUser } from "./authHelpers"
import { request } from "../../utils/axiosUtilities"
import { deleteDocument } from "../../utils/firebaseUtilities"

export const getUserDetails = async (userId) => {
    try{
        let {data} = await request(
            `/users/${userId}`,
            'get'
        )
        return{
            err: false,
            data: data.data
        }
    }catch{
        return{
            err: true
        }
    }
}

export const checkFriendStatus = (friendId) => {
    let friends = getUserFriends()
    for(let i of friends){
        if(i._id === friendId){
            return true
        }
    }
    return false
}

export const addFriend = async (friendId) => {
    try{
        let currUserId = getUser()._id
        let {data} = await request(
            `/users/${currUserId}/friends/${friendId}`,
            'post'
        )
        setUser(data.data)
        return{
            err: false,
            data: data.data
        }
    }catch(error){
        console.log(error.response.data)
        return{
            err: true
        }
    }
}

export const removeFriend = async (friendId) => {
    try{
        let currUserId = getUser()._id
        let {data} = await request(
            `/users/${currUserId}/friends/${friendId}`,
            'delete'
        )
        setUser(data.data)
        await deleteDocument(friendId)
        return {
            err: false,
            data: data.data
        }
    }catch{
        return{
            err: true
        }
    }
}