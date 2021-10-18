import React, { useEffect, useState } from 'react'
import {Flex, Text, Avatar, Spinner } from '@chakra-ui/react'
import { CustomButton } from "../components/atoms/Button";
import { ProfileNavbar } from '../components/molecules/ProfileNavbar'
import { checkFriendStatus, getUserDetails, addFriend, removeFriend } from '../redux/helpers/userHelpers'
import { useHistory } from 'react-router'
import defaultAvatar from "../assets/defaultAvatar.png"

export const UserProfile = (props) => {

    const[data,setData] = useState({})
    const[error,setError] = useState(false)
    const[isFriend,setIsFriend] = useState(false)
    const history = useHistory()

    useEffect(() => {
        const fetchData = async (id) => {
            let response = await getUserDetails(id)
            if(!response.err){
                setData(response.data)
                if(checkFriendStatus(response.data._id)){
                    setIsFriend(true)
                }
            }else{
                setError(true)
            }
        }
        if(props.location.state){
            fetchData(props.location.state.id)
        }else{
            history.push('/hackathons')
        }
    })

    const redirect = () => {
        history.push(`/users/${data._id}`,{
            id : data._id
        })
    }

    return(
        <Flex
            justifyContent="center"
            bg="navy"
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
            Object.keys(data).length === 0? 
            <Spinner color="green"/> :
            <Flex
                alignItems="center"
                bg="green"
                color="navy"
                m={10}
                px={10}
                py={10}
                minW="70%"
                h={["max-content","max-content","max-content","70%"]}
                rounded="2xl"
                flexDirection={["column","column","column","row"]}
            >
                <Flex
                    mx={5}
                    mr={10}
                    my={5}
                    alignItems="center"
                    flexDirection="column"
                >
                    <Avatar
                        h="20rem"
                        w="20rem"
                        src={data.image? data.image.url : defaultAvatar}
                        mb="1rem"
                    />
                    <Text
                        fontSize="2rem"
                        m="2rem"
                    >
                        {data.name}
                    </Text>
                    <CustomButton
                        bgColor="navy"
                        textColor="green"
                        text = {isFriend? "Remove as Friend" : "Add as Friend"}
                        onClick = {isFriend? 
                            async () => {
                                let response = await removeFriend(data._id)
                                console.log(response)
                                history.goBack()
                            } :
                            async () => {
                                let response = await addFriend(data._id)
                                console.log(response)
                                redirect()
                            }
                        }
                    />
                    {isFriend &&
                    <CustomButton
                        bgColor="navy"
                        textColor = "green"
                        text = "Chat"
                        onClick = {async () => {
                            history.push('/friends',{
                                currFriend : data
                            })
                        }}
                    />}
                </Flex>
                <ProfileNavbar data={data}/>
            </Flex>}
        </Flex>
    )
}