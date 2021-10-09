import React from 'react'
import { useChat } from '../hooks/useChat'

export const ChatSection = (props) => {

    const email = "sugarbae051@gmail.com"
    const [msgs,addMsg] = useChat(props.sender)

    return (
        <div>
            {msgs && msgs.map(msg => <div>{JSON.stringify(msg,null,2)}</div>)}
            <button onClick={() => addMsg({
                text: Math.random()>0.5 ? "Hello" : "World",
                sender: email
            })}>
                Add Message
            </button>
        </div>
    )

}