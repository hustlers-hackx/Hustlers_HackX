module.exports = {

    hackathonPopulate : [
        {
            path : 'participants',
            select : 'name'
        },
        {
            path : 'image',
            select : 'public_id url'
        }
    ],

    userPopulate : [
        
    ]
}