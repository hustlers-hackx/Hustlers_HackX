import React from "react";
import {Flex,Spacer,Text,Link} from '@chakra-ui/react'
import { useHistory } from "react-router";

const links = [
    {
        name : 'Profile',
        href : '/profile'
    },
    {
        name : 'Hackathons',
        href : '/hackathons'
    },
    {
        name : 'My Hackathons',
        href : '/profile/hackathons'
    },
    {
        name : 'Friends',
        href : '/friends'
    }
]

export const NavBar = () => {

    const path= useHistory().location.pathname

    return(
        <Flex
            bg="green"
            color="navy"
            w="100%"
            py={4}
            px={10}
            alignItems='center'
        >
            <Text
                as="a"
                fontWeight="500"
                fontSize="1.7rem"
                cursor="pointer"
                href=""
            >
                DEV UNDERFLOW
            </Text>
            <Spacer/>
            <Flex
                justifyContent='right'
                alignItems='center'
                fontSize="1.3rem"
            >
                {links.map(link => (
                    <Link
                        px={3}
                        mx={1}
                        py={2}
                        cursor="pointer"
                        bg={path === link.href? 'navy' : 'green'}
                        color={path === link.href? 'green' : 'navy'}
                        rounded="md"
                        href={link.href}
                        transition="all 0.3s"
                        _hover={{
                            bg: 'navy',
                            color: "green"
                        }}
                    >
                        {link.name}
                    </Link>
                ))}
            </Flex>
        </Flex>
    )
}