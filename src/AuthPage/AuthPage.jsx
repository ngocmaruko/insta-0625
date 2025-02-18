import { Box, Center, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { AuthForm } from '../components/AuthForm/AuthForm'

export const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={'center'} alignItems={'center'} px={4}> {/*this flex is for centering the Container*/}
      <Container maxW={"container.md"} padding={0}>
        {/* Left hand-side*/}
        <Flex justifyContent={'center'} alignItems={'center'} gap={'10'}>
          <Box display={{base:'none', md:'block'}}>
            <Image src='/auth.png' h={650} alt='Phone img'/>
          </Box>
          {/* Right hand-side*/}
          <VStack spacing={4} align={'stretch'}>
            <AuthForm />
            <Box textAlign={'center'}> Get the app.</Box>
            <Flex gap={5} justifyContent={'center'}>
              <Image src='/playstore.png' h={'10'} alt='Playstore logo'></Image>
              <Image src='/microsoft.png' h={'10'} alt='Microsoft logo'></Image>
            </Flex>
          </VStack>
        </Flex>


      </Container>
    </Flex>
  )
}
