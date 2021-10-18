import { Hackathon } from '../components/molecules/Hackathon'
import {Flex,Text} from '@chakra-ui/react'
import { useState } from 'react'
import { getUserHackathons } from '../redux/helpers/authHelpers'

export const MyHackathons = (props) => {

    const[data,setData] = useState(getUserHackathons())

    const reload = () => {
        setData(getUserHackathons())
    }

    return (
        <Flex
            flexWrap="wrap"
            justifyContent="center"
            bg="navy"
            px={10}
            py={5}
            w="100%"
        >
            {data && data.length === 0? 
            <Text
                my={20}
                fontSize="2rem"
                color="green"
            >
                You are not currently participating in any hackathons.
            </Text> : 
            data.map(hackathon => 
            <Hackathon 
                data={hackathon.hackathonId}
                participating={{
                    status: true,
                    needFriend: hackathon.participating
                }}
                reload={reload}
            />)}
        </Flex>
    )
}