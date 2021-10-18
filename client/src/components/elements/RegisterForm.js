import React from "react"
import { useLoginForm } from "../../hooks/useLoginForm"
import { Flex, Text, Button } from '@chakra-ui/react'
import { CustomButton } from "../atoms/Button"
import { CustomInput } from "../atoms/LoginInput"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router";
import { register } from '../../redux/helpers/authHelpers'

export const RegisterForm = ({toggle}) => {
    
    const{name,email,password,conpass,errors,validate} = useLoginForm()
    const history = useHistory()

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
            {errors.value.length > 0 && errors.value.map(error => 
                <Text
                    fontSize="1rem"
                    color="red"
                >
                    {error}
                </Text>
            )}
            <CustomInput input={name}/>
            <CustomInput input={email}/>
            <CustomInput input={password}/>
            <CustomInput input={conpass}/>
            <CustomButton
                textColor = "green"
                bgColor = "navy"
                text = "Register"
                onClick = {async () => {
                    errors.clear()
                    if(validate(false)){
                        let response = await register(name.value,email.value,password.value)
                        if(!response.err){
                            history.push('/')
                            history.push('/login',{
                                mode: true,
                                msg : "Successfully registered as a new user."
                            })
                        }else{
                            errors.add(response.message)
                        }
                    }
                }}
            />
        </Flex>
    )
}