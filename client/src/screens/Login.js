import React, { useState } from 'react'
import { Center } from '@chakra-ui/react'
import { RegisterForm } from '../components/elements/RegisterForm'
import { LoginForm } from '../components/elements/LoginForm'

export const Login = (props) => {

    const[currComponent,setCurrComponent] = useState(props.location.state.mode)

    const toggle = () => {
        setCurrComponent(prev => !prev)
    }

    return(
        <Center
            h="100%"
            bg="navy"
        >   
            {currComponent? 
                <LoginForm toggle={toggle}/> : 
                <RegisterForm toggle={toggle}/>
            }
        </Center>
    )
}