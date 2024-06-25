import { Container, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { FeedPosts } from '../../components/FeedPosts/FeedPosts';
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers';

export const HomePage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex justify="center" gap={15}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box flex={1} mr={20} display={{ base: 'none', lg: 'block' }} maxW={'300px'}>
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
}
