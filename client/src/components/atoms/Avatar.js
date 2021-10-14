import React from "react";
import { chakra,Avatar } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import {getBase64} from '../../utils/imageUtilities'

export const CustomAvatar = (props) => {
    return(
        <Avatar 
            ml={5}
            height={250}
            width={250}
            src={props.input.value}
        >
            <chakra.div
                pos="absolute"
                top="67%"
                left="80%"
                bg="green"
                p="3"
                borderRadius="50%"
                _hover={{
                    transform:"scale(1.07,1.07)"
                }}
                cursor="pointer"
            >
                <chakra.input
                    id="btn"
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={async (event) => {
                        let newImage = await getBase64(event.target.files[0])
                        if(newImage){
                            props.input.onChange(newImage)
                        }
                    }}
                    hidden
                />
                <label for="btn">
                    <AddIcon w={7} h={7}/>
                </label>
            </chakra.div>
        </Avatar>
    )
}