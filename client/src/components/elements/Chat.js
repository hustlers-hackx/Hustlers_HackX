import React from 'react';
import { Flex } from '@chakra-ui/react' 
import { ChatBanner } from '../atoms/ChatBanner'
import { ChatInput } from '../atoms/ChatInput'
import { ChatSection } from '../molecules/ChatSection';
import { useChat } from '../../hooks/useChat';
import { getUser } from '../../redux/helpers/authHelpers';

export const Chat = ({friend}) => {

    const [msgs,addMsg] = useChat(friend._id)

    const send = (msg) => {
        addMsg({
            text: msg,
            sender: getUser().name,
            id: getUser()._id,
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