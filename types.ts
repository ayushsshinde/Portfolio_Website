import React from 'react';

export interface Experience {
  id: string;
  start: string;
  end: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  skills: string[];
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string[]; // Changed to array of strings for bullet points
  techStack: string[];
  link?: string; // Live Demo
  github?: string; // GitHub Repo
  year: string;
  image?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}