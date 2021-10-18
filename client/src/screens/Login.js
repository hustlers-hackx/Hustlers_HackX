import React, { useState } from 'react'
import { Center } from '@chakra-ui/react'
import { RegisterForm } from '../components/elements/RegisterForm'
import { LoginForm } from '../components/elements/LoginForm'

export const Login = (props) => {

    const[success,setSuccess] = useState(props.location.state? props.location.state.msg : undefined)

    const[currComponent,setCurrComponent] = useState(props.location.state? props.location.state.mode : true)

    const toggle = () => {
        setSuccess(undefined)
        setCurrComponent(prev => !prev)
    }

    return(
        <Center
            h="100%"
            bg="navy"
        >   
            {currComponent? 
                <LoginForm 
                    toggle={toggle}
                    successMsg={success}
                    clearSuccess={() => setSuccess(undefined)}
                /> : 
                <RegisterForm toggle={toggle}/>
            }
        </Center>
    )
}