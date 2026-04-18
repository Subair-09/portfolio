import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, Cpu, Terminal, Shield, BarChart3 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Resume', path: '/resume' },
    { name: 'Certs', path: '/certificates' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center group">
              <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-primary-600 to-sky-400 bg-clip-text text-transparent truncate max-w-[150px] sm:max-w-none">
                Subair Nurudeen Adewale
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary-500 ${
                      isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-400'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 dark:text-slate-400"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center mb-4">
                <span className="text-xl font-extrabold dark:text-white">Subair Nurudeen Adewale</span>
              </Link>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                Engineering resilient, scalable, and automated cloud infrastructure. 
                Focusing on Site Reliability and DevSecOps best practices.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/subairnurudeen" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary-500 text-slate-600 dark:text-slate-400 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/subair-nurudeen-adewale-1b46aa28b/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary-500 text-slate-600 dark:text-slate-400 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:nuddywale@gmail.com" className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary-500 text-slate-600 dark:text-slate-400 transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Sitemap</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Expertise</h4>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li className="flex items-center space-x-2">
                   <Cpu size={14} className="text-primary-500" />
                   <span>Cloud Architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                   <Shield size={14} className="text-primary-500" />
                   <span>DevSecOps</span>
                </li>
                <li className="flex items-center space-x-2">
                   <BarChart3 size={14} className="text-primary-500" />
                   <span>SRE & Monitoring</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-900 text-center">
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Subair Nurudeen Adewale. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};