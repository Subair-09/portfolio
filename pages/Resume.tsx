
import React from 'react';
import { EXPERIENCES, RESUME_LINK } from '../constants';
import { Download, Briefcase, GraduationCap, Code2, Award } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold dark:text-white mb-2">Curriculum Vitae</h1>
            <p className="text-slate-600 dark:text-slate-400">Professional path and engineering background.</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <section>
              <h2 className="text-xl font-bold dark:text-white mb-8 flex items-center">
                <Briefcase className="mr-3 text-primary-500" size={20} /> Professional Experience
              </h2>
              <div className="space-y-12 relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-8">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 shadow-sm"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold dark:text-white">{exp.role}</h3>
                        <p className="text-primary-600 font-semibold">{exp.company}</p>
                      </div>
                      <span className="inline-block px-3 py-1 mt-2 sm:mt-0 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3 list-disc list-inside text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold dark:text-white mb-8 flex items-center">
                <GraduationCap className="mr-3 text-primary-500" size={24} /> Education
              </h2>
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold dark:text-white">B.S. Computer Science</h3>
                    <p className="text-primary-600">Tech University of Engineering</p>
                  </div>
                  <span className="text-sm font-bold text-slate-400">2015 - 2019</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Focus on distributed systems, network security, and algorithm analysis.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-10">
            {/* Skills */}
            <section>
              <h2 className="text-xl font-bold dark:text-white mb-6 flex items-center">
                <Code2 className="mr-3 text-primary-500" size={20} /> Skills Matrix
              </h2>
              <div className="space-y-6">
                {[
                  { label: "Cloud Platforms", items: ["AWS", "GCP", "Azure"] },
                  { label: "Infrastructure", items: ["Terraform", "Kubernetes", "Helm"] },
                  { label: "Automation", items: ["Python", "Go", "Bash", "Node.js"] },
                  { label: "SRE", items: ["Prometheus", "Grafana", "ELK"] },
                  { label: "Security", items: ["Vault", "OPA", "IAM", "VPC"] }
                ].map((skill, idx) => (
                  <div key={idx}>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">{skill.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <span key={item} className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-medium dark:text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Other Achievements */}
            <section>
              <h2 className="text-xl font-bold dark:text-white mb-6 flex items-center">
                <Award className="mr-3 text-primary-500" size={20} /> Key Competencies
              </h2>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 mr-3 flex-shrink-0"></span>
                  Multi-cloud deployment strategies
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 mr-3 flex-shrink-0"></span>
                  Zero-downtime database migrations
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 mr-3 flex-shrink-0"></span>
                  Incident management and RCA
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 mr-3 flex-shrink-0"></span>
                  Agile/Scrum team leadership
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};
