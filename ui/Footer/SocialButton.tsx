import { ReactNode } from 'react';
import { Button, VisuallyHidden } from '@chakra-ui/react';

const SocialButton = ({
  children,
  label,
  href,
  me,
}: {
  children: ReactNode;
  label: string;
  href: string;
  me: string;
}) => {
  return (
    <Button
      rounded={'full'}
      w={{ base: '18px', md: '30px' }}
      h={{ base: '18px', md: '30px' }}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={'_blank'}
      me={me}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'transform 0.3s ease'}
      _hover={{
        transform: 'scale(1.1)',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export default SocialButton;
