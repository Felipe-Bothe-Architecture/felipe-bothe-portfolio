'use client';

import { Box, Stack, Text, Title } from '@mantine/core';

export function ContactInfo() {
  return (
    <Stack gap="xl" component="section">
      <Box>
        <Text tt="uppercase" lts="0.2rem" fz="xs" fw={700} c="stone.4" mb="xs">Get in Touch</Text>
        <Title order={1} fz="clamp(2.5rem, 5vw, 4rem)" lh={1.1} c="stone.8">
          Let&apos;s discuss <br /> your vision.
        </Title>
      </Box>
      
      <Text fz="lg" c="stone.7" lh={1.6}>
        Whether you are looking to build a new custom residence or seeking architectural consultation, we are here to help you navigate the process.
      </Text>

      <Stack gap="md">
        <Box component="address" style={{ fontStyle: 'normal' }}>
          <Text fw={700} tt="uppercase" lts="0.1rem" fz="xs" c="stone.8">Office</Text>
          <Text c="stone.7">West Palm Beach, Florida</Text>
        </Box>
        <Box>
          <Text fw={700} tt="uppercase" lts="0.1rem" fz="xs" c="stone.8">Email</Text>
          <Text c="stone.7">studio@felipebothe.com</Text>
        </Box>
      </Stack>
    </Stack>
  );
}
