import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-300 ease-in-out ${
          isScrolled || isOpen
            ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-sm' 
            : 'py-6 bg-transparent border-transparent'
        }`}
      >
        <div className="text-2xl font-bold tracking-tighter text-white z-50">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-2 group">
              <span className="text-2xl md:text-3xl font-serif group-hover:text-lime-400 transition-colors duration-300">Ayush Shinde</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400">
          <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-lime-400 transition-colors py-2 duration-300">About</a></li>
          <li><a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="hover:text-lime-400 transition-colors py-2 duration-300">Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="hover:text-lime-400 transition-colors py-2 duration-300">Projects</a></li>
          <li><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="hover:text-lime-400 transition-colors py-2 duration-300">Experience</a></li>
          <li>
              <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-lime-400 hover:text-black transition-colors shadow-lg hover:shadow-lime-400/50 transform hover:-translate-y-0.5 duration-200 ml-4"
              >
                  Contact Me
              </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-200 hover:text-white focus:outline-none z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* Moved outside the <nav> element to avoid layout clipping and ensure fullscreen coverage */}
      <div 
        className={`fixed inset-0 z-40 md:hidden bg-[#050505] flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ height: '100dvh' }} // Use dvh for mobile browsers to cover full screen including address bar area if possible
      >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <ul className="flex flex-col space-y-8 text-center text-xl font-medium uppercase tracking-widest text-gray-400 relative z-10 w-full px-6">
             <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-lime-400 transition-colors block py-2">About</a></li>
             <li><a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="hover:text-lime-400 transition-colors block py-2">Skills</a></li>
             <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="hover:text-lime-400 transition-colors block py-2">Projects</a></li>
             <li><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="hover:text-lime-400 transition-colors block py-2">Experience</a></li>
             <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, 'contact')} 
                  className="inline-block px-8 py-3 bg-white text-black rounded-full font-bold mt-4 hover:bg-lime-400 transition-colors shadow-[0_0_20px_rgba(163,230,53,0.3)]"
                >
                  Contact Me
                </a>
             </li>
          </ul>
      </div>
    </>
  );
};