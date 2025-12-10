import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';

export const LeftSidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'education'];
      const scrollPosition = window.scrollY + 100; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'education', label: 'EDUCATION' },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Ayush Shinde</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate">
          I build accessible, pixel-perfect, secure, and performant web applications.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`group flex items-center py-3 ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                  href={`#${item.id}`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-teal-300 motion-reduce:transition-none ${
                      activeSection === item.id ? 'w-16 bg-teal-300' : 'bg-slate-600'
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${
                      activeSection === item.id ? 'text-slate-200' : 'text-slate-500'
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.name} className="mr-5 text-xs">
            <a
              className="block hover:text-slate-200"
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.name} (opens in a new tab)`}
            >
              <span className="sr-only">{link.name}</span>
              <link.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};