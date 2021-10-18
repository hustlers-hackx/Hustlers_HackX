import React from "react"
import { useLoginForm } from "../../hooks/useLoginForm"
import { Flex, Text, Button } from '@chakra-ui/react'
import { CustomButton } from "../atoms/Button"
import { CustomInput } from "../atoms/LoginInput"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { login } from "../../redux/helpers/authHelpers"
import { useHistory } from "react-router";

export const LoginForm = ({toggle,successMsg,clearSuccess}) => {

    const{email,password,errors,validate} = useLoginForm()
    const history = useHistory()

    return(
        <Flex
            flexDirection="column"
            bg="green"
            py={12}
            px={20}
            rounded="2xl"
            alignItems="center"
            position="relative"
        >   
            <Button
                pos="absolute"
                right="5%"
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
                <ArrowForwardIcon color="white" w={8} h={8}/>
            </Button>
            <Text
                fontSize="1.7rem"
                fontWeight="600"
                color="navy"
                pb={3}
            >
                Login as an Existing User
            </Text>
            {successMsg && 
                <Text
                    fontSize="1rem"
                    color="red"
                >
                    {successMsg}
                </Text>
            }
            {errors.value.length > 0 && errors.value.map(error => 
                <Text
                    fontSize="1rem"
                    color="red"
                >
                    {error}
                </Text>
            )}
            <CustomInput input={email}/>
            <CustomInput input={password}/>
            <CustomButton
                textColor = "green"
                bgColor = "navy"
                text = "Login"
                onClick = {async () => {
                    if(successMsg) clearSuccess()
                    errors.clear()
                    if(validate(true)){
                        let response = await login(email.value,password.value)
                        if(!response.err){
                            history.push('/profile')
                        }else{
                            errors.add(response.message)
                        }
                    }
                }}
            />
        </Flex>
    )
}