import { Button } from '@moksit-org/ui';
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
      className={`h-[100px] w-full flex items-center justify-between px-[50px] sticky top-0 bg-background/85 backdrop-blur-sm supports-[backdrop-filter]:bg-background/5 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      aria-label="Site Header"
    >
      <div className="flex items-center gap-2">
        <img
          aria-label="Logo"
          src="/logo.svg"
          alt="Logo"
          className="h-12 w-12 cursor-pointer hover:rotate-12 transition-transform duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
        />
      </div>
      <Navbar />
    </header>
  );
};

// Navbar
const Navbar = () => (
  <nav className="flex gap-4 items-center justify-between w-[440px] h-[38.6px] ">
    <ul className="flex items-center [&>li>a]:leading-[16.9px]">
      <li>
        <a href="#about" className="">
          About
        </a>
      </li>
      <li>
        <a href="#experience" className="">
          Experience
        </a>
      </li>
      <li>
        <a href="#work" className="">
          Work
        </a>
      </li>
      <li>
        <a href="#contact" className="">
          Contact
        </a>
      </li>
    </ul>
    <Button size="default" variant="default">
      Resume
    </Button>
  </nav>
);

export default Header;
