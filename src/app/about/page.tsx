'use client';

import { Container, Title, Text, Box, Grid, Stack, Image as MantineImage } from '@mantine/core';

export default function AboutPage() {
  // Mock data for the template
  const aboutData = {
    displayName: "Felipe Bothe",
    profession: "Architectural Designer",
    hookTitle: "Designing with Precision",
    hookPhrase: "Creating spaces that transcend time through structural honesty and monumental proportions.",
    image: "https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    biography: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",

      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",

      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
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
              {aboutData.biography.map((paragraph, index) => (
                <Text key={paragraph + index} fz="lg" c="stone.7" lh={1.6}>
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
