import { Button, Flex, Center, Text, Highlight } from '@chakra-ui/react';
import React from 'react';
import SectionContainer from './SectionContainer';

interface IProps {
  bgColor: string;
  text: string;
  highlightText?: string;
  btnText: string;
  btnURL?: string;
}

const Banner = ({ bgColor, text, highlightText, btnText, btnURL }: IProps) => {
  return (
    <Center bgColor={bgColor}>
      <SectionContainer my={0}>
        <Flex textAlign={'center'} direction={'column'} gap={10}>
          <Text textStyle={'smheading'} color={'brandBlue'}>
            <Highlight
              query={highlightText as string}
              styles={{ color: 'brandRed' }}
            >
              {text}
            </Highlight>
          </Text>
          <Center>
            <Button
              as={'a'}
              href={btnURL}
              target={'_blank'}
              variant={'filledSqBtn'}
            >
              {btnText}
            </Button>
          </Center>
        </Flex>
      </SectionContainer>
    </Center>
  );
};

export default Banner;
