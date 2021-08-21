import {
  Button as ButtonChakra,
  ButtonProps as ButtonChakraProps,
  useStyleConfig,
} from '@chakra-ui/react';
import { ButtonHTMLAttributes } from 'react';
import { BUTTON_THEME_KEY } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonChakraProps;

export function Button({ size, variant, onClick, ...rest }: ButtonProps) {
  const styles = useStyleConfig(BUTTON_THEME_KEY, {
    size,
    variant,
  });
  return <ButtonChakra onClick={onClick} {...rest} st={styles} />;
}
