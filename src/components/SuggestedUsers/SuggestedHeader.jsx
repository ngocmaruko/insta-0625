import { Avatar, Flex, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink} from 'react-router-dom'

export const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} gap={4}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar name="As a programmer" size={'lg'} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={'bold'}>
          keocamxucmaruko
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={'/auth'}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.400'}
        _hover={{textDecoration: 'none'}}
        cursor={'pointer'}
      >Log out</Link>
    </Flex>
  )
}
