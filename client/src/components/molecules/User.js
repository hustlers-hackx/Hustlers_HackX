import React from "react";
import {Flex, Avatar, Text, Box} from "@chakra-ui/react"
import { CustomButton } from "../atoms/Button";
import { useHistory } from "react-router";
import defaultAvatar from "../../assets/defaultAvatar.png"
import { addFriend, removeFriend } from "../../redux/helpers/userHelpers";

export const User = ({data,isFriend,redirect}) => {

    const history = useHistory()

    return(
        <Flex
            bg="green"
            p={10}
            m={7}
            rounded="3xl"
            color="navy"
            w={[350,350,400,500,550]}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Avatar
                size="2xl"
                src={data.image? data.image.url : defaultAvatar}
            />
            <Text
                fontSize="1.7rem"
                my={5}
            >
                {data.name}
            </Text>
            <Text
                fontSize="1.3rem"
                my={3}
                overflowWrap="anywhere"
            >
                {data.bio}
            </Text>
            <Text
                fontSize="1.3rem"
                my={3}
                overflowWrap="anywhere"
            >
                Skills: {data.skills.join(", ")}
            </Text>
            <Flex
                flexDirection={["column","column","column","row"]}
            > 
                <CustomButton
                    bgColor="navy"
                    textColor = "green"
                    text = "View Profile"
                    onClick = {() => {
                        history.push(`/users/${data._id}`,{
                            id : data._id
                        })
                    }}
                />
                <Box w={7}/>
                <CustomButton
                    bgColor="navy"
                    textColor = "green"
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
                    />
                }
            </Flex>
        </Flex>
    )
}