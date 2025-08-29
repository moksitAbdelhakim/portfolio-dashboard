/**
 * Footer component, with copyright and design credits (https://v4.brittanychiang.com).
 *
 * @returns {JSX.Element} The footer element.
 */
const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto h-[142px] flex flex-col items-center justify-start gap-[55px]">
        {/* Vertical Divider */}
        <div className="w-1/3 border-t border-foreground right-0 left-0 mx-auto" />
        <div className="flex flex-col items-center gap-2 text-center text-sm text-foreground">
          <span>&copy; {new Date().getFullYear()} My Portfolio.</span>
          <span>
            Forked from{' '}
            <a
              href="https://brittanychiang.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              Brittany Chiang’s design
            </a>{' '}
            &amp; Built with{' '}
            <span aria-label="love" role="img">
              ❣️
            </span>{' '}
            by me.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
