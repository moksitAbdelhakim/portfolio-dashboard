import { Button } from '@moksit-org/ui';
import Particles from './Particles';

const Hero = () => {
  const handleViewProjects = () => {
    // Logic to navigate to projects section
    const projectsSection = document.getElementById('projects');
    const navbarHeight = document.querySelector('#navbar')?.clientHeight || 0;
    if (projectsSection && navbarHeight) {
      const scrollToPosition = projectsSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadResume = () => {
    // Logic to download resume
    const link = document.createElement('a');
    link.href = '/AbdelhakimMoksit_Cloud-Engineer.pdf';
    link.download = 'AbdelhakimMoksit_Cloud-Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Download Resume successful');
  };

  return (
    <div className="h-[var(--hero-height)] w-full relative overflow-hidden">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={5}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* Hero content can be added here, such as a title, subtitle, or call to action */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-5">
        <h1 className="text-5xl font-bold text-foreground">
          Cloud Engineer and DevOps
        </h1>
        <p className="mt-4 text-lg text-muted">
          I'm a engineer specializing in networking and low-level programming.
          Passionate about building immersive and interactive 3D experiences.
          Explore my portfolio to see how I'm bringing the digital and physical
          worlds together.
        </p>

        <div className="flex gap-4 h-12">
          <Button
            onClick={handleViewProjects}
            variant="default"
            className="h-12 px-4 rounded-3xl"
          >
            View Projects
          </Button>
          <Button
            onClick={handleDownloadResume}
            variant="secondary"
            className="h-12 px-4 rounded-3xl border-muted border"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
