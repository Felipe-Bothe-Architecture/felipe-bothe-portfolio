'use client';

import { Box, Title, Text, Group, Image as MantineImage, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import { ProjectPreview } from '@/types/project';

interface ProjectCardProps {
  project: ProjectPreview;
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <UnstyledButton 
      component={Link} 
      href={`/projects/${project.slug}`} 
      style={{ width: '100%' }}
      aria-label={`View details for ${project.name}`}
    >
      <Box component="article" className="project-card-group">
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
