import moment from 'moment'

export const calculateTime = (date) => {
    let time = new Date(Number(date))
    console.log(time)
    let out  = moment(time).fromNow()
    return out[0].toUpperCase() + out.slice(1)
}