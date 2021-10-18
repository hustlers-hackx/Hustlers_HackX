import { Hackathon } from '../components/molecules/Hackathon'
import {Flex, Text} from '@chakra-ui/react'
import { SkeletonHackathon } from '../components/molecules/SkeletonHackathon'
import { checkHackathonStatus, getHackathons} from '../redux/helpers/hackathonHelpers'
import { useEffect, useState } from 'react'

export const Hackathons = (props) => {

  const[data,setData] = useState([])
  const[error,setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      let response = await getHackathons()
      if(!response.err){
        setData(response.data)
      }else{
        setError(true)
      }
    }
    fetchData()
  },[])

    return (
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        bg="navy"
        px={10}
        py={5}
        w="100%"
      >
        {error? 
        <Text
          my={20}
          fontSize="2rem"
          color="green"
        >
          An Error Occurred.
        </Text> :
        data.length === 0? 
          <SkeletonHackathon/> : 
          data.map(hackathon => <Hackathon 
            data={hackathon}
            participating={checkHackathonStatus(hackathon._id)}
          />)
        }
     </Flex>
   )
}