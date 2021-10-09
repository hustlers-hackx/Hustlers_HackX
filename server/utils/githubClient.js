const axios = require('axios')

const getAccessToken = async (code) => {
    return axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`,
        headers: {
             accept: 'application/json'
        }
    }).then((response) => response.data.access_token)
}

const getGithubEmailfromCode= async (code) => {
    getAccessToken(code).then(acc_token => {
        return axios({
            method: 'get',
            url: `https://api.github.com/user`,
            headers: {
              Authorization: 'token ' + acc_token
            }
        }).then((response) => response.data.email)  
    })
}

module.exports = {getGithubEmailfromCode}