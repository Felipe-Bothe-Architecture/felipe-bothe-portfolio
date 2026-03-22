import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'stone',
  colors: {
    stone: [
      '#FBF9F4', // Surface
      '#F5F4ED', // Secondary Surface
      '#EAE7DF',
      '#D6D1C2',
      '#BAB2A1',
      '#9D9280',
      '#7F7565',
      '#635E56', // Secondary/Body Text
      '#4A453E', // Primary Text/Brand
      '#2F2B27',
    ],
  },
  fontFamily: 'var(--font-manrope), sans-serif',
  headings: {
    fontFamily: 'var(--font-noto-serif), serif',
    fontWeight: '400',
    sizes: {
      h1: { fontSize: '4.5rem', lineHeight: '1.1' }, // 72px approx
    },
  },
  defaultRadius: 0,
  components: {
    Button: {
      defaultProps: {
        variant: 'filled',
        color: 'stone.7',
      },
    },
  },
});
