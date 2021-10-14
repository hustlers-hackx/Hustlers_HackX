import React from "react"
import { useLoginForm } from "../../hooks/useLoginForm"
import { Flex, Text, Button } from '@chakra-ui/react'
import { CustomButton } from "../atoms/Button"
import { CustomInput } from "../atoms/LoginInput"
import { ArrowBackIcon } from '@chakra-ui/icons'

export const RegisterForm = ({toggle}) => {
    
    const{name,email,password,conpass} = useLoginForm()

    return(
        <Flex
            flexDirection="column"
            bg="green"
            py={12}
            px={20}
            rounded="2xl"
            alignItems="center"
            pos="relative"
        >   
            <Button
                pos="absolute"
                left="5%"
                bg="navy"
                p={7}
                h={10}
                w={10}
                borderRadius="50%"
                onClick={toggle}
                _hover={{
                    transform : "scale(1.07,1.07)"
                }}
            >  
                <ArrowBackIcon color="white" w={8} h={8}/>
            </Button>
            <Text
                fontSize="1.7rem"
                fontWeight="600"
                color="navy"
                pb={3}
            >
                Register as a New User
            </Text>
            <CustomInput input={name}/>
            <CustomInput input={email}/>
            <CustomInput input={password}/>
            <CustomInput input={conpass}/>
            <CustomButton
                textColor = "green"
                bgColor = "navy"
                text = "Register"
            />
        </Flex>
    )
}