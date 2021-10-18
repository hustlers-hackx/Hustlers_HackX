import React, { useState } from "react"
import { Flex, Text } from '@chakra-ui/react' 
import { FriendList } from "../components/molecules/FriendList"
import { Chat } from "../components/elements/Chat"
import { getUserFriends } from "../redux/helpers/authHelpers"

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

export const Friends = (props) => {

    const[friends,setFriends] = useState(getUserFriends())
    const[currFriend,setCurrFriend] = useState(
        props.location.state? props.location.state.currFriend : 
        friends.length > 0 ? friends[0] : undefined
    )

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
            {friends.length === 0?
            <Text
                my={20}
                fontSize="2rem"
                color="green"
                w="100%"
                textAlign="center"
            >
                You do not seem to have any friends yet.
            </Text> :
            <>
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
            </>}
        </Flex>
    )
}