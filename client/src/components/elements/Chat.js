import React from 'react';
import { Flex } from '@chakra-ui/react' 
import { ChatBanner } from '../atoms/ChatBanner'
import { ChatInput } from '../atoms/ChatInput'
import { ChatSection } from '../molecules/ChatSection';
import { useChat } from '../../hooks/useChat';

export const Chat = ({friend}) => {

    const email = "sugarbae051@gmail.com"
    const [msgs,addMsg] = useChat()

    const send = (msg) => {
        addMsg({
            text: msg,
            sender: email,
            time: Date.now().toString()
        })
    }

    return(
        <Flex
            bg="green"
            m={5}
            p={5}
            width="100%"
            rounded="lg"
            flexDirection="column"
        >
            <ChatBanner friend={friend}/>
            <ChatSection msgs={msgs}/>
            <ChatInput send={send}/> 
        </Flex>
    )
}