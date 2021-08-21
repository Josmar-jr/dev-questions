import {
  Heading as ChakraHeading,
  HeadingProps,
  useStyleConfig,
} from '@chakra-ui/react';

export function Heading({ size, children, ...rest }: HeadingProps) {
  return (
    <ChakraHeading size={size} {...rest}>
      {children}
    </ChakraHeading>
  );
}
