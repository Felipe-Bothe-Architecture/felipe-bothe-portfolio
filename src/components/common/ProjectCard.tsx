import { Card, Image, Text, Title, Button, Box } from '@mantine/core';
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
    <Card className={classes.card} padding="0">
      <Card.Section className={classes.imageSection}>
        <Box className={classes.imageWrapper}>
          <Image
            src={imageUrl}
            alt={title}
            className={classes.image}
          />
        </Box>
      </Card.Section>

      <Box className={classes.content}>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.description} lineClamp={2}>
          {description}
        </Text>
        <Button 
          component={Link} 
          href={`/projects/${id}`} 
          variant="transparent" 
          className={classes.button}
        >
          Explore Project
        </Button>
      </Box>
    </Card>
  );
}
