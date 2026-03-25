'use client';

import { Group, Burger, Container, Drawer, Stack } from '@mantine/core';
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
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </Link>
  ));

  const mobileItems = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={close}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Group visibleFrom="sm" className={`${classes.links} ${classes.linksLeft}`}>
          {desktopItems.slice(0, 2)}
        </Group>

        <Link href="/" className={classes.logo}>
          FELIPE BOTHE
        </Link>

        <Group visibleFrom="sm" className={`${classes.links} ${classes.linksRight}`}>
          {desktopItems.slice(2)}
        </Group>

        <Burger 
          opened={opened} 
          onClick={toggle} 
          hiddenFrom="sm" 
          size="sm" 
          className={classes.burger}
          color="var(--foreground)"
        />

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
