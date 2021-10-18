import React, { useState } from 'react'
import { Flex, Image, Spacer, Text} from '@chakra-ui/react'
import {CustomButton} from '../atoms/Button'
import defaultImage from '../../assets/defaultImage.jpg'
import { participate, withdraw } from '../../redux/helpers/hackathonHelpers'
import { PopUp } from '../atoms/PopUp'
import { useHistory } from "react-router";

export const Hackathon = (props) => {
    
    const[popUpStatus,setPopUpOpen] = useState(false)
    const history = useHistory()

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
            {popUpStatus && 
            <PopUp
                text={props.participating.status? "Are you sure you want to withdraw from this hackathon?" : "Are you looking for some team members?"} 
                onClick={props.participating.status? 
                    async (yes) => {
                        setPopUpOpen(false)
                        if(yes){
                            await withdraw(props.data._id)
                            history.push('/hackathons')
                        }
                    } : 
                    async (needFriend) => {
                        await participate(props.data._id,needFriend)
                        setPopUpOpen(false)
                        history.push('/hackathons')
                    }
                }
                onClose={() => setPopUpOpen(false)}    
            />}
            <Image
                src={props.data.image ? props.data.image.url : defaultImage}
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
                text={props.participating.status? "Withdraw" : "Participate"} 
                onClick={() => {
                    setPopUpOpen(true)
                }}
            />
            {props.participating.status && 
            <>
                <CustomButton 
                    textColor="green"
                    bgColor="navy"
                    text={"Start looking for Partners"} 
                    onClick={async() => {
                        await participate(props.data._id,true)
                        history.push('/users',{
                            id : props.data._id
                        })
                    }}
                /> 
                {props.participating.needFriend &&
                <CustomButton 
                    textColor="green"
                    bgColor="navy"
                    text={"Stop the Search"} 
                    onClick={async () => {
                        await participate(props.data._id,false)
                        history.push('/hackathons')
                    }}
                />}
            </>}
        </Flex>
    )
}