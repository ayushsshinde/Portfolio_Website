import React from 'react';
import SplashCursor from './components/SplashCursor';
import Hyperspeed from './components/Hyperspeed';
import { Navigation } from './components/Navigation';
import { SideElements } from './components/SideElements';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import LogoLoop from './components/LogoLoop';
import { SpotlightCard } from './components/SpotlightCard';
import ProfileCard from './components/ProfileCard';
import { ContactForm } from './components/ContactForm';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiDjango, SiAngular, SiMysql, SiFirebase } from 'react-icons/si';
import { 
  EXPERIENCE_DATA, 
  PROJECTS_DATA, 
  ABOUT_TEXT, 
  SKILLS_DATA, 
  EDUCATION_DATA, 
  CERTIFICATIONS_DATA, 
  ACHIEVEMENTS_DATA, 
  SOCIAL_LINKS 
} from './constants';
import { ArrowDown, Code2, Database, Layout, Terminal, Cpu, Globe, Bot } from 'lucide-react';

// --- UPDATED IMPORT: Correct file name ---
import ayushPhoto from './images/ayush_image.jpg';

const iconClass = "text-gray-500 group-hover/item:text-lime-400 transition-colors duration-300";

const techLogos = [
  { node: <SiPython className={iconClass} />, title: "Python", href: "https://www.python.org" },
  { node: <SiDjango className={iconClass} />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiReact className={iconClass} />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className={iconClass} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiAngular className={iconClass} />, title: "Angular", href: "https://angular.io" },
  { node: <SiTypescript className={iconClass} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className={iconClass} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMysql className={iconClass} />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiFirebase className={iconClass} />, title: "Firebase", href: "https://firebase.google.com" },
];

const getSkillIcon = (category: string) => {
  if (category.includes("AI")) return <Bot size={24} className="text-emerald-400" />;
  if (category.includes("Languages")) return <Code2 size={24} className="text-lime-400" />;
  if (category.includes("Frameworks")) return <Layout size={24} className="text-blue-400" />;
  if (category.includes("Tools")) return <Terminal size={24} className="text-purple-400" />;
  return <Cpu size={24} className="text-gray-400" />;
};

