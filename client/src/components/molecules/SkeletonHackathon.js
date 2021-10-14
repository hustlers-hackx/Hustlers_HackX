import React from 'react'
import {Box, Flex, Skeleton,SkeletonText, Spacer} from '@chakra-ui/react'
import {CustomButton} from '../atoms/Button'

export const SkeletonHackathon = (props) => {
    return(
        <Flex
            bg="green"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w={[500,500,500,650]}
            h="max-content"
            px={7}
            py={7}
            m={8}
            rounded="xl"
        >
            <Skeleton
                rounded="lg"
                startColor='teal'
                endColor= 'blue'
                h={[200,200,200,300]}
                w={[450,450,450,600]}
            />  
            <Spacer/>
            <Flex
            >
                <Skeleton
                    startColor='teal'
                    endColor= 'blue'
                    h="1.7rem"
                    w={[250,250,250,350]}
                    mt={5}
                />
            </Flex>  
            <SkeletonText
                startColor='teal'
                endColor= 'blue'
                lineHeight="1.3rem"
                noOfLines={5}
                m={5}
                w={[450,450,450,600]}
            />
            <Flex
                flexDirection="column"
                alignItems="center"
                mb={5}
            >
                <SkeletonText
                    startColor='teal'
                    endColor= 'blue'
                    lineHeight="1.3rem"
                    noOfLines={2}
                    w={[250,250,250,350]}
                />
            </Flex>
            <Skeleton
                startColor='teal'
                endColor= 'blue'
                height="1.7rem"
                width={[150,150,150,200]}
            /> 
            <Box h="1.5rem"/>
            <Skeleton
                startColor='teal'
                endColor= 'blue'
                height="1.7rem"
                width={[150,150,150,200]}
            />    
        </Flex>
    )
}