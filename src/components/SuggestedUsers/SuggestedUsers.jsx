import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import { SuggestedHeader } from "./SuggestedHeader"
import { SuggestedUser } from "./SuggestedUser"

export const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={'bold'} _hover={{color:'gray.400'}} cursor={'pointer'}>
          See All
        </Text>
      </Flex>

      <SuggestedUser name='Hưng Lê' followers={100} avatar='/suggest1.jpeg'/>
      <SuggestedUser name='Minh Đặng' followers={99} avatar='/suggest2.jpeg'/>
      <SuggestedUser name='Nguyễn Hà' followers={98} avatar='/suggest3.jpeg'/>
      
      <Box fontSize={12} color={'gray.500'} mt={5}>
        © 2024 Built by{' '}
        <Link href="https://github.com/ngocmaruko" target="_blank" color={'blue.500'} fontSize={14}>
          Kẹo Cảm Xúc Maruko
        </Link>
        
      </Box>

    </VStack>
  )
}
