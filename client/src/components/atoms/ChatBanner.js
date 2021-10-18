import React from "react"
import { Flex, Text, Avatar, Spacer } from '@chakra-ui/react' 
import { CustomButton } from "./Button"
import { useHistory } from "react-router";
import defaultAvatar from "../../assets/defaultAvatar.png"

export const ChatBanner = ({friend}) => {

    const history = useHistory()

    return(
        <Flex
            pr={10}
            borderRadius="50"
            bg="navy"
        >
            <Flex
                p={3}
                px={5}
                alignItems="center"
            >
                <Avatar 
                    size="lg"
                    src={friend.image? friend.image.url : defaultAvatar}
                />
                <Text
                    ml={10}
                    fontSize="1.5rem"
                    color="green"
                >
                    {friend.name}
                </Text>
            </Flex>
            <Spacer/>
            <CustomButton
                textColor="navy"
                bgColor="green"
                text="View Profile"
                onClick={() => {
                    history.push(`/users/${friend._id}`,{
                        id : friend._id
                    })
                }}
            />
        </Flex>
    )
}