import React, { useState } from "react";
import { Flex, Input,Text,InputRightAddon,InputGroup } from "@chakra-ui/react";

const getInitialShowValue = (label) => {
    if(label === "Password" || label === "Confirm Password"){
        return false
    }
    return true
}

export const CustomInput = (props) => {

    const [show,setShow] = useState(getInitialShowValue(props.input.label))
    
    return(
        <Flex
            alignSelf="flex-start"
            flexDirection="column"
            my={5}
        >
            <Text
                fontSize="1.3rem"
                color="navy"
            >
                {props.input.label}
            </Text>
            <InputGroup
                mt={3}
                w="360px"
            >
                <Input
                    type = {show ? "text" : "password"}
                    fontSize="1.3rem"
                    rounded="none"
                    bg="navy"
                    color="green"
                    py={6}
                    border="white solid 2px"
                    value={props.input.value}
                    onChange={props.input.onChange}
                />
                {(props.input.label === "Password" || props.input.label === "Confirm Password") && <InputRightAddon 
                    fontSize="1.3rem"
                    children="Show" 
                    cursor="pointer"
                    bg="navy"
                    color="green"
                    py={6}
                    rounded="none"
                    border="white solid 2px"
                    onClick={() => setShow(prev => !prev)}
                />}
            </InputGroup>
            
        </Flex>
    )
}