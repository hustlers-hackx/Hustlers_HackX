import React from "react"
import { Flex, Text } from "@chakra-ui/react"
import { calculateTime } from "../../utils/timeUtilities"
import { getUser } from "../../redux/helpers/authHelpers"

const getAlignment = (user) => {
    const id = getUser()._id
    return user === id? "flex-end" : "flex-start"
}

export const ChatMessage = ({msg}) => {
    return(
        <Flex
            bg="green"
            color="navy"
            flexDirection="column"
            py={2}
            px={5}
            m={5}
            width="max-content"
            rounded="3xl"
            alignSelf={getAlignment(msg.id)}
        >
            <Text
                fontSize="1.2rem"
                fontWeight="medium"
            >
                {msg.text}
            </Text>
            <Text

            >
                {calculateTime(msg.time)}
            </Text>
        </Flex>
    )
}