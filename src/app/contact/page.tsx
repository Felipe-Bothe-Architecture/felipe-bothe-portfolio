'use client';

import { Container, Title, Text, Box, Grid, Stack, TextInput, Textarea, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function ContactPage() {
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
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
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

  return (
    <Container size="xl" py={120}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="xl">
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
              <Box>
                <Text fw={700} tt="uppercase" lts="0.1rem" fz="xs" c="stone.8">Office</Text>
                <Text c="stone.7">West Palm Beach, Florida</Text>
              </Box>
              <Box>
                <Text fw={700} tt="uppercase" lts="0.1rem" fz="xs" c="stone.8">Email</Text>
                <Text c="stone.7">studio@felipebothe.com</Text>
              </Box>
            </Stack>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
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
                      styles={{
                        label: { textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.1rem', fontWeight: 700 },
                        input: { borderBottom: '1px solid var(--mantine-color-stone-3)', borderRadius: 0, padding: '8px 0' }
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                      label="Email"
                      placeholder="your@email.com"
                      required
                      {...form.getInputProps('email')}
                      variant="unstyled"
                      styles={{
                        label: { textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.1rem', fontWeight: 700 },
                        input: { borderBottom: '1px solid var(--mantine-color-stone-3)', borderRadius: 0, padding: '8px 0' }
                      }}
                    />
                  </Grid.Col>
                </Grid>

                <TextInput
                  label="Subject"
                  placeholder="How can we help?"
                  {...form.getInputProps('subject')}
                  variant="unstyled"
                  styles={{
                    label: { textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.1rem', fontWeight: 700 },
                    input: { borderBottom: '1px solid var(--mantine-color-stone-3)', borderRadius: 0, padding: '8px 0' }
                  }}
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
                  styles={{
                    label: { textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.1rem', fontWeight: 700 },
                    input: { borderBottom: '1px solid var(--mantine-color-stone-3)', borderRadius: 0, padding: '8px 0' }
                  }}
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
        </Grid.Col>
      </Grid>
    </Container>
  );
}
