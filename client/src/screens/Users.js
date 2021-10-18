import React, { useEffect, useState } from 'react'
import {Flex, Text, Spinner} from '@chakra-ui/react'
import { User } from '../components/molecules/User'
import { useHistory } from 'react-router'
import { getHackathonUsers } from '../redux/helpers/hackathonHelpers'
import { checkFriendStatus } from '../redux/helpers/userHelpers'

export const Users = (props) => {

    const[users,setUsers] = useState([])
    const[error,setError] = useState(false)
    const history = useHistory()

    useEffect(() => {
        const fetchData = async (id) => {
            let response = await getHackathonUsers(id)
            if(!response.err){
                setUsers(response.data)
            }else{
                setError(true)
            }
        }
        if(props.location.state){
            fetchData(props.location.state.id)
        }else{
            history.push('/hackathons')
        }
    },[])

    const redirect = () => {
        history.push('/users',{
            id : props.location.state.id
        })
    }

    return(
        <Flex
            justifyContent="center"
            bg="navy"
            px={10}
            py={5}
            w="100%"
            flexDirection="column"
            alignItems="center"
        >   
            {error?
            <Text
                my={20}
                fontSize="2rem"
                color="green"
            >
                An Error Occurred.
            </Text> :
            users.length === 0? 
            <Spinner color="green"/> :
            <>
            <Text
                fontSize="2rem"
                color="green"
                my={5}
            >
                Here are your potential partners
            </Text>
            <Flex
                flexWrap="wrap"
                justifyContent="center"
            >
                {users.map(user => (
                    <User 
                        data={user}
                        isFriend={checkFriendStatus(user._id)}
                        redirect={redirect}
                    />
                ))}
            </Flex>
            </>}
        </Flex>
    )
}