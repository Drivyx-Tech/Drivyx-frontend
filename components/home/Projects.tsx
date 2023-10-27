'use client';

import { VStack, Text, Box, Button, Flex } from '@chakra-ui/react';
import SectionContainer from '@/ui/SectionContainer';
import React from 'react';
import biodiversity from 'public/images/biodiversity-project.jpeg';
import circular from 'public/images/circular-economy-project.jpeg';
import ProjectSection from '../../ui/FeatureSection';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

export default function Projects() {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <VStack flex={1} gap={24}>
        <VStack align={'center'} w={'100%'}>
          <Text
            textTransform={'uppercase'}
            color={'secondary.700'}
            fontWeight={300}
            fontSize={'lg'}
            textAlign={'center'}
            w={'100%'}
            flex={1}
          >
            Featured
          </Text>

          <Flex pos={'relative'} w={'100%'}>
            <Button
              flex={1}
              variant={'link'}
              colorScheme={'blue'}
              size={'md'}
              justifyContent={'right'}
              pos={'absolute'}
              right={0}
              bottom={2}
              rightIcon={<MdOutlineKeyboardDoubleArrowRight />}
            >
              See All
            </Button>
            <Box
              bgGradient="linear(to-r, #22c1c3, #fdbb2d)"
              h={0.5}
              w={'100%'}
              opacity={0.5}
            />
          </Flex>

          <Text width={800} textStyle={'heading'} textAlign={'center'} pt={8}>
            Driving Sustainability Forward
          </Text>

          <Text textStyle={'Context'}>
            Explore our diverse portfolio of sustainable projects
          </Text>
        </VStack>

        <ProjectSection
          imgSrc={biodiversity.src}
          title={'Biodiversity'}
          content={
            'Creating a thriving ecosystem through sustainable practices'
          }
        />
        <ProjectSection
          imgSrc={circular.src}
          title={'Circular Economy'}
          content={'Transfer waste into valuable resources'}
          exchange={true}
        />
      </VStack>
    </SectionContainer>
  );
}
