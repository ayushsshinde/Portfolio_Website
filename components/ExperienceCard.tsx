import React from 'react';
import { Experience } from '../types';

interface Props {
  data: Experience;
}

export const ExperienceCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative pl-8 md:pl-16 py-8 group first:pt-0 last:pb-0">
      {/* Timeline Line */}
      {/* We use a continuous line, but hide the top part for the first item and bottom part for the last item using masks or simple logic if needed. 
          Here we just let it run but give it a specific look. */}
      <div className="absolute left-3 md:left-4 top-0 bottom-0 w-[1px] bg-white/10 group-first:top-10 group-last:bottom-auto group-last:h-10"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-[9px] md:left-[13px] top-10 w-[7px] h-[7px] rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)] z-10 ring-4 ring-[#0a0a0a]"></div>
      
      {/* Content */}
      <div className="flex flex-col gap-1 mb-4 pt-2">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{data.company}</h3>
        <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
             <span className="text-lime-400 uppercase tracking-wider">{data.role}</span>
             <span className="text-gray-600">•</span>
             <span className="text-gray-400">{data.start} — {data.end}</span>
             <span className="text-gray-600 hidden sm:inline">•</span>
             <span className="text-gray-500 text-xs uppercase tracking-wide hidden sm:inline">{data.location}</span>
        </div>
      </div>
      
      <ul className="space-y-3 text-gray-400 leading-relaxed mb-6 max-w-2xl">
        {data.description.map((desc, i) => (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                 <span className="mt-2 w-1 h-1 rounded-full bg-lime-500/50 flex-shrink-0"></span>
                <span>{desc}</span>
            </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
            <span key={skill} className="px-3 py-1 text-[10px] md:text-xs font-bold text-lime-300 bg-lime-400/10 rounded-full border border-lime-400/20 tracking-wide uppercase">
                {skill}
            </span>
        ))}
      </div>
    </div>
  );
};