'use client';

import { useState } from 'react';
import { Container, Title, Text, Box, Group, SegmentedControl, Grid, Stack, Image as MantineImage, UnstyledButton } from '@mantine/core';
import Link from 'next/link';

interface ProjectCard {
  name: string,
  slug: string,
  location: string,
  image: string,
  year: string
}

const projects = [
  {
    name: "The Glass House",
    slug: "the-glass-house",
    location: "West Palm Beach, FL",
    image: "https://plus.unsplash.com/premium_photo-1664301045332-b037631b8a56?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2023"
  },
  {
    name: "Brutalist Sanctuary",
    slug: "brutalist-sanctuary",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1642327949281-e4b09180b97f?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022"
  },
  {
    name: "Monolith Pavilion",
    slug: "monolith-pavilion",
    location: "Jupiter, FL",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
    year: "2024"
  },
  {
    name: "Oceanic Retreat",
    slug: "oceanic-retreat",
    location: "Palm Beach, FL",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    year: "2023"
  }
];

export default function ProjectsPage() {
  const [view, setView] = useState('grid');

  return (
    <Container size="xl" py={80}>
      <Stack gap={60}>
        <Group justify="space-between" align="flex-end">
          <Box>
            <Title order={1} fz="h1" c="stone.8" mb="xs">Selected Works</Title>
            <Text c="stone.7" lts="0.1rem" tt="uppercase" fz="xs" fw={700}>
              Architectural Excellence 2020 — 2024
            </Text>
          </Box>
          
          <SegmentedControl
            value={view}
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

function ProjectCard({ project }: Readonly<{ project: ProjectCard }>) {
  return (
    <UnstyledButton component={Link} href={`/projects/${project.slug}`} style={{ width: '100%' }}>
      <Box className="project-card-group">
        <Box pos="relative" mb="md" style={{ overflow: 'hidden' }}>
          <MantineImage
            src={project.image}
            alt={project.name}
            h={400}
            fit="cover"
            radius={0}
            style={{ transition: 'transform 0.6s ease' }}
            className="project-image"
          />
        </Box>
        <Group justify="space-between" align="flex-start">
          <Box>
            <Title order={3} fz="xl" c="stone.8">{project.name}</Title>
            <Text c="stone.7" fz="sm">{project.location}</Text>
          </Box>
          <Text c="stone.5" fz="sm" ff="var(--font-manrope)">{project.year}</Text>
        </Group>
      </Box>
      <style jsx global>{`
        .project-card-group:hover .project-image {
          transform: scale(1.05);
        }
      `}</style>
    </UnstyledButton>
  );
}

function ProjectListItem({ project, index }: Readonly<{ project: ProjectCard, index: number }>) {
  return (
    <UnstyledButton 
      component={Link} 
      href={`/projects/${project.slug}`} 
      style={{ 
        width: '100%',
        borderTop: index === 0 ? '1px solid var(--mantine-color-stone-2)' : 'none',
        borderBottom: '1px solid var(--mantine-color-stone-2)',
        padding: '32px 0',
        transition: 'background-color 0.3s ease'
      }}
      className="project-list-item"
    >
      <Group justify="space-between">
        <Group gap="xl">
          <Text c="stone.3" ff="var(--font-manrope)" fz="sm">0{index + 1}</Text>
          <Box>
            <Title order={3} fz="2xl" c="stone.8">{project.name}</Title>
            <Text c="stone.7" fz="sm" tt="uppercase" lts="0.1rem">{project.location}</Text>
          </Box>
        </Group>
        <Group gap={60} visibleFrom="md">
          <Text c="stone.7" fz="sm" tt="uppercase" lts="0.1rem">{project.year}</Text>
          <Text c="stone.8" fz="sm" fw={700} tt="uppercase" lts="0.1rem">View Details</Text>
        </Group>
      </Group>
      <style jsx global>{`
        .project-list-item:hover {
          background-color: var(--mantine-color-stone-1);
        }
      `}</style>
    </UnstyledButton>
  );
}
