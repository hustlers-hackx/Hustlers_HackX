import React from "react";
import { Flex, Text } from '@chakra-ui/react' 
import { Friend } from "../atoms/Friend";

export const FriendList = (props) => {
    return(
        <Flex
            my={5}
            ml={5}
            p={5}
            pr={2.5}
            bg="green"
            rounded="lg"
            flexDirection="column"
        >
            <Text
                fontSize="1.5rem"
                fontWeight="700"
                textAlign="center"
                color="navy"
                my={5}
            >
                Friend List
            </Text>
            <Flex
                flexDirection="column"
                overflowX="hidden"
                overflowY="scroll"
                pr={3}
                css={{
                    '&::-webkit-scrollbar': {
                      backgroundColor: "#80ED99",  
                      width: '5px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: "#22577A",
                      borderRadius: '50px',
                    },
                }}
            >
                {props.friends.map(friend => (
                    <Friend data={friend} open={props.open}/>
                ))}
            </Flex>
        </Flex>
    )
}