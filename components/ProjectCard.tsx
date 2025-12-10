import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

interface Props {
  data: Project;
}

export const ProjectCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="group relative bg-white/5 p-8 border border-white/10 shadow-lg hover:shadow-2xl hover:border-lime-500/30 hover:bg-white/10 transition-all duration-300 rounded-2xl flex flex-col h-full backdrop-blur-sm">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-lime-400/80">{data.year}</span>
        <div className="flex gap-3">
            {data.github && (
                <a href={data.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-lime-400 transition-colors" title="GitHub Repo">
                    <Github size={20} />
                </a>
            )}
            {data.link && (
                <a href={data.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-lime-400 transition-colors" title="Live Demo">
                    <ExternalLink size={20} />
                </a>
            )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-lime-400 transition-colors">{data.title}</h3>
      
      <ul className="text-gray-400 mb-6 leading-relaxed space-y-2 flex-grow">
        {data.description.map((point, index) => (
            <li key={index} className="text-sm md:text-base flex items-start gap-2">
                 <span className="mt-2 w-1 h-1 rounded-full bg-lime-500/50 flex-shrink-0"></span>
                <span>{point}</span>
            </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {data.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-lime-400/10 border border-lime-400/20 text-xs font-medium text-lime-300 rounded-full">
                {tech}
            </span>
        ))}
      </div>
    </div>
  );
};