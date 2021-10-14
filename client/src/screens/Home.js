import React from "react";
import { Image,Center,Text,Grid} from "@chakra-ui/react"
import { CustomButton } from "../components/atoms/Button";
import logo from '../assets/logo.jpg'
import { useHistory } from "react-router";

export const Home = () => {

    const history = useHistory()

    return(
        <Center
            flexDirection="column"
            bg="green"
            h="100%"
            gap={10}
        >   
            <Image
                src={logo}
                borderRadius="50%"
                mb={5}
            />
            <Text
                fontSize="4rem"
                m={5}
            >
                DEV UNDERFLOW
            </Text>
            <Text
                fontSize="2rem"
                mt={5}
                mb={10}
            >
                A solution for all your hackathon woes.
            </Text>
            <Grid
                templateColumns="repeat(2,1fr)"
                gap={10}
            >
                <CustomButton
                    textColor="green"
                    bgColor="navy"
                    text="Login"
                    onClick={() => {
                        history.push("/login",{
                            mode : true
                        })
                    }}
                />
                <CustomButton
                    textColor="green"
                    bgColor="navy"
                    text="Register"
                    onClick={() => {
                        history.push("/login",{
                            mode: false
                        })
                    }}
                />
            </Grid>
        </Center>
    )
}

