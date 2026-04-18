
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Hire Me',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `${formData.subject}: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    const mailtoUrl = `mailto:nuddywale@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nuddywale@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Attempt mailto first (system default)
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Provide feedback and a direct Gmail option
    setIsSubmitted(true);
    // Note: We keep isSubmitted true to show the fallback links
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold dark:text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Have a project in mind or want to discuss cloud infrastructure? 
            I'm always open to talking tech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <div className="space-y-12 mb-16">
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold dark:text-white mb-1">Email</h4>
                  <a href="mailto:nuddywale@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">nuddywale@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold dark:text-white mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/subair-nurudeen-adewale-1b46aa28b/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">subair-nurudeen-adewale-1b46aa28b</a>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold dark:text-white mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">Lagos, Nigeria (Open to Remote)</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <h4 className="text-lg font-bold dark:text-white mb-4 flex items-center">
                <MessageSquare className="mr-2 text-primary-500" size={20} /> Availability
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                I'm currently accepting new freelance projects and consulting engagements. 
                Available for architectural reviews, CI/CD audits, and Kubernetes migrations.
              </p>
              <div className="flex space-x-4">
                 <div className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                    Open to remote roles
                 </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-white transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-white transition-all"
                >
                  <option>Hire Me</option>
                  <option>New Project Inquiry</option>
                  <option>Consulting Request</option>
                  <option>Architecture Review</option>
                  <option>Just saying hi</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-white transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold transition-all shadow-lg group ${
                  isSubmitted 
                  ? 'bg-green-500 text-white shadow-green-500/20' 
                  : 'bg-primary-600 text-white hover:bg-primary-500 shadow-primary-600/20'
                }`}
              >
                {isSubmitted ? 'Redirecting to Email...' : 'Send Message'}{' '}
                <Send className={`ml-2 transition-transform ${isSubmitted ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} size={18} />
              </button>
              
              {isSubmitted && (
                <div className="text-center space-y-4 animate-fade-in">
                  <p className="text-sm font-bold text-green-600 dark:text-green-400">
                    Redirection triggered!
                  </p>
                  <div className="flex flex-col space-y-2">
                    <p className="text-xs text-slate-500">
                      If your email app didn't open, use one of these:
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=nuddywale@gmail.com&su=${encodeURIComponent(formData.subject + ': ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary-500 hover:text-primary-600 underline flex items-center"
                      >
                        Open in Gmail
                      </a>
                      <a 
                        href={`mailto:nuddywale@gmail.com?subject=${encodeURIComponent(formData.subject + ': ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                        className="text-xs font-bold text-slate-500 hover:text-slate-600 underline"
                      >
                        Try Default App again
                      </a>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-[10px] text-slate-400 hover:text-slate-600 underline"
                  >
                    Reset Form
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
