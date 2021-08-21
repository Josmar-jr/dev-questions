import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

export function LinkNext({ children, href }) {
  return (
    <Link passHref href={href}>
      <ChakraLink color="#0aa3be">{children}</ChakraLink>
    </Link>
  );
}
