'use client';

import { Box, Grid, Stack, Title, Text, Image as MantineImage } from '@mantine/core';
import { AboutData } from '@/services/aboutService';

interface AboutContentProps {
  data: AboutData;
}

export function AboutContent({ data }: Readonly<AboutContentProps>) {
  return (
    <Grid gutter={80} align="center">
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Stack gap="xl" component="article">
          <Box>
            <Text 
              tt="uppercase" 
              lts="0.2rem" 
              fz="xs" 
              fw={700} 
              c="stone.7" 
              mb="xs"
            >
              {data.profession}
            </Text>
            <Title 
              order={1} 
              fz="clamp(2.5rem, 5vw, 4rem)" 
              lh={1.1} 
              c="stone.8"
            >
              {data.displayName}
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
            &quot;{data.hookPhrase}&quot;
          </Title>

          <Stack gap="md">
            {data.biography.map((paragraph, index) => (
              <Text key={paragraph + index} fz="lg" c="stone.7" lh={1.6}>
                {paragraph}
              </Text>
            ))}
          </Stack>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6 }}>
        <Box pos="relative" component="figure">
          <MantineImage
            src={data.image}
            alt={data.displayName}
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
  );
}
