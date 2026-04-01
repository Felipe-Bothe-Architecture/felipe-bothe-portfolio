'use client';

import { Box, Container, Text, Title, Image as MantineImage } from '@mantine/core';
import { Project } from '@/types/project';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: Readonly<ProjectHeroProps>) {
  return (
    <Box component="section" h="80vh" pos="relative">
      <MantineImage
        src={project.mainImage}
        alt={project.name}
        h="100%"
        fit="cover"
      />
      <Box 
        pos="absolute" 
        bottom={0} 
        left={0} 
        w="100%" 
        p="xl" 
        style={{ 
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
          color: 'white'
        }}
      >
        <Container size="xl">
          <Text tt="uppercase" lts="0.2rem" fz="sm" fw={700} opacity={0.8}>{project.location}</Text>
          <Title order={1} fz="clamp(3rem, 8vw, 6rem)" lh={1}>{project.name}</Title>
        </Container>
      </Box>
    </Box>
  );
}
