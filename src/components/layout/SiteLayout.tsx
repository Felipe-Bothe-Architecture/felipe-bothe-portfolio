'use client';

import { AppShell, Box } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';
import classes from '@/styles/components/layout/SiteLayout.module.css';

export function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppShell
      header={{ height: 80 }}
      padding="0"
      className={classes.shell}
    >
      <AppShell.Header className={classes.headerContainer}>
        <Header />
      </AppShell.Header>

      <AppShell.Main className={classes.main}>
        <Box className={classes.content}>
          {children}
        </Box>
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
