import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const SideElements: React.FC = () => {
  return (
    <>
      {/* Left Social Sidebar */}
      <div className="fixed left-6 md:left-8 bottom-0 hidden md:flex flex-col items-center gap-6 z-50 pb-8">
        
        {/* Line Structure */}
        <div className="flex flex-col items-center gap-0">
            {/* Top Dot */}
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            {/* Line */}
            <div className="w-px h-24 sm:h-32 md:h-48 bg-gradient-to-b from-gray-500 to-transparent"></div>
            {/* Bottom Dot */}
            {/* <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mb-6"></div> */}
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-6 bg-black/40 backdrop-blur-sm p-3 rounded-full border border-white/10 shadow-lg">
            {SOCIAL_LINKS.map((link) => (
                <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-lime-400 hover:scale-110 transition-all duration-300 p-1"
                    title={link.name}
                >
                    <link.icon size={20} strokeWidth={2} />
                </a>
            ))}
        </div>
      </div>

      {/* Right Name Sidebar */}
      <div className="fixed right-6 md:right-8 bottom-32 hidden md:flex flex-col items-center z-50">
         <div className="writing-vertical-rl text-xs font-bold tracking-[0.2em] text-gray-600 rotate-180 cursor-default hover:text-lime-400 transition-colors duration-500 select-none">
            AYUSH SHINDE
         </div>
      </div>
      
      <style>{`
        .writing-vertical-rl {
            writing-mode: vertical-rl;
        }
      `}</style>
    </>
  );
};