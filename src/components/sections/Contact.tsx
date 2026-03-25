'use client';

import { Container, Title, Text, Button, Grid, Stack, Group, Box } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import classes from '@/styles/components/sections/Contact.module.css';

export function Contact() {
  return (
    <section className={classes.contact}>
      <Container size="xl">
        <Grid gutter={80} align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="xl">
              <Text className={classes.label}>Contact</Text>
              <Title className={classes.title}>Let&apos;s Discuss Your Project</Title>
              <Text className={classes.text}>
                Whether it&apos;s a monumental structure or a minimal sanctuary, we&apos;re ready to bring your vision to life through structural honesty and architectural craft.
              </Text>
              
              <Group gap="xl" mt="xl">
                <Stack gap="xs">
                  <Text className={classes.infoLabel}>Phone</Text>
                  <Text className={classes.infoValue}>+1 (555) 000-0000</Text>
                </Stack>
                <Stack gap="xs">
                  <Text className={classes.infoLabel}>Email</Text>
                  <Text className={classes.infoValue}>hello@felipebothe.com</Text>
                </Stack>
              </Group>

              <Group gap="xl" mt="md">
                <Link href="#" className={classes.socialLink}>Instagram</Link>
                <Link href="#" className={classes.socialLink}>LinkedIn</Link>
                <Link href="#" className={classes.socialLink}>Behance</Link>
              </Group>

              <Button 
                variant="filled" 
                className={classes.button}
                size="lg"
                mt="2rem"
              >
                Get In Touch
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box className={classes.imageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                alt="Contact Felipe Bothe"
                fill
                className={classes.image}
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
