import React from 'react';
import Imagebox from './ui/Imagebox';

const ProjectSection = () => {
  const projects = [
    { id: 1, imageurl: '/download (1).jpeg', alt: 'Project 1' },
    { id: 2, imageurl: '/download.jpeg', alt: 'Project 2' },
    { id: 3, imageurl: '/images (1).jpeg', alt: 'Project 3' },
    { id: 4, imageurl: '/images (2).jpeg', alt: 'Project 4' },
    { id: 5, imageurl: '/images (3).jpeg', alt: 'Project 5' },
    { id: 6, imageurl: '/images (4).jpeg', alt: 'Project 6' },
    { id: 7, imageurl: '/images (5).jpeg', alt: 'Project 7' },
    { id: 8, imageurl: '/images (6).jpeg', alt: 'Project 8' },
    { id: 9, imageurl: '/images.jpeg', alt: 'Project 9' },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white" id='projects'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">See</span>{' '}
              <span className="text-amber-400">My Works</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-md mx-auto md:mx-0">
              Explore my latest projects, showcasing creativity, precision, and a commitment to achieving client goals.
            </p>
          </div>
          {/* Right: Image Grid */}
          <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Imagebox key={project.id} imageurl={project.imageurl} alt={project.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;