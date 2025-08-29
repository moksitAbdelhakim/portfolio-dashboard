import Scene from '../r3f/Scene';
import Hero from '../sections/Hero';
import { RightSidebar, LeftSidebar } from './Sidebar';

/**
 * Layout component centers main content and adds vertical sidebars:
 * - Left: Gmail link
 * - Right: Social links
 */
const Layout = () => {
  return (
    <div className="flex h-dvh relative">
      {/* Main content centered */}
      <main className="flex-1 flex flex-col items-center justify-center min-h-full">
        {/* <Scene /> */}
        <Hero />
      </main>
      <RightSidebar />
      <LeftSidebar />
    </div>
  );
};

export default Layout;
