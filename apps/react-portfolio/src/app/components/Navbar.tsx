import githubIcon from '../../assets/icons/github.svg';
import xIcon from '../../assets/icons/x.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

const Navbar = () => {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      id="navbar"
    >
      <div className="flex h-16 items-center justify-between px-10 py-3">
        {/* Logo Section */}
        <div className="h-10 flex items-center gap-2">
          <img src="/logo.png" alt="Logo A" className="h-4 w-4" />
          <span className="text-lg font-bold text-foreground">
            Abdelhakim Moksit
          </span>
        </div>

        <div className="flex items-center justify-end gap-8">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-9">
            <a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-5 h-w-5 object-cover"
              />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <img src={xIcon} alt="X" className="w-5 h-5 object-cover" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-5 h-5 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
