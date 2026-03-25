import { Hero } from '@/components/sections/Hero';
import { HomeAbout } from '@/components/sections/HomeAbout';
import { ProjectsDisplay } from '@/components/sections/ProjectsDisplay';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeAbout />
      <ProjectsDisplay />
      <Contact />
    </main>
  );
}
