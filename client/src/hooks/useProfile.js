import { useState } from "react"
import { Text, Flex, Avatar, Image } from '@chakra-ui/react'
import { useHistory } from "react-router"

const ContentManager = (user) => {
    const data = user
    const history = useHistory()

    return (link) => {
        if(link === 0)
            return (
                <Text
                    fontSize="1.3rem"
                    color="green"
                >  
                    {data.bio}
                </Text>
            )
        if(link === 1)
            return (
                <>
                <Text
                    color="green"  
                    fontSize="1.3rem"
                    mb={5} 
                >
                    {`${data.name.split(' ')[0]} is fluent in : `} 
                </Text>
                <Flex
                    flexWrap="wrap"
                >
                    {data.skills.map(skill => (
                        <Text
                            fontSize="1.2rem"
                            fontWeight="500"
                            color="navy"
                            bg="green"
                            p={5}
                            py={2}
                            rounded="xl"
                            mr={5}
                        >
                            {skill}
                        </Text>
                    ))}
                </Flex>
                </>
            )
        if(link === 2)
            return (
                <>
                {!data.friends || data.friends.length === 0? 
                <Text
                    color="green"  
                    fontSize="1.3rem"
                    mb={5} 
                >
                    {`${data.name.split(' ')[0]} does not have any friends yet.`} 
                </Text>:
                <Flex
                    h="100%"
                    flexDirection="column"
                >
                <Text
                    color="green"  
                    fontSize="1.3rem"
                    mb={5} 
                >
                    {`${data.name.split(' ')[0]} is also friends with : `} 
                </Text>
                <Flex
                    h="100%"
                    overflowY="auto"
                    flexDirection="column"
                >
                    {data.friends.map(friend => (
                        <Flex
                            width="max-content"
                            bg="green"
                            p={3}
                            my={3}
                            alignItems="center"
                            rounded="lg"
                            cursor="pointer"
                            onClick={() => {
                               history.push(`/users/${data.id}`)
                            }}
                        >
                            <Avatar
                                src={friend.image.url}
                            />
                            <Text
                                fontSize="1.2rem"
                                color="navy"
                                fontWeight="500"
                                mx={8}
                            >
                                {friend.name}
                            </Text>
                        </Flex>
                    ))}
                </Flex>
                </Flex>
                }
                </>
            )
        if(link === 3)
            return (
                <>
                {!data.hackathons || data.hackathons.length === 0? 
                <Text
                    color="green"  
                    fontSize="1.3rem"
                    mb={5} 
                >
                    {`${data.name.split(' ')[0]} has not participated in any hackathons yet.`} 
                </Text>:
                <Flex
                    h="100%"
                    flexDirection="column"
                >
                <Text
                    color="green"  
                    fontSize="1.3rem"
                    mb={5} 
                >
                    {`${data.name.split(' ')[0]} is participating in these hackathons : `} 
                </Text>
                <Flex
                    h="100%"
                    overflowY="auto"
                    flexDirection="column"
                >
                    {data.hackathons.map(({hackathonId : hackathon}) => (
                        <Flex
                            width="max-content"
                            bg="green"
                            p={3}
                            my={3}
                            alignItems="center"
                            rounded="lg"
                            cursor="pointer"
                            onClick={() => {
                                history.push(`/hackathons/${data.id}`)
                            }}
                        >
                            <Image
                                w={10}
                                h={10}
                                src={hackathon.image.url}
                            />
                            <Text
                                fontSize="1.2rem"
                                color="navy"
                                fontWeight="500"
                                mx={8}
                            >
                                {hackathon.name}
                            </Text>
                        </Flex>
                    ))}
                </Flex>
                </Flex>}
                </>
            )
    }
}

export const useProfile = (data) => {

    const [links,setLinks] = useState([
        {
            name : 'Bio',
            active: true
        },
        {
            name : 'Skills',
            active: false
        },
        {
            name : 'Friends',
            active: false
        },
        {
            name : 'Hackathons',
            active: false
        }
    ])

    const[currSelection,setCurrSelection] = useState(0)
    
    const content = ContentManager(data)

    const updateSelection = (link) => {
        setCurrSelection(prev => {
            links[currSelection].active = false
            links[link].active = true
            setLinks(links)
            return link
        })
    }

    return[
        links,
        content(currSelection),
        updateSelection
    ]
}