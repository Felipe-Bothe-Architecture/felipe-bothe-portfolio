import { Card, Image, Text, Title, Button, AspectRatio, Stack } from '@mantine/core';
import Link from 'next/link';
import classes from '@/styles/components/common/ProjectCard.module.css';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export function ProjectCard({ id, title, description, imageUrl }: Readonly<ProjectCardProps>) {
  return (
    <Card className={classes.card} padding="0" bg="transparent" withBorder>
      <Card.Section className={classes.imageSection}>
        <AspectRatio ratio={3/2}>
          <Image
            src={imageUrl}
            alt={`Project: ${title}`}
            className={classes.image}
          />
        </AspectRatio>
      </Card.Section>

      <Stack gap="md" p="xl" flex={1}>
        <Title order={3} fz="lg" fw={400} c="stone.8" tt="uppercase">
          {title}
        </Title>
        <Text fz="sm" lh="1.6" c="stone.7" lineClamp={2} flex={1}>
          {description}
        </Text>
        <Button 
          component={Link} 
          href={`/projects/${id}`} 
          variant="transparent" 
          className={classes.button}
          p={0}
          w="fit-content"
          h="auto"
          fz="0.65rem"
          lts="0.15em"
          c="stone.8"
        >
          Explore Project
        </Button>
      </Stack>
    </Card>
  );
}
