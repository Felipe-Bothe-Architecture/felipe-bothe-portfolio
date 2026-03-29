import { Container, Title, Text, Box, Overlay, Flex, Button } from '@mantine/core';
import classes from '@/styles/components/sections/Hero.module.css'

export function Hero() {
  return (
    <Box 
      component="section" 
      h="100vh" 
      pos="relative"
      className={classes.backgroundImage}
    >
      <Overlay 
        gradient="linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)" 
        opacity={0.7} 
        zIndex={1} 
      />
      
      <Container size="xl" h="100%" pos="relative" style={{ zIndex: 2 }}>
        <Flex h="100%" align="center" justify="flex-start">
          <Box>
            <Title
              c={'white'}
              fw={400}
              lh={1}
              mb={'md'}
              fz={'clamp(3.0rem, 8vw, 5.5rem)'}
            >
              Luxury Waterfront Design
            </Title>
            <Text 
              c="white" 
              tt="uppercase" 
              lts="0.3rem" 
              fw={500} 
              fz="sm" 
              opacity={0.9}
              mb="xl"
            >
              Contemporary Custom Residences
            </Text>
            
            <Button 
              variant="outline" 
              color="white" 
              size="lg"
              px="xl"
              style={{ 
                borderWidth: '1px',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                backgroundColor: 'transparent'
              }}
            >
              View Projects
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
