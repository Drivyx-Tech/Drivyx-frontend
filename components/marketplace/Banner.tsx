'use client';
import { Button, Text, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import heroRightImg from 'public/images/placeholder.jpg';

interface IProps {
  bgColor: string;
  text: string;
  highlightText?: string;
  btnText: string;
  btnURL?: string;
}

const Banner = () => {
  return (
    <VStack
      backgroundImage={heroRightImg.src}
      backgroundRepeat={'cover'}
      mt={'75px'}
      py={16}
      px={8}
      bgColor={'primary.200'}
      gap={8}
    >
      <VStack flex={2} align={'left'}>
        <Text textStyle={'heading'} textColor={'text.darkest'}>
          Discover Sustainable Projects on Drivyx
        </Text>
        <Text>
          Join our community and explore a wide range of sustainable projects on
          Drivyx ESG double sided Marketplace.
        </Text>
        <HStack gap={4}>
          <Button as={'a'} href={''} target={'_blank'} variant={'filledSqBtn'}>
            Explore
          </Button>
          <Button as={'a'} href={''} target={'_blank'} variant={'filledSqBtn'}>
            Learn More
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Banner;
