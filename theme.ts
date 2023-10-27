import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      default: '#B1E949',
      50: '#F9FFE6',
      100: '#F0FFD1',
      200: '#E6FFB8',
      300: '#DFFF9E',
      400: '#D4FF85',
      500: '#B1E949',
      600: '#8FCB00',
      700: '#6CA300',
      800: '#4A7A00',
      900: '#2A5200',
    },
    secondary: {
      default: '#004A9F',
      50: '#E6F3FF',
      100: '#E6F3FF',
      200: '#99C9FF',
      300: '#5CA8FF',
      400: '#1F87FF',
      500: '#005FCC',
      600: '#004A9F',
      700: '#003166',
      800: '#001D3D',
      900: '#001329',
    },
    text: {
      white: '#FFFFFF',
      darkest: '#001D3D',
    },
  },
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  textStyles: {
    heroTitle: {
      fontFamily: 'body',
      fontSize: ['38px', '42px', '55px', '65px'],
      fontWeight: '900',
      lineHeight: '125%',
      textColor: 'text.white',
    },
    heading: {
      fontFamily: 'body',
      fontSize: ['24px', '38px', '46px'],
      fontWeight: '900',
      lineHeight: '155%',
      textColor: 'text.darkest',
    },
    subheading: {
      fontFamily: 'body',
      fontSize: ['23px'],
      fontWeight: '900',
      lineHeight: '155%',
      textColor: 'text.darkest',
    },
    // for body context
    context: {
      fontSize: ['14px', '18px', '23px'],
      fontWeight: '400',
      lineHeight: '175%',
      textColor: 'text.darkest',
    },
    // for FAQ context
    smContext: {
      fontSize: ['14px', '18px', '20px'],
      lineHeight: '135%',
      textColor: 'text.darkest',
    },
    // for the context in Divider Section (suitable for lined title and its text)
    smBold: {
      fontSize: ['17px'],
      fontWeight: '600',
      lineHeight: { base: '175%', sm: '135%' },
      textColor: 'text.darkest',
    },
  },
});

export default theme;
