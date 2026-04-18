
import React from 'react';
import { CERTIFICATES } from '../constants';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export const Certificates: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold dark:text-white mb-4">Credentials & Certifications</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Verified expertise in leading cloud platforms and DevOps technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert) => (
            <div key={cert.id} className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  className="max-h-full max-w-full object-contain relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold dark:text-white mb-1 leading-tight">{cert.title}</h3>
                    <p className="text-sm font-medium text-primary-600">{cert.issuer}</p>
                  </div>
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-400">
                    <ShieldCheck size={20} />
                  </div>
                </div>
                
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{cert.date}</span>
                    <a 
                      href={cert.verifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-primary-600 hover:text-primary-500"
                    >
                      Verify Credentials <ExternalLink className="ml-1" size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
