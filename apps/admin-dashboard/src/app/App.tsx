import { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@moksit-org/ui';
import { TopNavigation } from './components/TopNavigation';
import { AppSidebar } from './components/AppSidebar';
import { HeroPanel } from './components/HeroPanel';
import { ProjectsManager } from './components/ProjectsManager';
import { BlogPostsManager } from './components/BlogPostsManager';
import { CertificationsManager } from './components/CertificationsManager';

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderMainContent = () => {
    switch (activeSection) {
      case 'projects':
        return <ProjectsManager />;
      case 'blog-posts':
        return <BlogPostsManager />;
      case 'certifications':
        return <CertificationsManager />;
      case 'dashboard':
      default:
        return <HeroPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      
      <SidebarProvider>
        <div className="flex h-[calc(100vh-4rem)]">
          <AppSidebar 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          
          <SidebarInset className="flex-1 overflow-auto">
            <main className="flex-1 space-y-4 p-6">
              {renderMainContent()}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}