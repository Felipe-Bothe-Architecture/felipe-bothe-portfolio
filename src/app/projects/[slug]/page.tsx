import { Container, Title, Text, Box, Grid, Stack, Image as MantineImage, Group, Divider, SimpleGrid } from '@mantine/core';
import { notFound } from 'next/navigation';

// Mock data fetcher
async function getProject(slug: string) {
  const projects: Record<string, any> = {
    "the-glass-house": {
      name: "The Glass House",
      location: "West Palm Beach, FL",
      year: "2023",
      description: "A transparent sanctuary that blurs the line between interior and exterior. The structure uses floor-to-ceiling high-performance glass and a slim steel frame to achieve maximum transparency.",
      mainImage: "https://images.unsplash.com/photo-1600585154340-be6191fe7e0b?q=80&w=2070&auto=format&fit=crop",
      details: [
        { label: "Area", value: "4,500 sq. ft." },
        { label: "Status", value: "Completed" },
        { label: "Client", value: "Private" },
      ],
      internalPictures: [
        "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop",
      ],
      blueprints: [
        "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2000&auto=format&fit=crop", // Placeholder for blueprint
      ],
      sketches: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop", // Placeholder for sketch
      ]
    },
    "brutalist-sanctuary": {
      name: "Brutalist Sanctuary",
      location: "Miami, FL",
      year: "2022",
      description: "Exploring the raw beauty of board-formed concrete. This residence emphasizes texture, light, and mass, creating a silent retreat from the vibrant city life.",
      mainImage: "https://images.unsplash.com/photo-1600607687940-c52af0a43538?q=80&w=2070&auto=format&fit=crop",
      details: [
        { label: "Area", value: "5,200 sq. ft." },
        { label: "Material", value: "Board-formed Concrete" },
      ],
      internalPictures: [
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
      ],
      // No blueprints or sketches for this one to test dynamic generation
    }
  };

  return projects[slug] || null;
}

export default async function ProjectSinglePage({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box h="80vh" pos="relative">
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

      {/* Content Section */}
      <Container size="xl" py={100}>
        <Grid gutter={80}>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="xl">
              <Title order={2} fz="3xl" c="stone.8">Architecture of Silence</Title>
              <Text fz="xl" lh={1.8} c="stone.7">
                {project.description}
              </Text>

              {/* Dynamic Internal Pictures */}
              {project.internalPictures && project.internalPictures.length > 0 && (
                <Stack gap="lg" mt="xl">
                  <Text tt="uppercase" lts="0.1rem" fz="xs" fw={700} c="stone.4">Internal Spaces</Text>
                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                    {project.internalPictures.map((pic: string, i: number) => (
                      <MantineImage key={i} src={pic} radius={0} h={400} fit="cover" />
                    ))}
                  </SimpleGrid>
                </Stack>
              )}

              {/* Dynamic Blueprints */}
              {project.blueprints && project.blueprints.length > 0 && (
                <Stack gap="lg" mt="xl">
                  <Text tt="uppercase" lts="0.1rem" fz="xs" fw={700} c="stone.4">Technical Schematics</Text>
                  {project.blueprints.map((blueprint: string, i: number) => (
                    <Box key={i} p="xl" bg="stone.1" style={{ border: '1px solid var(--mantine-color-stone-2)' }}>
                      <MantineImage src={blueprint} radius={0} style={{ filter: 'grayscale(100%) contrast(120%)' }} />
                    </Box>
                  ))}
                </Stack>
              )}

              {/* Dynamic Sketches */}
              {project.sketches && project.sketches.length > 0 && (
                <Stack gap="lg" mt="xl">
                  <Text tt="uppercase" lts="0.1rem" fz="xs" fw={700} c="stone.4">Early Concepts</Text>
                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                    {project.sketches.map((sketch: string, i: number) => (
                      <MantineImage key={i} src={sketch} radius={0} h={300} fit="contain" bg="white" p="md" />
                    ))}
                  </SimpleGrid>
                </Stack>
              )}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Box style={{ position: 'sticky', top: 120 }}>
              <Stack gap="xl">
                <Box>
                  <Text tt="uppercase" lts="0.1rem" fz="xs" fw={700} c="stone.4" mb="md">Project Details</Text>
                  <Divider mb="xl" color="stone.2" />
                  <Stack gap="lg">
                    <Group justify="space-between">
                      <Text c="stone.5" fz="sm">Year</Text>
                      <Text c="stone.8" fw={600}>{project.year}</Text>
                    </Group>
                    {project.details.map((detail: any, i: number) => (
                      <Group key={i} justify="space-between">
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
      </Container>
    </Box>
  );
}
