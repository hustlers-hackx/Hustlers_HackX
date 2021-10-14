import React, { useState } from "react"
import { Flex, InputGroup, Input, InputRightAddon } from '@chakra-ui/react' 
import { ArrowForwardIcon } from "@chakra-ui/icons"

export const ChatInput = ({send}) => {

    const[msg,setMsg] = useState("")

    return(
        <Flex>
            <InputGroup
                border="none"
                bg="navy"
                p={2}
                borderRadius="50"
                overflow="hidden"
                color="green"
            >
                <Input
                    p={5}
                    fontSize="1.3rem"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    border="none"
                    type="text"
                />
                <InputRightAddon
                    p={5}
                    pr={3}
                    bg="navy"
                    border="none"
                    children={<ArrowForwardIcon color="white" w={10} h={10}/>}
                    _hover={{
                        transform: "scale(1.07,1.07)"
                    }}
                    onClick={() => {
                        send(msg)
                        setMsg('')
                    }}
                />
            </InputGroup>
        </Flex>
    )
}