'use client';

import { Container, Grid } from '@mantine/core';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <Container size="xl" py={120} component="section">
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <ContactInfo />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <ContactForm />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
