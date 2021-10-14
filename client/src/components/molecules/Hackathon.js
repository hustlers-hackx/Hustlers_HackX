import React from 'react'
import {Box, Flex,Image, Skeleton, Spacer,Text} from '@chakra-ui/react'
import {CustomButton} from '../atoms/Button'

export const Hackathon = (props) => {
    return(
        <Flex
            bg="green"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w={[500,500,500,650]}
            px={7}
            py={7}
            m={8}
            rounded="xl"
        >
            <Image
                src={props.data.image.url}
                rounded="lg"
                h={[200,200,200,300]}
                w={[450,450,450,600]}
            />  
            <Spacer/>
            <Flex>
                <Text
                    color="navy"
                    fontSize="1.7rem"
                    fontWeight="500"
                    mt={5}
                >
                    {props.data.name}
                </Text>
            </Flex>  
            <Text
                color="navy"
                fontSize="1.3rem"
                m={5}
            >
                {props.data.description}
            </Text>
            <Flex
                flexDirection="column"
                alignItems="center"
            >
                <Text
                    color="navy"
                    fontSize="1.3rem"
                >
                    Start Date: {new Date(props.data.start_date).toDateString()}
                </Text>
                <Text
                    color="navy"
                    fontSize="1.3rem"
                >
                    Duration: {props.data.duration}
                </Text>
            </Flex>
            <CustomButton 
                textColor="green"
                bgColor="navy"
                text="More Information" 
                onClick={() => {
                    window.location.href = props.data.url
                }}
            />
            <CustomButton 
                textColor="green"
                bgColor="navy"
                text="Participate" 
                onClick={() => {}}
            />
        </Flex>
    )
}