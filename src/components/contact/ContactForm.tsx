'use client';

import { Box, Grid, Stack, TextInput, Textarea, Button, Group } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';

export function ContactForm() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      website: '', // Honeypot field
    },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: isEmail('Invalid Email'),
      message: (value) => (value.length < 10 ? 'Message must have at least 10 characters' : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    // Honeypot check
    if (values.website) {
      console.warn('Bot detected via honeypot');
      return;
    }

    console.log('Form Submitted:', values);
    alert('Thank you for your message. We will get back to you shortly.');
    form.reset();
  };

  const inputStyles = {
    label: { textTransform: 'uppercase' as const, fontSize: '10px', letterSpacing: '0.1rem', fontWeight: 700 },
    input: { borderBottom: '1px solid var(--mantine-color-stone-3)', borderRadius: 0, padding: '8px 0' }
  };

  return (
    <Box p="xl" bg="stone.1" style={{ border: '1px solid var(--mantine-color-stone-2)' }}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="lg">
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Name"
                placeholder="Your name"
                required
                {...form.getInputProps('name')}
                variant="unstyled"
                styles={inputStyles}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                {...form.getInputProps('email')}
                variant="unstyled"
                styles={inputStyles}
              />
            </Grid.Col>
          </Grid>

          <TextInput
            label="Subject"
            placeholder="How can we help?"
            {...form.getInputProps('subject')}
            variant="unstyled"
            styles={inputStyles}
          />

          {/* Honeypot Field - Hidden from real users */}
          <TextInput
            style={{ display: 'none' }}
            autoComplete="off"
            {...form.getInputProps('website')}
          />

          <Textarea
            label="Message"
            placeholder="Tell us about your project..."
            required
            minRows={4}
            {...form.getInputProps('message')}
            variant="unstyled"
            styles={inputStyles}
          />

          <Group justify="flex-end" mt="xl">
            <Button 
              type="submit" 
              bg="stone.8" 
              size="lg" 
              px={40}
              radius={0}
              ff="var(--font-manrope)"
            >
              Send Message
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
