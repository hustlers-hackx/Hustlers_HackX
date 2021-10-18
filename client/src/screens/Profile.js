import React, { useState } from "react";
import {Button, Flex,Text} from '@chakra-ui/react'
import { useProfileForm } from "../hooks/useProfileForm";
import { CustomInput } from "../components/atoms/ProfileInput";
import { CustomAvatar } from "../components/atoms/Avatar";
import { CustomButton } from "../components/atoms/Button";
import { Skills } from "../components/atoms/Skills";
import { CloseIcon } from "@chakra-ui/icons";

export const Profile = () => {

    const {
        name,
        image,
        bio,
        email,
        skills,
        github,
        phone,
        update
    } = useProfileForm()

    const[updateState,setUpdateState] = useState({})

    return(
        <Flex
            width="100%"
            h="max-content"
            flexDirection="column"
            bg="navy"
            py={10}
            pl="40px"
        >   
            {updateState.message && 
                <Flex
                    bg="white"
                    py={3}
                    px={5}
                    mr="40px"
                    mb={5}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text
                        fontSize="1.2rem"
                        fontWeight="700"
                        color={updateState.err? "red" : "green"}
                    >
                        {updateState.message}
                    </Text>
                    <Button 
                        onClick={() => setUpdateState({})}
                    >
                        <CloseIcon/>
                    </Button>
                </Flex>
            }
            <CustomAvatar input={image}/>
            <CustomInput input={name}/>
            <CustomInput input={bio}/>
            <CustomInput input={email}/>
            <CustomInput input={phone}/>
            <CustomInput input={github}/>
            <Skills input={skills}/>
            <Flex
                w="max-content"
            >
                <CustomButton
                    textColor="navy"
                    bgColor="green"
                    text = "Update Profile"
                    onClick = {async () => {
                        let response = await update()
                        setUpdateState(response)
                    }}
                />
            </Flex>
        </Flex>
    )

}