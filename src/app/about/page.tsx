'use client';

import { useState, useEffect } from 'react';
import { Container, Loader, Center } from '@mantine/core';
import { getAboutData, AboutData } from '@/services/aboutService';
import { AboutContent } from '@/components/about/AboutContent';

export default function AboutPage() {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const aboutData = await getAboutData();
        setData(aboutData);
      } catch (error) {
        console.error('Failed to fetch about data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <Center h="60vh">
        <Loader color="stone.5" />
      </Center>
    );
  }

  if (!data) return null;

  return (
    <Container size="xl" py={120} component="section">
      <AboutContent data={data} />
    </Container>
  );
}
