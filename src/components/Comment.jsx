import { Avatar, Flex, Text, VStack } from "@chakra-ui/react"

export const Comment = ({createAt, username, profilePic, text}) => {
  return (
    <Flex gap={4}>
      <Avatar src={profilePic} name={username} size={'sm'} />
      <Flex flexDir={'column'} justifyContent={'start'}>
        <Flex gap={2} alignItems={'center'}>
          <Text fontWeight={'bold'} fontSize={12}>
            {username}
          </Text>
          <Text fontSize={14}>
            {text}
          </Text>
        </Flex>
        <Text fontSize={12} color={'gray'}>
          {createAt}
        </Text>
      </Flex>
    </Flex>

  )
}
