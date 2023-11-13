'use client';

import SectionContainer from '@/ui/SectionContainer';
import SimpleCard from '@/ui/Cards/SimpleCard';
import { HStack, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { CgComponents } from 'react-icons/cg';

export default function MarketFeatures() {
  return (
    <SectionContainer my={{ base: 6, lg: 10 }}>
      <HStack py={16} px={8} gap={8}>
        <VStack flex={1} align={'left'}>
          <Text textStyle={'heading'}>
            Discover a Sustainable Future with Our Advanced Marketplace
          </Text>
        </VStack>
        <VStack flex={1} align={'left'}>
          <Text textStyle={'smContext'}>
            At Drivyx ESG, we are committed to steering the future of
            sustainability.Our marketplace offers advanced search capabilities,
            project categories.and user reviews to help you find the perfect
            sustainable solutions for your needs. Join us today and be part of
            the movement towards a greener tomorrow.
          </Text>
        </VStack>
      </HStack>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        placeItems="center"
        spacing={10}
        mb={4}
      >
        <SimpleCard
          heading={'Find the Perfect Sustainable Solutions for Your Needs'}
          content={
            'Our marketplace provides a wide range of sustainable projects and products to choose from, ensuring that you can find the ideal solution that aligns with your values and requirements.'
          }
          icon={CgComponents}
          CTAbtn={'Explore >'}
        />
        <SimpleCard
          heading={'Connect with Like-Minded Individuals and Organizations'}
          content={
            'Join our marketplace and engage with a community of individuals and organizations who share your passion for sustainability. Together, we can create a better future.'
          }
          icon={CgComponents}
          CTAbtn={'Join >'}
        />
        <SimpleCard
          heading={'Make a Positive Impact with Every Purchase'}
          content={
            'With every purchase made through our marketplace,you are contributing to a more sustainable future. Start shopping today and be part of the change.'
          }
          icon={CgComponents}
          CTAbtn={'Shop >'}
        />
      </SimpleGrid>
    </SectionContainer>
  );
}
