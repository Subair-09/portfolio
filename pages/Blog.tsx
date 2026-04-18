
import React from 'react';
import { BLOGS } from '../constants';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold dark:text-white mb-4">Technical Insights</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Exploring the latest trends in cloud engineering, automation, and infrastructure management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOGS.map((blog) => (
            <article key={blog.id} className="group">
              <a 
                href={blog.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[16/9] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                  <img 
                    src={`https://picsum.photos/seed/${blog.id}/800/450`} 
                    alt={blog.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-sm text-xs font-bold text-primary-600">
                      <Tag size={12} className="mr-1" /> {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> {blog.date}</span>
                  <span className="flex items-center"><Clock size={14} className="mr-1" /> {blog.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold dark:text-white mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                  {blog.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-2">
                  {blog.excerpt}
                </p>
                
                <span className="inline-flex items-center text-primary-600 font-bold group-hover:translate-x-1 transition-transform">
                  Read Full Article <ArrowRight className="ml-2" size={18} />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
