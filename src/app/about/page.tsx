'use client';

import { Container, Title, Text, Box, Grid, Stack, Image as MantineImage } from '@mantine/core';

export default function AboutPage() {
  // Mock data for the template
  const aboutData = {
    displayName: "Felipe Bothe",
    profession: "Architectural Designer",
    hookTitle: "Designing with Precision",
    hookPhrase: "Creating spaces that transcend time through structural honesty and monumental proportions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    biography: [
      "Based in West Palm Beach, Florida, our practice is dedicated to the pursuit of architectural excellence through a philosophy we call 'Atelier Minimal'.",
      "We believe that the most powerful architectural statements are made through restraint. By focusing on the essential qualities of space, light, and materiality, we create residences that are both monumental and deeply human.",
      "Every project is a collaboration between the landscape, the material, and the vision of our clients, resulting in custom residences that are as permanent as they are prestigious."
    ]
  };

  return (
    <Container size="xl" py={120}>
      <Grid gutter={80} align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="xl">
            <Box>
              <Text 
                tt="uppercase" 
                lts="0.2rem" 
                fz="xs" 
                fw={700} 
                c="stone.7" 
                mb="xs"
              >
                {aboutData.profession}
              </Text>
              <Title 
                order={1} 
                fz="clamp(2.5rem, 5vw, 4rem)" 
                lh={1.1} 
                c="stone.8"
              >
                {aboutData.displayName}
              </Title>
            </Box>

            <Title 
              order={2} 
              fz="xl" 
              fw={400} 
              c="stone.8" 
              ff="var(--font-manrope)" 
              style={{ fontStyle: 'italic' }}
            >
              &quot;{aboutData.hookPhrase}&quot;
            </Title>

            <Stack gap="md">
              {aboutData.biography.map((paragraph) => (
                <Text key={paragraph} fz="lg" c="stone.7" lh={1.6}>
                  {paragraph}
                </Text>
              ))}
            </Stack>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box pos="relative">
            <MantineImage
              src={aboutData.image}
              alt={aboutData.displayName}
              radius={0}
              h={600}
              fit="cover"
            />
            {/* Architectural accent line */}
            <Box 
              pos="absolute" 
              bottom={-20} 
              right={-20} 
              w="100%" 
              h="100%" 
              style={{ 
                border: '1px solid var(--mantine-color-stone-2)', 
                zIndex: -1 
              }} 
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
