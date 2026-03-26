import { Container, Title, Text, Box, Overlay, BackgroundImage, Flex } from '@mantine/core';
import classes from '@/styles/components/sections/Hero.module.css';

export function Hero() {
  return (
    <Box component="section" h="100vh" pos="relative">
      <BackgroundImage
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        h="100%"
      >
        <Overlay 
          gradient="linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)" 
          opacity={0.6} 
          zIndex={1} 
        />
        
        <Container size="xl" h="100%" pos="relative" style={{ zIndex: 2 }}>
          <Flex h="100%" align="center" justify="flex-start">
            <Box maw={800}>
              <Title className={classes.title}>
                Architectural <br /> Monolith
              </Title>
              <Text 
                className={classes.slogan} 
                c="white" 
                tt="uppercase" 
                lts="0.3rem" 
                fw={500} 
                fz="sm" 
                opacity={0.9}
              >
                Structural honesty. Monumental proportions. Tactile material.
              </Text>
            </Box>
          </Flex>
        </Container>
      </BackgroundImage>
    </Box>
  );
}
