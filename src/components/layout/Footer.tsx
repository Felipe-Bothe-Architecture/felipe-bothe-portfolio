import { Container, Text, Group, Box } from '@mantine/core';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" bg="stone.0" py="xl" style={{ borderTop: '1px solid var(--mantine-color-stone-2)' }}>
      <Container size="xl">
        <Group justify="space-between" align="center">
          <Text size="xs" fw={500} lts="0.1em" tt="uppercase">
            © {year} FELIPE BOTHE. ALL RIGHTS RESERVED.
          </Text>
          <Text size="xs" fw={500} lts="0.1em" tt="uppercase">
            WEBSITE BY SANTIAGO ORTIZ BETANCOURT
          </Text>
        </Group>
      </Container>
    </Box>
  );
}
