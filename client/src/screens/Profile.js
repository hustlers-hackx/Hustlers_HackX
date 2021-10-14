import React from "react";
import {Flex} from '@chakra-ui/react'
import { useProfileForm } from "../hooks/useProfileForm";
import { CustomInput } from "../components/atoms/ProfileInput";
import { CustomAvatar } from "../components/atoms/Avatar";
import { CustomButton } from "../components/atoms/Button";
import { Skills } from "../components/atoms/Skills";

export const Profile = () => {

    const {
        name,
        image,
        bio,
        email,
        skills,
        github,
        phone
    } = useProfileForm()

    return(
        <Flex
            width="100%"
            h="max-content"
            flexDirection="column"
            bg="navy"
            py={10}
            pl="40px"
        >   
            <CustomAvatar input={image}/>
            <CustomInput input={name}/>
            <CustomInput input={bio}/>
            <CustomInput input={email}/>
            <CustomInput input={phone}/>
            <CustomInput input={github}/>
            <Skills input={skills}/>
            <CustomButton
                textColor="navy"
                bgColor="green"
                text = "Update Profile"
                onClick = {() => {
                    console.log("Hello ji")
                }}
            />
        </Flex>
    )

}