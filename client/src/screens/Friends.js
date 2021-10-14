import React, { useState } from "react"
import { Flex } from '@chakra-ui/react' 
import { FriendList } from "../components/molecules/FriendList"
import { Chat } from "../components/elements/Chat"

const data = [
    {
        name : "Vraj Parikh",
        bio: "I am a very good Developer.",
        image: {
            url: 'https://bit.ly/dan-abramov'
        }
    },
    {
        name : "Vraj Parikh",
        bio: "I am a very good Developer.",
        image: {
            url: 'https://bit.ly/dan-abramov'
        }
    },
    {
        name : "Vraj Parikh",
        bio: "I am a very good Developer.",
        image: {
            url: 'https://bit.ly/dan-abramov'
        }
    },
    {
        name : "Vraj Parikh",
        bio: "I am a very good Developer.",
        image: {
            url: 'https://bit.ly/dan-abramov'
        }
    },
    {
        name : "Vraj Parikh",
        bio: "I am a very good Developer.",
        image: {
            url: 'https://bit.ly/dan-abramov'
        }
    },
    {
        name : "Vraj Parikh",
        bio: "I am a very good Developer.ggggggggggggggggggggg",
        image: {
            url: 'https://bit.ly/dan-abramov'
        }
    },
    {
        name : "Vraj Parikh",
        bio: "I am a very good Developer.",
        image: {
            url: 'https://bit.ly/dan-abramov'
        }
    },
    {
        name : "Vraj Parikh",
        bio: "I am a very good Developer.",
        image: {
            url: 'https://bit.ly/dan-abramov'
        }
    },
]

export const Friends = () => {

    const[friends,setFriends] = useState(data)
    const[currFriend,setCurrFriend] = useState(data[0])

    const openChat = (friend) => {
        setCurrFriend(friend)
    }

    return(
        <Flex
            bg="navy"
            p={5}
            width="100%"
            height="92vh"
        >
            <Flex
                flex="0.25"
            >
                <FriendList friends={friends} open={openChat}/>
            </Flex>
            <Flex
                flex="0.75"
            >
                <Chat friend={currFriend}/>
            </Flex>
        </Flex>
    )
}