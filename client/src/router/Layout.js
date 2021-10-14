import { Flex } from '@chakra-ui/react'
import { NavBar } from "../components/elements/Navbar";

export const Layout = ({children}) => {
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