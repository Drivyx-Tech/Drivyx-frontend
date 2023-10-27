import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const SimpleCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <Flex
      boxShadow="xl"
      bg={'white'}
      p={2}
      h={'auto'}
      w={{ base: '200px', lg: '260px' }}
      rounded={'20px'}
      direction={'column'}
      justifyContent={'center'}
      textAlign={'center'}
      alignItems={'center'}
      gap={{ base: 2, md: 4 }}
    >
      <Image w={'55px'} src={image} alt="Edit for You" />
      <Text fontSize={['14px', '16px']} fontWeight="600">
        {title}
      </Text>
    </Flex>
  );
};

export default SimpleCard;
