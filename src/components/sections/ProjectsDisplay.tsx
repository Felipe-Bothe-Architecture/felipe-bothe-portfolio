'use client';

import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Grid, Stack, Center, Box, Loader } from '@mantine/core';
import { ProjectPreview } from '@/types/project';
import { getAllProjects } from '@/services/projectService';
import { ProjectCard } from '../projects/ProjectCard';

export function ProjectsDisplay() {
  const [projects, setProjects] = useState<ProjectPreview[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Center py="10rem">
        <Loader color="stone.5" />
      </Center>
    );
  }

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <Box component="section" py="10rem" bg="stone.1" style={{ borderTop: '1px solid var(--mantine-color-stone-2)' }}>
      <Container size="xl">
        <Stack gap="xl" mb="5rem" component="header">
          <Text fz="xs" fw={700} tt="uppercase" lts="0.2rem" c="stone.6">
            Selected Works
          </Text>
          <Title fz="3.5rem" lh="1.1" fw={400} c="stone.8">
            Signature Luxury Work
          </Title>
        </Stack>

        <Grid gutter={40}>
          {visibleProjects.map((project) => (
            <Grid.Col key={project.slug} span={{ base: 12, sm: 6, lg: 4 }}>
              <ProjectCard project={project} />
            </Grid.Col>
          ))}
        </Grid>

        {!showAll && projects.length > 3 && (
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
