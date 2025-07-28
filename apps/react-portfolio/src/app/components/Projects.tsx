import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from '@moksit-org/ui';
import { Calendar, Code, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  thumbnail: string;
  title: string;
  createdAt: string;
  stack: string[];
  description: string;
  liveLink: string;
  repo: string;
  ribbon?: null | string;
  cta: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = React.useState<Project | null>(
    null
  );

  const projects: Project[] = [
    {
      id: 1,
      thumbnail:
        'https://images.unsplash.com/photo-1686061592689-312bbfb5c055?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'React Admin Dashboard',
      createdAt: '2024-01-01',
      ribbon: null,
      stack: ['React', 'TypeScript', 'Tailwind CSS'],
      description:
        'A React application built with Typescript and styled using Tailwind CSS.',
      liveLink: 'https://example.com/admin-dashboard',
      repo: 'https://github.com/moksitAbdelhakim/portfolio-dashboard',
      cta: 'Live View',
    },
    {
      id: 2,
      thumbnail:
        'https://images.unsplash.com/photo-1648134859196-3aa762e9440d?q=80&w=3260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'E-commerce Platform',
      createdAt: '2024-02-01',

      stack: ['React', 'Redux', 'Shadcn UI', 'API', 'Express', 'Vercel'],
      description:
        'A modern e-commerce application using React, Redux for state, and Shadcn UI.',
      liveLink: 'https://example.com/next-ecommerce',
      repo: 'https://github.com/moksitAbdelhakim/react-ecommerce',
      ribbon: 'Featured',
      cta: 'Stay up to date',
    },
    {
      id: 3,
      thumbnail:
        'https://images.unsplash.com/photo-1669301048918-6ca9a3cd39c1?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '3D home website',
      createdAt: '2024-03-01',
      ribbon: null,
      stack: ['React', 'Threejs', 'Redux', 'Tailwind CSS'],
      description:
        'A colorful platformer game using React with Three.js and Tailwind CSS.',
      liveLink: 'https://16-haunted-house-kappa.vercel.app/',
      repo: 'https://github.com/moksitAbdelhakim/16-haunted-house',
      cta: 'Play',
    },
  ];

  const techColors: Record<string, string> = {
    JavaScript: 'bg-yellow-300 text-yellow-900',
    TypeScript: 'bg-blue-300 text-blue-900',
    HTML: 'bg-orange-100 text-orange-800',
    CSS: 'bg-blue-100 text-blue-800',
    React: 'bg-cyan-200 text-cyan-900',
    Redux: 'bg-purple-300 text-purple-900',
    'Tailwind CSS': 'bg-teal-200 text-teal-900',
    WebGL: 'bg-purple-200 text-purple-900',
    Socket: 'bg-blue-200 text-blue-900',
    'Shadcn UI': 'bg-gray-200 text-gray-900',
    API: 'bg-pink-200 text-pink-900',

    Express: 'bg-gray-200 text-gray-800',
    Threejs: 'bg-black text-white',
    SpringBoot: 'bg-green-200 text-green-900',
    Arduino: 'bg-cyan-300 text-cyan-900',
    RaspberryPi: 'bg-red-300 text-red-900',
    AWS: 'bg-orange-300 text-orange-900',
    Azure: 'bg-blue-400 text-white',
  };

  const handleCardClick = (project: Project) => {
    setActiveProject(project);
    // window.open(activeProject?.liveLink, '_blank');
  };

  return (
    <div className="space-y-9 mt-12" id="projects">
      <div className="space-y-7">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-foreground">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>

      {/* Projects cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="hover:bg-secondary/50 bg-secondary transition-shadow rounded-3xl p-2 border-border"
            onClick={() => handleCardClick(project)}
          >
            <CardHeader className="space-y-1 p-0">
              {/* Ribbon for award */}
              {/* {project.ribbon && (
                <div className="absolute top-4 left-0 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rotate-[-45deg] origin-top-left z-10">
                  {project.ribbon}
                </div>
              )} */}

              {/* Thumbnail */}
              <div className="w-full h-48 ">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </div>
              <div className="flex items-center text-sm text-muted">
                <Calendar className="mr-1 h-3 w-3" />
                {new Date(project.createdAt).toLocaleDateString()}
              </div>
            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-4 p-0 m-0">
              <p className="text-sm text-foreground line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className={`px-2 py-1 text-xs rounded-full font-medium ${techColors[tech]}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex space-x-2 items-center justify-end">
                {project.liveLink && (
                  <Button size="lg" variant="default" className="">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                )}
                {project.repo && (
                  <Button size="lg" variant="outline" className="">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code className="h-3 w-3" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
