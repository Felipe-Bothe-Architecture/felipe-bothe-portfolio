'use client';

import { Container, Title, Text, Button, Grid, Box, AspectRatio, Stack } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import classes from '@/styles/components/sections/HomeAbout.module.css';

export function HomeAbout() {
  return (
    <Box component="section" py="10rem" bg="stone.0">
      <Container size="xl">
        <Grid gutter={80} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <AspectRatio ratio={4/5} className={classes.imageWrapper}>
              <Box pos="relative" h="100%" w="100%">
                <Image 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                  alt="Architecture Studio Interior"
                  fill
                  className={classes.image}
                />
              </Box>
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl" maw={500}>
              <Box>
                <Text fz="xs" fw={700} tt="uppercase" lts="0.2rem" c="stone.6" mb="md">
                  About
                </Text>
                <Title order={2} fz="3rem" lh="1.2" fw={400} c="stone.8">
                  Bespoke Residential Architecture
                </Title>
              </Box>
              
              <Text fz="md" lh="1.8" c="stone.7">
                Designing refined, contemporary homes customized to our clients&#39; vision
                and style in South Florida.
              </Text>
              
              <Button 
                component={Link} 
                href="/about" 
                variant="outline" 
                color="stone.7"
                size="lg"
                w="fit-content"
                h="3.5rem"
                px="2.5rem"
              >
                Learn More
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
