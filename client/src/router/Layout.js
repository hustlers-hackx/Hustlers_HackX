import { Flex } from '@chakra-ui/react'
import { NavBar } from "../components/elements/Navbar";
import { Redirect } from "react-router";
import { isAuthenticated } from '../redux/helpers/authHelpers';

export const Layout = ({children}) => {

    if(!isAuthenticated()){
        return <Redirect to="/"/>
    }

    return(
        <>
            <NavBar/>
            <Flex
                flex="1 0 auto"
            >    
            {children}            
            </Flex>
        </>
    )
}