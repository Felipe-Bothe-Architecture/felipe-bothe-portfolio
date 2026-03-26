import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'stone',
  colors: {
    stone: [
      '#FBF9F4', // 0: Alabaster (Surface)
      '#F5F4ED', // 1: Secondary Surface
      '#EAE7DF', // 2: Light Border
      '#D6D1C2', // 3
      '#BAB2A1', // 4
      '#9D9280', // 5
      '#7F7565', // 6
      '#635E56', // 7: Charcoal (Secondary Text)
      '#4A453E', // 8: Charcoal Umber (Primary Text)
      '#1C1917', // 9: Stone-950 (Dark Mode Surface)
    ],
  },
  fontFamily: 'var(--font-manrope), sans-serif',
  headings: {
    fontFamily: 'var(--font-noto-serif), serif',
    sizes: {
      h1: { fontSize: rem(72), lineHeight: '1.1', fontWeight: '400' },
      h2: { fontSize: rem(48), lineHeight: '1.2', fontWeight: '400' },
      h3: { fontSize: rem(32), lineHeight: '1.2', fontWeight: '400' },
    },
  },
  spacing: {
    xs: rem(10),
    sm: rem(16),
    md: rem(24),
    lg: rem(40),
    xl: rem(64),
  },
  defaultRadius: 0,
  components: {
    Container: {
      defaultProps: {
        size: 'xl',
      },
    },
    Button: {
      defaultProps: {
        radius: 0,
        fw: 600,
        lts: '0.15em',
      },
      styles: {
        root: {
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
        },
      },
    },
    Text: {
      defaultProps: {
        c: 'stone.7',
      },
    },
    Title: {
      defaultProps: {
        c: 'stone.8',
      },
    },
  },
});
