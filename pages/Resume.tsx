
import React from 'react';
import { EXPERIENCES, RESUME_LINK, RESUME_DATA } from '../constants';
import { Download, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold dark:text-white mb-4">Curriculum Vitae</h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center"><MapPin className="mr-1 text-primary-500" size={16} /> Lagos, Nigeria</span>
              <span className="flex items-center"><Phone className="mr-1 text-primary-500" size={16} /> +2347033968648</span>
              <span className="flex items-center"><Mail className="mr-1 text-primary-500" size={16} /> Nuddywale@gmail.com</span>
            </div>
          </div>
          <a 
            href={RESUME_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 shadow-lg shadow-primary-600/20 transition-all"
          >
            <Download className="mr-2" size={18} /> Download PDF
          </a>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <div className="p-8 rounded-2xl bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/20">
            <h2 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-4 flex items-center">
              <Award className="mr-3 text-primary-500" size={24} /> Professional Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {RESUME_DATA.summary}
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Experience */}
            <section>
              <h2 className="text-2xl font-extrabold dark:text-white mb-10 flex items-center">
                <Briefcase className="mr-4 text-primary-500" size={28} /> Professional Experience
              </h2>
              <div className="space-y-12 relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-10">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="relative">
                    <div className="absolute -left-[49px] top-0 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 shadow-sm shadow-primary-500/20"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold dark:text-white">{exp.role}</h3>
                        <p className="text-primary-600 font-bold flex items-center gap-2">
                          {exp.company}
                          <span className="text-slate-400 text-xs font-normal">| {exp.location}</span>
                        </p>
                      </div>
                      <span className="inline-block px-3 py-1 mt-2 sm:mt-0 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i} className="relative pl-6">
                          <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary-400/50"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-extrabold dark:text-white mb-10 flex items-center">
                <GraduationCap className="mr-4 text-primary-500" size={28} /> Education
              </h2>
              <div className="space-y-6">
                {RESUME_DATA.education.map((edu) => (
                  <div key={edu.id} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-lg font-bold dark:text-white">{edu.degree}</h3>
                        <p className="text-primary-600 font-semibold">{edu.school}</p>
                      </div>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold whitespace-nowrap self-start sm:self-center">
                        {edu.period}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-12">
            {/* Skills */}
            <section>
              <h2 className="text-xl font-bold dark:text-white mb-8 flex items-center">
                <Code2 className="mr-3 text-primary-500" size={24} /> Technical Skills
              </h2>
              <div className="space-y-8">
                {RESUME_DATA.skills.map((skill, idx) => (
                  <div key={idx}>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">{skill.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <span key={item} className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                          <span className="w-1 h-1 rounded-full bg-primary-500 mr-2"></span>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Competencies */}
            <section className="p-8 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 border border-dashed border-slate-200 dark:border-slate-800">
              <h3 className="text-md font-bold dark:text-white mb-6 uppercase tracking-wider">Key Competencies</h3>
              <ul className="space-y-4">
                {[
                  "Multi-cloud Resilience",
                  "Cloud Cost Strategy",
                  "Enterprise Security Implementation",
                  "Observability Architecture",
                  "Incident Triage & Automation"
                ].map((comp, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400 font-medium">
                    <span className="w-2 h-2 rounded-sm bg-primary-500/40 mr-3 transform rotate-45"></span>
                    {comp}
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick Links */}
            <section className="p-8 rounded-2xl bg-primary-600 text-white shadow-xl shadow-primary-600/20">
              <h3 className="text-lg font-bold mb-4">View My Work</h3>
              <p className="text-primary-100 text-sm mb-6 leading-relaxed">
                Check out my technical articles and engineering projects.
              </p>
              <div className="space-y-3">
                <a href="#/portfolio" className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-bold">
                  Portfolio <ExternalLink size={14} />
                </a>
                <a href="#/blog" className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-bold">
                  Blog Posts <ExternalLink size={14} />
                </a>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};
