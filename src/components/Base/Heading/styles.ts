export const HEADING_THEME_KEY = 'Heading';

export const headingStyles = {
  baseStyle: {
    fontFamily: 'Poppins',
  },
  sizes: {
    lg: {
      fontSize: '2.25rem',
    },
    md: {
      fontSize: '1.5rem',
    },
    sm: {
      fontSize: '1.5rem',
    },
    xs: {
      fontSize: '1.2rem',
    },
  },
  variants: {
    h1: {
      size: 'lg',
      color: 'white',
      fontWeight: 'bold',
    },
    h2: {
      size: 'md',
      color: 'dark',
      fontWeight: 'bold',
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'h1',
  },
};
