import { useQuery } from 'react-query'
import { Hackathon } from '../components/molecules/Hackathon'
import {Flex} from '@chakra-ui/react'
import { SkeletonHackathon } from '../components/molecules/SkeletonHackathon'
 
export const Hackathons = () => {

   const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('http://localhost:4000/api/v1/hackathons').then(res =>
       res.json()
     )
   )

   if (error) return 'An error has occurred: ' + error.message

    return (
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        bg="navy"
        px={10}
        py={5}
        w="100%"
      >
        {isLoading? 
          <SkeletonHackathon/>: 
          data.data.map(hackathon => <Hackathon data={hackathon}/>)
       }
     </Flex>
   )
}