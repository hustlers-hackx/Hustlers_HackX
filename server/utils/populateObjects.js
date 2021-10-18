module.exports = {

    hackathonsPopulate : [
        {
            path : 'participants',
            select : 'name'
        },
        {
            path : 'image',
            select : 'public_id url'
        }
    ],

    hackathonPopulate : [
        {
            path : 'participants',
            select : 'name email image bio skills',
            populate : [
                {
                    path : 'image',
                    select : 'public_id url'
                }
            ]
        },
        {
            path : 'image',
            select : 'public_id url'
        }
    ],


    userPopulate : [
        { 
            path : 'image',
            select : 'public_id url' 
        },
        {
            path : 'hackathons',
            populate: {
                path: 'hackathonId',
                select : 'name description image participantCount start_date duration url',
                populate : [
                    {
                        path : 'image',
                        select : 'public_id url'
                    }
                ]
            } 
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