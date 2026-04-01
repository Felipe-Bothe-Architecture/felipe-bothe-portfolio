'use client';

import { Box, Stack, Text, Divider, Group, Title, Grid, SimpleGrid, Image as MantineImage } from '@mantine/core';
import { Project } from '@/types/project';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: Readonly<ProjectDetailsProps>) {
  return (
    <Box component="section" py={100}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap="xl" component="article">
            <Title order={2} fz="3xl" c="stone.8">Architecture of Silence</Title>
            <Text fz="xl" lh={1.8} c="stone.7">
              {project.description}
            </Text>

            {/* Dynamic Internal Pictures */}
            {project.internalPictures && project.internalPictures.length > 0 && (
              <Stack gap="lg" mt="xl" component="section">
                <Text tt="uppercase" lts="0.1rem" fz="xs" fw={700} c="stone.4">Internal Spaces</Text>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                  {project.internalPictures.map((pic, i) => (
                    <MantineImage key={pic+i} src={pic} radius={0} h={400} fit="cover" alt={`Internal space ${i + 1} of ${project.name}`} />
                  ))}
                </SimpleGrid>
              </Stack>
            )}

            {/* Dynamic Blueprints */}
            {project.blueprints && project.blueprints.length > 0 && (
              <Stack gap="lg" mt="xl" component="section">
                <Text tt="uppercase" lts="0.1rem" fz="xs" fw={700} c="stone.4">Technical Schematics</Text>
                {project.blueprints.map((blueprint, i) => (
                  <Box key={blueprint+i} p="xl" bg="stone.1" style={{ border: '1px solid var(--mantine-color-stone-2)' }}>
                    <MantineImage src={blueprint} radius={0} style={{ filter: 'grayscale(100%) contrast(120%)' }} alt={`Blueprint ${i + 1} of ${project.name}`} />
                  </Box>
                ))}
              </Stack>
            )}

            {/* Dynamic Sketches */}
            {project.sketches && project.sketches.length > 0 && (
              <Stack gap="lg" mt="xl" component="section">
                <Text tt="uppercase" lts="0.1rem" fz="xs" fw={700} c="stone.4">Early Concepts</Text>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                  {project.sketches.map((sketch, i) => (
                    <MantineImage key={sketch+i} src={sketch} radius={0} h={300} fit="contain" bg="white" p="md" alt={`Sketch ${i + 1} of ${project.name}`} />
                  ))}
                </SimpleGrid>
              </Stack>
            )}
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Box component="aside" style={{ position: 'sticky', top: 120 }}>
            <Stack gap="xl">
              <Box>
                <Text tt="uppercase" lts="0.1rem" fz="xs" fw={700} c="stone.4" mb="md">Project Details</Text>
                <Divider mb="xl" color="stone.2" />
                <Stack gap="lg">
                  <Group justify="space-between">
                    <Text c="stone.5" fz="sm">Year</Text>
                    <Text c="stone.8" fw={600}>{project.year}</Text>
                  </Group>
                  {project.details.map((detail, i) => (
                    <Group key={detail.label+i} justify="space-between">
                      <Text c="stone.5" fz="sm">{detail.label}</Text>
                      <Text c="stone.8" fw={600}>{detail.value}</Text>
                    </Group>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
