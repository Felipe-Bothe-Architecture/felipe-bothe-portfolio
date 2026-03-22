import { Container, Title, Text, Button, Stack, Group } from '@mantine/core';

export default function Home() {
  return (
    <Container size="lg" py="10rem">
      <Stack gap="xl">
        <Title order={1}>Atelier Minimal</Title>
        <Text size="lg" maw={600} c="dimmed">
          A philosophy of structural honesty, monumental proportions, and a tactile relationship between light and material.
        </Text>
        <Group mt="md">
          <Button variant="filled" size="lg">
            View Projects
          </Button>
          <Button variant="outline" color="stone.8" size="lg">
            Our Philosophy
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}
