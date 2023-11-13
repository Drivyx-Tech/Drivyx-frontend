import React from 'react';
import { Button, Link } from '@chakra-ui/react';
interface PlatformButtonProps {
  url: string;
  title: string;
}
export default function PlatformButton({ url, title }: PlatformButtonProps) {
  return (
    <Link href={url} target={'_blank'}>
      <Button variant={'whiteSqBtn'}>{title}</Button>
    </Link>
  );
}
