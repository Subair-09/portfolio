
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Cloud, Globe, Terminal, Zap, ShieldAlert, Settings, LayoutGrid, Layers } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const categories = ['All', 'AWS', 'Azure', 'Linux', 'CI/CD', 'DevSecOps', 'Automation'] as const;
  const [filter, setFilter] = useState<typeof categories[number]>('All');
  
  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  const getCategoryIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'aws': return <Cloud size={16} />;
      case 'azure': return <Globe size={16} />;
      case 'linux': return <Terminal size={16} />;
      case 'ci/cd': return <Zap size={16} />;
      case 'devsecops': return <ShieldAlert size={16} />;
      case 'automation': return <Settings size={16} />;
      default: return <LayoutGrid size={16} />;
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold dark:text-white mb-4">Cloud & DevOps Portfolio</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            A showcase of production-grade cloud infrastructure and automation engineering.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl w-fit">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center space-x-2 ${
                filter === cat 
                ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-sm' 
                : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute top-6 left-6">
                  <span className="flex items-center space-x-2 px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur rounded-xl shadow-lg">
                    <span className="text-primary-600 dark:text-primary-400">
                      {getCategoryIcon(project.category)}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                      {project.category}
                    </span>
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-grow p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold dark:text-white leading-tight group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-400 group-hover:text-primary-500 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-all">
                    <ExternalLink size={18} />
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tools */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span 
                        key={tool} 
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-md text-[10px] font-bold uppercase tracking-wider"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="px-2.5 py-1 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                        +{project.tools.length - 4} More
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-32 text-center bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-dashed border-slate-300 dark:border-slate-800">
            <p className="text-slate-500 font-medium">Coming soon: Production case studies for {filter}.</p>
          </div>
        )}
      </div>
    </div>
  );
};
