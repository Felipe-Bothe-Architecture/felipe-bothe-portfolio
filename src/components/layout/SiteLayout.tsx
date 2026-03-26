'use client';

import { AppShell, Box } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';

export function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppShell
      header={{ height: 80 }}
      padding={0}
    >
      <AppShell.Header withBorder={false} bg="transparent">
        <Header />
      </AppShell.Header>

      <AppShell.Main bg="stone.0" pt={80} display="flex" style={{ flexDirection: 'column', minHeight: '100vh' }}>
        <Box component="article" flex={1}>
          {children}
        </Box>
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
