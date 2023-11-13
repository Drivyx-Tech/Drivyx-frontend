'use client';
import { Button, Text, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

interface IProps {
  bgColor: string;
  text: string;
  highlightText?: string;
  btnText: string;
  btnURL?: string;
}

const BannerWithBg = () => {
  return (
    <HStack mt={'75px'} py={16} px={8} bgColor={'primary.200'} gap={8}>
      <VStack flex={1} align={'left'}>
        <Text
          textTransform={'uppercase'}
          color={'primary.700'}
          fontWeight={600}
          fontSize={'md'}
          py={1}
          px={2}
          alignSelf={'flex-start'}
          rounded={'md'}
        >
          Sustainable
        </Text>
        <Text textStyle={'heroTitle'} textColor={'text.darkest'}>
          Invest in Sustainability
        </Text>
      </VStack>

      <VStack flex={1} align="left">
        <Text>
          Discover and invest in projects promoting biodiversity,
          sustainability.circular economy, and regenerative design on the Drivyx
          ESG double sidedMarketplace.
        </Text>
        <HStack>
          <Button as={'a'} href={''} target={'_blank'} variant={'filledSqBtn'}>
            Explore
          </Button>
          <Button as={'a'} href={''} target={'_blank'} variant={'filledSqBtn'}>
            Learn More
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default BannerWithBg;
