import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"

export const SuggestedUser = ({name, followers, avatar}) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} />
        <VStack align={'start'} spacing={2}>
          <Text fontSize={12} fontWeight={'bold'}>{name}</Text>
          <Text fontSize={11} color={'grey.500'}>{followers} followers</Text>
        </VStack>
      </Flex>
      <Button 
        fontSize={13}
        bg={'transparent'}
        p={0}
        h={'max-content'}
        fontWeight={'medium'}
        color={'blue.400'} 
        _hover={{color:'whiteAlpha.800'}} 
        cursor={'pointer'}
        onClick={() => setIsFollowed(!isFollowed)}>
          {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Flex>
  )
}
