import React from "react";
import { Button } from "@chakra-ui/react";

export const CustomButton = (props) => {
    return(
        <Button
            onClick={props.onClick}
            outline="none"
            color={props.textColor}
            bg={props.bgColor}
            textAlign="center"
            py={2}
            px={5}
            mt={5}
            rounded="lg"
            fontSize="1.3rem"
            boxShadow="dark-lg"
            cursor="pointer"
            _hover={{
                boxShadow: 'md'
            }}
        >
            {props.text}
        </Button>
    )
}