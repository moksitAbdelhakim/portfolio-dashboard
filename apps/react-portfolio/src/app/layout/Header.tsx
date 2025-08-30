import { Button } from '@moksit-org/ui';
import { Hand } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Header component that hides on scroll down and shows on scroll up.
 *
 * @returns {JSX.Element} The header element.
 */
const Header: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle header visibility based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // console.log('ScrollY:', currentScrollY, 'LastScrollY:', lastScrollY);
      setVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`h-[var(--nav-height)] w-full flex items-center justify-center px-[50px] py-0 fixed top-0 bg-background/85 backdrop-blur-md z-10 transition-[var(--transition)] ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      aria-label="Header"
    >
      <Nav />
    </header>
  );
};

// Nav
const Nav = () => {
  const HandleDownloadResume = () => {
    const pdfUrl = '/Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Moksit_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center tab" tabIndex={-1}>
        <a href="/" aria-label="home">
          <img
            aria-label="Logo"
            src="/logo.svg"
            alt="Logo"
            className="h-[2.625rem] w-[2.625rem] cursor-pointer hover:rotate-12 transition-transform duration-300"
          />
        </a>
      </div>
      <div className="flex items-center gap-4">
        <ol className="flex items-center justify-center [&>li>a]:leading-[16.9px] leading-[26px] p-0 m-0 list-none">
          <li className="transition-all duration-300 delay-[0ms]">
            <a href="/#about">About</a>
          </li>
          <li className="transition-all duration-300 delay-[100ms]">
            <a href="/#jobs">Experience</a>
          </li>
          <li className="transition-all duration-300 delay-[200ms]">
            <a href="/#projects">Work</a>
          </li>
          <li className="transition-all duration-300 delay-[300ms]">
            <a href="/#contact">Contact</a>
          </li>
        </ol>
        {/* TODO: The delay affects the button as well */}
        <Button
          variant="transition"
          size="default"
          className="transition-[var(--transition)] delay-[400ms]"
          onClick={HandleDownloadResume}
        >
          Resume
        </Button>
      </div>
    </nav>
  );
};

export default Header;
