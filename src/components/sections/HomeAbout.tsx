'use client';

import { Container, Title, Text, Button, Grid, Box } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import classes from '@/styles/components/sections/HomeAbout.module.css';

export function HomeAbout() {
  return (
    <section className={classes.about}>
      <Container size="xl">
        <Grid gutter={80} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box className={classes.imageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                alt="Architecture Studio"
                fill
                className={classes.image}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={classes.content}>
              <Text className={classes.label}>About the Atelier</Text>
              <Title order={2} className={classes.title}>
                The craft of silence and structural honesty.
              </Title>
              <Text className={classes.text}>
                We believe in permanent structures that speak through their material and relationship with light. Every project is an exploration of essential form and monumental scale.
              </Text>
              <Button 
                component={Link} 
                href="/about" 
                variant="outline" 
                className={classes.button}
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
