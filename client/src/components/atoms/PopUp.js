import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CustomButton } from "./Button";
import { CloseIcon } from "@chakra-ui/icons";

export const PopUp = ({text,onClick,onClose}) => {
    return(
        <Flex
            pos="fixed"
            top="0%"
            left="0%"
            h="100%"
            w="100%"
            bg="blackAlpha.700"
            justifyContent="center"
            alignItems="center"
            zIndex="5"
        >
            <Flex
                bg="green"
                h="max-content"
                p={10}
                rounded="2xl"
                flexDirection="column"
                alignItems="center"
                pos="relative"
            >
                <Button 
                    pos="absolute"
                    top={4}
                    right={4}
                    bg="transparent"
                    h="40px"
                    w="40px"
                    borderRadius="50%"
                    _hover={{
                        bg:"white"
                    }}
                    onClick={onClose}
                >
                    <CloseIcon color="navy" w={4} h={4}/>
                </Button>
                <Text
                    color="navy"
                    fontSize="1.3rem"
                    fontWeight="500"
                    mt={2}
                >
                    {text}
                </Text>
                <Flex
                    justifyContent="space-between"
                >
                    <CustomButton
                        textColor="green"
                        bgColor="navy"
                        text="Yes"
                        onClick={() => onClick(true)}
                    />
                    <Box w={10}/>
                    <CustomButton
                        textColor="green"
                        bgColor="navy"
                        text="No"
                        onClick={() => onClick(false)}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}