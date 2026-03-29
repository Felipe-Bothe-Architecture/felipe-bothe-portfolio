'use client';

import { Container, Title, Text, Button, Grid, Stack, Group, Box, AspectRatio } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import classes from '@/styles/components/sections/Contact.module.css';

export function Contact() {
  return (
    <Box component="section" py="10rem" bg="stone.0" style={{ borderTop: '1px solid var(--mantine-color-stone-2)' }}>
      <Container size="xl">
        <Grid gutter={80} align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="xl" maw={500}>
              <Box>
                <Text fz="xs" fw={700} tt="uppercase" lts="0.2rem" c="stone.6" mb="md">
                  Contact
                </Text>
                <Title order={2} fz="3.5rem" lh="1.1" fw={400} c="stone.8">
                  Let&apos;s Discuss Your Project
                </Title>
              </Box>
              
              <Text fz="lg" lh="1.8" c="stone.7">
                Get in touch to begin the conversation about your custom residency.
              </Text>
              
              <Group gap={64} mt="xl">
                <Stack gap="xs">
                  <Text fz="xs" fw={700} tt="uppercase" lts="0.1rem" opacity={0.6}>Phone</Text>
                  <Text fz="md" c="stone.8">+1 (555) 000-0000</Text>
                </Stack>
                <Stack gap="xs">
                  <Text fz="xs" fw={700} tt="uppercase" lts="0.1rem" opacity={0.6}>Email</Text>
                  <Text fz="md" c="stone.8">example@felipebothe.com</Text>
                </Stack>
              </Group>

              <Group gap="xl" mt="md">
                {['Instagram', 'LinkedIn'].map((platform) => (
                  <Text 
                    key={platform}
                    component={Link} 
                    href="#" 
                    fz="xs" 
                    fw={600} 
                    tt="uppercase" 
                    lts="0.1rem" 
                    c="stone.7"
                    className={classes.socialLink}
                  >
                    {platform}
                  </Text>
                ))}
              </Group>

              <Button 
                variant="filled" 
                color="stone.8"
                size="lg"
                mt="2rem"
                h="3.5rem"
                px="2.5rem"
                w="fit-content"
              >
                Get In Touch
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <AspectRatio ratio={1} className={classes.imageWrapper}>
              <Box pos="relative" h="100%" w="100%">
                <Image 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                  alt="Contact Felipe Bothe"
                  fill
                  className={classes.image}
                />
              </Box>
            </AspectRatio>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
