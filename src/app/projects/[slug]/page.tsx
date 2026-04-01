'use client';

import React, { useState, useEffect } from 'react';
import { Container, Box, Loader, Center } from '@mantine/core';
import { notFound } from 'next/navigation';
import { Project } from '@/types/project';
import { getProjectBySlug } from '@/services/projectService';
import { ProjectHero } from '@/components/projects/ProjectHero';
import { ProjectDetails } from '@/components/projects/ProjectDetails';

export default function ProjectSinglePage({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = React.use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const data = await getProjectBySlug(slug);
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <Center h="100vh">
        <Loader color="stone.5" />
      </Center>
    );
  }

  if (!project) {
    notFound();
    return null;
  }

  return (
    <Box component="article">
      <ProjectHero project={project} />
      <Container size="xl">
        <ProjectDetails project={project} />
      </Container>
    </Box>
  );
}
