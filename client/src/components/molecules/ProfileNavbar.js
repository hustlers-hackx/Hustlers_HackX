import React from "react";
import {Flex, Grid, GridItem} from '@chakra-ui/react'
import { ProfileNavbarLink } from "../atoms/ProfileNavbarLink";
import { useProfile } from "../../hooks/useProfile";

export const ProfileNavbar = ({data}) => {

    const[links,content,updateSelection] = useProfile(data)

    return(
        <Grid
            my={5}
            h="100%"
            w="100%"
            gap={5}
            templateRows="repeat(7,1fr)"
        >
            <GridItem
                rowspan={1}
            >
                <Flex
                    py={3}
                    px={7}
                    color="green"
                    bg="navy"
                    rounded="3xl"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    {links.map((link,index) => (
                        <ProfileNavbarLink 
                            link={link}
                            select={() => updateSelection(index)}
                        />
                    ))}
                </Flex>
            </GridItem>
            <GridItem
                rowSpan={6}
                rounded="2xl"
                bg="navy"
                p={10}
            >
                {content}
            </GridItem>
        </Grid>
    )
}