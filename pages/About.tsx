import React from 'react';
import { Target, Heart, Award, ShieldCheck, Zap, Server, ChevronRight, Globe, Coffee, Terminal, BookOpen, Users, Rocket, Cpu, Cloud, Settings, BarChart3, Wrench, GraduationCap, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section: Personal Introduction & Journey */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold uppercase tracking-widest mb-6">
            <Rocket size={14} />
            <span>Technologist & Ecosystem Builder</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-8 leading-tight">
            I am <span className="font-black text-slate-900 dark:text-white">Subair Nurudeen Adewale</span>, a Cloud and DevOps Engineer and ecosystem builder.
          </h1>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I am focused on designing scalable and reliable systems while enabling the next generation of technologists.
            </p>
            <p>
              My journey into technology began with a deep curiosity about how systems communicate at scale. I became increasingly drawn to the infrastructure layer, the foundation that determines how applications perform in real-world environments. This led me into Cloud and DevOps engineering, where I specialize in building resilient platforms, automating delivery pipelines, and ensuring systems are production-ready.
            </p>
            <p>
              Today, I operate at the intersection of engineering execution and ecosystem development. I build not just infrastructure, but systems and communities that scale. My approach is grounded in a simple principle that technology should be reliable, efficient, and accessible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 space-y-20">
            {/* Professional Focus Section */}
            <section className="space-y-10">
              <h2 className="text-2xl font-bold dark:text-white flex items-center">
                <Target className="mr-3 text-primary-500" size={24} />
                Professional Focus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Cloud Native Infrastructure", desc: "Designing and managing cloud-native infrastructure on Microsoft Azure (Primary) and AWS (Secondary)." },
                  { title: "Linux Environments", desc: "Building and maintaining Linux-based production environments." },
                  { title: "CI/CD Pipelines", desc: "Implementing CI and CD pipelines for efficient and reliable deployments." },
                  { title: "Containerization", desc: "Managing containerized workloads using Docker and Kubernetes." },
                  { title: "DevOps & SRE", desc: "Applying DevOps and SRE practices to improve system reliability and uptime." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-bold dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ecosystem and Leadership Impact */}
            <section className="space-y-10">
              <h2 className="text-2xl font-bold dark:text-white flex items-center">
                <Users className="mr-3 text-primary-500" size={24} />
                Ecosystem and Leadership Impact
              </h2>
              <div className="grid grid-cols-1 gap-8">
                <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600">
                      <GraduationCap size={24} />
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">Codesphere Academy Co-founder</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Training aspiring engineers with practical Cloud and DevOps skills through real-world projects and mentorship. Bridging the gap between academic theory and industry reality.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-2xl text-primary-600">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">Codesphere Hub</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Enabling collaboration and innovation within the developer and startup community. Providing the infrastructure and networking necessary for modern tech ventures to flourish.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl text-orange-600">
                      <Heart size={24} />
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">San Kids Academy Lead</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Introducing children to technology and building early problem-solving and engineering mindsets. Teaching kids how to think like engineers for the digital age.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Expertise */}
            <section className="space-y-10">
              <h2 className="text-2xl font-bold dark:text-white flex items-center">
                <Terminal className="mr-3 text-primary-500" size={24} />
                Technical Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="space-y-4">
                  <h3 className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <Cloud size={16} className="mr-2 text-primary-500" /> Cloud Platforms
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Microsoft Azure (Primary), Amazon Web Services (AWS).
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <Settings size={16} className="mr-2 text-primary-500" /> Core Infrastructure & DevOps
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Linux (Ubuntu Server Administration), Terraform, Docker, Kubernetes (AKS, EKS).
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <Rocket size={16} className="mr-2 text-primary-500" /> CI/CD & Automation
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    GitHub Actions, Jenkins, GitLab CI, Bash Scripting.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <Globe size={16} className="mr-2 text-primary-500" /> Web Servers & Networking
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Nginx, Reverse Proxy, Load Balancing, SSL/TLS Management.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <Cpu size={16} className="mr-2 text-primary-500" /> Backend & Data
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Python, Node.js, PostgreSQL, MySQL, MongoDB, Redis.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <BarChart3 size={16} className="mr-2 text-primary-500" /> Observability & Reliability
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Prometheus, Grafana, ELK Stack.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <Wrench size={16} className="mr-2 text-primary-500" /> Security & Platform
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    HashiCorp Vault, VPC Design, Cloudflare.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar: Availability & Roles */}
          <div className="space-y-12">
            <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/20 transition-colors"></div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Briefcase className="mr-2 text-primary-400" size={20} />
                Open to Collaboration
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                I am open to full-time roles, contract engagements, and consulting projects that allow me to leverage my technical depth and leadership experience.
              </p>
              <div className="space-y-5">
                {[
                  "Cloud Engineer",
                  "DevOps Engineer",
                  "Infrastructure / Platform Engineer",
                  "Technical Educator / Mentor",
                  "Ecosystem Strategy Consultant"
                ].map((role, i) => (
                  <div key={i} className="flex items-center space-x-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{role}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 italic">
                Currently available for strategic roles that drive technical excellence and community growth.
              </div>
              <a 
                href="#/contact" 
                className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/20"
              >
                Let's Talk
              </a>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <h3 className="text-lg font-bold dark:text-white mb-4">Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded mr-3 mt-1 text-green-600">
                    <Zap size={14} />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Engineering for longevity and scale.</span>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded mr-3 mt-1 text-blue-600">
                    <Users size={14} />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Fostering diverse technical communities.</span>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded mr-3 mt-1 text-purple-600">
                    <Target size={14} />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Mentorship as a foundational duty.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
