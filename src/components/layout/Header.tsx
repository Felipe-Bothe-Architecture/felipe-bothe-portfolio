'use client';

import { Group, Burger, Container, Drawer, Stack, Box, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import classes from '@/styles/components/layout/Header.module.css';

const links = [
  { link: '/about', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const desktopItems = links.map((link) => (
    <UnstyledButton
      key={link.label}
      component={Link}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </UnstyledButton>
  ));

  const mobileItems = links.map((link) => (
    <UnstyledButton
      key={link.label}
      component={Link}
      href={link.link}
      className={classes.mobileLink}
      onClick={close}
    >
      {link.label}
    </UnstyledButton>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" h="100%">
        <Group justify="center" h="100%" pos="relative">
          {/* Left Links */}
          <Group visibleFrom="sm" pos="absolute" left={0} gap="xl">
            {desktopItems.slice(0, 2)}
          </Group>

          {/* Logo Section */}
          <UnstyledButton component={Link} href="/" className={classes.logoSection}>
            <Text className={classes.logoText} fz="1.25rem" fw={700} lts="0.4rem" ff="var(--font-noto-serif)">
              FELIPE BOTHE
            </Text>
            <Group gap={8} w="100%" wrap="nowrap" align="center" mt={4}>
              <Box className={classes.line} flex={1} h={1} bg="stone.2" opacity={0.5} />
              <Text fz="0.55rem" fw={500} lts="0.3rem" tt="uppercase" c="stone.7">
                Architecture
              </Text>
              <Box className={classes.line} flex={1} h={1} bg="stone.2" opacity={0.5} />
            </Group>
          </UnstyledButton>

          {/* Right Links */}
          <Group visibleFrom="sm" pos="absolute" right={0} gap="xl">
            {desktopItems.slice(2)}
          </Group>

          {/* Mobile UI */}
          <Burger 
            opened={opened} 
            onClick={toggle} 
            hiddenFrom="sm" 
            size="sm" 
            className={classes.burger}
            color="var(--foreground)"
          />
        </Group>

        <Drawer
          opened={opened}
          onClose={close}
          size="100%"
          padding="xl"
          hiddenFrom="sm"
          zIndex={1000}
          styles={{
            content: { backgroundColor: 'var(--background)' },
            header: { backgroundColor: 'var(--background)' },
          }}
        >
          <Stack align="center" gap="xl" mt="xl">
            {mobileItems}
          </Stack>
        </Drawer>
      </Container>
    </header>
  );
}
