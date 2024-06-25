import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthForm = () => {
  const[isLogin, setIsLongin] = useState(true);
  const navigate = useNavigate();
  const[inputs, setInputs] = useState({
    email:'',
    password:'',
    confirmPassword:''
  });

  const handleAuth = () => {
    if(!inputs.email || !inputs.password || inputs.confirmPassword){
      alert('Please fill all the fields');
      return
    }
    navigate('/');
  }
  return (<>
    <Box border={'1px solid gray'} borderRadius={4} padding={5}>
      <VStack>
        <Image src='/logo.png' h={24}></Image>
        <Input　placeholder='Email' fontSize={14} type='email'     
                value={inputs.email}
                onChange={(e) => setInputs({...inputs,email:e.target.value})}
        />
        <Input　placeholder='Password'　fontSize={14}　type='password'
                value={inputs.password}
                onChange={(e) => setInputs({...inputs,password:e.target.value})}
        />

        {!isLogin ? (
          <Input　placeholder='Confirm Password'　fontSize={14}　type='password'　
                  value={inputs.confirmPassword}
                  onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}/>) 
          : null}

        <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14} onClick={handleAuth}>
          {isLogin ? 'Log in' : 'Sign Up'}
        </Button>

        {/*----- OR -----*/}
        <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
          <Box flex={2} h={'1px'} bg={'gray.400'}/>
          <Text mx={1} color={'white'}>OR</Text>
          <Box flex={2} h={'1px'} bg={'gray.400'}/>
        </Flex>

        <Flex justifyContent={'center'} alignItems={'center'} cursor={'pointer'}>
          <Image src='/google.png' w={5} alt={'Google logo'} />
          <Text mx={2} color={'blue.400'}>
            Log in with Google
          </Text>
        </Flex>

        <Box border={'1px solid grey'} borderRadius={4} padding={5}>
          <Flex alignItems={'center'} justifyContent={'center'}>
            <Box mx={2} fontSize={14} >
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            </Box>
            <Box cursor={'pointer'} color={'blue.500'}
                onClick={() => setIsLongin(!isLogin)}>
            {isLogin ? 'Sign up' : 'Log in'}
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
    </>
  )
}
