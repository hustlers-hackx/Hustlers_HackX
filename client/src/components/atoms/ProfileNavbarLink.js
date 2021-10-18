import React from "react";
import { Text } from '@chakra-ui/react'

export const ProfileNavbarLink = ({link,select}) => {
    return(
        <Text
            fontSize="1.2rem"
            fontWeight={link.active ? "500" : "400"}
            bg={link.active ? "green" : "navy"}
            color={link.active ? "navy" : "green"}
            mx={2}
            px={5}
            py={1}
            rounded="2xl"
            onClick={() => select()}
            cursor="pointer"
        >
            {link.name}
        </Text>
    )
}