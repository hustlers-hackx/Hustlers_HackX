import axios from "axios"
import { getJWT } from "../redux/helpers/authHelpers"

export const request = (url,method = "post",data = {},auth = true) => {

    const token = getJWT()

    return axios({
        url,
        method,
        data,
        headers: auth? {
            "Authorization" : `Bearer ${token}` 
        } : {}
    })
}