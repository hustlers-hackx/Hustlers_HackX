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
        {
            path : 'hackathons',
            select : 'name description image participantCount start_date duration url',
            populate : [
                {
                    path : 'image',
                    select : 'public_id url'
                }
            ]
        },
        {
            path : 'friends',
            select: 'name email image bio skills',
            populate : [
                {
                    path : 'image',
                    select : 'public_id url'
                }
            ]
        }
    ]
}