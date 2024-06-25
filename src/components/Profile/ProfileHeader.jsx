import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const ProfileHeader = () => {
  return (
    <Flex gap={{base:4, sm:10}} py={10} direction={{base:'column', sm:'row'}}>
      <AvatarGroup
        size={{base:'xl', md: '2xl'}}
        justifySelf={'center'}
        alignSelf={'flex-start'}
        mx={'auto'}
      >
        <Avatar name='keocamxuc' src='/profilepic.png' alt=''keocamxuc logo/>
      </AvatarGroup>
      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex gap={4} direction={{base:'column', sm:'row'}}
          justifyContent={{base:'center', sm:'flex-start'}}
          alignItems={'center'}
          w={'full'}
          >
          <Text fontSize={{base:'sm', md:'md'}}>keocamxuc</Text>
          <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button bg='white' color={'black'} _hover={{bg:'whiteAlpha.800'}} size={{base:'xs', md:'sm'}}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex align={'center'} gap={{base:2, sm:4}}>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={2}>3</Text>
            Posts
          </Text>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={2}>99</Text>
            Followers
          </Text>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={2}>99</Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            keocamxuc
          </Text>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            keocamxuc
          </Text>
        </Flex>
        <Text fontSize={'sm'}>The best things in life, they are free 🤍</Text>
      </VStack>
      
    </Flex>
  )
}
