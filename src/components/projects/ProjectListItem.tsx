'use client';

import { Box, Title, Text, Group, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import { ProjectPreview } from '@/types/project';

interface ProjectListItemProps {
  project: ProjectPreview;
  index: number;
}

export function ProjectListItem({ project, index }: Readonly<ProjectListItemProps>) {
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
      aria-label={`View details for ${project.name}`}
    >
      <Group component="article" justify="space-between">
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