const App: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen font-sans bg-bg text-text selection:bg-lime-400 selection:text-black overflow-x-hidden">
      
      {/* Fluid Cursor Effect */}
      <SplashCursor />
      
      {/* Hyperspeed Background Layer */}
      <div className="fixed inset-0 z-0 opacity-80">
         <Hyperspeed
            effectOptions={{
                onSpeedUp: () => { },
                onSlowDown: () => { },
                distortion: 'turbulentDistortion',
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 4,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [400 * 0.03, 400 * 0.2],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xFFFFFF,
                brokenLines: 0xFFFFFF,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
                }
            }}
            />
      </div>
      
      {/* Fixed Navigation & Sidebars */}
      <Navigation />
      <SideElements />

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 relative scroll-mt-20 max-w-7xl mx-auto py-20">
            <div className="space-y-4 mb-10 z-10 pointer-events-none mix-blend-screen w-full max-w-4xl mx-auto">
                <span className="text-xl md:text-2xl font-medium text-lime-400 tracking-wide block animate-fade-in-up">Hello, I'm Ayush</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-2xl">
                    Python Full-stack Developer<br />
                    <span className="text-gray-400 font-serif italic text-2xl md:text-4xl lg:text-5xl mt-4 block">Eat. Sleep. Code. Repeat.</span>
                </h1>
            </div>
            
            <a 
              href="#about" 
              onClick={(e) => handleScrollTo(e, 'about')}
              className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce p-3 rounded-full hover:bg-white/10 hover:shadow-lg transition-all border border-white/10 backdrop-blur-sm group z-30 hidden md:block"
              aria-label="Scroll to about section"
            >
                <ArrowDown size={24} className="text-gray-300 group-hover:text-lime-400 transition-colors" />
            </a>

            {/* Logo Loop */}
            <div className="absolute bottom-0 left-0 w-full pb-8 z-20 overflow-hidden">
               <LogoLoop
                  logos={techLogos}
                  speed={35}
                  direction="left"
                  logoHeight={28}
                  gap={40}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#050505"
                  ariaLabel="Tech Stack"
                />
            </div>
        </section>

        {/* CONTENT CONTAINER */}
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-black/60 backdrop-blur-xl rounded-t-[2.5rem] md:rounded-t-[3rem] shadow-2xl border-t border-white/10">

            {/* ABOUT SECTION */}
            <section id="about" className="mb-24 md:mb-32 scroll-mt-32">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 md:mb-12 flex items-center gap-2">
                    <span className="text-lime-400 text-lg">01.</span> About Me
                </h2>
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    <div className="md:col-span-2 text-lg md:text-xl leading-relaxed font-light text-gray-300 space-y-6">
                        {ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    {/* Profile Card Replacement */}
                    <div className="h-full min-h-[350px] md:min-h-[400px] w-full max-w-sm mx-auto md:max-w-none">
                      <ProfileCard 
                        name="Ayush Shinde"
                        title="Full Stack Developer"
                        handle="ayushshinde-"
                        status="Open to Work"
                        contactText="Hire Me"
                        
                        // Pass the imported image
                        backgroundImageUrl={ayushPhoto}
                        avatarUrl={ayushPhoto}
                        miniAvatarUrl={ayushPhoto}
                        
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        innerGradient="linear-gradient(145deg, rgba(26,26,26,0.85) 0%, rgba(10,10,10,0.9) 100%)"
                        behindGlowColor="rgba(163, 230, 53, 0.4)"
                        onContactClick={() => {
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            const offset = 100;
                            const elementPosition = contactSection.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - offset;
                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                          }
                        }}
                      />
                    </div>
                </div>
            </section>

             {/* SKILLS SECTION */}
             <section id="skills" className="mb-24 md:mb-32 scroll-mt-32">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 md:mb-12 flex items-center gap-2">
                    <span className="text-lime-400 text-lg">02.</span> Skills
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {SKILLS_DATA.map((skillGroup, idx) => (
                        <SpotlightCard key={idx} className="group">
                             <div className="p-6 md:p-8 h-full flex flex-col relative z-20">
                                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        {getSkillIcon(skillGroup.category)}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-200 group-hover:text-white transition-colors">{skillGroup.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {skillGroup.items.map((skill) => (
                                        <div key={skill} className="group/skill relative">
                                            {/* Glow effect on hover */}
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-lg blur opacity-0 group-hover/skill:opacity-75 transition duration-500"></div>
                                            <span className="relative block px-3 py-1.5 bg-neutral-900 text-gray-300 rounded-lg text-sm font-medium border border-white/10 group-hover/skill:text-white group-hover/skill:border-transparent transition-all cursor-default">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="mb-24 md:mb-32 scroll-mt-32">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 md:mb-12 flex items-center gap-2">
                    <span className="text-lime-400 text-lg">03.</span> Projects
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {PROJECTS_DATA.map((proj) => (
                        <ProjectCard key={proj.id} data={proj} />
                    ))}
                </div>
            </section>

            {/* EXPERIENCE SECTION - DARK MODE */}
            <section id="experience" className="mb-24 md:mb-32 scroll-mt-32">
                 <div className="bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
                     {/* Background decoration */}
                     <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-lime-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                     <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                     <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-12 md:mb-16 flex items-center gap-2">
                        <span className="text-lime-400 text-lg">04.</span> Experience
                     </h2>
                     <div className="space-y-0 pl-1 md:pl-2">
                        {EXPERIENCE_DATA.map((exp) => (
                            <ExperienceCard key={exp.id} data={exp} />
                        ))}
                     </div>
                 </div>
            </section>

            {/* CERTIFICATIONS & ACHIEVEMENTS */}
            <div className="grid md:grid-cols-2 gap-12 mb-24 md:mb-32 scroll-mt-32">
                
                {/* Certifications */}
                <section id="certifications">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 flex items-center gap-2">
                         <span className="text-lime-400 text-lg">05.</span> Certifications
                    </h2>
                    <div className="space-y-6">
                        {CERTIFICATIONS_DATA.map((cert) => (
                            <div key={cert.id} className="group bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:border-lime-500/30 transition-all duration-300">
                                <h3 className="font-bold text-gray-100 group-hover:text-lime-400 transition-colors">{cert.title}</h3>
                                <div className="text-gray-400 text-sm mt-1">{cert.issuer}</div>
                                <div className="text-gray-500 text-xs mt-2 uppercase tracking-wide font-medium">{cert.date}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Achievements */}
                <section id="achievements">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 flex items-center gap-2">
                        <span className="text-lime-400 text-lg">06.</span> Achievements
                    </h2>
                    <div className="space-y-6">
                        {ACHIEVEMENTS_DATA.map((ach) => (
                            <div key={ach.id} className="group bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:border-lime-500/30 transition-all duration-300">
                                <h3 className="font-bold text-gray-100 group-hover:text-lime-400 transition-colors">{ach.title}</h3>
                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{ach.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            
            {/* EDUCATION SECTION */}
            <section id="education" className="mb-24 md:mb-32 scroll-mt-32">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 md:mb-12 flex items-center gap-2">
                    <span className="text-lime-400 text-lg">07.</span> Education
                </h2>
                <div className="space-y-6">
                    {EDUCATION_DATA.map((edu) => (
                        <div key={edu.id} className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 shadow-sm hover:border-lime-500/30 transition-all duration-300 group">
                             <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">{edu.school}</h3>
                                <span className="text-sm font-bold text-lime-300 bg-lime-400/10 border border-lime-400/20 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{edu.period}</span>
                             </div>
                             <div className="text-lg font-medium text-gray-300 mb-4">{edu.degree}</div>
                             {edu.details && (
                                <ul className="space-y-2 text-gray-400">
                                    {edu.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-lime-500/50 flex-shrink-0"></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                             )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="mb-24 md:mb-32 scroll-mt-32">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 md:mb-12 flex items-center gap-2">
                    <span className="text-lime-400 text-lg">08.</span> Contact
                </h2>
                <ContactForm />
            </section>

            {/* FOOTER */}
            <footer className="text-center text-gray-600 text-sm py-12 border-t border-white/10">
                <div className="flex justify-center gap-6 mb-8 md:hidden">
                    {SOCIAL_LINKS.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-gray-400 hover:text-lime-400 transition-colors p-3 bg-white/5 rounded-full border border-white/10"
                            aria-label={link.name}
                        >
                            <link.icon size={20} />
                        </a>
                    ))}
                </div>
                <p>&copy; {new Date().getFullYear()} Ayush Shinde. All rights reserved.</p>
                <p className="mt-2 text-xs text-gray-700">Built with React, Tailwind & Three.js</p>
            </footer>
        </div>

      </main>
    </div>
  );
};

export default App;