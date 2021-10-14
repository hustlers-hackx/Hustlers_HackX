import React from "react";
import { Flex, Input,Text,InputLeftAddon,InputRightAddon,InputGroup, Textarea } from "@chakra-ui/react";

const getType = (label) => {
    if(label === "Contact Number"){
        return "tel"
    }
    if(label === "Password" || label === "Confirm Password"){
        return "password"
    }
    return "text"
}

export const CustomInput = (props) => {
    return(
        <Flex
            flexDirection="column"
            color="green"
            my={5}
        >
            <Text
                fontSize="1.3rem"
            >
                {props.input.label}
            </Text>
            {props.input.label === "Bio" ? 
            <Textarea
                mt={3}
                rows={5}
                fontSize="1.3rem"
                resize="none"
                rounded="none"
                py={3}
                w="80%"
                border="white solid 2px"
                onChange={props.input.onChange}
            >
                {props.input.value}
            </Textarea> :
            <InputGroup
                mt={3}
                w={["45%","45%","40%","30%","20%"]}
            >
                {props.input.label === "Contact Number" && <InputLeftAddon 
                    fontSize="1.3rem"
                    children="+91" 
                    bg="navy"
                    py={6}
                    rounded="none"
                    border="white solid 2px"
                />}
                <Input
                    isReadOnly = {props.input.label === "Registered Email"? true : false}
                    type = {getType(props.input.label)}
                    fontSize="1.3rem"
                    rounded="none"
                    py={6}
                    border="white solid 2px"
                    value={props.input.value}
                    onChange={props.input.onChange}
                />
                {props.input.label === "Add Skill" && <InputRightAddon 
                    fontSize="1.3rem"
                    children="Add" 
                    cursor="pointer"
                    bg="green"
                    color="navy"
                    py={6}
                    rounded="none"
                    border="white solid 2px"
                    onClick={props.input.addSkill}
                />}
            </InputGroup>}
            
        </Flex>
    )
}