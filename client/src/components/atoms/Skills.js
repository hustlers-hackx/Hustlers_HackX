import React, { useState } from "react";
import {Flex,Text,Button} from '@chakra-ui/react'
import {MinusIcon} from '@chakra-ui/icons'
import { CustomInput } from "./ProfileInput";

const Skill = (props) => {
    return (
        <Flex
            bg="green"
            py={2}
            px={5}
            mr={5}
            alignItems="center"
            rounded="md"
        >
            <Text
                fontSize="1.3rem"
                fontWeight="500"
                color="navy"
                mr={5}
            >
                {props.value}
            </Text>
            <Button
                bg="navy"
                onClick={props.remove}
                _hover={{
                    transform:"scale(1.05,1.05)"
                }}
            >
                <MinusIcon 
                    w={4} 
                    h={4}
                    color="white"
                />
            </Button>
        </Flex>
    )
}

export const Skills = (props) => {

    const[skill,setSkill] = useState("")

    return(
        <Flex 
            flexDirection="column"
        >
            <Text
                fontSize="1.3rem"
                color="green"
            >
                Skills
            </Text>
            <Flex
                mt={5}
            >
                {props.input.value.length === 0? 
                <Text
                    fontSize="1.3rem"
                    color="green"
                >
                    No Skills Added
                </Text> :
                props.input.value.map(skill => 
                    <Skill 
                        value={skill} 
                        remove={() => props.input.remove(skill)}
                    />
                )}
            </Flex>
            <CustomInput 
                input={{
                    label: "Add Skill",
                    value: skill,
                    onChange: (event) => setSkill(event.target.value),
                    addSkill: () => props.input.add(skill)
                }}
            />
        </Flex>
    )
}