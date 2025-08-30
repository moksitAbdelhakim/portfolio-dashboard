import { Reveal } from '../components/Reveal';
import { Button } from '@moksit-org/ui';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-start justify-center w-[62.5rem] mx-auto pt-[var(--nav-height)] p-0 min-h-dvh"
    >
      <Reveal delay={0.1}>
        <h1 className="ml-1 mb-[30px]">Hi, my name is</h1>
      </Reveal>

      <Reveal delay={0.2}>
        <h2 aria-label="Abdelhakim Moksit">Abdelhakim Moksit.</h2>
      </Reveal>

      <Reveal delay={0.3}>
        <h3
          className="mt-[5px]"
          aria-label="Cloud engineer with frontend expertise"
        >
          Crafting UIs, powered by the cloud.
        </h3>
      </Reveal>

      <Reveal delay={0.4}>
        <p className="m-0 mt-5 w-[540px]">
          I’m an IoT engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          acquiring full stack experience at{' '}
          <a
            href="https://www.qwasar.io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Qwasar Silicon Valley"
            className="text-primary hover:underline transition"
          >
            Qwasar Silicon Valley.
          </a>
        </p>
      </Reveal>

      <Reveal delay={0.5}>
        <Button
          variant="transition"
          size="default"
          className="mt-[50px] transition-[var(--transition)]"
        >
          Hire me!
        </Button>
      </Reveal>
    </section>
  );
};
