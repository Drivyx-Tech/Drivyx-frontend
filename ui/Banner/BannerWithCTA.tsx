'use client';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Text, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import SectionContainer from '../SectionContainer';

interface IProps {
  bgColor: string;
  text: string;
  highlightText?: string;
  btnText: string;
  btnURL?: string;
}

const BannerWithCTA = () => {
  return (
    <SectionContainer>
      <HStack mt={'75px'} py={16} px={8} gap={8}>
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
          <Text textStyle={'heading'} textColor={'text.darkest'}>
            Invest in Sustainability
          </Text>
        </VStack>

        <VStack flex={1} align="left" gap={4}>
          <Text>
            Discover and invest in projects promoting biodiversity,
            sustainability.circular economy, and regenerative design on the
            Drivyx ESG double sidedMarketplace.
          </Text>
          <HStack>
            <Button
              bg="secondary.default"
              variant="filled"
              textColor={'white'}
              _hover={{ bg: 'secondary.700' }}
            >
              Explore
            </Button>
            <Button
              variant="outline"
              textColor="primary.700"
              borderColor="primary.700"
              _hover={{ bg: 'primary.700', color: 'white' }}
            >
              Learn More
              <ChevronRightIcon />
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </SectionContainer>
  );
};

export default BannerWithCTA;
