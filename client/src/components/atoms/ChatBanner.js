import React from "react"
import { Flex, Text, Avatar, Spacer } from '@chakra-ui/react' 
import { CustomButton } from "./Button"

export const ChatBanner = ({friend}) => {
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
                    src={friend.image.url}
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
                onChange={() => {
                    window.location.href = `/users/${friend._id}`
                }}
            />
        </Flex>
    )
}