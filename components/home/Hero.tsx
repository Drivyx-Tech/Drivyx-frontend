'use client';

import React from 'react';
import {
  Flex,
  Text,
  Button,
  Box,
  Image,
  Highlight,
  Link,
} from '@chakra-ui/react';
import heroImage from 'public/images/hero-img.jpeg';

const Hero = () => {
  const handleLinkClick = (event: any, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box position={'relative'} height={'100vh'} overflow={'hidden'}>
      <Flex
        justify={'left'}
        align={'center'}
        direction="row"
        height={'100%'}
        w={'100%'}
        overflow={'hidden'}
      >
        <Flex position={'absolute'} top={0} left={0} w={'100%'}>
          <Flex
            position={'absolute'}
            w={'100%'}
            h={'100%'}
            bg={'black'}
            opacity={'0.5'}
            zIndex={2}
          ></Flex>
          <Image src={heroImage.src} alt={'drivyx'} />
        </Flex>

        <Flex
          maxWidth={'900px'}
          direction={'column'}
          gap={'8'}
          marginTop={'65px'}
          paddingX={20}
          zIndex={2}
        >
          <Text textStyle={'heroTitle'}>
            <Highlight
              query="Sustainability"
              styles={{ textColor: 'primary.600' }}
            >
              Steering the Future of Sustainability
            </Highlight>
          </Text>

          <Flex
            direction={'column'}
            align={'left'}
            alignItems={{ base: 'center', lg: 'flex-start' }}
            gap={4}
          >
            <Text textColor={'text.white'} textStyle={'context'} mb={'13px'}>
              Welcome to Drivyx ESG double sided Marketplace, where we focus on
              biodiversity, sustainability, circular economy, and regenerative
              design
            </Text>

            <Flex direction={'row'} gap={'4'}>
              <Link href={process.env.PROD_BASE_URL + 'marketplace'}>
                <Button
                  variant="outline"
                  textColor="secondary.default"
                  borderColor="secondary.default"
                  _hover={{ bg: 'secondary.600', color: 'white' }}
                >
                  Learn More
                </Button>
              </Link>

              <Link href={process.env.PROD_BASE_URL + 'signup'}>
                <Button
                  bg="primary.default"
                  variant="filled"
                  _hover={{ bg: 'primary.600' }}
                >
                  Sign Up
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
