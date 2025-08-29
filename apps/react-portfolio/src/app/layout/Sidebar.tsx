import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

/**
 * Right sidebar with social links.
 *
 * @returns {JSX.Element} The right sidebar component.
 */
export const RightSidebar: React.FC = () => (
  <div className="fixed right-0 top-0 bottom-0 w-[60px] flex items-center justify-center z-10">
    <a
      href="mailto:moksit.abdelhakim@gmail.com"
      className="no-underline text-foreground text-[12px] leading-[18px] tracking-[1.2px] hover:text-accent transition-colors"
      style={{ writingMode: 'vertical-rl', transform: 'rotate(0deg)' }}
      aria-label="Email Gmail"
    >
      moksit.abdelhakim@gmail.com
    </a>
  </div>
);

/**
 * Left sidebar with Gmail link.
 *
 * @returns {JSX.Element} The left sidebar component.
 */
export const LeftSidebar: React.FC = () => (
  <div className="fixed left-0 top-0 bottom-0 w-[60px] flex items-center justify-center z-10">
    <div className="flex flex-col gap-6">
      <a
        href="https://github.com/moksitabdlhakim"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img src={githubIcon} alt="GitHub" width={32} height={32} />
      </a>
      <a
        href="https://linkedin.com/in/moksit-abdelhakim"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img src={linkedinIcon} alt="LinkedIn" width={32} height={32} />
      </a>
      {/* Add more social links as needed */}
    </div>
  </div>
);
