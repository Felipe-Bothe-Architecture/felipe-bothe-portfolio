import { Container, Text } from '@mantine/core';
import classes from '@/styles/components/layout/Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        <Text className={classes.text}>
          © {year} FELIPE BOTHE. ALL RIGHTS RESERVED.
        </Text>
        <Text className={classes.text}>
          WEBSITE BY SANTIAGO ORTIZ BETANCOURT
        </Text>
      </Container>
    </footer>
  );
}
