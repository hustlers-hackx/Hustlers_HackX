import React from "react"
import {Flex,Spinner,Text} from '@chakra-ui/react'
import { ChatMessage } from "../atoms/ChatMessage"

export const ChatSection = ({msgs}) => {
    return(
        <Flex
            my={5}
            rounded="lg"
            bg="navy"
            flex="1"
            pos="relative"
            overflowY="scroll"
            flexDirection="column"
            justifyContent="flex-end"
        >   
            {!msgs? 
            <Flex
                pos="absolute"
                top="45%"
                left="45%"
                flexDirection="column"
                alignItems="center"
            >
                <Spinner 
                    color="white"
                    h={10}
                    w={10}
                /> 
                <Text
                    mt={5}
                    fontSize="1.4rem"
                    color="white"
                >
                    Getting Your Messages
                </Text>
            </Flex>: 
            msgs.length === 0?
                <Flex
                    justifySelf="center"
                    alignSelf="center"
                >
                    <Text
                        color="green"
                        fontSize="1.5rem"
                        pb={10}
                    >
                        No Messages Exchanged Yet
                    </Text>
                </Flex> :
                <Flex
                    my={3}
                    flexDirection="column"
                    overflowY = "scroll"
                >
                    {msgs.map(msg => <ChatMessage msg={msg}/>)}
                </Flex>
            }
        </Flex>
    )
}