import React from "react"
import { Flex, Text, Avatar} from '@chakra-ui/react' 

export const Friend = (props) => {
    return(
        <Flex
            bg="navy"
            p={5}
            rounded="xl"
            mt={5}
            alignItems="center"
            color="green"
            cursor="pointer"
            onClick={() => props.open(props.data)}
        >
            <Avatar 
                size="lg"
                src={props.data.image.url}
            />
            <Flex
                ml={5}
                flexDirection="column"
            >
                <Text
                    fontSize="1.5rem"
                >
                    {props.data.name}
                </Text>
                <Text
                    fontSize="1.2rem"
                    lineHeight="1.4rem"
                    maxW={300}
                    pr={5}
                >
                    {props.data.bio}
                </Text>
            </Flex>
        </Flex>
    )
}
