'use client';

import { useState, useEffect } from 'react';
import { Container, Title, Text, Box, Group, SegmentedControl, Grid, Stack, Loader, Center } from '@mantine/core';
import { ProjectPreview } from '@/types/project';
import { getAllProjects } from '@/services/projectService';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectListItem } from '@/components/projects/ProjectListItem';

export default function ProjectsPage() {
  const [view, setView] = useState<string | string[]>('grid');
  const [projects, setProjects] = useState<ProjectPreview[]>([]);
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
      <Center h="60vh">
        <Loader color="stone.5" />
      </Center>
    );
  }

  return (
    <Container size="xl" py={80} component="section">
      <Stack gap={60}>
        <Group justify="space-between" align="flex-end" component="header">
          <Box>
            <Title order={1} fz="h1" c="stone.8" mb="xs">Selected Works</Title>
            <Text c="stone.7" lts="0.1rem" tt="uppercase" fz="xs" fw={700}>
              Architectural Excellence 2020 — 2024
            </Text>
          </Box>
          
          <SegmentedControl
            value={view as string}
            onChange={setView}
            data={[
              { label: 'GRID', value: 'grid' },
              { label: 'LIST', value: 'list' },
            ]}
            color="stone.8"
            radius={0}
            bg="stone.0"
            styles={{
              root: { border: '1px solid var(--mantine-color-stone-2)' },
              indicator: { backgroundColor: 'var(--mantine-color-stone-8)' },
              label: { 
                padding: '8px 16px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.1rem'
              }
            }}
          />
        </Group>

        {view === 'grid' ? (
          <Grid gutter={40}>
            {projects.map((project) => (
              <Grid.Col key={project.slug} span={{ base: 12, sm: 6 }}>
                <ProjectCard project={project} />
              </Grid.Col>
            ))}
          </Grid>
        ) : (
          <Stack gap={0}>
            {projects.map((project, index) => (
              <ProjectListItem key={project.slug} project={project} index={index} />
            ))}
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
