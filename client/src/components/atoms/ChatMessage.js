import React from "react"
import { Flex, Text } from "@chakra-ui/react"
import { calculateTime } from "../../utils/timeUtilities"

const getAlignment = (user) => {
    const email = "sugarbae051@gmail.com"
    return user === email? "flex-end" : "flex-start"
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
            alignSelf={getAlignment(msg.sender)}
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