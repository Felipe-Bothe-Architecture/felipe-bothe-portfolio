'use client';

import { useState } from 'react';
import { Container, Title, Text, Button, Grid, Stack, Center, Box } from '@mantine/core';
import { ProjectCard } from '../common/ProjectCard';

const ALL_PROJECTS = [
  {
    id: '1',
    title: 'The Alabaster House',
    description: 'A residential project focusing on the interplay of light and white textures.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Stone Pavilion',
    description: 'An outdoor structure that celebrates natural stone materiality.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Urban Silence',
    description: 'A minimalist apartment designed as a sanctuary from the city.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Light & Void',
    description: 'An architectural study on negative space and natural illumination.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171bb3e29b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Geometric Retreat',
    description: 'Sharp lines and monumental proportions in a forest setting.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070&auto=format&fit=crop',
  },
];

export function ProjectsDisplay() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? ALL_PROJECTS : ALL_PROJECTS.slice(0, 3);

  return (
    <Box component="section" py="10rem" bg="stone.1" style={{ borderTop: '1px solid var(--mantine-color-stone-2)' }}>
      <Container size="xl">
        <Stack gap="xl" mb="5rem">
          <Text fz="xs" fw={700} tt="uppercase" lts="0.2rem" c="stone.6">
            Selected Works
          </Text>
          <Title fz="3.5rem" lh="1.1" fw={400} c="stone.8">
            Signature Luxury Work
          </Title>
        </Stack>

        <Grid gutter={40}>
          {visibleProjects.map((project) => (
            <Grid.Col key={project.id} span={{ base: 12, sm: 6, lg: 4 }}>
              <ProjectCard {...project} />
            </Grid.Col>
          ))}
        </Grid>

        {!showAll && (
          <Center mt="5rem">
            <Button 
              variant="outline" 
              color="stone.7"
              size="lg"
              h="3.5rem"
              px="2.5rem"
              onClick={() => setShowAll(true)}
            >
              View More Projects
            </Button>
          </Center>
        )}
      </Container>
    </Box>
  );
}
