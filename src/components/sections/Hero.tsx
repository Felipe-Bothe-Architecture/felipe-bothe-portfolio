import { Container, Title, Text, Box } from '@mantine/core';
import classes from '@/styles/components/sections/Hero.module.css';

export function Hero() {
  return (
    <section className={classes.hero}>
      <Box className={classes.imageOverlay} />
      <Container size="xl" className={classes.container}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Architectural <br /> Monolith
          </Title>
          <Text className={classes.slogan}>
            Structural honesty. Monumental proportions. Tactile material.
          </Text>
        </div>
      </Container>
    </section>
  );
}
