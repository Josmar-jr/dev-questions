export const BUTTON_THEME_KEY = 'Button';

export const buttonStyles = {
  baseStyle: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  sizes: {
    sm: {
      fontSize: '1rem',
      h: '50px',
    },
    md: {
      fontSize: '1rem',
      h: '50px',
    },
    lg: {
      fontSize: '1.2rem',
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'green.500',
      bgColor: 'transparent',
      color: 'green.500',
      _hover: {
        filter: 'brightness(0.9)',
        bgColor: 'green.500',
      },
    },
    solid: {
      _disabled: {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
      border: '0',
      bgColor: 'blue.200',
      color: 'white',
      transition: 'filter 0.2s',
      _hover: {
        filter: 'brightness(0.9)',
        bgColor: 'blue.200',
      },
      _focus: {
        filter: 'brightness(0.9)',
        bgColor: 'blue.200',
        boxShadow: '2px 4px 5px rgba(66, 153, 225, 0.6)',
      },
      _active: {
        bgColor: 'blue.200',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};
