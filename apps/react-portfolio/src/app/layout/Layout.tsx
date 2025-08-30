import Scene from '../r3f/Scene';
import Hero from '../sections/Hero';
import { HeroSection } from '../sections/HeroSection';
import { RightSidebar, LeftSidebar } from './Sidebar';

/**
 * Layout component centers main content and adds vertical sidebars:
 * - Left: Gmail link
 * - Right: Social links
 */
const Layout = () => {
  return (
    <div id="content" className="w-dvw flex relative h-full">
      {/* Main content centered */}
      <main className="w-full max-w-[100rem] min-h-dvh px-[150px] py-0 mx-auto ">
        {/* <Scene /> */}
        {/* <Hero /> */}
        <HeroSection />
      </main>
      <RightSidebar />
      <LeftSidebar />
    </div>
  );
};

export default Layout;
